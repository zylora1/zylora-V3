export type SiteTemplateContent = {
  businessName?: string;
  headline?: string;
  description?: string;
  email?: string;
  phone?: string;
  address?: string;
  services?: Array<string | { name?: string; description?: string }>;
  heroImage?: string;
  imageAlt?: string;
  galleryImages?: string[];
  hoursWeek?: string;
  hoursSat?: string;
  hoursSun?: string;
  schemaType?: string;
  [key: string]: unknown;
};

export type SiteTemplateProps = {
  content?: SiteTemplateContent;
  theme?: Record<string, unknown>;
};
