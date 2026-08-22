import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0237-bakery-japanese-minimalism", "family": "Japanese Minimalism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|side-caption|architectural-grid|services>features>timeline>hours>team>proof>community|hard-outline|humanist-classic", "industry": "bakery", "hero": "side-caption", "navigation": "compact-floating", "layout": "architectural-grid"};

export default function Template0237({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Civic Bakery");
  const headline = String(content.headline || "Slow-fermented bread and seasonal pastry made fresh every morning.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Sourdough", "Viennoiserie", "Celebration cakes", "Wholesale", "Pre-orders"];
  const industryLabel = "Bakery";
  const serviceNotes = ["Everything made from scratch the same morning using traditional techniques.", "Sourdough fermented 24–48 hours for depth of flavour and digestibility.", "Custom celebration cakes with a consultation, tasting session, and design approval.", "Weekly subscription boxes: loaf, pastry, and seasonal jam delivered Friday.", "Wholesale supply to local restaurants and cafes — enquire for terms."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Fully licensed bakery", "No preservatives or additives", "Allergen-aware production", "Custom orders accepted"];
  const storyBody = "Civic Bakery is presented as a real working bakery, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "Their Saturday sourdough sells out by 9am. Worth setting an alarm — I haven't bought supermarket bread in two years.";
  const team = [{"name": "Kite Lead", "role": "Principal / Lead"}, {"name": "Pavilion Team", "role": "Client experience"}, {"name": "Bureau Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Bakery / Project A", "Bakery / Project B", "Bakery / Project C", "Bakery / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Slow-fermented bread and seasonal pastry made fresh every morning. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f06d3b";
  return <main className="zp0237" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0237{--bg:#fff8ef;--fg:#2e251f;--primary:#f06d3b;--primary-fg:#050505;--secondary:#e1b355;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:none;--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0237 *{box-sizing:border-box}
.zp0237 a{color:inherit;text-decoration:none}
.zp0237 h1,.zp0237 h2,.zp0237 h3,.zp0237 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0237 img{max-width:100%;display:block}
.zp0237 button,.zp0237 a{-webkit-tap-highlight-color:transparent}
.zp0237 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0237 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0237 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0237 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0237 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0237 .mobileMenu{display:none}
.zp0237 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0237 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0237 .eyebrow,.zp0237 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0237 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0237 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0237 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0237 .heroActions a,.zp0237 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0237 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0237 .visual,.zp0237 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0237 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0237 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(-8deg)}
.zp0237 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0237 .heroPhoto{object-fit:cover}
.zp0237 .captionHero{grid-template-columns:1.15fr .85fr}
.zp0237 .captionHero{grid-template-columns:.18fr .82fr 1fr}
.zp0237 .captionHero aside{display:flex;justify-content:space-between;writing-mode:vertical-rl;transform:rotate(180deg)}
.zp0237 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0237 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0237 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0237 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0237 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0237 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0237 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0237 .serviceGrid p{color:var(--muted)}
.zp0237 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0237 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0237 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0237 details{border-top:1px solid var(--border);padding:20px 0}
.zp0237 details summary{font-weight:800;cursor:pointer}
.zp0237 details p{color:var(--muted);max-width:70ch}
.zp0237 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0237 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0237 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Baskerville, Georgia, serif;margin-bottom:18px}
.zp0237 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0237 .hours dl{margin:0}
.zp0237 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0237 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0237 .features ul{list-style:none;margin:0;padding:0}
.zp0237 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0237 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0237 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0237 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0237 .timeline article{padding:20px 0}
.zp0237 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0237 .contact .eyebrow{color:var(--bg)}
.zp0237 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0237 .contactMeta{display:grid;gap:10px}
.zp0237 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0237 .section{padding-top:clamp(90px,12vw,180px);padding-bottom:clamp(90px,12vw,180px)}
.zp0237 .sectionTitle h2{font-weight:400}
.zp0237 .heroCopy{animation:enter-236 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-236{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0237 .hero{min-height:auto}
.zp0237 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0237 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0237 .nav nav{display:none}
.zp0237 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0237 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0237 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0237 .mobileMenu nav a{padding:10px 8px}
.zp0237 .hero,.zp0237 .captionHero{grid-template-columns:1fr}
.zp0237 .section,.zp0237 .sectionTitle,.zp0237 .hours,.zp0237 .features,.zp0237 .contact{grid-template-columns:1fr}
.zp0237 .teamGrid{grid-template-columns:1fr 1fr}
.zp0237 .section{display:block}}
@media(max-width:430px){.zp0237{font-size:16px}
.zp0237 .hero,.zp0237 .section,.zp0237 .contact{padding-left:18px;padding-right:18px}
.zp0237 .serviceGrid,.zp0237 .proof,.zp0237 .teamGrid{grid-template-columns:1fr}
.zp0237 h1{font-size:clamp(42px,14vw,70px)}}

.zp0237 .heroActions a,.zp0237 .primary,.zp0237 .ctaBtn,.zp0237 .btnPrimary,.zp0237 .schedule>a,.zp0237 .newsletter>a{transition:all .2s ease}
.zp0237 .heroActions a:hover,.zp0237 .primary:hover,.zp0237 .ctaBtn:hover,.zp0237 .btnPrimary:hover{
  opacity:.75
}
.zp0237 nav a,.zp0237 .nav a,.zp0237 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0237 nav a:hover,.zp0237 .nav a:hover,.zp0237 .footer a:hover{
  opacity:.6
}
.zp0237 .serviceGrid article,.zp0237 .projectCard,.zp0237 .teamCard,.zp0237 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0237 .serviceGrid article:hover,.zp0237 .projectCard:hover,.zp0237 .teamCard:hover,.zp0237 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0237 *,.zp0237 *::before,.zp0237 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0237 a,.zp0237 button,.zp0237 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero captionHero"><aside><span>{industryLabel}</span><span>Independent</span></aside>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">36</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Japanese Minimalism / architectural-grid</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
