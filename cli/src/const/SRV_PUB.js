import { dirname, join } from "node:path";

export default join(dirname(import.meta.dirname), "srv/pub");
