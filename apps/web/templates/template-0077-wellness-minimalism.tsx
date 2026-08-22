import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0077-wellness-minimalism", "family": "Minimalism", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|side-caption|schedule-led|newsletter>features>awards>story>proof>services|hard-outline|condensed-editorial", "industry": "wellness", "hero": "side-caption", "navigation": "compact-floating", "layout": "schedule-led"};

export default function Template0077({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Civic Wellness Studio");
  const headline = String(content.headline || "Restorative care with simple booking, transparent options, and a calm experience.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Massage therapy", "Recovery sessions", "Nutrition consults", "Breathwork", "Wellness memberships"];
  const industryLabel = "Wellness studio";
  const serviceNotes = ["Personalised programmes that fit around your work, sleep and lifestyle patterns.", "Evidence-informed practice — we explain the science behind every recommendation.", "Mind-body integration sessions that address stress, movement, and recovery together.", "Nutritional guidance grounded in practical, sustainable food choices.", "Group and one-to-one formats to match your preference for accountability."];
  const proofPoints = ["Certified practitioners", "Online and in-person", "Programme tracking included", "Community support group"];
  const storyQuote = "\u201cRestorative care with simple booking, transparent options, and a calm experience.\u201d";
  const storyBody = "Civic Wellness Studio is presented as a real working wellness studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I've tried other wellness programmes. This is the first one that actually asked how my life works before suggesting changes.";
  const team = [{"name": "Kite Lead", "role": "Principal / Lead"}, {"name": "Pavilion Team", "role": "Client experience"}, {"name": "Bureau Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wellness studio / Project A", "Wellness studio / Project B", "Wellness studio / Project C", "Wellness studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Restorative care with simple booking, transparent options, and a calm experience. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#f06d3b";
  return <main className="zp0077" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0077{--bg:#fff8ef;--fg:#2e251f;--primary:#f06d3b;--primary-fg:#050505;--secondary:#e1b355;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:none;--max:1200px;--space:24px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0077 *{box-sizing:border-box}
.zp0077 a{color:inherit;text-decoration:none}
.zp0077 h1,.zp0077 h2,.zp0077 h3,.zp0077 blockquote{font-family:Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0077 img{max-width:100%;display:block}
.zp0077 button,.zp0077 a{-webkit-tap-highlight-color:transparent}
.zp0077 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0077 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0077 .nav strong{font-family:Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0077 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0077 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0077 .mobileMenu{display:none}
.zp0077 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0077 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0077 .eyebrow,.zp0077 .sectionTitle>span,.zp0077 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0077 h1{font-size:clamp(48px,6.35vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0077 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0077 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0077 .heroActions a,.zp0077 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0077 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0077 .visual,.zp0077 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0077 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0077 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0077 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0077 .heroPhoto{object-fit:cover}
.zp0077 .captionHero{grid-template-columns:1.15fr .85fr}
.zp0077 .captionHero{grid-template-columns:.18fr .82fr 1fr}
.zp0077 .captionHero aside{display:flex;justify-content:space-between;writing-mode:vertical-rl;transform:rotate(180deg)}
.zp0077 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0077 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0077 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0077 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0077 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0077 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0077 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0077 .serviceGrid p{color:var(--muted)}
.zp0077 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0077 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0077 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0077 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0077 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0077 .story p{color:var(--muted)}
.zp0077 details{border-top:1px solid var(--border);padding:20px 0}
.zp0077 details summary{font-weight:800;cursor:pointer}
.zp0077 details p{color:var(--muted);max-width:70ch}
.zp0077 .features{display:grid;grid-template-columns:1.2fr .8fr;gap:5vw}
.zp0077 .features ul{list-style:none;margin:0;padding:0}
.zp0077 .features li{padding:18px 0;border-bottom:1px solid var(--border)}
.zp0077 .featureStatement h2{font-size:clamp(42px,6vw,90px);line-height:.92}
.zp0077 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0077 .awards>div{max-width:800px;margin-left:auto}
.zp0077 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0077 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0077 .contact .eyebrow{color:var(--bg)}
.zp0077 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0077 .contactMeta{display:grid;gap:10px}
.zp0077 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0077 .heroCopy{animation:enter-76 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-76{from{opacity:0;transform:translateY(34px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0077 .hero{min-height:auto}
.zp0077 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0077 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0077 .nav nav{display:none}
.zp0077 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0077 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0077 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0077 .mobileMenu nav a{padding:10px 8px}
.zp0077 .hero,.zp0077 .captionHero{grid-template-columns:1fr}
.zp0077 .section,.zp0077 .sectionTitle,.zp0077 .story,.zp0077 .features,.zp0077 .contact{grid-template-columns:1fr}
.zp0077 .section{display:block}}
@media(max-width:430px){.zp0077{font-size:16px}
.zp0077 .hero,.zp0077 .section,.zp0077 .contact{padding-left:18px;padding-right:18px}
.zp0077 .serviceGrid,.zp0077 .proof{grid-template-columns:1fr}
.zp0077 h1{font-size:clamp(42px,14vw,70px)}}

.zp0077 .heroActions a,.zp0077 .primary,.zp0077 .ctaBtn,.zp0077 .btnPrimary,.zp0077 .schedule>a,.zp0077 .newsletter>a{transition:all .2s ease}
.zp0077 .heroActions a:hover,.zp0077 .primary:hover,.zp0077 .ctaBtn:hover,.zp0077 .btnPrimary:hover{
  opacity:.75
}
.zp0077 nav a,.zp0077 .nav a,.zp0077 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0077 nav a:hover,.zp0077 .nav a:hover,.zp0077 .footer a:hover{
  opacity:.6
}
.zp0077 .serviceGrid article,.zp0077 .projectCard,.zp0077 .teamCard,.zp0077 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0077 .serviceGrid article:hover,.zp0077 .projectCard:hover,.zp0077 .teamCard:hover,.zp0077 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0077 *,.zp0077 *::before,.zp0077 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0077 a,.zp0077 button,.zp0077 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero captionHero"><aside><span>{industryLabel}</span><span>Independent</span></aside>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">76</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section features"><div className="featureStatement"><span>Built around</span><h2>{proofPoints[0]}</h2></div><ul>{proofPoints.map(x=><li key={x}>{x}</li>)}</ul></section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Minimalism / schedule-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
