import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import mime from "../lib/mime.js";
import SRV_PUB from "../const/SRV_PUB.js";

const CACHE = new Map(),
  CONTENT_TYPE = "Content-Type";

export default async (pathname, if_none_match) => {
  const sub_path = pathname.slice(3),
    target_path = join(SRV_PUB, sub_path);
  try {
    const file_stat = await stat(target_path),
      etag = 'W/"' + file_stat.mtimeMs.toString(36) + "-" + file_stat.size.toString(36) + '"';

    let cached = CACHE.get(pathname);
    if (!cached || cached[1] !== etag) {
      const body = await readFile(target_path),
        content_type = mime(pathname);
      cached = [body, etag, content_type];
      CACHE.set(pathname, cached);
    }

    const [body, cached_etag, content_type] = cached;
    if (if_none_match === cached_etag) {
      return [null, 304];
    }
    return [
      body,
      200,
      {
        [CONTENT_TYPE]: content_type,
        ETag: cached_etag,
        "Cache-Control": "no-cache"
      }
    ];
  } catch {}
};
