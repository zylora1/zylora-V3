import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0053-veterinary-museum-gallery", "family": "Museum Gallery", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "lower-third|image-collage|case-study-led|newsletter>services>proof>credentials>comparison>projects|ticket-edge|condensed-editorial", "industry": "veterinary", "hero": "image-collage", "navigation": "lower-third", "layout": "case-study-led"};

export default function Template0053({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Studio Nine Veterinary Clinic");
  const headline = String(content.headline || "Modern veterinary care that keeps owners informed at every step.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Wellness exams", "Vaccinations", "Dental care", "Diagnostics", "Urgent care"];
  const industryLabel = "Veterinary clinic";
  const serviceNotes = ["Comprehensive wellness exams covering nutrition, behaviour, and preventive care.", "Gentle handling protocols that reduce stress for anxious patients.", "In-house laboratory for fast results — no waiting days for basic bloods.", "Dental health programmes that protect your pet's overall wellbeing.", "End-of-life care provided with dignity and full family support."];
  const proofPoints = ["RCVS accredited practice", "24h emergency line", "In-house diagnostics", "Nurse-led clinics"];
  const testimonial = "Our older dog gets anxious at vets. Here they take their time — she actually walked in willingly on the third visit.";
  const team = [{"name": "Bureau Lead", "role": "Principal / Lead"}, {"name": "Elm Team", "role": "Client experience"}, {"name": "Marrow Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Veterinary clinic / Project A", "Veterinary clinic / Project B", "Veterinary clinic / Project C", "Veterinary clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Modern veterinary care that keeps owners informed at every step. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#7a46ff";
  return <main className="zp0053" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0053{--bg:#f6f1ff;--fg:#241837;--primary:#7a46ff;--primary-fg:#ffffff;--secondary:#f179c6;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:0px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0053 *{box-sizing:border-box}
.zp0053 a{color:inherit;text-decoration:none}
.zp0053 h1,.zp0053 h2,.zp0053 h3,.zp0053 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0053 img{max-width:100%;display:block}
.zp0053 button,.zp0053 a{-webkit-tap-highlight-color:transparent}
.zp0053 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0053 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0053 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0053 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0053 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0053 .mobileMenu{display:none}
.zp0053 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0053 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0053 .eyebrow,.zp0053 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0053 h1{font-size:clamp(48px,6.9vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0053 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0053 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0053 .heroActions a,.zp0053 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0053 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0053 .visual,.zp0053 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0053 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0053 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:8px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0053 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0053 .heroPhoto{object-fit:cover}
.zp0053 .collageHero{grid-template-columns:.8fr 1.2fr}
.zp0053 .collage{display:grid;grid-template-columns:1.2fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0053 .collage>*:first-child{grid-row:1/3}
.zp0053 .miniVisual{background:var(--primary);border-radius:var(--radius)}
.zp0053 .miniVisual.alt{background:var(--secondary)}
.zp0053 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0053 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0053 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0053 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0053 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0053 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0053 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0053 .serviceGrid p{color:var(--muted)}
.zp0053 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0053 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0053 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0053 details{border-top:1px solid var(--border);padding:20px 0}
.zp0053 details summary{font-weight:800;cursor:pointer}
.zp0053 details p{color:var(--muted);max-width:70ch}
.zp0053 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0053 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0053 .projects article:nth-child(2){transform:translateY(32px)}
.zp0053 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0053 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0053 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0053 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0053 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0053 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0053 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0053 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0053 .contact .eyebrow{color:var(--bg)}
.zp0053 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0053 .contactMeta{display:grid;gap:10px}
.zp0053 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0053 .heroCopy{animation:enter-52 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-52{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0053 .hero{min-height:auto}
.zp0053 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0053 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0053 .nav nav{display:none}
.zp0053 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0053 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0053 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0053 .mobileMenu nav a{padding:10px 8px}
.zp0053 .hero,.zp0053 .collageHero{grid-template-columns:1fr}
.zp0053 .section,.zp0053 .sectionTitle,.zp0053 .contact{grid-template-columns:1fr}
.zp0053 .projects .projectGrid{grid-template-columns:1fr}
.zp0053 .projects article:nth-child(2){transform:none}
.zp0053 .section{display:block}}
@media(max-width:430px){.zp0053{font-size:16px}
.zp0053 .hero,.zp0053 .section,.zp0053 .contact{padding-left:18px;padding-right:18px}
.zp0053 .serviceGrid,.zp0053 .proof,.zp0053 .compareGrid{grid-template-columns:1fr}
.zp0053 h1{font-size:clamp(42px,14vw,70px)}}

.zp0053 .heroActions a,.zp0053 .primary,.zp0053 .ctaBtn,.zp0053 .btnPrimary,.zp0053 .schedule>a,.zp0053 .newsletter>a{transition:all .2s ease}
.zp0053 .heroActions a:hover,.zp0053 .primary:hover,.zp0053 .ctaBtn:hover,.zp0053 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0053 nav a,.zp0053 .nav a,.zp0053 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0053 nav a:hover,.zp0053 .nav a:hover,.zp0053 .footer a:hover{
  opacity:.7
}
.zp0053 .serviceGrid article,.zp0053 .projectCard,.zp0053 .teamCard,.zp0053 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0053 .serviceGrid article:hover,.zp0053 .projectCard:hover,.zp0053 .teamCard:hover,.zp0053 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0053 *,.zp0053 *::before,.zp0053 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0053 a,.zp0053 button,.zp0053 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero collageHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div><div className="collage">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">52</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="miniVisual"/><div className="miniVisual alt"/></div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Museum Gallery / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
