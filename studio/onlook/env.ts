export const env = {
  NEXT_PUBLIC_APP_URL: typeof window !== 'undefined' ? window.location.origin : 'http://127.0.0.1:8000',
  NEXT_PUBLIC_SUPABASE_URL: '',
  NEXT_PUBLIC_SUPABASE_ANON_KEY: '',
};
