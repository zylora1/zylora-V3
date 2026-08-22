import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0732-artist-collage", "family": "Collage", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|stacked-posters|community>destinations>proof>services>integrations>projects>team|notched|literary", "industry": "artist", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "stacked-posters"};

export default function Template0732({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Artist Studio");
  const headline = String(content.headline || "A spacious digital archive for work, exhibitions, process, and current enquiries.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected works", "Exhibitions", "Commissions", "Writing", "Studio visits"];
  const industryLabel = "Artist studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyBody = "Elm Artist Studio is presented as a real working artist studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Artist studio / Project A", "Artist studio / Project B", "Artist studio / Project C", "Artist studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A spacious digital archive for work, exhibitions, process, and current enquiries. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0732" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0732{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0732 *{box-sizing:border-box}
.zp0732 a{color:inherit;text-decoration:none}
.zp0732 h1,.zp0732 h2,.zp0732 h3,.zp0732 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0732 img{max-width:100%;display:block}
.zp0732 button,.zp0732 a{-webkit-tap-highlight-color:transparent}
.zp0732 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0732 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0732 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0732 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0732 .mobileMenu{display:none}
.zp0732 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0732 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0732 .eyebrow,.zp0732 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0732 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0732 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0732 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0732 .heroActions a,.zp0732 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0732 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0732 .mapHero{grid-template-columns:1fr 1fr}
.zp0732 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0732 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0732 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0732 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0732 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0732 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0732 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0732 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0732 .serviceGrid p{color:var(--muted)}
.zp0732 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0732 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0732 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0732 details{border-top:1px solid var(--border);padding:20px 0}
.zp0732 details summary{font-weight:800;cursor:pointer}
.zp0732 details p{color:var(--muted);max-width:70ch}
.zp0732 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0732 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0732 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Garamond, Georgia, serif;margin-bottom:18px}
.zp0732 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0732 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0732 .projects article:nth-child(2){transform:translateY(32px)}
.zp0732 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0732 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0732 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0732 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0732 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0732 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0732 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0732 .contact .eyebrow{color:var(--bg)}
.zp0732 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0732 .contactMeta{display:grid;gap:10px}
.zp0732 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0732{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0732 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
.zp0732 .heroCopy{animation:enter-731 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-731{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0732 .hero{min-height:auto}
.zp0732 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0732 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0732 .nav nav{display:none}
.zp0732 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0732 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0732 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0732 .mobileMenu nav a{padding:10px 8px}
.zp0732 .hero,.zp0732 .mapHero{grid-template-columns:1fr}
.zp0732 .section,.zp0732 .sectionTitle,.zp0732 .contact{grid-template-columns:1fr}
.zp0732 .teamGrid{grid-template-columns:1fr 1fr}
.zp0732 .projects .projectGrid{grid-template-columns:1fr}
.zp0732 .projects article:nth-child(2){transform:none}
.zp0732 .section{display:block}}
@media(max-width:430px){.zp0732{font-size:16px}
.zp0732 .hero,.zp0732 .section,.zp0732 .contact{padding-left:18px;padding-right:18px}
.zp0732 .serviceGrid,.zp0732 .proof,.zp0732 .teamGrid,.zp0732 .destinations>div:last-child{grid-template-columns:1fr}
.zp0732 h1{font-size:clamp(42px,14vw,70px)}}

.zp0732 .heroActions a,.zp0732 .primary,.zp0732 .ctaBtn,.zp0732 .btnPrimary,.zp0732 .schedule>a,.zp0732 .newsletter>a{transition:all .2s ease}
.zp0732 .heroActions a:hover,.zp0732 .primary:hover,.zp0732 .ctaBtn:hover,.zp0732 .btnPrimary:hover{
  transform:rotate(1deg) scale(1.02)
}
.zp0732 nav a,.zp0732 .nav a,.zp0732 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0732 nav a:hover,.zp0732 .nav a:hover,.zp0732 .footer a:hover{
  color:var(--primary)
}
.zp0732 .serviceGrid article,.zp0732 .projectCard,.zp0732 .teamCard,.zp0732 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0732 .serviceGrid article:hover,.zp0732 .projectCard:hover,.zp0732 .teamCard:hover,.zp0732 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0732 *,.zp0732 *::before,.zp0732 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0732 a,.zp0732 button,.zp0732 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Collage / stacked-posters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
