import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0627-beauty-maximalism", "family": "Maximalism", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "split-logo|vertical-image-rail|product-journey|community>packages>services>proof>manifesto>newsletter>integrations|inset-panel|poster", "industry": "beauty", "hero": "vertical-image-rail", "navigation": "split-logo", "layout": "product-journey"};

export default function Template0627({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Stone & Pine Beauty Studio");
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
  const proofPoints = ["Cruelty Free International certified", "Vegan formulations", "Dermatologist tested", "Zero plastic packaging"];
  const storyBody = "Stone & Pine Beauty Studio is presented as a real working beauty studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "My skin has genuinely changed in 8 weeks. The consultation at the start meant every product was right for my skin type.";
  const team = [{"name": "Mosaic Lead", "role": "Principal / Lead"}, {"name": "Kindred Team", "role": "Client experience"}, {"name": "Tandem Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Beauty studio / Project A", "Beauty studio / Project B", "Beauty studio / Project C", "Beauty studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Results-focused treatments in a calm studio with transparent recommendations. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#00b4d8";
  return <main className="zp0627" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0627{--bg:#0d1723;--fg:#eef6ff;--primary:#00b4d8;--primary-fg:#050505;--secondary:#90e0ef;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:16px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:32px;background:var(--bg);color:var(--fg);font-family:Helvetica Neue, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0627 *{box-sizing:border-box}
.zp0627 a{color:inherit;text-decoration:none}
.zp0627 h1,.zp0627 h2,.zp0627 h3,.zp0627 blockquote{font-family:Impact, Arial Black, sans-serif;text-wrap:balance}
.zp0627 img{max-width:100%;display:block}
.zp0627 button,.zp0627 a{-webkit-tap-highlight-color:transparent}
.zp0627 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0627 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0627 .nav strong{font-family:Impact, Arial Black, sans-serif;font-size:18px}
.zp0627 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0627 .mobileMenu{display:none}
.zp0627 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0627 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0627 .eyebrow,.zp0627 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0627 h1{font-size:clamp(48px,6.35vw,128px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0627 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0627 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0627 .heroActions a,.zp0627 .newsletter>a,.zp0627 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0627 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0627 .visual,.zp0627 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0627 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0627 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:16px;right:-8%;top:-18%;transform:rotate(4deg)}
.zp0627 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0627 .heroPhoto{object-fit:cover}
.zp0627 .verticalHero{grid-template-columns:.6fr 1.4fr}
.zp0627 .imageRail{height:70vh;display:grid;grid-template-rows:1fr .25fr;gap:12px}
.zp0627 .railBlock{background:var(--primary)}
.zp0627 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0627 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0627 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0627 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0627 .serviceGrid article{min-height:218px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0627 .serviceGrid article:nth-child(4){background:var(--primary);color:var(--primary-fg)}
.zp0627 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0627 .serviceGrid p{color:var(--muted)}
.zp0627 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0627 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0627 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0627 details{border-top:1px solid var(--border);padding:20px 0}
.zp0627 details summary{font-weight:800;cursor:pointer}
.zp0627 details p{color:var(--muted);max-width:70ch}
.zp0627 .integrations{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0627 .integrations>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0627 .integrations b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0627 .newsletter,.zp0627 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0627 .manifesto p{font:700 clamp(40px,6.5vw,100px)/.95 Impact, Arial Black, sans-serif;letter-spacing:-.04em;max-width:17ch}
.zp0627 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0627 .packages>.sectionTitle{grid-column:1/-1}
.zp0627 .packages article{padding:24px;border:1px solid var(--border)}
.zp0627 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0627 .contact .eyebrow{color:var(--bg)}
.zp0627 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0627 .contactMeta{display:grid;gap:10px}
.zp0627 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0627 .hero:after{content:"✦";position:absolute;right:4vw;top:18%;font-size:clamp(50px,10vw,160px);color:var(--secondary);transform:rotate(6deg)}
.zp0627 .heroCopy{animation:enter-626 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-626{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0627 .hero{min-height:auto}
.zp0627 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0627 .proof{grid-template-columns:1fr 1fr}
.zp0627 .packages{grid-template-columns:1fr 1fr}
.zp0627 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0627 .nav nav{display:none}
.zp0627 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0627 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0627 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0627 .mobileMenu nav a{padding:10px 8px}
.zp0627 .hero,.zp0627 .verticalHero{grid-template-columns:1fr}
.zp0627 .section,.zp0627 .sectionTitle,.zp0627 .contact{grid-template-columns:1fr}
.zp0627 .section{display:block}}
@media(max-width:430px){.zp0627{font-size:16px}
.zp0627 .hero,.zp0627 .section,.zp0627 .contact{padding-left:18px;padding-right:18px}
.zp0627 .serviceGrid,.zp0627 .proof,.zp0627 .packages{grid-template-columns:1fr}
.zp0627 h1{font-size:clamp(42px,14vw,70px)}}

.zp0627 .heroActions a,.zp0627 .primary,.zp0627 .ctaBtn,.zp0627 .btnPrimary,.zp0627 .schedule>a,.zp0627 .newsletter>a{transition:all .2s ease}
.zp0627 .heroActions a:hover,.zp0627 .primary:hover,.zp0627 .ctaBtn:hover,.zp0627 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);transform:scale(1.04)
}
.zp0627 nav a,.zp0627 .nav a,.zp0627 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0627 nav a:hover,.zp0627 .nav a:hover,.zp0627 .footer a:hover{
  color:var(--primary)
}
.zp0627 .serviceGrid article,.zp0627 .projectCard,.zp0627 .teamCard,.zp0627 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0627 .serviceGrid article:hover,.zp0627 .projectCard:hover,.zp0627 .teamCard:hover,.zp0627 .bentoCard:hover{
  transform:scale(1.02)
}
@media(prefers-reduced-motion:reduce){.zp0627 *,.zp0627 *::before,.zp0627 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0627 a,.zp0627 button,.zp0627 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav split"><nav><a href="#services">Services</a><a href="#proof">Proof</a></nav><strong>{businessName}</strong><a href="#contact">Contact</a></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero verticalHero"><div className="imageRail">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">26</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="railBlock"/></div><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Send an enquiry</a><a href="#services">Explore</a></div></div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section manifesto"><span>What we believe</span><p>{manifesto}</p></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section integrations"><span>Works with</span><div>{["Email","Calendar","Analytics","CRM","Payments"].map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Maximalism / product-journey</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
