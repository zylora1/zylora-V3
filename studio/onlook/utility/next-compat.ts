import React from 'react';

export const useRouter = () => ({
  push: (url: string) => { window.location.href = url; },
  replace: (url: string) => { window.location.replace(url); },
  back: () => { window.history.back(); },
  forward: () => { window.history.forward(); },
  refresh: () => { window.location.reload(); },
  prefetch: () => {},
});

export const usePathname = () => (typeof window !== 'undefined' ? window.location.pathname : '/');

export const useSearchParams = () => (typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : new URLSearchParams());

export const redirect = (url: string) => {
  if (typeof window !== 'undefined') window.location.href = url;
};

export const Link: React.FC<any> = ({ href, children, ...props }) => {
  return React.createElement('a', { href, ...props }, children);
};

export const Image: React.FC<any> = ({ src, alt, ...props }) => {
  return React.createElement('img', { src, alt, ...props });
};

export default Link;
