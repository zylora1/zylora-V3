export default function isSubdir(parentDir: string, subdir: string): boolean {
  const p = parentDir.replace(/\\/g, '/').replace(/\/$/, '') + '/';
  const s = subdir.replace(/\\/g, '/').replace(/\/$/, '') + '/';
  return s.toLowerCase().startsWith(p.toLowerCase());
}
export { isSubdir };
