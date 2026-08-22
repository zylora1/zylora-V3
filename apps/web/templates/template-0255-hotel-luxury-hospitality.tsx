import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0255-hotel-luxury-hospitality", "family": "Luxury Hospitality", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|story-first|security>newsletter>comparison>features>proof>integrations>services|soft-12|geometric", "industry": "hotel", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "story-first"};

export default function Template0255({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Boutique Hotel");
  const headline = String(content.headline || "A design-led stay shaped by place, quiet details, and genuinely useful hospitality.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Rooms and suites", "Dining", "Spa", "Private events", "Local experiences"];
  const industryLabel = "Boutique hotel";
  const serviceNotes = ["Rooms from studio to suite, each styled individually — no two are identical.", "Breakfast sourced within 30 miles: menus change with the seasons.", "Concierge-arranged experiences: hiking guides, private dining, gallery access.", "Business facilities including private meeting rooms with AV and catering.", "Flexible check-in and late check-out on request — we work around your plans."];
  const proofPoints = ["4-star Visit England rated", "Free parking included", "Same-day room service", "Concierge available 24h"];
  const testimonial = "We've stayed at a lot of boutique hotels. This is the one we keep returning to — they have the details right every single time.";
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Boutique hotel / Project A", "Boutique hotel / Project B", "Boutique hotel / Project C", "Boutique hotel / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A design-led stay shaped by place, quiet details, and genuinely useful hospitality. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#b7ff31";
  return <main className="zp0255" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0255{--bg:#f2f2f2;--fg:#111111;--primary:#b7ff31;--primary-fg:#050505;--secondary:#808080;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 24px 70px color-mix(in srgb,var(--fg) 12%,transparent);--max:1440px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0255 *{box-sizing:border-box}
.zp0255 a{color:inherit;text-decoration:none}
.zp0255 h1,.zp0255 h2,.zp0255 h3,.zp0255 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0255 img{max-width:100%;display:block}
.zp0255 button,.zp0255 a{-webkit-tap-highlight-color:transparent}
.zp0255 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0255 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0255 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0255 .mobileMenu{display:none}
.zp0255:has(.navRail)>.hero,.zp0255:has(.navRail)>.section,.zp0255:has(.navRail)>.contact,.zp0255:has(.navRail)>.footer{margin-left:190px}
.zp0255 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0255 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0255 .eyebrow,.zp0255 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0255 h1{font-size:clamp(48px,8.0vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0255 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0255 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0255 .heroActions a,.zp0255 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0255 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0255 .canvasHero{overflow:hidden}
.zp0255 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0255 .canvasGrid i{border-right:1px solid var(--border)}
.zp0255 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0255 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0255 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0255 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0255 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0255 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0255 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0255 .serviceGrid p{color:var(--muted)}
.zp0255 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0255 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0255 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0255 details{border-top:1px solid var(--border);padding:20px 0}
.zp0255 details summary{font-weight:800;cursor:pointer}
.zp0255 details p{color:var(--muted);max-width:70ch}
.zp0255 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0255 .features ul{list-style:none;margin:0;padding:0}
.zp0255 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0255 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0255 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0255 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0255 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0255 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0255 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0255 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0255 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0255 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0255 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0255 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0255 .contact .eyebrow{color:var(--bg)}
.zp0255 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0255 .contactMeta{display:grid;gap:10px}
.zp0255 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0255 .heroCopy{animation:enter-254 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-254{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0255 .hero{min-height:auto}
.zp0255 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0255 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0255 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0255 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0255 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0255 .mobileMenu nav a{padding:10px 8px}
.zp0255 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0255:has(.navRail)>.hero,.zp0255:has(.navRail)>.section,.zp0255:has(.navRail)>.contact,.zp0255:has(.navRail)>.footer{margin-left:0}
.zp0255 .hero{grid-template-columns:1fr}
.zp0255 .section,.zp0255 .sectionTitle,.zp0255 .features,.zp0255 .security,.zp0255 .contact{grid-template-columns:1fr}
.zp0255 .section{display:block}}
@media(max-width:430px){.zp0255{font-size:16px}
.zp0255 .hero,.zp0255 .section,.zp0255 .contact{padding-left:18px;padding-right:18px}
.zp0255 .serviceGrid,.zp0255 .proof,.zp0255 .compareGrid{grid-template-columns:1fr}
.zp0255 h1{font-size:clamp(42px,14vw,70px)}}

.zp0255 .heroActions a,.zp0255 .primary,.zp0255 .ctaBtn,.zp0255 .btnPrimary,.zp0255 .schedule>a,.zp0255 .newsletter>a{transition:all .2s ease}
.zp0255 .heroActions a:hover,.zp0255 .primary:hover,.zp0255 .ctaBtn:hover,.zp0255 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0255 nav a,.zp0255 .nav a,.zp0255 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0255 nav a:hover,.zp0255 .nav a:hover,.zp0255 .footer a:hover{
  opacity:.65
}
.zp0255 .serviceGrid article,.zp0255 .projectCard,.zp0255 .teamCard,.zp0255 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0255 .serviceGrid article:hover,.zp0255 .projectCard:hover,.zp0255 .teamCard:hover,.zp0255 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0255 *,.zp0255 *::before,.zp0255 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0255 a,.zp0255 button,.zp0255 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Check availability</a><a href="#services">Explore</a></div></div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Check availability</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Luxury Hospitality / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
