import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0836-automotive-scandinavian", "family": "Scandinavian", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|bento-hero|dashboard-story|services>team>values>proof>timeline>integrations|cut-corners|product-ui", "industry": "automotive", "hero": "bento-hero", "navigation": "transparent-overlay", "layout": "dashboard-story"};

export default function Template0836({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Fieldwork Automotive Dealer");
  const headline = String(content.headline || "Straightforward vehicle discovery with transparent details and quick paths to test drives.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["New vehicles", "Used vehicles", "Finance", "Service", "Trade-in"];
  const industryLabel = "Automotive dealer";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Lumen Lead", "role": "Principal / Lead"}, {"name": "Juniper Team", "role": "Client experience"}, {"name": "Miller & Rowe Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Automotive dealer / Project A", "Automotive dealer / Project B", "Automotive dealer / Project C", "Automotive dealer / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Straightforward vehicle discovery with transparent details and quick paths to test drives. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#3d8b5d";
  return <main className="zp0836" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0836{--bg:#f6fff7;--fg:#17241b;--primary:#3d8b5d;--primary-fg:#050505;--secondary:#d8a657;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0836 *{box-sizing:border-box}
.zp0836 a{color:inherit;text-decoration:none}
.zp0836 h1,.zp0836 h2,.zp0836 h3,.zp0836 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0836 img{max-width:100%;display:block}
.zp0836 button,.zp0836 a{-webkit-tap-highlight-color:transparent}
.zp0836 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0836 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0836 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0836 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0836 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0836 .mobileMenu{display:none}
.zp0836 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0836 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0836 .eyebrow,.zp0836 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0836 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0836 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0836 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0836 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0836 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0836 .visual,.zp0836 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0836 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0836 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0836 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0836 .heroPhoto{object-fit:cover}
.zp0836 .bentoHero{grid-template-columns:.8fr 1.2fr}
.zp0836 .bentoHeroGrid{display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0836 .bentoHeroGrid>*{border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.zp0836 .bentoHeroGrid>*:first-child{grid-row:1/3;padding:0;overflow:hidden}
.zp0836 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0836 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0836 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0836 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0836 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0836 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0836 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0836 .serviceGrid p{color:var(--muted)}
.zp0836 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0836 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0836 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0836 details{border-top:1px solid var(--border);padding:20px 0}
.zp0836 details summary{font-weight:800;cursor:pointer}
.zp0836 details p{color:var(--muted);max-width:70ch}
.zp0836 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0836 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0836 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Segoe UI, Arial, sans-serif;margin-bottom:18px}
.zp0836 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0836 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0836 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0836 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0836 .timeline article{padding:20px 0}
.zp0836 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Segoe UI, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0836 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0836 .contact .eyebrow{color:var(--bg)}
.zp0836 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0836 .contactMeta{display:grid;gap:10px}
.zp0836 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0836 .heroCopy{animation:enter-835 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-835{from{opacity:0;transform:translateY(33px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0836 .hero{min-height:auto}
.zp0836 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0836 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0836 .nav nav{display:none}
.zp0836 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0836 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0836 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0836 .mobileMenu nav a{padding:10px 8px}
.zp0836 .hero,.zp0836 .bentoHero{grid-template-columns:1fr}
.zp0836 .section,.zp0836 .sectionTitle,.zp0836 .contact{grid-template-columns:1fr}
.zp0836 .teamGrid{grid-template-columns:1fr 1fr}
.zp0836 .section{display:block}}
@media(max-width:430px){.zp0836{font-size:16px}
.zp0836 .hero,.zp0836 .section,.zp0836 .contact{padding-left:18px;padding-right:18px}
.zp0836 .serviceGrid,.zp0836 .proof,.zp0836 .teamGrid{grid-template-columns:1fr}
.zp0836 h1{font-size:clamp(42px,14vw,70px)}}

.zp0836 .heroActions a,.zp0836 .primary,.zp0836 .ctaBtn,.zp0836 .btnPrimary,.zp0836 .schedule>a,.zp0836 .newsletter>a{transition:all .2s ease}
.zp0836 .heroActions a:hover,.zp0836 .primary:hover,.zp0836 .ctaBtn:hover,.zp0836 .btnPrimary:hover{
  opacity:.75
}
.zp0836 nav a,.zp0836 .nav a,.zp0836 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0836 nav a:hover,.zp0836 .nav a:hover,.zp0836 .footer a:hover{
  opacity:.65
}
.zp0836 .serviceGrid article,.zp0836 .projectCard,.zp0836 .teamCard,.zp0836 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0836 .serviceGrid article:hover,.zp0836 .projectCard:hover,.zp0836 .teamCard:hover,.zp0836 .bentoCard:hover{
  opacity:.85
}
@media(prefers-reduced-motion:reduce){.zp0836 *,.zp0836 *::before,.zp0836 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0836 a,.zp0836 button,.zp0836 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero bentoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">View selected work</a><a href="#services">Explore</a></div></div><div className="bentoHeroGrid">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">35</span><div className="visualMark"/><small>{businessName}</small></div>}<div><b>{services[0]}</b></div><div><b>{services[1]}</b></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>View selected work</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scandinavian / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
