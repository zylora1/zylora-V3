import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0861-repair-split-screen", "family": "Split-screen", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|split-scroll|awards>process>proof>research>manifesto>availability>services|hard-outline|humanist-classic", "industry": "repair", "hero": "floating-panels", "navigation": "compact-floating", "layout": "split-scroll"};

export default function Template0861({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Repair Service");
  const headline = String(content.headline || "Clear estimates, reliable workmanship, and updates you can understand.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Diagnostics", "Routine service", "Repairs", "Tyres", "Inspections"];
  const industryLabel = "Repair service";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Repair service / Project A", "Repair service / Project B", "Repair service / Project C", "Repair service / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Clear estimates, reliable workmanship, and updates you can understand. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffcc33";
  return <main className="zp0861" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0861{--bg:#101218;--fg:#f7f5f0;--primary:#ffcc33;--primary-fg:#050505;--secondary:#3f7cff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0861 *{box-sizing:border-box}
.zp0861 a{color:inherit;text-decoration:none}
.zp0861 h1,.zp0861 h2,.zp0861 h3,.zp0861 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0861 img{max-width:100%;display:block}
.zp0861 button,.zp0861 a{-webkit-tap-highlight-color:transparent}
.zp0861 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0861 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0861 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0861 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0861 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0861 .mobileMenu{display:none}
.zp0861 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0861 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0861 .eyebrow,.zp0861 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0861 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0861 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0861 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0861 .heroActions a,.zp0861 .schedule>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0861 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0861 .visual,.zp0861 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0861 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0861 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0861 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0861 .heroPhoto{object-fit:cover}
.zp0861 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0861 .floatStack{position:relative;min-height:500px}
.zp0861 .floatStack>*{position:absolute}
.zp0861 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0861 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0861 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0861 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0861 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0861 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0861 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0861 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0861 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0861 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0861 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0861 .serviceGrid p{color:var(--muted)}
.zp0861 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0861 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0861 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0861 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0861 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0861 details{border-top:1px solid var(--border);padding:20px 0}
.zp0861 details summary{font-weight:800;cursor:pointer}
.zp0861 details p{color:var(--muted);max-width:70ch}
.zp0861 .schedule{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0861 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Baskerville, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0861 .awards>div{max-width:800px;margin-left:auto}
.zp0861 .awards p,.zp0861 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0861 .researchRows{max-width:900px;margin-left:auto}
.zp0861 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0861 .contact .eyebrow{color:var(--bg)}
.zp0861 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0861 .contactMeta{display:grid;gap:10px}
.zp0861 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0861 .heroCopy{animation:enter-860 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-860{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0861 .hero{min-height:auto}
.zp0861 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0861 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0861 .nav nav{display:none}
.zp0861 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0861 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0861 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0861 .mobileMenu nav a{padding:10px 8px}
.zp0861 .hero,.zp0861 .floatingHero{grid-template-columns:1fr}
.zp0861 .section,.zp0861 .sectionTitle,.zp0861 .contact{grid-template-columns:1fr}
.zp0861 .section{display:block}}
@media(max-width:430px){.zp0861{font-size:16px}
.zp0861 .hero,.zp0861 .section,.zp0861 .contact{padding-left:18px;padding-right:18px}
.zp0861 .serviceGrid,.zp0861 .proof{grid-template-columns:1fr}
.zp0861 h1{font-size:clamp(42px,14vw,70px)}}

.zp0861 .heroActions a,.zp0861 .primary,.zp0861 .ctaBtn,.zp0861 .btnPrimary,.zp0861 .schedule>a,.zp0861 .newsletter>a{transition:all .2s ease}
.zp0861 .heroActions a:hover,.zp0861 .primary:hover,.zp0861 .ctaBtn:hover,.zp0861 .btnPrimary:hover{
  opacity:.85
}
.zp0861 nav a,.zp0861 .nav a,.zp0861 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0861 nav a:hover,.zp0861 .nav a:hover,.zp0861 .footer a:hover{
  color:var(--primary)
}
.zp0861 .serviceGrid article,.zp0861 .projectCard,.zp0861 .teamCard,.zp0861 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0861 .serviceGrid article:hover,.zp0861 .projectCard:hover,.zp0861 .teamCard:hover,.zp0861 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0861 *,.zp0861 *::before,.zp0861 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0861 a,.zp0861 button,.zp0861 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">60</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Split-screen / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
