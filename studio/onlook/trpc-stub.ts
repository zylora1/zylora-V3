export const api: any = new Proxy({}, { get: () => new Proxy(() => {}, { get: () => () => ({}), apply: () => ({}) }) });
export default api;
