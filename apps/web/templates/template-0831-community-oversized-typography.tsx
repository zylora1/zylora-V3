import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0831-community-oversized-typography", "family": "Oversized Typography", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "vertical-rail|interactive-canvas|story-first|story>faq>features>schedule>proof>hours>services|soft-12|geometric", "industry": "community", "hero": "interactive-canvas", "navigation": "vertical-rail", "layout": "story-first"};

export default function Template0831({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Clove Community Organization");
  const headline = String(content.headline || "A welcoming hub for people, events, shared resources, and practical participation.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Events", "Membership", "Directory", "Resources", "Volunteer"];
  const industryLabel = "Community organization";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cA welcoming hub for people, events, shared resources, and practical participation.\u201d";
  const storyBody = "Clove Community Organization is presented as a real working community organization, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Morrow Lead", "role": "Principal / Lead"}, {"name": "Cedar Team", "role": "Client experience"}, {"name": "Arc Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Community organization / Project A", "Community organization / Project B", "Community organization / Project C", "Community organization / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A welcoming hub for people, events, shared resources, and practical participation. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#4a6a35";
  return <main className="zp0831" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0831{--bg:#eef0e8;--fg:#20261e;--primary:#4a6a35;--primary-fg:#ffffff;--secondary:#c68152;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:12px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0831 *{box-sizing:border-box}
.zp0831 a{color:inherit;text-decoration:none}
.zp0831 h1,.zp0831 h2,.zp0831 h3,.zp0831 blockquote{font-family:Century Gothic, Avenir, sans-serif;text-wrap:balance}
.zp0831 img{max-width:100%;display:block}
.zp0831 button,.zp0831 a{-webkit-tap-highlight-color:transparent}
.zp0831 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0831 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0831 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0831 .mobileMenu{display:none}
.zp0831:has(.navRail)>.hero,.zp0831:has(.navRail)>.section,.zp0831:has(.navRail)>.contact,.zp0831:has(.navRail)>.footer{margin-left:190px}
.zp0831 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0831 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0831 .eyebrow,.zp0831 .sectionTitle>span,.zp0831 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0831 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0831 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0831 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0831 .heroActions a,.zp0831 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0831 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0831 .canvasHero{overflow:hidden}
.zp0831 .canvasGrid{position:absolute;inset:0;display:grid;grid-template-columns:repeat(4,1fr);opacity:.3}
.zp0831 .canvasGrid i{border-right:1px solid var(--border)}
.zp0831 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0831 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0831 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0831 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0831 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0831 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0831 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0831 .serviceGrid p{color:var(--muted)}
.zp0831 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0831 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0831 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0831 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0831 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0831 .story p{color:var(--muted)}
.zp0831 .faqList{max-width:900px;margin-left:auto}
.zp0831 details{border-top:1px solid var(--border);padding:20px 0}
.zp0831 details summary{font-weight:800;cursor:pointer}
.zp0831 details p{color:var(--muted);max-width:70ch}
.zp0831 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0831 .hours dl{margin:0}
.zp0831 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0831 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0831 .features ul{list-style:none;margin:0;padding:0}
.zp0831 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0831 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0831 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0831 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0831 .contact .eyebrow{color:var(--bg)}
.zp0831 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0831 .contactMeta{display:grid;gap:10px}
.zp0831 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0831 .heroCopy{animation:enter-830 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-830{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0831 .hero{min-height:auto}
.zp0831 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0831 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0831 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0831 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0831 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0831 .mobileMenu nav a{padding:10px 8px}
.zp0831 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0831:has(.navRail)>.hero,.zp0831:has(.navRail)>.section,.zp0831:has(.navRail)>.contact,.zp0831:has(.navRail)>.footer{margin-left:0}
.zp0831 .hero{grid-template-columns:1fr}
.zp0831 .section,.zp0831 .sectionTitle,.zp0831 .story,.zp0831 .hours,.zp0831 .features,.zp0831 .contact{grid-template-columns:1fr}
.zp0831 .section{display:block}}
@media(max-width:430px){.zp0831{font-size:16px}
.zp0831 .hero,.zp0831 .section,.zp0831 .contact{padding-left:18px;padding-right:18px}
.zp0831 .serviceGrid,.zp0831 .proof{grid-template-columns:1fr}
.zp0831 h1{font-size:clamp(42px,14vw,70px)}}

.zp0831 .heroActions a,.zp0831 .primary,.zp0831 .ctaBtn,.zp0831 .btnPrimary,.zp0831 .schedule>a,.zp0831 .newsletter>a{transition:all .2s ease}
.zp0831 .heroActions a:hover,.zp0831 .primary:hover,.zp0831 .ctaBtn:hover,.zp0831 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0831 nav a,.zp0831 .nav a,.zp0831 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0831 nav a:hover,.zp0831 .nav a:hover,.zp0831 .footer a:hover{
  color:var(--primary)
}
.zp0831 .serviceGrid article,.zp0831 .projectCard,.zp0831 .teamCard,.zp0831 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0831 .serviceGrid article:hover,.zp0831 .projectCard:hover,.zp0831 .teamCard:hover,.zp0831 .bentoCard:hover{
  opacity:.88
}
@media(prefers-reduced-motion:reduce){.zp0831 *,.zp0831 *::before,.zp0831 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0831 a,.zp0831 button,.zp0831 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail vertical"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero canvasHero"><div className="canvasGrid"><i/><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Oversized Typography / story-first</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
