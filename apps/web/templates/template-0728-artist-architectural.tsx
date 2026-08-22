import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0728-artist-architectural", "family": "Architectural", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "corner-dock|video-frame|dashboard-story|services>credentials>story>proof>security>research|micro-radius|newspaper", "industry": "artist", "hero": "video-frame", "navigation": "corner-dock", "layout": "dashboard-story"};

export default function Template0728({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Bureau Artist Studio");
  const headline = String(content.headline || "A spacious digital archive for work, exhibitions, process, and current enquiries.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Selected works", "Exhibitions", "Commissions", "Writing", "Studio visits"];
  const industryLabel = "Artist studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyQuote = "\u201cA spacious digital archive for work, exhibitions, process, and current enquiries.\u201d";
  const storyBody = "Bureau Artist Studio is presented as a real working artist studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const team = [{"name": "Atlas Lead", "role": "Principal / Lead"}, {"name": "Clove Team", "role": "Client experience"}, {"name": "Harbor Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Artist studio / Project A", "Artist studio / Project B", "Artist studio / Project C", "Artist studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A spacious digital archive for work, exhibitions, process, and current enquiries. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ffffff";
  return <main className="zp0728" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0728{--bg:#060606;--fg:#f7f7f2;--primary:#ffffff;--primary-fg:#050505;--secondary:#8d8d8d;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:4px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0728 *{box-sizing:border-box}
.zp0728 a{color:inherit;text-decoration:none}
.zp0728 h1,.zp0728 h2,.zp0728 h3,.zp0728 blockquote{font-family:Times New Roman, serif;text-wrap:balance}
.zp0728 img{max-width:100%;display:block}
.zp0728 button,.zp0728 a{-webkit-tap-highlight-color:transparent}
.zp0728 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0728 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0728 .nav strong{font-family:Times New Roman, serif;font-size:18px}
.zp0728 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0728 .mobileMenu{display:none}
.zp0728 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0728 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0728 .eyebrow,.zp0728 .sectionTitle>span,.zp0728 .storyKicker{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0728 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0728 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0728 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0728 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0728 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0728 .visual,.zp0728 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0728 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0728 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:4px;right:-8%;top:-18%;transform:rotate(12deg)}
.zp0728 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0728 .heroPhoto{object-fit:cover}
.zp0728 .videoHero{grid-template-columns:1fr 1fr}
.zp0728 .videoFrame{position:relative}
.zp0728 .videoFrame>span{position:absolute;inset:50% auto auto 50%;transform:translate(-50%,-50%);display:grid;place-items:center;width:72px;aspect-ratio:1;border-radius:50%;background:var(--fg);color:var(--bg)}
.zp0728 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0728 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0728 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0728 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0728 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0728 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0728 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0728 .serviceGrid p{color:var(--muted)}
.zp0728 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0728 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0728 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0728 .story{display:grid;grid-template-columns:.35fr 1.25fr .6fr;gap:5vw}
.zp0728 .story blockquote{font-size:clamp(36px,5.5vw,86px);line-height:.95;margin:0}
.zp0728 .story p{color:var(--muted)}
.zp0728 details{border-top:1px solid var(--border);padding:20px 0}
.zp0728 details summary{font-weight:800;cursor:pointer}
.zp0728 details p{color:var(--muted);max-width:70ch}
.zp0728 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0728 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0728 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0728 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0728 .security{display:grid;grid-template-columns:1fr 1fr;gap:5vw}
.zp0728 .security li{padding:14px 0;border-bottom:1px solid var(--border)}
.zp0728 .researchRows{max-width:900px;margin-left:auto}
.zp0728 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0728 .contact .eyebrow{color:var(--bg)}
.zp0728 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0728 .contactMeta{display:grid;gap:10px}
.zp0728 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0728 .heroCopy{animation:enter-727 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-727{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0728 .hero{min-height:auto}
.zp0728 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0728 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0728 .nav nav{display:none}
.zp0728 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0728 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0728 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0728 .mobileMenu nav a{padding:10px 8px}
.zp0728 .hero,.zp0728 .videoHero{grid-template-columns:1fr}
.zp0728 .section,.zp0728 .sectionTitle,.zp0728 .story,.zp0728 .security,.zp0728 .contact{grid-template-columns:1fr}
.zp0728 .section{display:block}}
@media(max-width:430px){.zp0728{font-size:16px}
.zp0728 .hero,.zp0728 .section,.zp0728 .contact{padding-left:18px;padding-right:18px}
.zp0728 .serviceGrid,.zp0728 .proof{grid-template-columns:1fr}
.zp0728 h1{font-size:clamp(42px,14vw,70px)}}

.zp0728 .heroActions a,.zp0728 .primary,.zp0728 .ctaBtn,.zp0728 .btnPrimary,.zp0728 .schedule>a,.zp0728 .newsletter>a{transition:all .2s ease}
.zp0728 .heroActions a:hover,.zp0728 .primary:hover,.zp0728 .ctaBtn:hover,.zp0728 .btnPrimary:hover{
  opacity:.8;letter-spacing:.06em
}
.zp0728 nav a,.zp0728 .nav a,.zp0728 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0728 nav a:hover,.zp0728 .nav a:hover,.zp0728 .footer a:hover{
  opacity:.7
}
.zp0728 .serviceGrid article,.zp0728 .projectCard,.zp0728 .teamCard,.zp0728 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0728 .serviceGrid article:hover,.zp0728 .projectCard:hover,.zp0728 .teamCard:hover,.zp0728 .bentoCard:hover{
  transform:translateY(-3px)
}
@media(prefers-reduced-motion:reduce){.zp0728 *,.zp0728 *::before,.zp0728 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0728 a,.zp0728 button,.zp0728 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav dock"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero videoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Start free</a><a href="#services">Explore</a></div></div><div className="videoFrame">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">27</span><div className="visualMark"/><small>{businessName}</small></div>}<span>▶</span></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section story"><div className="storyKicker">Our point of view</div><blockquote>{storyQuote}</blockquote><p>{storyBody}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section security"><div><span>Trust</span><h2>Clear practices, sensible controls.</h2></div><ul><li>Secure contact handling</li><li>Clear privacy expectations</li><li>Accessible interfaces</li></ul></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Start free</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Architectural / dashboard-story</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
