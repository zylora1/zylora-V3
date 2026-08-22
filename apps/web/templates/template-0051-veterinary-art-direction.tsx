import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0051-veterinary-art-direction", "family": "Art Direction", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "split-logo|vertical-image-rail|product-journey|programmes>services>proof>comparison>integrations>community>hours|inset-panel|poster", "industry": "veterinary", "hero": "vertical-image-rail", "navigation": "split-logo", "layout": "product-journey"};

export default function Template0051({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stone & Pine Veterinary Clinic");
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
  const storyBody = "Stone & Pine Veterinary Clinic is presented as a real working veterinary clinic, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Our older dog gets anxious at vets. Here they take their time — she actually walked in willingly on the third visit.";
  const team = [{"name": "Mosaic Lead", "role": "Principal / Lead"}, {"name": "Kindred Team", "role": "Client experience"}, {"name": "Tandem Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Veterinary clinic / Project A", "Veterinary clinic / Project B", "Veterinary clinic / Project C", "Veterinary clinic / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Modern veterinary care that keeps owners informed at every step. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#bdff4f";
  return <main className="zp0051" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0051{--bg:#111813;--fg:#f3f0dc;--primary:#bdff4f;--primary-fg:#050505;--secondary:#8aa376;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0051 *{box-sizing:border-box}
.zp0051 a{color:inherit;text-decoration:none}
.zp0051 h1,.zp0051 h2,.zp0051 h3,.zp0051 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0051 img{max-width:100%;display:block}
.zp0051 button,.zp0051 a{-webkit-tap-highlight-color:transparent}
.zp0051 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0051 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0051 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0051 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0051 .mobileMenu{display:none}
.zp0051 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0051 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0051 .eyebrow,.zp0051 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0051 h1{font-size:clamp(48px,5.8vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0051 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0051 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0051 .heroActions a,.zp0051 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0051 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0051 .visual,.zp0051 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0051 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0051 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0051 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0051 .heroPhoto{object-fit:cover}
.zp0051 .verticalHero{grid-template-columns:.6fr 1.4fr}
.zp0051 .imageRail{height:70vh;display:grid;grid-template-rows:1fr .25fr;gap:12px}
.zp0051 .railBlock{background:var(--primary)}
.zp0051 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0051 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0051 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0051 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0051 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0051 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0051 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0051 .serviceGrid p{color:var(--muted)}
.zp0051 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0051 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0051 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0051 details{border-top:1px solid var(--border);padding:20px 0}
.zp0051 details summary{font-weight:800;cursor:pointer}
.zp0051 details p{color:var(--muted);max-width:70ch}
.zp0051 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0051 .hours dl{margin:0}
.zp0051 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0051 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0051 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0051 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0051 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0051 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0051 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0051 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0051 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0051 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0051 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0051 .contact .eyebrow{color:var(--bg)}
.zp0051 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0051 .contactMeta{display:grid;gap:10px}
.zp0051 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0051 .heroCopy{animation:enter-50 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-50{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0051 .hero{min-height:auto}
.zp0051 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0051 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0051 .nav nav{display:none}
.zp0051 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0051 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0051 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0051 .mobileMenu nav a{padding:10px 8px}
.zp0051 .hero,.zp0051 .verticalHero{grid-template-columns:1fr}
.zp0051 .section,.zp0051 .sectionTitle,.zp0051 .hours,.zp0051 .contact{grid-template-columns:1fr}
.zp0051 .section{display:block}}
@media(max-width:430px){.zp0051{font-size:16px}
.zp0051 .hero,.zp0051 .section,.zp0051 .contact{padding-left:18px;padding-right:18px}
.zp0051 .serviceGrid,.zp0051 .proof,.zp0051 .programmes>div:last-child,.zp0051 .compareGrid{grid-template-columns:1fr}
.zp0051 h1{font-size:clamp(42px,14vw,70px)}}

.zp0051 .heroActions a,.zp0051 .primary,.zp0051 .ctaBtn,.zp0051 .btnPrimary,.zp0051 .schedule>a,.zp0051 .newsletter>a{transition:all .2s ease}
.zp0051 .heroActions a:hover,.zp0051 .primary:hover,.zp0051 .ctaBtn:hover,.zp0051 .btnPrimary:hover{
  opacity:.85;letter-spacing:.06em
}
.zp0051 nav a,.zp0051 .nav a,.zp0051 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0051 nav a:hover,.zp0051 .nav a:hover,.zp0051 .footer a:hover{
  opacity:.7
}
.zp0051 .serviceGrid article,.zp0051 .projectCard,.zp0051 .teamCard,.zp0051 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0051 .serviceGrid article:hover,.zp0051 .projectCard:hover,.zp0051 .teamCard:hover,.zp0051 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0051 *,.zp0051 *::before,.zp0051 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0051 a,.zp0051 button,.zp0051 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero verticalHero"><div className="imageRail">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">50</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="railBlock"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Art Direction / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
