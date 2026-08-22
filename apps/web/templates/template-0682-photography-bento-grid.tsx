import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0682-photography-bento-grid", "family": "Bento Grid", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "left-sidebar|service-led|local-service-map|proof>services>values>faq>projects|paper-sheet|retro-bookish", "industry": "photography", "hero": "service-led", "navigation": "left-sidebar", "layout": "local-service-map"};

export default function Template0682({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Arc Photography Studio");
  const headline = String(content.headline || "Photography with a clear visual language and production that stays calm on set.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Editorial", "Commercial", "Portraits", "Campaigns", "Licensing"];
  const industryLabel = "Photography studio";
  const serviceNotes = ["Commercial and editorial commissions with same-day turnaround for press deadlines.", "Natural-light and studio sessions available with full styling coordination.", "Wedding coverage: two photographers, full day, premium album design and print.", "Brand photography packages with art direction, prop sourcing, and retouching.", "Archival printing on fine art paper — limited editions signed and numbered."];
  const proofPoints = ["Published: The Sunday Times, FT Weekend", "35mm and digital capability", "2-week edit turnaround guaranteed", "RAW files included"];
  const testimonial = "She made our whole team feel comfortable during the brand shoot. The images look like us, not like stock photography.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Civic Lead", "role": "Principal / Lead"}, {"name": "Oak & Tide Team", "role": "Client experience"}, {"name": "Studio Nine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Photography studio / Project A", "Photography studio / Project B", "Photography studio / Project C", "Photography studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Photography with a clear visual language and production that stays calm on set. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7d5a3d";
  return <main className="zp0682" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0682{--bg:#f7f2ea;--fg:#1f1d1a;--primary:#7d5a3d;--primary-fg:#ffffff;--secondary:#b77d5e;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:3px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:28px;background:var(--bg);color:var(--fg);font-family:Trebuchet MS, sans-serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0682 *{box-sizing:border-box}
.zp0682 a{color:inherit;text-decoration:none}
.zp0682 h1,.zp0682 h2,.zp0682 h3,.zp0682 blockquote{font-family:Bookman Old Style, Georgia, serif;text-wrap:balance}
.zp0682 img{max-width:100%;display:block}
.zp0682 button,.zp0682 a{-webkit-tap-highlight-color:transparent}
.zp0682 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0682 .navRail{position:fixed;left:0;top:0;bottom:0;width:190px;padding:28px 20px;border-right:var(--line) solid var(--border);display:flex;flex-direction:column;justify-content:space-between;z-index:9;background:var(--bg)}
.zp0682 .navRail nav{display:grid;gap:16px;font-size:12px;text-transform:uppercase;letter-spacing:.08em}
.zp0682 .mobileMenu{display:none}
.zp0682:has(.navRail)>.hero,.zp0682:has(.navRail)>.section,.zp0682:has(.navRail)>.contact,.zp0682:has(.navRail)>.footer{margin-left:190px}
.zp0682 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0682 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0682 .eyebrow,.zp0682 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0682 h1{font-size:clamp(48px,6.35vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0682 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0682 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0682 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0682 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0682 .serviceHero{grid-template-columns:.65fr 1.35fr}
.zp0682 .serviceHeroList{display:grid;gap:4px}
.zp0682 .serviceHeroList span{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0682 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0682 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0682 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0682 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0682 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0682 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0682 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0682 .serviceGrid p{color:var(--muted)}
.zp0682 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0682 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0682 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0682 .faqList{max-width:900px;margin-left:auto}
.zp0682 details{border-top:1px solid var(--border);padding:20px 0}
.zp0682 details summary{font-weight:800;cursor:pointer}
.zp0682 details p{color:var(--muted);max-width:70ch}
.zp0682 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0682 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0682 .projects article:nth-child(2){transform:translateY(32px)}
.zp0682 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Bookman Old Style, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0682 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0682 .contact .eyebrow{color:var(--bg)}
.zp0682 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0682 .contactMeta{display:grid;gap:10px}
.zp0682 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0682 .heroCopy{animation:enter-681 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-681{from{opacity:0;transform:translateY(19px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0682 .hero{min-height:auto}
.zp0682 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0682 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0682 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0682 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0682 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0682 .mobileMenu nav a{padding:10px 8px}
.zp0682 .navRail{position:relative;width:auto;height:auto;flex-direction:row}
.zp0682:has(.navRail)>.hero,.zp0682:has(.navRail)>.section,.zp0682:has(.navRail)>.contact,.zp0682:has(.navRail)>.footer{margin-left:0}
.zp0682 .hero,.zp0682 .serviceHero{grid-template-columns:1fr}
.zp0682 .section,.zp0682 .sectionTitle,.zp0682 .contact{grid-template-columns:1fr}
.zp0682 .projects .projectGrid{grid-template-columns:1fr}
.zp0682 .projects article:nth-child(2){transform:none}
.zp0682 .section{display:block}}
@media(max-width:430px){.zp0682{font-size:16px}
.zp0682 .hero,.zp0682 .section,.zp0682 .contact{padding-left:18px;padding-right:18px}
.zp0682 .serviceGrid,.zp0682 .proof{grid-template-columns:1fr}
.zp0682 h1{font-size:clamp(42px,14vw,70px)}}

.zp0682 .heroActions a,.zp0682 .primary,.zp0682 .ctaBtn,.zp0682 .btnPrimary,.zp0682 .schedule>a,.zp0682 .newsletter>a{transition:all .2s ease}
.zp0682 .heroActions a:hover,.zp0682 .primary:hover,.zp0682 .ctaBtn:hover,.zp0682 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0682 nav a,.zp0682 .nav a,.zp0682 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0682 nav a:hover,.zp0682 .nav a:hover,.zp0682 .footer a:hover{
  color:var(--primary)
}
.zp0682 .serviceGrid article,.zp0682 .projectCard,.zp0682 .teamCard,.zp0682 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0682 .serviceGrid article:hover,.zp0682 .projectCard:hover,.zp0682 .teamCard:hover,.zp0682 .bentoCard:hover{
  transform:translateY(-3px);box-shadow:0 8px 20px rgba(0,0,0,.1)
}
@media(prefers-reduced-motion:reduce){.zp0682 *,.zp0682 *::before,.zp0682 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0682 a,.zp0682 button,.zp0682 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <aside className="navRail"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></aside>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero serviceHero"><div className="serviceHeroList">{services.slice(0,4).map((s,i)=><span key={s}>{String(i+1).padStart(2,"0")} — {s}</span>)}</div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Bento Grid / local-service-map</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
