import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0069-wellness-postmodern", "family": "Postmodern", "pages": 1, "qualityTier": "premium", "standalone": true, "composition": "lower-third|testimonial-led|split-scroll|research>services>proof>team>products>metrics>gallery|ticket-edge|humanist-classic", "industry": "wellness", "hero": "testimonial-led", "navigation": "lower-third", "layout": "split-scroll"};

export default function Template0069({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Aster Wellness Studio");
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
  const team = [{"name": "Common Lead", "role": "Principal / Lead"}, {"name": "Stillwater Team", "role": "Client experience"}, {"name": "Kite Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Wellness studio / Project A", "Wellness studio / Project B", "Wellness studio / Project C", "Wellness studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Restorative care with simple booking, transparent options, and a calm experience. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00a88f";
  return <main className="zp0069" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0069{--bg:#f6f6f0;--fg:#1f2a2e;--primary:#00a88f;--primary-fg:#050505;--secondary:#f3a642;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:8px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1360px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0069 *{box-sizing:border-box}
.zp0069 a{color:inherit;text-decoration:none}
.zp0069 h1,.zp0069 h2,.zp0069 h3,.zp0069 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0069 img{max-width:100%;display:block}
.zp0069 button,.zp0069 a{-webkit-tap-highlight-color:transparent}
.zp0069 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0069 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0069 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0069 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0069 .nav.lower{position:absolute;top:auto;bottom:0;width:100%;border-top:var(--line) solid var(--border)}
.zp0069 .mobileMenu{display:none}
.zp0069 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0069 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0069 .eyebrow,.zp0069 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0069 h1{font-size:clamp(48px,7.45vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0069 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0069 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0069 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0069 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0069 .quoteHero{grid-template-columns:1fr 1fr}
.zp0069 .quoteHero blockquote{font-size:clamp(36px,5vw,76px);line-height:.98;margin:0}
.zp0069 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0069 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0069 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0069 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0069 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0069 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0069 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0069 .serviceGrid p{color:var(--muted)}
.zp0069 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0069 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0069 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0069 details{border-top:1px solid var(--border);padding:20px 0}
.zp0069 details summary{font-weight:800;cursor:pointer}
.zp0069 details p{color:var(--muted);max-width:70ch}
.zp0069 .galleryGrid{display:grid;grid-template-columns:1.4fr .7fr .7fr;grid-template-rows:1fr 1fr;gap:10px}
.zp0069 .galleryGrid>*{min-height:190px;overflow:hidden;border-radius:var(--radius)}
.zp0069 .galleryGrid>*:first-child{grid-row:1/3}
.zp0069 .galleryGrid img{width:100%;height:100%;object-fit:cover}
.zp0069 .galleryFallback{background:linear-gradient(135deg,var(--surface),color-mix(in srgb,var(--primary) 30%,var(--surface)));display:flex;align-items:flex-end;padding:18px}
.zp0069 .g2,.zp0069 .g4{background:linear-gradient(45deg,var(--surface),color-mix(in srgb,var(--secondary) 32%,var(--surface)))}
.zp0069 .teamGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.zp0069 .teamGrid article{border-top:1px solid var(--border);padding-top:18px}
.zp0069 .avatar{width:100%;aspect-ratio:1.25;background:color-mix(in srgb,var(--primary) 22%,var(--surface));display:grid;place-items:center;font:800 64px/1 Baskerville, Georgia, serif;margin-bottom:18px}
.zp0069 .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--border);padding:1px}
.zp0069 .metrics div{background:var(--bg);padding:30px}
.zp0069 .metrics strong{display:block;font:700 clamp(42px,6vw,80px)/1 Baskerville, Georgia, serif;color:var(--fg)}
.zp0069 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0069 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0069 .p1,.zp0069 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0069 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0069 .researchRows{max-width:900px;margin-left:auto}
.zp0069 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0069 .contact .eyebrow{color:var(--bg)}
.zp0069 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0069 .contactMeta{display:grid;gap:10px}
.zp0069 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0069 .heroCopy{animation:enter-68 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-68{from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0069 .hero{min-height:auto}
.zp0069 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0069 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0069 .nav nav{display:none}
.zp0069 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0069 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0069 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0069 .mobileMenu nav a{padding:10px 8px}
.zp0069 .hero,.zp0069 .quoteHero{grid-template-columns:1fr}
.zp0069 .section,.zp0069 .sectionTitle,.zp0069 .contact{grid-template-columns:1fr}
.zp0069 .galleryGrid{grid-template-columns:1fr 1fr;grid-template-rows:auto}
.zp0069 .galleryGrid>*:first-child{grid-row:auto;grid-column:1/-1}
.zp0069 .teamGrid{grid-template-columns:1fr 1fr}
.zp0069 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0069 .metrics{grid-template-columns:1fr 1fr}
.zp0069 .section{display:block}}
@media(max-width:430px){.zp0069{font-size:16px}
.zp0069 .hero,.zp0069 .section,.zp0069 .contact{padding-left:18px;padding-right:18px}
.zp0069 .serviceGrid,.zp0069 .proof,.zp0069 .teamGrid,.zp0069 .collectionGrid,.zp0069 .metrics{grid-template-columns:1fr}
.zp0069 h1{font-size:clamp(42px,14vw,70px)}
.zp0069 .galleryGrid{grid-template-columns:1fr}
.zp0069 .galleryGrid>*:first-child{grid-column:auto}}

.zp0069 .heroActions a,.zp0069 .primary,.zp0069 .ctaBtn,.zp0069 .btnPrimary,.zp0069 .schedule>a,.zp0069 .newsletter>a{transition:all .2s ease}
.zp0069 .heroActions a:hover,.zp0069 .primary:hover,.zp0069 .ctaBtn:hover,.zp0069 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg)
}
.zp0069 nav a,.zp0069 .nav a,.zp0069 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0069 nav a:hover,.zp0069 .nav a:hover,.zp0069 .footer a:hover{
  color:var(--primary)
}
.zp0069 .serviceGrid article,.zp0069 .projectCard,.zp0069 .teamCard,.zp0069 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0069 .serviceGrid article:hover,.zp0069 .projectCard:hover,.zp0069 .teamCard:hover,.zp0069 .bentoCard:hover{
  transform:rotate(-1deg)
}
@media(prefers-reduced-motion:reduce){.zp0069 *,.zp0069 *::before,.zp0069 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0069 a,.zp0069 button,.zp0069 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav lower"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero quoteHero"><blockquote>“Clear, thoughtful, and easy to work with.”</blockquote><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Apply now</a><a href="#services">Explore</a></div></div></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section team"><div className="sectionTitle"><span>People</span><h2>Experienced people, visible responsibilities.</h2></div><div className="teamGrid">{team.map((x,i)=><article key={x.name}><div className="avatar">{x.name.slice(0,1)}</div><h3>{x.name}</h3><p>{x.role}</p></article>)}</div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section metrics">{metrics.map((x,i)=><div key={x[1]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</section>
    <section className="section gallery"><div className="galleryHead"><span>Gallery</span><strong>Selected moments / work / spaces</strong></div><div className="galleryGrid">{galleryImages.length?galleryImages.slice(0,5).map((src,i)=><figure key={src}><img src={src} alt={`${imageAlt} ${i+1}`}/></figure>):[0,1,2,3,4].map(i=><div key={i} className={`galleryFallback g${i}`}><span>{String(i+1).padStart(2,"0")}</span></div>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Apply now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Postmodern / split-scroll</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
