import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0669-spa-monochrome", "family": "Monochrome", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|architectural-grid|story>values>integrations>materials>proof>services>programmes|hard-outline|humanist-classic", "industry": "spa", "hero": "floating-panels", "navigation": "compact-floating", "layout": "architectural-grid"};

export default function Template0669({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Day Spa");
  const headline = String(content.headline || "A restorative pause with thoughtful treatments, quiet spaces, and easy booking.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Massage", "Facials", "Body treatments", "Rituals", "Memberships"];
  const industryLabel = "Day spa";
  const serviceNotes = ["ESPA and Elemis trained therapists with ongoing annual certification.", "Treatment programme design: 3 or 6-session plans with outcome-focused protocols.", "Couples' spa days with private suite, champagne, and shared treatment sequence.", "Thermal suite access included in all treatment bookings: pool, sauna, and steam.", "Corporate wellness days with catering, treatments, and meeting space combined."];
  const proofPoints = ["Luxury Guild accredited", "Thermal suite and vitality pool", "Corporate packages available", "Gift vouchers online"];
  const storyQuote = "\u201cA restorative pause with thoughtful treatments, quiet spaces, and easy booking.\u201d";
  const storyBody = "Rook Day Spa is presented as a real working day spa, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The therapist spent 10 minutes asking about what I needed before any treatment. The session was precisely right.";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Day spa / Project A", "Day spa / Project B", "Day spa / Project C", "Day spa / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A restorative pause with thoughtful treatments, quiet spaces, and easy booking. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00a88f";
  return <main className="zp0669" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0669{--bg:#f6f6f0;--fg:#1f2a2e;--primary:#00a88f;--primary-fg:#050505;--secondary:#f3a642;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0669 *{box-sizing:border-box}
.zp0669 a{color:inherit;text-decoration:none}
.zp0669 h1,.zp0669 h2,.zp0669 h3,.zp0669 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0669 img{max-width:100%;display:block}
.zp0669 button,.zp0669 a{-webkit-tap-highlight-color:transparent}
.zp0669 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0669 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0669 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0669 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0669 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0669 .mobileMenu{display:none}
.zp0669 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0669 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0669 .eyebrow,.zp0669 .sectionTitle>span,.zp0669 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0669 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0669 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0669 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0669 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0669 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0669 .visual,.zp0669 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0669 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0669 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0669 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0669 .heroPhoto{object-fit:cover}
.zp0669 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0669 .floatStack{position:relative;min-height:500px}
.zp0669 .floatStack>*{position:absolute}
.zp0669 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0669 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0669 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0669 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0669 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0669 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0669 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0669 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0669 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0669 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0669 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0669 .serviceGrid p{color:var(--muted)}
.zp0669 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0669 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0669 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0669 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0669 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0669 .story p{color:var(--muted)}
.zp0669 details{border-top:1px solid var(--border);padding:20px 0}
.zp0669 details summary{font-weight:800;cursor:pointer}
.zp0669 details p{color:var(--muted);max-width:70ch}
.zp0669 .integrations,.zp0669 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0669 .integrations>div,.zp0669 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0669 .integrations b,.zp0669 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0669 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Baskerville, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0669 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0669 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0669 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0669 .contact .eyebrow{color:var(--bg)}
.zp0669 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0669 .contactMeta{display:grid;gap:10px}
.zp0669 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0669 .heroCopy{animation:enter-668 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-668{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0669 .hero{min-height:auto}
.zp0669 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0669 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0669 .nav nav{display:none}
.zp0669 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0669 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0669 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0669 .mobileMenu nav a{padding:10px 8px}
.zp0669 .hero,.zp0669 .floatingHero{grid-template-columns:1fr}
.zp0669 .section,.zp0669 .sectionTitle,.zp0669 .story,.zp0669 .contact{grid-template-columns:1fr}
.zp0669 .section{display:block}}
@media(max-width:430px){.zp0669{font-size:16px}
.zp0669 .hero,.zp0669 .section,.zp0669 .contact{padding-left:18px;padding-right:18px}
.zp0669 .serviceGrid,.zp0669 .proof,.zp0669 .programmes>div:last-child{grid-template-columns:1fr}
.zp0669 h1{font-size:clamp(42px,14vw,70px)}}

.zp0669 .heroActions a,.zp0669 .primary,.zp0669 .ctaBtn,.zp0669 .btnPrimary,.zp0669 .schedule>a,.zp0669 .newsletter>a{transition:all .2s ease}
.zp0669 .heroActions a:hover,.zp0669 .primary:hover,.zp0669 .ctaBtn:hover,.zp0669 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0669 nav a,.zp0669 .nav a,.zp0669 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0669 nav a:hover,.zp0669 .nav a:hover,.zp0669 .footer a:hover{
  color:var(--secondary)
}
.zp0669 .serviceGrid article,.zp0669 .projectCard,.zp0669 .teamCard,.zp0669 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0669 .serviceGrid article:hover,.zp0669 .projectCard:hover,.zp0669 .teamCard:hover,.zp0669 .bentoCard:hover{
  background:var(--surface)
}
@media(prefers-reduced-motion:reduce){.zp0669 *,.zp0669 *::before,.zp0669 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0669 a,.zp0669 button,.zp0669 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">68</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Monochrome / architectural-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
