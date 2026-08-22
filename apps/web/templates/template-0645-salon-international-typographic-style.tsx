import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0645-salon-international-typographic-style", "family": "International Typographic Style", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|split-scroll|programmes>proof>hours>services>credentials>story>manifesto|ticket-edge|humanist-classic", "industry": "salon", "hero": "testimonial-led", "navigation": "lower-third", "layout": "split-scroll"};

export default function Template0645({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Hair Salon");
  const headline = String(content.headline || "Great hair built on consultation, craft, and a style that works after you leave.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Cuts", "Colour", "Texture services", "Treatments", "Bridal styling"];
  const industryLabel = "Hair salon";
  const serviceNotes = ["Colour consultation at every appointment — formulation adjusted for condition and light.", "Bond builder and toning treatments included in all colour services, not an add-on.", "Olaplex, K18, and Kerasilk treatments available across the service menu.", "Evening appointments available Tuesday through Thursday for working clients.", "Bridal service: trial, wedding day, and preparation pack with hair care advice."];
  const proofPoints = ["HABIA qualified stylists", "Aveda flagship partner", "Bridal specialists available", "Same-day appointments most weeks"];
  const storyQuote = "\u201cGreat hair built on consultation, craft, and a style that works after you leave.\u201d";
  const storyBody = "Aster Hair Salon is presented as a real working hair salon, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My colour has never lasted this well. They adjusted the formula from my last visit based on how it had grown — nobody has ever done that.";
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Hair salon / Project A", "Hair salon / Project B", "Hair salon / Project C", "Hair salon / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Great hair built on consultation, craft, and a style that works after you leave. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  return <main className="zp0645" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0645{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0645 *{box-sizing:border-box}
.zp0645 a{color:inherit;text-decoration:none}
.zp0645 h1,.zp0645 h2,.zp0645 h3,.zp0645 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0645 img{max-width:100%;display:block}
.zp0645 button,.zp0645 a{-webkit-tap-highlight-color:transparent}
.zp0645 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0645 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0645 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0645 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0645 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0645 .mobileMenu{display:none}
.zp0645 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0645 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0645 .eyebrow,.zp0645 .sectionTitle>span,.zp0645 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0645 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0645 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0645 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0645 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0645 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0645 .quoteHero{grid-template-columns:1fr 1fr}
.zp0645 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0645 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0645 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0645 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0645 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0645 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0645 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0645 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0645 .serviceGrid p{color:var(--muted)}
.zp0645 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0645 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0645 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0645 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0645 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0645 .story p{color:var(--muted)}
.zp0645 details{border-top:1px solid var(--border);padding:20px 0}
.zp0645 details summary{font-weight:800;cursor:pointer}
.zp0645 details p{color:var(--muted);max-width:70ch}
.zp0645 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0645 .hours dl{margin:0}
.zp0645 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0645 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0645 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0645 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0645 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Baskerville, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0645 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0645 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0645 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0645 .contact .eyebrow{color:var(--bg)}
.zp0645 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0645 .contactMeta{display:grid;gap:10px}
.zp0645 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0645 .heroCopy{animation:enter-644 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-644{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0645 .hero{min-height:auto}
.zp0645 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0645 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0645 .nav nav{display:none}
.zp0645 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0645 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0645 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0645 .mobileMenu nav a{padding:10px 8px}
.zp0645 .hero,.zp0645 .quoteHero{grid-template-columns:1fr}
.zp0645 .section,.zp0645 .sectionTitle,.zp0645 .story,.zp0645 .hours,.zp0645 .contact{grid-template-columns:1fr}
.zp0645 .section{display:block}}
@media(max-width:430px){.zp0645{font-size:16px}
.zp0645 .hero,.zp0645 .section,.zp0645 .contact{padding-left:18px;padding-right:18px}
.zp0645 .serviceGrid,.zp0645 .proof,.zp0645 .programmes>div:last-child{grid-template-columns:1fr}
.zp0645 h1{font-size:clamp(42px,14vw,70px)}}

.zp0645 .heroActions a,.zp0645 .primary,.zp0645 .ctaBtn,.zp0645 .btnPrimary,.zp0645 .schedule>a,.zp0645 .newsletter>a{transition:all .2s ease}
.zp0645 .heroActions a:hover,.zp0645 .primary:hover,.zp0645 .ctaBtn:hover,.zp0645 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0645 nav a,.zp0645 .nav a,.zp0645 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0645 nav a:hover,.zp0645 .nav a:hover,.zp0645 .footer a:hover{
  text-decoration:underline
}
.zp0645 .serviceGrid article,.zp0645 .projectCard,.zp0645 .teamCard,.zp0645 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0645 .serviceGrid article:hover,.zp0645 .projectCard:hover,.zp0645 .teamCard:hover,.zp0645 .bentoCard:hover{
  outline:2px solid var(--fg)
}
@media(prefers-reduced-motion:reduce){.zp0645 *,.zp0645 *::before,.zp0645 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0645 a,.zp0645 button,.zp0645 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Book an appointment</a><a href="#services">Explore</a></div></div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Book an appointment</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>International Typographic Style / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
