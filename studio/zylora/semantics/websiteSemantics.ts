/**
 * Zylora Studio - Website Semantics & Component Definitions
 * Licensed under MPL-2.0. See legal/MPL-2.0.txt and legal/THIRD_PARTY_NOTICES.md
 */

export type WebsiteComponentCategory =
  | 'content'
  | 'interaction'
  | 'media'
  | 'visual'
  | 'layout'
  | 'site'
  | 'forms'
  | 'conversion'
  | 'cms'
  | 'blog'
  | 'custom';

export interface WebsiteComponentDefinition {
  type: string;
  nodeType: string;
  category: WebsiteComponentCategory;
  displayName: string;
  defaultTag: string;
  description: string;
}

export const ZYLORA_COMPONENT_DEFINITIONS: Record<string, WebsiteComponentDefinition> = {
  text: {
    type: 'text',
    nodeType: 'text',
    category: 'content',
    displayName: 'Text',
    defaultTag: 'p',
    description: 'Editable rich text block with configurable typography.',
  },
  heading: {
    type: 'heading',
    nodeType: 'heading',
    category: 'content',
    displayName: 'Heading',
    defaultTag: 'h2',
    description: 'Semantic header tag (H1-H6) for accessible page structure.',
  },
  button: {
    type: 'button',
    nodeType: 'button',
    category: 'interaction',
    displayName: 'Button',
    defaultTag: 'button',
    description: 'Interactive button with link, booking, or form submission action.',
  },
  link: {
    type: 'link',
    nodeType: 'link',
    category: 'interaction',
    displayName: 'Link',
    defaultTag: 'a',
    description: 'Hyperlink pointing to pages, external URLs, or section anchors.',
  },
  image: {
    type: 'image',
    nodeType: 'image',
    category: 'media',
    displayName: 'Image Frame',
    defaultTag: 'div',
    description: 'Image container with object-fit, crop, and durable asset uploads.',
  },
  section: {
    type: 'section',
    nodeType: 'section',
    category: 'layout',
    displayName: 'Section',
    defaultTag: 'section',
    description: 'Root-level horizontal page section supporting freeform or flex stacks.',
  },
  navigation: {
    type: 'navigation',
    nodeType: 'navigation',
    category: 'site',
    displayName: 'Navbar',
    defaultTag: 'nav',
    description: 'Responsive website header with brand mark, links, and mobile menu.',
  },
  footer: {
    type: 'footer',
    nodeType: 'section',
    category: 'site',
    displayName: 'Footer',
    defaultTag: 'footer',
    description: 'Semantic footer section with copyright, links, and social icons.',
  },
  'lead-form': {
    type: 'lead-form',
    nodeType: 'lead_form',
    category: 'forms',
    displayName: 'Lead Form',
    defaultTag: 'form',
    description: 'Lead capture form with automated CRM ingestion and spam protection.',
  },
  'appointment-widget': {
    type: 'appointment-widget',
    nodeType: 'appointment_booking',
    category: 'conversion',
    displayName: 'Appointment Booking',
    defaultTag: 'div',
    description: 'Interactive calendar widget for booking client appointments.',
  },
  'ai-sales-assistant': {
    type: 'ai-sales-assistant',
    nodeType: 'ai_sales_assistant',
    category: 'conversion',
    displayName: 'AI Sales Assistant',
    defaultTag: 'aside',
    description: '24/7 AI conversational chatbot trained on site knowledge.',
  },
  'cms-list': {
    type: 'cms-list',
    nodeType: 'repeater',
    category: 'cms',
    displayName: 'CMS Collection List',
    defaultTag: 'div',
    description: 'Dynamic repeater binding items from a CMS collection.',
  },
};

/**
 * Returns the recommended semantic HTML5 tag for a component type.
 */
export function getSemanticTag(type: string, metadata?: Record<string, any>): string {
  if (type === 'heading') {
    const level = metadata?.level || 2;
    return `h${Math.min(6, Math.max(1, level))}`;
  }
  if (type === 'button') {
    return metadata?.href ? 'a' : 'button';
  }
  if (type === 'section') return 'section';
  if (type === 'navigation') return 'nav';
  if (type === 'footer') return 'footer';
  if (type === 'lead_form' || type === 'form' || type === 'lead-form') return 'form';
  if (type === 'paragraph' || type === 'text') return 'p';
  if (type === 'link') return 'a';
  return 'div';
}
