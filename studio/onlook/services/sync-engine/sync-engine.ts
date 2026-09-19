export const hashContent = async (content: string | Uint8Array): Promise<string> => {
  return typeof content === 'string' ? String(content.length) : String(content.byteLength);
};
