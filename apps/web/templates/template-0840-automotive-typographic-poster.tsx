import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0840-automotive-typographic-poster", "family": "Typographic Poster", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|stacked-posters|programmes>services>faq>security>values>proof>newsletter|micro-radius|terminal", "industry": "automotive", "hero": "monumental-type", "navigation": "corner-dock", "layout": "stacked-posters"};

export default function Template0840({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Automotive Dealer");
  const headline = String(content.headline || "Straightforward vehicle discovery with transparent details and quick paths to test drives.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New vehicles", "Used vehicles", "Finance", "Service", "Trade-in"];
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Automotive dealer / Project A", "Automotive dealer / Project B", "Automotive dealer / Project C", "Automotive dealer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Straightforward vehicle discovery with transparent details and quick paths to test drives. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e44d76";
  return <main className="zp0840" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0840{--bg:#f9f6f1;--fg:#1a2030;--primary:#e44d76;--primary-fg:#050505;--secondary:#2f66d0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:3px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0840 *{box-sizing:border-box}
.zp0840 a{color:inherit;text-decoration:none}
.zp0840 h1,.zp0840 h2,.zp0840 h3,.zp0840 blockquote{font-family:Lucida Console, Monaco, monospace;text-wrap:balance}
.zp0840 img{max-width:100%;display:block}
.zp0840 button,.zp0840 a{-webkit-tap-highlight-color:transparent}
.zp0840 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0840 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0840 .nav strong{font-family:Lucida Console, Monaco, monospace;font-size:18px}
.zp0840 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0840 .mobileMenu{display:none}
.zp0840 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0840 .eyebrow,.zp0840 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0840 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0840 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0840 .monumentalHero{display:block}
.zp0840 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0840 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0840 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0840 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0840 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0840 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0840 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0840 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0840 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0840 .serviceGrid p{color:var(--muted)}
.zp0840 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0840 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0840 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0840 .faqList{max-width:900px;margin-left:auto}
.zp0840 details{border-top:1px solid var(--border);padding:20px 0}
.zp0840 details summary{font-weight:800;cursor:pointer}
.zp0840 details p{color:var(--muted);max-width:70ch}
.zp0840 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0840 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Lucida Console, Monaco, monospace;letter-spacing:-.04em;max-width:17ch}
.zp0840 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0840 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0840 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0840 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0840 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0840 .contact .eyebrow{color:var(--bg)}
.zp0840 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0840 .contactMeta{display:grid;gap:10px}
.zp0840 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-839{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0840 .hero{min-height:auto}
.zp0840 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0840 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0840 .nav nav{display:none}
.zp0840 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0840 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0840 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0840 .mobileMenu nav a{padding:10px 8px}
.zp0840 .hero{grid-template-columns:1fr}
.zp0840 .section,.zp0840 .sectionTitle,.zp0840 .security,.zp0840 .contact{grid-template-columns:1fr}
.zp0840 .section{display:block}}
@media(max-width:430px){.zp0840{font-size:16px}
.zp0840 .hero,.zp0840 .section,.zp0840 .contact{padding-left:18px;padding-right:18px}
.zp0840 .serviceGrid,.zp0840 .proof,.zp0840 .programmes>div:last-child{grid-template-columns:1fr}
.zp0840 h1{font-size:clamp(42px,14vw,70px)}
.zp0840 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0840 .monumentalBody{grid-template-columns:1fr}}

.zp0840 .heroActions a,.zp0840 .primary,.zp0840 .ctaBtn,.zp0840 .btnPrimary,.zp0840 .schedule>a,.zp0840 .newsletter>a{transition:all .2s ease}
.zp0840 .heroActions a:hover,.zp0840 .primary:hover,.zp0840 .ctaBtn:hover,.zp0840 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0840 nav a,.zp0840 .nav a,.zp0840 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0840 nav a:hover,.zp0840 .nav a:hover,.zp0840 .footer a:hover{
  color:var(--primary)
}
.zp0840 .serviceGrid article,.zp0840 .projectCard,.zp0840 .teamCard,.zp0840 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0840 .serviceGrid article:hover,.zp0840 .projectCard:hover,.zp0840 .teamCard:hover,.zp0840 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0840 *,.zp0840 *::before,.zp0840 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0840 a,.zp0840 button,.zp0840 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Start free</a></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Typographic Poster / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
