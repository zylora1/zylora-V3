export const useAuthContext = () => {
  const user = (typeof window !== 'undefined' ? (window as any).ZYLORA_STUDIO_CONTEXT?.user : null) || { id: 'zylora-user', email: 'admin@zylora.com' };
  return { user };
};
