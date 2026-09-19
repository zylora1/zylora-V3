import React from 'react';

const domTags = [
  'div', 'span', 'button', 'a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'svg', 'path', 'img', 'input', 'textarea', 'label',
  'nav', 'aside', 'header', 'footer', 'main', 'section', 'article', 'form'
];

export const motion: Record<string, any> = {};

domTags.forEach((tag) => {
  motion[tag] = React.forwardRef(({
    initial,
    animate,
    exit,
    transition,
    layout,
    layoutId,
    whileHover,
    whileTap,
    whileFocus,
    whileDrag,
    onAnimationComplete,
    variants,
    ...props
  }: any, ref: any) => {
    return React.createElement(tag, { ref, ...props });
  });
});

export const AnimatePresence: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return React.createElement(React.Fragment, null, children);
};
