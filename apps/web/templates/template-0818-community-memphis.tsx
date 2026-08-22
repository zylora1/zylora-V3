import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0818-community-memphis", "family": "Memphis", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "tabbed|gallery-wall|menu-led|values>team>proof>hours>services>testimonial|borderless|modernist-duo", "industry": "community", "hero": "gallery-wall", "navigation": "tabbed", "layout": "menu-led"};

export default function Template0818({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Signal Community Organization");
  const headline = String(content.headline || "A welcoming hub for people, events, shared resources, and practical participation.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Events", "Membership", "Directory", "Resources", "Volunteer"];
  const industryLabel = "Community organization";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const testimonialName = "Foxglove client";
  const team = [{"name": "Studio Nine Lead", "role": "Principal / Lead"}, {"name": "Foundry Team", "role": "Client experience"}, {"name": "Rook Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Community organization / Project A", "Community organization / Project B", "Community organization / Project C", "Community organization / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A welcoming hub for people, events, shared resources, and practical participation. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d04d33";
  return <main className="zp0818" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0818{--bg:#fdf2e9;--fg:#3a241e;--primary:#d04d33;--primary-fg:#050505;--secondary:#c99a54;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:28px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0818 *{box-sizing:border-box}
.zp0818 a{color:inherit;text-decoration:none}
.zp0818 h1,.zp0818 h2,.zp0818 h3,.zp0818 blockquote{font-family:Futura, Avenir, Arial, sans-serif;text-wrap:balance}
.zp0818 img{max-width:100%;display:block}
.zp0818 button,.zp0818 a{-webkit-tap-highlight-color:transparent}
.zp0818 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0818 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0818 .nav strong{font-family:Futura, Avenir, Arial, sans-serif;font-size:18px}
.zp0818 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0818 .mobileMenu{display:none}
.zp0818 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0818 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0818 .eyebrow,.zp0818 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0818 h1{font-size:clamp(48px,6.9vw,110px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0818 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0818 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0818 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0818 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0818 .wallHero{grid-template-columns:1fr 1fr}
.zp0818 .wall{display:grid;grid-template-columns:1fr 1fr;gap:8px;transform:rotate(-3deg)}
.zp0818 .wall div{min-height:180px;background:color-mix(in srgb,var(--primary) 30%,var(--surface))}
.zp0818 .wall div:nth-child(2n){background:color-mix(in srgb,var(--secondary) 30%,var(--surface))}
.zp0818 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0818 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0818 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0818 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0818 .serviceGrid article{min-height:194px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0818 .serviceGrid article:nth-child(3){background:var(--primary);color:var(--primary-fg)}
.zp0818 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0818 .serviceGrid p{color:var(--muted)}
.zp0818 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0818 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0818 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0818 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0818 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0818 .testimonial>div{align-self:end}
.zp0818 .testimonial span{display:block;opacity:.7}
.zp0818 details{border-top:1px solid var(--border);padding:20px 0}
.zp0818 details summary{font-weight:800;cursor:pointer}
.zp0818 details p{color:var(--muted);max-width:70ch}
.zp0818 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0818 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0818 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Futura, Avenir, Arial, sans-serif;margin-bottom:18px}
.zp0818 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0818 .hours dl{margin:0}
.zp0818 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0818 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Futura, Avenir, Arial, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0818 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0818 .contact .eyebrow{color:var(--bg)}
.zp0818 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0818 .contactMeta{display:grid;gap:10px}
.zp0818 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0818 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(-3deg)}
@media(max-width:1024px){.zp0818 .hero{min-height:auto}
.zp0818 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0818 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0818 .nav nav{display:none}
.zp0818 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0818 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0818 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0818 .mobileMenu nav a{padding:10px 8px}
.zp0818 .hero,.zp0818 .wallHero{grid-template-columns:1fr}
.zp0818 .section,.zp0818 .sectionTitle,.zp0818 .hours,.zp0818 .contact{grid-template-columns:1fr}
.zp0818 .testimonial{grid-template-columns:1fr}
.zp0818 .teamGrid{grid-template-columns:1fr 1fr}
.zp0818 .section{display:block}}
@media(max-width:430px){.zp0818{font-size:16px}
.zp0818 .hero,.zp0818 .section,.zp0818 .contact{padding-left:18px;padding-right:18px}
.zp0818 .serviceGrid,.zp0818 .proof,.zp0818 .teamGrid{grid-template-columns:1fr}
.zp0818 h1{font-size:clamp(42px,14vw,70px)}}

.zp0818 .heroActions a,.zp0818 .primary,.zp0818 .ctaBtn,.zp0818 .btnPrimary,.zp0818 .schedule>a,.zp0818 .newsletter>a{transition:all .2s ease}
.zp0818 .heroActions a:hover,.zp0818 .primary:hover,.zp0818 .ctaBtn:hover,.zp0818 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:rotate(1deg)
}
.zp0818 nav a,.zp0818 .nav a,.zp0818 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0818 nav a:hover,.zp0818 .nav a:hover,.zp0818 .footer a:hover{
  color:var(--primary)
}
.zp0818 .serviceGrid article,.zp0818 .projectCard,.zp0818 .teamCard,.zp0818 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0818 .serviceGrid article:hover,.zp0818 .projectCard:hover,.zp0818 .teamCard:hover,.zp0818 .bentoCard:hover{
  transform:rotate(-1deg) scale(1.02)
}
@keyframes zpEnter{0%{opacity:0;transform:scale(.88)}70%{transform:scale(1.04)}100%{opacity:1;transform:scale(1)}}
.zp0818 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0818 .sectionTitle,.zp0818 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0818 *,.zp0818 *::before,.zp0818 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0818 a,.zp0818 button,.zp0818 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav tabs"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero wallHero"><div className="wall"><div/><div/><div/><div/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Memphis / menu-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
