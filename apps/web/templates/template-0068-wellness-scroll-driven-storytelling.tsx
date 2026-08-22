import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0068-wellness-scroll-driven-storytelling", "family": "Scroll-driven Storytelling", "pages": 4, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|bento-hero|booking-led|pricing>services>comparison>proof>programmes>projects|cut-corners|product-ui", "industry": "wellness", "hero": "bento-hero", "navigation": "transparent-overlay", "layout": "booking-led"};

export default function Template0068({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Fieldwork Wellness Studio");
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
  const testimonial = "I've tried other wellness programmes. This is the first one that actually asked how my life works before suggesting changes.";
  const team = [{"name": "Lumen Lead", "role": "Principal / Lead"}, {"name": "Juniper Team", "role": "Client experience"}, {"name": "Miller & Rowe Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wellness studio / Project A", "Wellness studio / Project B", "Wellness studio / Project C", "Wellness studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Restorative care with simple booking, transparent options, and a calm experience. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#55d8ff";
  return <main className="zp0068" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0068{--bg:#07111f;--fg:#e8f0ff;--primary:#55d8ff;--primary-fg:#050505;--secondary:#8477ff;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1280px;--space:36px;background:var(--bg);color:var(--fg);font-family:Segoe UI, Arial, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0068 *{box-sizing:border-box}
.zp0068 a{color:inherit;text-decoration:none}
.zp0068 h1,.zp0068 h2,.zp0068 h3,.zp0068 blockquote{font-family:Segoe UI, Arial, sans-serif;text-wrap:balance}
.zp0068 img{max-width:100%;display:block}
.zp0068 button,.zp0068 a{-webkit-tap-highlight-color:transparent}
.zp0068 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0068 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0068 .nav strong{font-family:Segoe UI, Arial, sans-serif;font-size:18px}
.zp0068 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0068 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0068 .mobileMenu{display:none}
.zp0068 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0068 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0068 .eyebrow,.zp0068 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0068 h1{font-size:clamp(48px,6.9vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0068 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0068 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0068 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0068 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0068 .visual,.zp0068 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0068 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0068 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(0deg)}
.zp0068 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0068 .heroPhoto{object-fit:cover}
.zp0068 .bentoHero{grid-template-columns:.8fr 1.2fr}
.zp0068 .bentoHeroGrid{display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0068 .bentoHeroGrid>*{border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.zp0068 .bentoHeroGrid>*:first-child{grid-row:1/3;padding:0;overflow:hidden}
.zp0068 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0068 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0068 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0068 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0068 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0068 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0068 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0068 .serviceGrid p{color:var(--muted)}
.zp0068 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0068 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0068 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0068 details{border-top:1px solid var(--border);padding:20px 0}
.zp0068 details summary{font-weight:800;cursor:pointer}
.zp0068 details p{color:var(--muted);max-width:70ch}
.zp0068 .priceRows{border-top:1px solid var(--border)}
.zp0068 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0068 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0068 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0068 .projects article:nth-child(2){transform:translateY(32px)}
.zp0068 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0068 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0068 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0068 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0068 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0068 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0068 .contact .eyebrow{color:var(--bg)}
.zp0068 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0068 .contactMeta{display:grid;gap:10px}
.zp0068 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0068 .heroCopy{animation:enter-67 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-67{from{opacity:0;transform:translateY(25px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0068 .hero{min-height:auto}
.zp0068 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0068 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0068 .nav nav{display:none}
.zp0068 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0068 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0068 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0068 .mobileMenu nav a{padding:10px 8px}
.zp0068 .hero,.zp0068 .bentoHero{grid-template-columns:1fr}
.zp0068 .section,.zp0068 .sectionTitle,.zp0068 .contact{grid-template-columns:1fr}
.zp0068 .projects .projectGrid{grid-template-columns:1fr}
.zp0068 .projects article:nth-child(2){transform:none}
.zp0068 .section{display:block}}
@media(max-width:430px){.zp0068{font-size:16px}
.zp0068 .hero,.zp0068 .section,.zp0068 .contact{padding-left:18px;padding-right:18px}
.zp0068 .serviceGrid,.zp0068 .proof,.zp0068 .programmes>div:last-child,.zp0068 .compareGrid{grid-template-columns:1fr}
.zp0068 h1{font-size:clamp(42px,14vw,70px)}
.zp0068 .priceRows article{grid-template-columns:1fr}}

.zp0068 .heroActions a,.zp0068 .primary,.zp0068 .ctaBtn,.zp0068 .btnPrimary,.zp0068 .schedule>a,.zp0068 .newsletter>a{transition:all .2s ease}
.zp0068 .heroActions a:hover,.zp0068 .primary:hover,.zp0068 .ctaBtn:hover,.zp0068 .btnPrimary:hover{
  opacity:.8
}
.zp0068 nav a,.zp0068 .nav a,.zp0068 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0068 nav a:hover,.zp0068 .nav a:hover,.zp0068 .footer a:hover{
  color:var(--primary)
}
.zp0068 .serviceGrid article,.zp0068 .projectCard,.zp0068 .teamCard,.zp0068 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0068 .serviceGrid article:hover,.zp0068 .projectCard:hover,.zp0068 .teamCard:hover,.zp0068 .bentoCard:hover{
  transform:translateY(-2px)
}
@media(prefers-reduced-motion:reduce){.zp0068 *,.zp0068 *::before,.zp0068 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0068 a,.zp0068 button,.zp0068 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero bentoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Request a quote</a><a href="#services">Explore</a></div></div><div className="bentoHeroGrid">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">67</span><div className="visualMark"/><small>{businessName}</small></div>}<div><b>{services[0]}</b></div><div><b>{services[1]}</b></div></div></section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Request a quote</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Scroll-driven Storytelling / booking-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
