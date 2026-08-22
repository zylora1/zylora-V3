import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0636-beauty-swiss-design", "family": "Swiss Design", "pages": 5, "qualityTier": "premium", "standalone": true, "composition": "minimal-wordmark|map-led|property-led|comparison>collection>timeline>proof>awards>services>newsletter|notched|literary", "industry": "beauty", "hero": "map-led", "navigation": "minimal-wordmark", "layout": "property-led"};

export default function Template0636({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Elm Beauty Studio");
  const headline = String(content.headline || "Results-focused treatments in a calm studio with transparent recommendations.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Facials", "Brows", "Skin consultations", "Packages", "Gift cards"];
  const industryLabel = "Beauty studio";
  const serviceNotes = ["Ingredient-transparent formulations: every product listing includes the full INCI.", "Patch-test kits available before committing to any new treatment or product line.", "Skin consultation appointment included with all bespoke skincare programmes.", "Cruelty-free certified and vegan-formulated across the entire product range.", "Results photography at 4 and 8 weeks so you can see the change objectively."];
  const processSteps = ["Start with a focused conversation", "Agree the right scope", "Do the work with visible progress", "Review, refine, and confirm next steps"];
  const proofPoints = ["Cruelty Free International certified", "Vegan formulations", "Dermatologist tested", "Zero plastic packaging"];
  const testimonial = "My skin has genuinely changed in 8 weeks. The consultation at the start meant every product was right for my skin type.";
  const team = [{"name": "Clove Lead", "role": "Principal / Lead"}, {"name": "Harbor Team", "role": "Client experience"}, {"name": "Lumen Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Beauty studio / Project A", "Beauty studio / Project B", "Beauty studio / Project C", "Beauty studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const recognition = ["Client recommendation", "Local feature", "Industry mention"];
  const manifesto = "Results-focused treatments in a calm studio with transparent recommendations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#3d8b5d";
  return <main className="zp0636" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0636{--bg:#f6fff7;--fg:#17241b;--primary:#3d8b5d;--primary-fg:#050505;--secondary:#d8a657;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:none;--max:1120px;--space:36px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0636 *{box-sizing:border-box}
.zp0636 a{color:inherit;text-decoration:none}
.zp0636 h1,.zp0636 h2,.zp0636 h3,.zp0636 blockquote{font-family:Garamond, Georgia, serif;text-wrap:balance}
.zp0636 img{max-width:100%;display:block}
.zp0636 button,.zp0636 a{-webkit-tap-highlight-color:transparent}
.zp0636 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0636 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0636 .nav strong{font-family:Garamond, Georgia, serif;font-size:18px}
.zp0636 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0636 .mobileMenu{display:none}
.zp0636 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0636 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0636 .eyebrow,.zp0636 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0636 h1{font-size:clamp(48px,5.8vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0636 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0636 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0636 .heroActions a,.zp0636 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0636 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0636 .mapHero{grid-template-columns:1fr 1fr}
.zp0636 .mapLines{min-height:440px;position:relative;background:linear-gradient(22deg,transparent 48%,var(--primary) 49% 50%,transparent 51%),linear-gradient(-18deg,transparent 58%,var(--secondary) 59% 60%,transparent 61%)}
.zp0636 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0636 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0636 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0636 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0636 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0636 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0636 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0636 .serviceGrid p{color:var(--muted)}
.zp0636 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0636 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0636 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0636 details{border-top:1px solid var(--border);padding:20px 0}
.zp0636 details summary{font-weight:800;cursor:pointer}
.zp0636 details p{color:var(--muted);max-width:70ch}
.zp0636 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0636 .collectionGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0636 .productShape{aspect-ratio:.8;background:linear-gradient(145deg,var(--surface),color-mix(in srgb,var(--primary) 26%,var(--surface)));border-radius:var(--radius)}
.zp0636 .p1,.zp0636 .p3{background:linear-gradient(35deg,var(--surface),color-mix(in srgb,var(--secondary) 28%,var(--surface)))}
.zp0636 .timeline>div:last-child{border-left:2px solid var(--primary);margin-left:20%;padding-left:28px}
.zp0636 .timeline article{padding:20px 0}
.zp0636 .awards>div{max-width:800px;margin-left:auto}
.zp0636 .awards p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0636 .compareGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.zp0636 .compareGrid article{padding:30px;border:1px solid var(--border);min-height:220px}
.zp0636 .compareGrid article:last-child{background:var(--primary);color:var(--primary-fg)}
.zp0636 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0636 .contact .eyebrow{color:var(--bg)}
.zp0636 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0636 .contactMeta{display:grid;gap:10px}
.zp0636 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@media(max-width:1024px){.zp0636 .hero{min-height:auto}
.zp0636 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0636 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0636 .nav nav{display:none}
.zp0636 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0636 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0636 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0636 .mobileMenu nav a{padding:10px 8px}
.zp0636 .hero,.zp0636 .mapHero{grid-template-columns:1fr}
.zp0636 .section,.zp0636 .sectionTitle,.zp0636 .contact{grid-template-columns:1fr}
.zp0636 .collectionGrid{grid-template-columns:1fr 1fr}
.zp0636 .section{display:block}}
@media(max-width:430px){.zp0636{font-size:16px}
.zp0636 .hero,.zp0636 .section,.zp0636 .contact{padding-left:18px;padding-right:18px}
.zp0636 .serviceGrid,.zp0636 .proof,.zp0636 .collectionGrid,.zp0636 .compareGrid{grid-template-columns:1fr}
.zp0636 h1{font-size:clamp(42px,14vw,70px)}}

.zp0636 .heroActions a,.zp0636 .primary,.zp0636 .ctaBtn,.zp0636 .btnPrimary,.zp0636 .schedule>a,.zp0636 .newsletter>a{transition:all .2s ease}
.zp0636 .heroActions a:hover,.zp0636 .primary:hover,.zp0636 .ctaBtn:hover,.zp0636 .btnPrimary:hover{
  background:var(--fg);color:var(--bg)
}
.zp0636 nav a,.zp0636 .nav a,.zp0636 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0636 nav a:hover,.zp0636 .nav a:hover,.zp0636 .footer a:hover{
  text-decoration:underline
}
.zp0636 .serviceGrid article,.zp0636 .projectCard,.zp0636 .teamCard,.zp0636 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0636 .serviceGrid article:hover,.zp0636 .projectCard:hover,.zp0636 .teamCard:hover,.zp0636 .bentoCard:hover{
  outline:2px solid var(--primary)
}
@keyframes zpEnter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
.zp0636 .heroCopy{animation:zpEnter .7s cubic-bezier(.2,.8,.2,1) both}
.zp0636 .sectionTitle,.zp0636 .section>h2{animation:zpEnter .6s cubic-bezier(.2,.8,.2,1) .1s both}
@media(prefers-reduced-motion:reduce){.zp0636 *,.zp0636 *::before,.zp0636 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0636 a,.zp0636 button,.zp0636 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav minimal"><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero mapHero"><div className="mapLines"><i/><i/><i/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Plan your visit</a><a href="#services">Explore</a></div></div></section>
    <section className="section comparison"><div className="sectionTitle"><span>What changes</span><h2>Before / after the right system.</h2></div><div className="compareGrid"><article><b>Before</b><p>Unclear options, fragmented information, too many steps.</p></article><article><b>After</b><p>Clear priorities, direct contact, useful proof, confident next actions.</p></article></div></section>
    <section className="section collection"><div className="sectionTitle"><span>Collection</span><h2>Selected with intent.</h2></div><div className="collectionGrid">{services.slice(0,4).map((s,i)=><article key={s}><div className={`productShape p${i}`}/><h3>{s}</h3><a href="#contact">Enquire</a></article>)}</div></section>
    <section className="section timeline"><div className="sectionTitle"><span>Timeline</span><h2>How the work moves.</h2></div><div>{processSteps.map((s,i)=><article key={s}><time>{String(i+1).padStart(2,"0")}</time><h3>{s}</h3></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section awards"><span>Recognition</span><div>{recognition.map((x,i)=><p key={x}><b>{2026-i}</b><span>{x}</span></p>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Plan your visit</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Swiss Design / property-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
