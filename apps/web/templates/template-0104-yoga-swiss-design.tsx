import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0104-yoga-swiss-design", "family": "Swiss Design", "pages": 6, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|monumental-type|booking-led|proof>metrics>projects>services>awards>community|micro-radius|newspaper", "industry": "yoga", "hero": "monumental-type", "navigation": "corner-dock", "layout": "booking-led"};

export default function Template0104({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Common Yoga Studio");
  const headline = String(content.headline || "A grounded practice space for strength, mobility, breath, and community.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Vinyasa classes", "Beginner foundations", "Prenatal yoga", "Private sessions", "Weekend workshops"];
  const serviceNotes = ["Beginners to advanced — class levels clearly marked so you start in the right place.", "Dynamic vinyasa, restorative yin, and breathwork offerings across the week.", "Prenatal and postnatal classes run by specialist teachers.", "Workshops on anatomy and alignment for practitioners wanting to go deeper.", "Monthly immersive day retreats for those needing a full reset."];
  const proofPoints = ["200h+ certified teachers", "Heated and non-heated studios", "Unlimited class packages", "Online library access"];
  const storyBody = "Common Yoga Studio is presented as a real working yoga studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The teachers remember you by name and adapt the class based on who's in the room. It feels personal at every level.";
  const team = [{"name": "Juniper Lead", "role": "Principal / Lead"}, {"name": "Miller & Rowe Team", "role": "Client experience"}, {"name": "Stone & Pine Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Yoga studio / Project A", "Yoga studio / Project B", "Yoga studio / Project C", "Yoga studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "A grounded practice space for strength, mobility, breath, and community. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e8572a";
  return <main className="zp0104" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0104{--bg:#2b190f;--fg:#fff4df;--primary:#e8572a;--primary-fg:#050505;--secondary:#4e8f64;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:none;--max:1360px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0104 *{box-sizing:border-box}
.zp0104 a{color:inherit;text-decoration:none}
.zp0104 h1,.zp0104 h2,.zp0104 h3,.zp0104 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0104 img{max-width:100%;display:block}
.zp0104 button,.zp0104 a{-webkit-tap-highlight-color:transparent}
.zp0104 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0104 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0104 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0104 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0104 .mobileMenu{display:none}
.zp0104 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0104 .eyebrow,.zp0104 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0104 h1{font-size:clamp(48px,7.45vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0104 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0104 .monumentalHero{display:block}
.zp0104 .monumentalHero h1{font-size:clamp(74px,16vw,250px);max-width:none;word-break:break-word}
.zp0104 .monumentalBody{display:grid;grid-template-columns:1fr auto;gap:30px;border-top:1px solid var(--border);padding-top:22px}
.zp0104 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0104 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0104 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0104 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0104 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0104 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0104 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0104 .serviceGrid p{color:var(--muted)}
.zp0104 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0104 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0104 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0104 details{border-top:1px solid var(--border);padding:20px 0}
.zp0104 details summary{font-weight:800;cursor:pointer}
.zp0104 details p{color:var(--muted);max-width:70ch}
.zp0104 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0104 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0104 .projects article:nth-child(2){transform:translateY(32px)}
.zp0104 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0104 .metrics div{background:var(--bg);padding:30px}
.zp0104 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Times New Roman, serif;color:var(--primary)}
.zp0104 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0104 .awards>div{max-width:800px;margin-left:auto}
.zp0104 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0104 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0104 .contact .eyebrow{color:var(--bg)}
.zp0104 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0104 .contactMeta{display:grid;gap:10px}
.zp0104 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0104 .hero{min-height:auto}
.zp0104 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0104 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0104 .nav nav{display:none}
.zp0104 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0104 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0104 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0104 .mobileMenu nav a{padding:10px 8px}
.zp0104 .hero{grid-template-columns:1fr}
.zp0104 .section,.zp0104 .sectionTitle,.zp0104 .contact{grid-template-columns:1fr}
.zp0104 .metrics{grid-template-columns:1fr 1fr}
.zp0104 .projects .projectGrid{grid-template-columns:1fr}
.zp0104 .projects article:nth-child(2){transform:none}
.zp0104 .section{display:block}}
@media(max-width:430px){.zp0104{font-size:16px}
.zp0104 .hero,.zp0104 .section,.zp0104 .contact{padding-left:18px;padding-right:18px}
.zp0104 .serviceGrid,.zp0104 .proof,.zp0104 .metrics{grid-template-columns:1fr}
.zp0104 h1{font-size:clamp(42px,14vw,70px)}
.zp0104 .monumentalHero h1{font-size:clamp(58px,19vw,100px)}
.zp0104 .monumentalBody{grid-template-columns:1fr}}

.zp0104 .heroActions a,.zp0104 .primary,.zp0104 .ctaBtn,.zp0104 .btnPrimary,.zp0104 .schedule>a,.zp0104 .newsletter>a{transition:all .2s ease}
.zp0104 .heroActions a:hover,.zp0104 .primary:hover,.zp0104 .ctaBtn:hover,.zp0104 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0104 nav a,.zp0104 .nav a,.zp0104 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0104 nav a:hover,.zp0104 .nav a:hover,.zp0104 .footer a:hover{
  text-decoration:underline
}
.zp0104 .serviceGrid article,.zp0104 .projectCard,.zp0104 .teamCard,.zp0104 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0104 .serviceGrid article:hover,.zp0104 .projectCard:hover,.zp0104 .teamCard:hover,.zp0104 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0104 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0104 .sectionTitle,.zp0104 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0104 *,.zp0104 *::before,.zp0104 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0104 a,.zp0104 button,.zp0104 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero monumentalHero"><h1>{businessName}</h1><div className="monumentalBody"><p>{headline}</p><a href="#contact">Plan your visit</a></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Swiss Design / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
