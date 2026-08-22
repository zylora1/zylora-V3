import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0285-travel-paper-texture", "family": "Paper Texture", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|split-scroll|services>materials>location>manifesto>proof>comparison>timeline|hard-outline|humanist-classic", "industry": "travel", "hero": "floating-panels", "navigation": "compact-floating", "layout": "split-scroll"};

export default function Template0285({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Travel Studio");
  const headline = String(content.headline || "Trips designed around how you actually want to spend your days.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Tailored itineraries", "Honeymoons", "Family travel", "Group journeys", "Concierge support"];
  const industryLabel = "Travel studio";
  const serviceNotes = ["Curated itineraries designed by specialists who've made every journey themselves.", "Small-group tours: maximum 12 people, so guides can respond to the group.", "Solo traveller programme with built-in social moments and private space.", "Flexibility built into every trip — optional activities, not mandatory schedules.", "24h in-destination support from someone who knows the location, not a call centre."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["ATOL protected", "Average group: 8 travellers", "5-star guide rating average", "Carbon offset included"];
  const testimonial = "I've done package holidays and I've done this. There's no comparison — every day had something that felt genuinely discovered.";
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Travel studio / Project A", "Travel studio / Project B", "Travel studio / Project C", "Travel studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Trips designed around how you actually want to spend your days. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  return <main className="zp0285" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0285{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0285 *{box-sizing:border-box}
.zp0285 a{color:inherit;text-decoration:none}
.zp0285 h1,.zp0285 h2,.zp0285 h3,.zp0285 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0285 img{max-width:100%;display:block}
.zp0285 button,.zp0285 a{-webkit-tap-highlight-color:transparent}
.zp0285 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0285 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0285 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0285 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0285 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0285 .mobileMenu{display:none}
.zp0285 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0285 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0285 .eyebrow,.zp0285 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0285 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0285 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0285 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0285 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0285 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0285 .visual,.zp0285 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0285 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0285 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0285 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0285 .heroPhoto{object-fit:cover}
.zp0285 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0285 .floatStack{position:relative;min-height:500px}
.zp0285 .floatStack>*{position:absolute}
.zp0285 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0285 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0285 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0285 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0285 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0285 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0285 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0285 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0285 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0285 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0285 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0285 .serviceGrid p{color:var(--muted)}
.zp0285 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0285 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0285 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0285 details{border-top:1px solid var(--border);padding:20px 0}
.zp0285 details summary{font-weight:800;cursor:pointer}
.zp0285 details p{color:var(--muted);max-width:70ch}
.zp0285 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0285 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0285 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0285 .materials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0285 .materials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0285 .materials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0285 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0285 .timeline article{padding:20px 0}
.zp0285 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Baskerville, Georgia, serif;letter-spacing:-.04em;max-width:17ch}
.zp0285 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0285 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0285 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0285 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0285 .contact .eyebrow{color:var(--bg)}
.zp0285 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0285 .contactMeta{display:grid;gap:10px}
.zp0285 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0285{background-image:repeating-linear-gradient(0deg,transparent 0 28px,color-mix(in srgb,var(--fg) 4%,transparent) 29px 30px)}
.zp0285 .section:nth-of-type(3n){transform:rotate(0.35deg)}
.zp0285 .heroCopy{animation:enter-284 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-284{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0285 .hero{min-height:auto}
.zp0285 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0285 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0285 .nav nav{display:none}
.zp0285 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0285 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0285 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0285 .mobileMenu nav a{padding:10px 8px}
.zp0285 .hero,.zp0285 .floatingHero{grid-template-columns:1fr}
.zp0285 .section,.zp0285 .sectionTitle,.zp0285 .location,.zp0285 .contact{grid-template-columns:1fr}
.zp0285 .section{display:block}}
@media(max-width:430px){.zp0285{font-size:16px}
.zp0285 .hero,.zp0285 .section,.zp0285 .contact{padding-left:18px;padding-right:18px}
.zp0285 .serviceGrid,.zp0285 .proof,.zp0285 .compareGrid{grid-template-columns:1fr}
.zp0285 h1{font-size:clamp(42px,14vw,70px)}}

.zp0285 .heroActions a,.zp0285 .primary,.zp0285 .ctaBtn,.zp0285 .btnPrimary,.zp0285 .schedule>a,.zp0285 .newsletter>a{transition:all .2s ease}
.zp0285 .heroActions a:hover,.zp0285 .primary:hover,.zp0285 .ctaBtn:hover,.zp0285 .btnPrimary:hover{
  opacity:.8
}
.zp0285 nav a,.zp0285 .nav a,.zp0285 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0285 nav a:hover,.zp0285 .nav a:hover,.zp0285 .footer a:hover{
  color:var(--primary)
}
.zp0285 .serviceGrid article,.zp0285 .projectCard,.zp0285 .teamCard,.zp0285 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0285 .serviceGrid article:hover,.zp0285 .projectCard:hover,.zp0285 .teamCard:hover,.zp0285 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0285 *,.zp0285 *::before,.zp0285 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0285 a,.zp0285 button,.zp0285 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Shop the collection</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">84</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section materials"><span>Materials / methods</span><div>{services.slice(0,4).map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Shop the collection</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Paper Texture / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
