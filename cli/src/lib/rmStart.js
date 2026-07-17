export default (str, prefix) => (str.startsWith(prefix) ? str.slice(prefix.length) : str);
