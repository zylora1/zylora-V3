import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0107-yoga-aurora", "family": "Aurora", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "statement-bar|split-image|asymmetric-5-7|location>process>proof>destinations>services>community|capsule|editorial-serif", "industry": "yoga", "hero": "split-image", "navigation": "statement-bar", "layout": "asymmetric-5-7"};

export default function Template0107({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Juniper Yoga Studio");
  const headline = String(content.headline || "A grounded practice space for strength, mobility, breath, and community.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Vinyasa classes", "Beginner foundations", "Prenatal yoga", "Private sessions", "Weekend workshops"];
  const industryLabel = "Yoga studio";
  const serviceNotes = ["Beginners to advanced — class levels clearly marked so you start in the right place.", "Dynamic vinyasa, restorative yin, and breathwork offerings across the week.", "Prenatal and postnatal classes run by specialist teachers.", "Workshops on anatomy and alignment for practitioners wanting to go deeper.", "Monthly immersive day retreats for those needing a full reset."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["200h+ certified teachers", "Heated and non-heated studios", "Unlimited class packages", "Online library access"];
  const storyBody = "Juniper Yoga Studio is presented as a real working yoga studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The teachers remember you by name and adapt the class based on who's in the room. It feels personal at every level.";
  const team = [{"name": "Slate Lead", "role": "Principal / Lead"}, {"name": "Signal Team", "role": "Client experience"}, {"name": "Mosaic Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Yoga studio / Project A", "Yoga studio / Project B", "Yoga studio / Project C", "Yoga studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A grounded practice space for strength, mobility, breath, and community. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  return <main className="zp0107" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0107{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:32px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0107 *{box-sizing:border-box}
.zp0107 a{color:inherit;text-decoration:none}
.zp0107 h1,.zp0107 h2,.zp0107 h3,.zp0107 blockquote{font-family:Georgia, serif;text-wrap:balance}
.zp0107 img{max-width:100%;display:block}
.zp0107 button,.zp0107 a{-webkit-tap-highlight-color:transparent}
.zp0107 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0107 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0107 .nav strong{font-family:Georgia, serif;font-size:18px}
.zp0107 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0107 .nav.statement{display:grid;grid-template-columns:1fr auto 1fr}
.zp0107 .nav.statement>a{justify-self:end}
.zp0107 .mobileMenu{display:none}
.zp0107 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0107 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0107 .eyebrow,.zp0107 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0107 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0107 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0107 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0107 .heroActions a,.zp0107 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0107 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0107 .visual,.zp0107 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0107 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0107 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:32px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0107 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0107 .heroPhoto{object-fit:cover}
.zp0107 .splitHero{grid-template-columns:1.15fr .85fr}
.zp0107 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0107 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0107 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0107 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0107 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0107 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0107 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0107 .serviceGrid p{color:var(--muted)}
.zp0107 .process ol{list-style:none;padding:0;margin:0;border-top:1px solid var(--border)}
.zp0107 .process li{display:grid;grid-template-columns:80px 1fr;padding:24px 0;border-bottom:1px solid var(--border);font-size:clamp(20px,3vw,38px)}
.zp0107 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0107 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0107 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0107 details{border-top:1px solid var(--border);padding:20px 0}
.zp0107 details summary{font-weight:800;cursor:pointer}
.zp0107 details p{color:var(--muted);max-width:70ch}
.zp0107 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0107 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0107 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0107 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0107 .destinations>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0107 .destinations article{padding:24px;border-top:1px solid var(--border)}
.zp0107 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0107 .contact .eyebrow{color:var(--bg)}
.zp0107 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0107 .contactMeta{display:grid;gap:10px}
.zp0107 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0107 .section:nth-of-type(odd){padding-left:max(24px,calc((100vw - var(--max))/2 + 7vw))}
.zp0107{background-image:radial-gradient(circle at 15% 10%,color-mix(in srgb,var(--primary) 18%,transparent),transparent 36%),radial-gradient(circle at 90% 25%,color-mix(in srgb,var(--secondary) 15%,transparent),transparent 34%)}
.zp0107 .serviceGrid article{backdrop-filter:blur(14px);background:color-mix(in srgb,var(--surface) 70%,transparent)}
.zp0107 .heroCopy{animation:enter-106 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-106{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0107 .hero{min-height:auto}
.zp0107 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0107 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0107 .nav nav{display:none}
.zp0107 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0107 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0107 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0107 .mobileMenu nav a{padding:10px 8px}
.zp0107 .hero,.zp0107 .splitHero{grid-template-columns:1fr}
.zp0107 .section,.zp0107 .sectionTitle,.zp0107 .location,.zp0107 .contact{grid-template-columns:1fr}
.zp0107 .section{display:block}}
@media(max-width:430px){.zp0107{font-size:16px}
.zp0107 .hero,.zp0107 .section,.zp0107 .contact{padding-left:18px;padding-right:18px}
.zp0107 .serviceGrid,.zp0107 .proof,.zp0107 .destinations>div:last-child{grid-template-columns:1fr}
.zp0107 h1{font-size:clamp(42px,14vw,70px)}
.zp0107 .nav.statement{grid-template-columns:1fr auto}
.zp0107 .nav.statement>span:first-child{display:none}}

.zp0107 .heroActions a,.zp0107 .primary,.zp0107 .ctaBtn,.zp0107 .btnPrimary,.zp0107 .schedule>a,.zp0107 .newsletter>a{transition:all .2s ease}
.zp0107 .heroActions a:hover,.zp0107 .primary:hover,.zp0107 .ctaBtn:hover,.zp0107 .btnPrimary:hover{
  box-shadow:0 0 20px color-mix(in srgb,var(--primary) 40%,transparent)
}
.zp0107 nav a,.zp0107 .nav a,.zp0107 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0107 nav a:hover,.zp0107 .nav a:hover,.zp0107 .footer a:hover{
  color:var(--primary)
}
.zp0107 .serviceGrid article,.zp0107 .projectCard,.zp0107 .teamCard,.zp0107 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0107 .serviceGrid article:hover,.zp0107 .projectCard:hover,.zp0107 .teamCard:hover,.zp0107 .bentoCard:hover{
  box-shadow:0 8px 24px color-mix(in srgb,var(--primary) 25%,transparent)
}
@media(prefers-reduced-motion:reduce){.zp0107 *,.zp0107 *::before,.zp0107 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0107 a,.zp0107 button,.zp0107 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav statement"><span>Independent / Local / Established</span><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero splitHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">06</span><div className="visualMark"/><small>{businessName}</small></div>}</section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section process"><div className="sectionTitle"><span>Process</span><h2>A clear path from first conversation to next step.</h2></div><ol>{processSteps.map((s,i)=><li key={s}><b>{String(i+1).padStart(2,"0")}</b><span>{s}</span></li>)}</ol></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section destinations"><div className="sectionTitle"><span>Places</span><h2>Three ways to begin.</h2></div><div>{projects.slice(0,3).map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Aurora / asymmetric-5-7</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
