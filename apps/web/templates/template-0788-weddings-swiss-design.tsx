import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0788-weddings-swiss-design", "family": "Swiss Design", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|product-led|booking-led|community>programmes>services>proof>team>process|cut-corners|product-ui", "industry": "weddings", "hero": "product-led", "navigation": "transparent-overlay", "layout": "booking-led"};

export default function Template0788({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Pavilion Wedding Studio");
  const headline = String(content.headline || "Thoughtful celebrations with strong creative direction and calm, meticulous coordination.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Planning", "Design", "Coordination", "Destination weddings", "Vendor management"];
  const industryLabel = "Wedding studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyBody = "Pavilion Wedding Studio is presented as a real working wedding studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Foxglove Lead", "role": "Principal / Lead"}, {"name": "Atlas Team", "role": "Client experience"}, {"name": "Clove Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wedding studio / Project A", "Wedding studio / Project B", "Wedding studio / Project C", "Wedding studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Thoughtful celebrations with strong creative direction and calm, meticulous coordination. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0788" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0788{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:none;--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0788 *{box-sizing:border-box}
.zp0788 a{color:inherit;text-decoration:none}
.zp0788 h1,.zp0788 h2,.zp0788 h3,.zp0788 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0788 img{max-width:100%;display:block}
.zp0788 button,.zp0788 a{-webkit-tap-highlight-color:transparent}
.zp0788 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0788 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0788 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0788 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0788 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0788 .mobileMenu{display:none}
.zp0788 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0788 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0788 .eyebrow,.zp0788 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0788 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0788 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0788 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0788 .heroActions a,.zp0788 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0788 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0788 .visual,.zp0788 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0788 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0788 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0788 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0788 .heroPhoto{object-fit:cover}
.zp0788 .productLedHero{grid-template-columns:1.1fr .9fr}
.zp0788 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0788 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0788 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0788 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0788 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0788 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0788 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0788 .serviceGrid p{color:var(--muted)}
.zp0788 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0788 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0788 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0788 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0788 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0788 details{border-top:1px solid var(--border);padding:20px 0}
.zp0788 details summary{font-weight:800;cursor:pointer}
.zp0788 details p{color:var(--muted);max-width:70ch}
.zp0788 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0788 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0788 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Segoe UI, Arial, sans-serif;margin-bottom:18px}
.zp0788 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0788 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0788 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0788 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0788 .contact .eyebrow{color:var(--bg)}
.zp0788 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0788 .contactMeta{display:grid;gap:10px}
.zp0788 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0788 .heroCopy{animation:enter-787 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-787{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0788 .hero{min-height:auto}
.zp0788 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0788 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0788 .nav nav{display:none}
.zp0788 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0788 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0788 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0788 .mobileMenu nav a{padding:10px 8px}
.zp0788 .hero,.zp0788 .productLedHero{grid-template-columns:1fr}
.zp0788 .section,.zp0788 .sectionTitle,.zp0788 .contact{grid-template-columns:1fr}
.zp0788 .teamGrid{grid-template-columns:1fr 1fr}
.zp0788 .section{display:block}}
@media(max-width:430px){.zp0788{font-size:16px}
.zp0788 .hero,.zp0788 .section,.zp0788 .contact{padding-left:18px;padding-right:18px}
.zp0788 .serviceGrid,.zp0788 .proof,.zp0788 .teamGrid,.zp0788 .programmes>div:last-child{grid-template-columns:1fr}
.zp0788 h1{font-size:clamp(42px,14vw,70px)}}

.zp0788 .heroActions a,.zp0788 .primary,.zp0788 .ctaBtn,.zp0788 .btnPrimary,.zp0788 .schedule>a,.zp0788 .newsletter>a{transition:all .2s ease}
.zp0788 .heroActions a:hover,.zp0788 .primary:hover,.zp0788 .ctaBtn:hover,.zp0788 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0788 nav a,.zp0788 .nav a,.zp0788 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0788 nav a:hover,.zp0788 .nav a:hover,.zp0788 .footer a:hover{
  text-decoration:underline
}
.zp0788 .serviceGrid article,.zp0788 .projectCard,.zp0788 .teamCard,.zp0788 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0788 .serviceGrid article:hover,.zp0788 .projectCard:hover,.zp0788 .teamCard:hover,.zp0788 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0788 *,.zp0788 *::before,.zp0788 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0788 a,.zp0788 button,.zp0788 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero productLedHero">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">87</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="productTitle"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a demo</a><a href="#services">Explore</a></div></div></div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a demo</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Swiss Design / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
