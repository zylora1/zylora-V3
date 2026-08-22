import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0412-finance-product-led-saas", "family": "Product-led SaaS", "pages": 3, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|single-column-longform|community>credentials>services>proof>hours|notched|sports-editorial", "industry": "finance", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "single-column-longform"};

export default function Template0412({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Financial Advisory");
  const headline = String(content.headline || "Clear financial decisions built around goals, risk, and the life behind the numbers.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Financial planning", "Investments", "Retirement", "Estate strategy", "Business-owner planning"];
  const industryLabel = "Financial advisory";
  const serviceNotes = ["Whole-of-market mortgage advice covering 90+ lenders, not a panel.", "Protection review included with every mortgage: life, income, and critical illness covered.", "Business lending specialists for commercial mortgages, bridging, and development finance.", "First-time buyer programme with dedicated support from application to keys.", "Annual mortgage review: we check your rate automatically and flag remortgage opportunities."];
  const proofPoints = ["FCA authorised and regulated", "Whole-of-market access", "No broker fee to clients", "95% recommend us"];
  const storyBody = "Elm Financial Advisory is presented as a real working financial advisory, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My mortgage application was complex — self-employed, irregular income, quirky property. They found a lender on the first search.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Financial advisory / Project A", "Financial advisory / Project B", "Financial advisory / Project C", "Financial advisory / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Clear financial decisions built around goals, risk, and the life behind the numbers. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0412" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0412{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0412 *{box-sizing:border-box}
.zp0412 a{color:inherit;text-decoration:none}
.zp0412 h1,.zp0412 h2,.zp0412 h3,.zp0412 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0412 img{max-width:100%;display:block}
.zp0412 button,.zp0412 a{-webkit-tap-highlight-color:transparent}
.zp0412 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0412 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0412 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0412 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0412 .mobileMenu{display:none}
.zp0412 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0412 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0412 .eyebrow,.zp0412 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0412 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0412 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0412 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0412 .heroActions a,.zp0412 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0412 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0412 .mapHero{grid-template-columns:1fr 1fr}
.zp0412 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0412 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0412 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0412 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0412 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0412 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0412 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0412 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0412 .serviceGrid p{color:var(--muted)}
.zp0412 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0412 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0412 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0412 details{border-top:1px solid var(--border);padding:20px 0}
.zp0412 details summary{font-weight:800;cursor:pointer}
.zp0412 details p{color:var(--muted);max-width:70ch}
.zp0412 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0412 .hours dl{margin:0}
.zp0412 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0412 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0412 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0412 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0412 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0412 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0412 .contact .eyebrow{color:var(--bg)}
.zp0412 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0412 .contactMeta{display:grid;gap:10px}
.zp0412 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0412 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0412 .sectionTitle{display:block}
@media(max-width:1024px){.zp0412 .hero{min-height:auto}
.zp0412 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0412 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0412 .nav nav{display:none}
.zp0412 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0412 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0412 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0412 .mobileMenu nav a{padding:10px 8px}
.zp0412 .hero,.zp0412 .mapHero{grid-template-columns:1fr}
.zp0412 .section,.zp0412 .sectionTitle,.zp0412 .hours,.zp0412 .contact{grid-template-columns:1fr}
.zp0412 .section{display:block}}
@media(max-width:430px){.zp0412{font-size:16px}
.zp0412 .hero,.zp0412 .section,.zp0412 .contact{padding-left:18px;padding-right:18px}
.zp0412 .serviceGrid,.zp0412 .proof{grid-template-columns:1fr}
.zp0412 h1{font-size:clamp(42px,14vw,70px)}}

.zp0412 .heroActions a,.zp0412 .primary,.zp0412 .ctaBtn,.zp0412 .btnPrimary,.zp0412 .schedule>a,.zp0412 .newsletter>a{transition:all .2s ease}
.zp0412 .heroActions a:hover,.zp0412 .primary:hover,.zp0412 .ctaBtn:hover,.zp0412 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0412 nav a,.zp0412 .nav a,.zp0412 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0412 nav a:hover,.zp0412 .nav a:hover,.zp0412 .footer a:hover{
  color:var(--primary)
}
.zp0412 .serviceGrid article,.zp0412 .projectCard,.zp0412 .teamCard,.zp0412 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0412 .serviceGrid article:hover,.zp0412 .projectCard:hover,.zp0412 .teamCard:hover,.zp0412 .bentoCard:hover{
  box-shadow:0 4px 14px rgba(0,0,0,.15)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0412 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0412 .sectionTitle,.zp0412 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0412 *,.zp0412 *::before,.zp0412 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0412 a,.zp0412 button,.zp0412 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Product-led SaaS / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
