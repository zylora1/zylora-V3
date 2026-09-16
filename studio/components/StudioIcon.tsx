import React from 'react';

export type StudioIconName =
  | 'undo' | 'redo' | 'desktop' | 'tablet' | 'mobile'
  | 'plus' | 'minus' | 'search' | 'star' | 'close' | 'chevron-down'
  | 'home' | 'page' | 'arrow-up' | 'arrow-down' | 'arrow-left' | 'arrow-right'
  | 'duplicate' | 'trash' | 'eye' | 'lock' | 'pencil' | 'spark' | 'check' | 'heart' | 'play'
  | 'mail' | 'phone' | 'globe' | 'calendar' | 'map-pin' | 'camera' | 'menu'
  | 'more';

type StudioIconProps = {
  name: StudioIconName;
  size?: number;
  filled?: boolean;
  className?: string;
  title?: string;
};

const paths: Record<StudioIconName, React.ReactNode> = {
  undo: <><path d="M9 7 4 12l5 5"/><path d="M4 12h9a6 6 0 0 1 6 6"/></>,
  redo: <><path d="m15 7 5 5-5 5"/><path d="M20 12h-9a6 6 0 0 0-6 6"/></>,
  desktop: <><rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M8 20h8M12 16v4"/></>,
  tablet: <><rect x="6" y="2.5" width="12" height="19" rx="2"/><path d="M11 18.5h2"/></>,
  mobile: <><rect x="8" y="2" width="8" height="20" rx="2"/><path d="M11 18.5h2"/></>,
  plus: <><path d="M12 5v14M5 12h14"/></>,
  minus: <path d="M5 12h14"/>,
  search: <><circle cx="10.8" cy="10.8" r="6.3"/><path d="m16 16 4.2 4.2"/></>,
  star: <path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
  'chevron-down': <path d="m6 9 6 6 6-6"/>,
  home: <><path d="m3 10 9-7 9 7"/><path d="M5 9.5V21h14V9.5M9 21v-6h6v6"/></>,
  page: <><rect x="5" y="3" width="12" height="18" rx="2"/><path d="M9 7h4M9 11h4M9 15h3"/></>,
  'arrow-up': <><path d="M12 19V5M6 11l6-6 6 6"/></>,
  'arrow-down': <><path d="M12 5v14M6 13l6 6 6-6"/></>,
  'arrow-left': <><path d="M19 12H5M11 6l-6 6 6 6"/></>,
  'arrow-right': <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  duplicate: <><rect x="8" y="8" width="11" height="11" rx="1.5"/><path d="M5 16V5a2 2 0 0 1 2-2h11"/></>,
  trash: <><path d="M4 7h16M10 11v6M14 11v6M6 7l1 14h10l1-14M9 7l1-3h4l1 3"/></>,
  eye: <><path d="M2.5 12s3.4-6 9.5-6 9.5 6 9.5 6-3.4 6-9.5 6-9.5-6-9.5-6Z"/><circle cx="12" cy="12" r="2.5"/></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
  pencil: <><path d="m4 20 4.2-1 10.6-10.6-3.2-3.2L5 15.8 4 20Z"/><path d="m13.8 7 3.2 3.2"/></>,
  spark: <><path d="m12 3 1.7 6.3L20 11l-6.3 1.7L12 19l-1.7-6.3L4 11l6.3-1.7L12 3Z"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  heart: <path d="M12 20S4 15.4 4 9.7A4.2 4.2 0 0 1 12 7a4.2 4.2 0 0 1 8 2.7C20 15.4 12 20 12 20Z"/>,
  play: <path d="m8 5 11 7-11 7V5Z"/>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
  phone: <path d="M7 3h3l1.2 4-2 1.5a15 15 0 0 0 6.3 6.3l1.5-2 4 1.2v3c0 1.1-.9 2-2 2C11.3 19 5 12.7 5 5a2 2 0 0 1 2-2Z"/>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z"/></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M7 14h3M14 14h3M7 18h3"/></>,
  'map-pin': <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z"/><circle cx="12" cy="10" r="2"/></>,
  camera: <><path d="M4 7h4l1.5-2h5L16 7h4v12H4V7Z"/><circle cx="12" cy="13" r="3"/></>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  more: <><circle cx="5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="19" cy="12" r="1" fill="currentColor"/></>,
};

export function StudioIcon({name, size=18, filled=false, className='', title}: StudioIconProps) {
  return <svg className={`studio-icon ${className}`.trim()} width={size} height={size} viewBox="0 0 24 24" aria-hidden={title ? undefined : true} role={title ? 'img' : undefined} focusable="false" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {title && <title>{title}</title>}
    {paths[name]}
  </svg>;
}

export const primitiveIconName: Record<string, StudioIconName> = {
  Spark: 'spark', Plus: 'plus', Arrow: 'arrow-right', Check: 'check', Heart: 'heart',
  Star: 'star', Search: 'search', Menu: 'menu', X: 'close', Play: 'play', Mail: 'mail',
  Phone: 'phone', Globe: 'globe', Calendar: 'calendar', 'Map pin': 'map-pin', Camera: 'camera',
};
