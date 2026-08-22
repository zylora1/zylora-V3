import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0100-yoga-newspaper", "family": "Newspaper", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|bento-hero|research-led|services>credentials>metrics>proof>community|cut-corners|sports-editorial", "industry": "yoga", "hero": "bento-hero", "navigation": "transparent-overlay", "layout": "research-led"};

export default function Template0100({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Fieldwork Yoga Studio");
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
  const proofPoints = ["200h+ certified teachers", "Heated and non-heated studios", "Unlimited class packages", "Online library access"];
  const storyBody = "Fieldwork Yoga Studio is presented as a real working yoga studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The teachers remember you by name and adapt the class based on who's in the room. It feels personal at every level.";
  const team = [{"name": "Lumen Lead", "role": "Principal / Lead"}, {"name": "Juniper Team", "role": "Client experience"}, {"name": "Miller & Rowe Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Yoga studio / Project A", "Yoga studio / Project B", "Yoga studio / Project C", "Yoga studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A grounded practice space for strength, mobility, breath, and community. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#8d66ff";
  return <main className="zp0100" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0100{--bg:#f8f3ff;--fg:#181122;--primary:#8d66ff;--primary-fg:#050505;--secondary:#f39cd8;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:none;--max:1440px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0100 *{box-sizing:border-box}
.zp0100 a{color:inherit;text-decoration:none}
.zp0100 h1,.zp0100 h2,.zp0100 h3,.zp0100 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0100 img{max-width:100%;display:block}
.zp0100 button,.zp0100 a{-webkit-tap-highlight-color:transparent}
.zp0100 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0100 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0100 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0100 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0100 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0100 .mobileMenu{display:none}
.zp0100 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0100 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0100 .eyebrow,.zp0100 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0100 h1{font-size:clamp(48px,8.0vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0100 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0100 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0100 .heroActions a,.zp0100 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0100 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0100 .visual,.zp0100 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0100 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0100 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(-16deg)}
.zp0100 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0100 .heroPhoto{object-fit:cover}
.zp0100 .bentoHero{grid-template-columns:.8fr 1.2fr}
.zp0100 .bentoHeroGrid{display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0100 .bentoHeroGrid>*{border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.zp0100 .bentoHeroGrid>*:first-child{grid-row:1/3;padding:0;overflow:hidden}
.zp0100 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0100 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0100 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0100 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0100 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0100 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0100 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0100 .serviceGrid p{color:var(--muted)}
.zp0100 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0100 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0100 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0100 details{border-top:1px solid var(--border);padding:20px 0}
.zp0100 details summary{font-weight:800;cursor:pointer}
.zp0100 details p{color:var(--muted);max-width:70ch}
.zp0100 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0100 .metrics div{background:var(--bg);padding:30px}
.zp0100 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;color:var(--primary)}
.zp0100 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0100 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0100 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0100 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0100 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0100 .contact .eyebrow{color:var(--bg)}
.zp0100 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0100 .contactMeta{display:grid;gap:10px}
.zp0100 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0100{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0100 .section:nth-of-type(3n){transform:rotate(-0.35deg)}
.zp0100 .heroCopy p{columns:2;column-gap:30px}
.zp0100 .heroCopy{animation:enter-99 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-99{from{opacity:0;transform:translateY(37px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0100 .hero{min-height:auto}
.zp0100 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0100 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0100 .nav nav{display:none}
.zp0100 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0100 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0100 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0100 .mobileMenu nav a{padding:10px 8px}
.zp0100 .hero,.zp0100 .bentoHero{grid-template-columns:1fr}
.zp0100 .section,.zp0100 .sectionTitle,.zp0100 .contact{grid-template-columns:1fr}
.zp0100 .metrics{grid-template-columns:1fr 1fr}
.zp0100 .section{display:block}}
@media(max-width:430px){.zp0100{font-size:16px}
.zp0100 .hero,.zp0100 .section,.zp0100 .contact{padding-left:18px;padding-right:18px}
.zp0100 .serviceGrid,.zp0100 .proof,.zp0100 .metrics{grid-template-columns:1fr}
.zp0100 h1{font-size:clamp(42px,14vw,70px)}}

.zp0100 .heroActions a,.zp0100 .primary,.zp0100 .ctaBtn,.zp0100 .btnPrimary,.zp0100 .schedule>a,.zp0100 .newsletter>a{transition:all .2s ease}
.zp0100 .heroActions a:hover,.zp0100 .primary:hover,.zp0100 .ctaBtn:hover,.zp0100 .btnPrimary:hover{
  text-decoration:underline;opacity:.85
}
.zp0100 nav a,.zp0100 .nav a,.zp0100 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0100 nav a:hover,.zp0100 .nav a:hover,.zp0100 .footer a:hover{
  text-decoration:underline
}
.zp0100 .serviceGrid article,.zp0100 .projectCard,.zp0100 .teamCard,.zp0100 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0100 .serviceGrid article:hover,.zp0100 .projectCard:hover,.zp0100 .teamCard:hover,.zp0100 .bentoCard:hover{
  border-color:var(--primary)
}
@media(prefers-reduced-motion:reduce){.zp0100 *,.zp0100 *::before,.zp0100 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0100 a,.zp0100 button,.zp0100 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero bentoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div><div className="bentoHeroGrid">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">99</span><div className="visualMark"/><small>{businessName}</small></div>}<div><b>{services[0]}</b></div><div><b>{services[1]}</b></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Newspaper / research-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
