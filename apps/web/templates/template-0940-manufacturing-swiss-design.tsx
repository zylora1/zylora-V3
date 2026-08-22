import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0940-manufacturing-swiss-design", "family": "Swiss Design", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|navigation-led|offset-cards|proof>comparison>security>team>services|notched|sports-editorial", "industry": "manufacturing", "hero": "navigation-led", "navigation": "minimal-wordmark", "layout": "offset-cards"};

export default function Template0940({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stillwater Manufacturer");
  const headline = String(content.headline || "Precision manufacturing with traceable quality and dependable production planning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Engineering", "Production", "Quality control", "Supply chain", "Custom fabrication"];
  const industryLabel = "Manufacturer";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Miller & Rowe Lead", "role": "Principal / Lead"}, {"name": "Stone & Pine Team", "role": "Client experience"}, {"name": "Foxglove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Manufacturer / Project A", "Manufacturer / Project B", "Manufacturer / Project C", "Manufacturer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Precision manufacturing with traceable quality and dependable production planning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0940" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0940{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:none;--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0940 *{box-sizing:border-box}
.zp0940 a{color:inherit;text-decoration:none}
.zp0940 h1,.zp0940 h2,.zp0940 h3,.zp0940 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0940 img{max-width:100%;display:block}
.zp0940 button,.zp0940 a{-webkit-tap-highlight-color:transparent}
.zp0940 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0940 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0940 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0940 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0940 .mobileMenu{display:none}
.zp0940 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0940 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0940 .eyebrow,.zp0940 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0940 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0940 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0940 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0940 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0940 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0940 .navLedHero{grid-template-columns:.35fr 1.65fr}
.zp0940 .navLedIndex{display:grid;gap:18px;align-self:start}
.zp0940 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0940 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0940 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0940 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0940 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0940 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0940 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0940 .serviceGrid p{color:var(--muted)}
.zp0940 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0940 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0940 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0940 details{border-top:1px solid var(--border);padding:20px 0}
.zp0940 details summary{font-weight:800;cursor:pointer}
.zp0940 details p{color:var(--muted);max-width:70ch}
.zp0940 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0940 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0940 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;margin-bottom:18px}
.zp0940 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0940 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0940 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0940 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0940 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0940 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0940 .contact .eyebrow{color:var(--bg)}
.zp0940 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0940 .contactMeta{display:grid;gap:10px}
.zp0940 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0940 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0940 .heroCopy{animation:enter-939 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-939{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0940 .hero{min-height:auto}
.zp0940 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0940 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0940 .nav nav{display:none}
.zp0940 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0940 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0940 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0940 .mobileMenu nav a{padding:10px 8px}
.zp0940 .hero,.zp0940 .navLedHero{grid-template-columns:1fr}
.zp0940 .section,.zp0940 .sectionTitle,.zp0940 .security,.zp0940 .contact{grid-template-columns:1fr}
.zp0940 .teamGrid{grid-template-columns:1fr 1fr}
.zp0940 .section{display:block}}
@media(max-width:430px){.zp0940{font-size:16px}
.zp0940 .hero,.zp0940 .section,.zp0940 .contact{padding-left:18px;padding-right:18px}
.zp0940 .serviceGrid,.zp0940 .proof,.zp0940 .teamGrid,.zp0940 .compareGrid{grid-template-columns:1fr}
.zp0940 h1{font-size:clamp(42px,14vw,70px)}}

.zp0940 .heroActions a,.zp0940 .primary,.zp0940 .ctaBtn,.zp0940 .btnPrimary,.zp0940 .schedule>a,.zp0940 .newsletter>a{transition:all .2s ease}
.zp0940 .heroActions a:hover,.zp0940 .primary:hover,.zp0940 .ctaBtn:hover,.zp0940 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0940 nav a,.zp0940 .nav a,.zp0940 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0940 nav a:hover,.zp0940 .nav a:hover,.zp0940 .footer a:hover{
  text-decoration:underline
}
.zp0940 .serviceGrid article,.zp0940 .projectCard,.zp0940 .teamCard,.zp0940 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0940 .serviceGrid article:hover,.zp0940 .projectCard:hover,.zp0940 .teamCard:hover,.zp0940 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0940 *,.zp0940 *::before,.zp0940 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0940 a,.zp0940 button,.zp0940 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero navLedHero"><div className="navLedIndex"><a href="#services">Services</a><a href="#proof">Approach</a><a href="#contact">Contact</a></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Swiss Design / offset-cards</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
