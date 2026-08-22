import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { templateLoaders } from "../../../lib/templateRegistry";
import SiteEngagement from "../../../components/SiteEngagement";

const API = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

type PublicSite = {
  id: number;
  name: string;
  slug: string;
  template_key?: string | null;
  state: string;
  content: Record<string, unknown>;
  seo: Record<string, unknown>;
  theme: Record<string, unknown>;
};

async function loadSite(slug: string): Promise<PublicSite | null> {
  const res = await fetch(`${API}/sites/public/${encodeURIComponent(slug)}`, { cache: "no-store" });
  if (!res.ok) return null;
  return res.json();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const site = await loadSite(slug);
  if (!site) return {};
  const seo = site.seo || {};
  const content = site.content || {};
  const title = String(seo.title || content.businessName || site.name);
  const description = String(seo.description || content.description || "");
  const canonical = seo.canonical || seo.canonicalUrl;
  const image = seo.ogImage;
  return {
    title,
    description,
    alternates: canonical ? { canonical: String(canonical) } : undefined,
    openGraph: { title, description, images: image ? [String(image)] : undefined },
    twitter: { card: "summary_large_image", title, description, images: image ? [String(image)] : undefined },
    robots: seo.noindex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export default async function PublishedSitePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const site = await loadSite(slug);
  if (!site || site.state !== "LIVE") notFound();
  const key = site.template_key || "";
  const loader = templateLoaders[key];
  if (!loader) notFound();
  const mod = await loader();
  const Template = mod.default;
  const content = site.content || {};
  const seo = site.seo || {};
  const schema = {
    "@context": "https://schema.org",
    "@type": String(content.schemaType || "LocalBusiness"),
    name: String(content.businessName || site.name),
    description: String(content.description || seo.description || ""),
    email: content.email ? String(content.email) : undefined,
    telephone: content.phone ? String(content.phone) : undefined,
    address: content.address ? String(content.address) : undefined,
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <Template content={content} theme={site.theme || {}} />
    <SiteEngagement siteId={site.id} businessName={String(content.businessName || site.name)} />
  </>;
}
