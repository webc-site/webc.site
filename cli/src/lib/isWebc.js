const WEBC_RE = /^([A-Z][A-Za-z0-9_.-]*|\d+)$/;

export default (name) => WEBC_RE.test(name);
