import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0110-yoga-full-screen-storytelling", "family": "Full-screen Storytelling", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "asymmetric-cluster|carousel-frame|full-bleed-chapters|testimonial>proof>manifesto>team>services>community|circular|ceremonial", "industry": "yoga", "hero": "carousel-frame", "navigation": "asymmetric-cluster", "layout": "full-bleed-chapters"};

export default function Template0110({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Slate Yoga Studio");
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
  const storyBody = "Slate Yoga Studio is presented as a real working yoga studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "The teachers remember you by name and adapt the class based on who's in the room. It feels personal at every level.";
  const testimonialName = "Stone & Pine client";
  const team = [{"name": "Oak & Tide Lead", "role": "Principal / Lead"}, {"name": "Studio Nine Team", "role": "Client experience"}, {"name": "Foundry Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Yoga studio / Project A", "Yoga studio / Project B", "Yoga studio / Project C", "Yoga studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A grounded practice space for strength, mobility, breath, and community. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#df567f";
  return <main className="zp0110" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0110{--bg:#fff4f4;--fg:#2b1721;--primary:#df567f;--primary-fg:#050505;--secondary:#5c7bd9;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:999px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:28px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0110 *{box-sizing:border-box}
.zp0110 a{color:inherit;text-decoration:none}
.zp0110 h1,.zp0110 h2,.zp0110 h3,.zp0110 blockquote{font-family:Copperplate, Georgia, serif;text-wrap:balance}
.zp0110 img{max-width:100%;display:block}
.zp0110 button,.zp0110 a{-webkit-tap-highlight-color:transparent}
.zp0110 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0110 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0110 .nav strong{font-family:Copperplate, Georgia, serif;font-size:18px}
.zp0110 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0110 .nav.cluster{align-items:flex-end}
.zp0110 .mobileMenu{display:none}
.zp0110 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0110 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0110 .eyebrow,.zp0110 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0110 h1{font-size:clamp(48px,8.0vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0110 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0110 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0110 .heroActions a,.zp0110 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0110 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0110 .visual,.zp0110 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0110 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0110 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:50%;right:-8%;top:-18%;transform:rotate(-12deg)}
.zp0110 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0110 .heroPhoto{object-fit:cover}
.zp0110 .carouselHero{grid-template-columns:auto 1fr 1fr}
.zp0110 .rail{display:grid;align-content:center;gap:18px;font-weight:900}
.zp0110 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0110 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0110 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0110 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0110 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0110 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0110 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0110 .serviceGrid p{color:var(--muted)}
.zp0110 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0110 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0110 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0110 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0110 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0110 .testimonial>div{align-self:end}
.zp0110 .testimonial span{display:block;opacity:.7}
.zp0110 details{border-top:1px solid var(--border);padding:20px 0}
.zp0110 details summary{font-weight:800;cursor:pointer}
.zp0110 details p{color:var(--muted);max-width:70ch}
.zp0110 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0110 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0110 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Copperplate, Georgia, serif;margin-bottom:18px}
.zp0110 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0110 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Copperplate, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0110 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0110 .contact .eyebrow{color:var(--bg)}
.zp0110 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0110 .contactMeta{display:grid;gap:10px}
.zp0110 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0110 .section:nth-of-type(even){margin:0 2vw;background:var(--surface)}
.zp0110 .heroCopy{animation:enter-109 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-109{from{opacity:0;transform:translateY(27px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0110 .hero{min-height:auto}
.zp0110 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0110 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0110 .nav nav{display:none}
.zp0110 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0110 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0110 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0110 .mobileMenu nav a{padding:10px 8px}
.zp0110 .hero,.zp0110 .carouselHero{grid-template-columns:1fr}
.zp0110 .section,.zp0110 .sectionTitle,.zp0110 .contact{grid-template-columns:1fr}
.zp0110 .testimonial{grid-template-columns:1fr}
.zp0110 .teamGrid{grid-template-columns:1fr 1fr}
.zp0110 .section{display:block}}
@media(max-width:430px){.zp0110{font-size:16px}
.zp0110 .hero,.zp0110 .section,.zp0110 .contact{padding-left:18px;padding-right:18px}
.zp0110 .serviceGrid,.zp0110 .proof,.zp0110 .teamGrid{grid-template-columns:1fr}
.zp0110 h1{font-size:clamp(42px,14vw,70px)}}

.zp0110 .heroActions a,.zp0110 .primary,.zp0110 .ctaBtn,.zp0110 .btnPrimary,.zp0110 .schedule>a,.zp0110 .newsletter>a{transition:all .2s ease}
.zp0110 .heroActions a:hover,.zp0110 .primary:hover,.zp0110 .ctaBtn:hover,.zp0110 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0110 nav a,.zp0110 .nav a,.zp0110 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0110 nav a:hover,.zp0110 .nav a:hover,.zp0110 .footer a:hover{
  color:var(--primary)
}
.zp0110 .serviceGrid article,.zp0110 .projectCard,.zp0110 .teamCard,.zp0110 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0110 .serviceGrid article:hover,.zp0110 .projectCard:hover,.zp0110 .teamCard:hover,.zp0110 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0110 *,.zp0110 *::before,.zp0110 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0110 a,.zp0110 button,.zp0110 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav cluster"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav><span>Est. 2026</span></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero carouselHero"><div className="rail"><span>01</span><span>02</span><span>03</span></div>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">09</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Full-screen Storytelling / full-bleed-chapters</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
