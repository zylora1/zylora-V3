import React from 'react';

export const useTranslations = () => {
  return (key: string, values?: any) => {
    if (!key) return '';
    const parts = key.split('.');
    const last = parts[parts.length - 1];
    return last.charAt(0).toUpperCase() + last.slice(1);
  };
};

export const NextIntlClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return React.createElement(React.Fragment, null, children);
};
