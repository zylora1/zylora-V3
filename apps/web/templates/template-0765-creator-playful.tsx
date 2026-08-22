import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0765-creator-playful", "family": "Playful", "pages": 2, "qualityTier": "premium", "standalone": true, "composition": "compact-floating|floating-panels|community-led|credentials>faq>proof>pricing>services>menu>programmes|hard-outline|humanist-classic", "industry": "creator", "hero": "floating-panels", "navigation": "compact-floating", "layout": "community-led"};

export default function Template0765({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Rook Creator Brand");
  const headline = String(content.headline || "A clear home base for work, audience, collaborations, and owned distribution.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Latest work", "Partnerships", "Newsletter", "Resources", "Speaking"];
  const industryLabel = "Creator brand";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Marrow Lead", "role": "Principal / Lead"}, {"name": "Fieldwork Team", "role": "Client experience"}, {"name": "Common Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Creator brand / Project A", "Creator brand / Project B", "Creator brand / Project C", "Creator brand / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "A clear home base for work, audience, collaborations, and owned distribution. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#e27d60";
  return <main className="zp0765" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0765{--bg:#fef7f1;--fg:#2c2320;--primary:#e27d60;--primary-fg:#050505;--secondary:#85a9a0;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1440px;--space:24px;background:var(--bg);color:var(--fg);font-family:Avenir, Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0765 *{box-sizing:border-box}
.zp0765 a{color:inherit;text-decoration:none}
.zp0765 h1,.zp0765 h2,.zp0765 h3,.zp0765 blockquote{font-family:Baskerville, Georgia, serif;text-wrap:balance}
.zp0765 img{max-width:100%;display:block}
.zp0765 button,.zp0765 a{-webkit-tap-highlight-color:transparent}
.zp0765 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0765 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0765 .nav strong{font-family:Baskerville, Georgia, serif;font-size:18px}
.zp0765 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0765 .nav.floating{margin:16px auto;width:min(calc(100% - 32px),var(--max));border:var(--line) solid var(--border);border-radius:999px;background:color-mix(in srgb,var(--bg) 88%,transparent);backdrop-filter:blur(16px);padding:12px 22px}
.zp0765 .mobileMenu{display:none}
.zp0765 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0765 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0765 .eyebrow,.zp0765 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0765 h1{font-size:clamp(48px,8.0vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0765 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0765 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0765 .heroActions a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0765 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0765 .visual,.zp0765 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0765 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0765 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0765 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0765 .heroPhoto{object-fit:cover}
.zp0765 .floatingHero{grid-template-columns:1.15fr .85fr}
.zp0765 .floatStack{position:relative;min-height:500px}
.zp0765 .floatStack>*{position:absolute}
.zp0765 .floatStack>*:first-child{inset:5% 12% 20% 5%}
.zp0765 .floatStack article{padding:18px;background:var(--surface);border:1px solid var(--border);border-radius:var(--radius)}
.zp0765 .floatStack article:nth-of-type(1){right:0;top:8%}
.zp0765 .floatStack article:nth-of-type(2){left:0;bottom:3%}
.zp0765 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0765 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0765 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0765 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0765 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0765 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0765 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0765 .serviceGrid p{color:var(--muted)}
.zp0765 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0765 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0765 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0765 .faqList{max-width:900px;margin-left:auto}
.zp0765 details{border-top:1px solid var(--border);padding:20px 0}
.zp0765 details summary{font-weight:800;cursor:pointer}
.zp0765 details p{color:var(--muted);max-width:70ch}
.zp0765 .priceRows{border-top:1px solid var(--border)}
.zp0765 .priceRows article{display:grid;grid-template-columns:1fr 1.4fr auto;gap:24px;align-items:center;padding:24px 0;border-bottom:1px solid var(--border)}
.zp0765 .credentials{display:grid;grid-template-columns:.4fr 1.6fr;gap:5vw}
.zp0765 .credentials>div{display:flex;gap:10px;flex-wrap:wrap}
.zp0765 .credentials b{padding:12px 14px;border:1px solid var(--border);border-radius:var(--radius)}
.zp0765 .menuSection>div:last-child p{display:flex;justify-content:space-between;gap:20px;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0765 .programmes>div:last-child{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0765 .programmes article{padding:24px;border-top:1px solid var(--border)}
.zp0765 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0765 .contact .eyebrow{color:var(--bg)}
.zp0765 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0765 .contactMeta{display:grid;gap:10px}
.zp0765 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0765 .heroCopy{animation:enter-764 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-764{from{opacity:0;transform:translateY(22px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0765 .hero{min-height:auto}
.zp0765 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0765 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0765 .nav nav{display:none}
.zp0765 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0765 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0765 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0765 .mobileMenu nav a{padding:10px 8px}
.zp0765 .hero,.zp0765 .floatingHero{grid-template-columns:1fr}
.zp0765 .section,.zp0765 .sectionTitle,.zp0765 .contact{grid-template-columns:1fr}
.zp0765 .section{display:block}}
@media(max-width:430px){.zp0765{font-size:16px}
.zp0765 .hero,.zp0765 .section,.zp0765 .contact{padding-left:18px;padding-right:18px}
.zp0765 .serviceGrid,.zp0765 .proof,.zp0765 .programmes>div:last-child{grid-template-columns:1fr}
.zp0765 h1{font-size:clamp(42px,14vw,70px)}
.zp0765 .priceRows article{grid-template-columns:1fr}}

.zp0765 .heroActions a,.zp0765 .primary,.zp0765 .ctaBtn,.zp0765 .btnPrimary,.zp0765 .schedule>a,.zp0765 .newsletter>a{transition:all .2s ease}
.zp0765 .heroActions a:hover,.zp0765 .primary:hover,.zp0765 .ctaBtn:hover,.zp0765 .btnPrimary:hover{
  transform:scale(1.05) rotate(-1deg)
}
.zp0765 nav a,.zp0765 .nav a,.zp0765 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0765 nav a:hover,.zp0765 .nav a:hover,.zp0765 .footer a:hover{
  color:var(--primary)
}
.zp0765 .serviceGrid article,.zp0765 .projectCard,.zp0765 .teamCard,.zp0765 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0765 .serviceGrid article:hover,.zp0765 .projectCard:hover,.zp0765 .teamCard:hover,.zp0765 .bentoCard:hover{
  transform:scale(1.02) rotate(.5deg)
}
@media(prefers-reduced-motion:reduce){.zp0765 *,.zp0765 *::before,.zp0765 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0765 a,.zp0765 button,.zp0765 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav floating"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero floatingHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Call us</a><a href="#services">Explore</a></div></div><div className="floatStack">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">64</span><div className="visualMark"/><small>{businessName}</small></div>}<article>{services[0]}</article><article>{services[1]}</article></div></section>
    <section className="section credentials"><span>Credentials & standards</span><div>{credentials.map(x=><b key={x}>{x}</b>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section pricing"><div className="sectionTitle"><span>Options</span><h2>Clear starting points, no mystery packages.</h2></div><div className="priceRows">{packages.map((x,i)=><article key={x.name}><div><small>0{i+1}</small><h3>{x.name}</h3></div><p>{x.note}</p><strong>{x.price}</strong></article>)}</div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section menuSection"><div className="sectionTitle"><span>Selection</span><h2>Current favourites.</h2></div><div>{services.map((s,i)=><p key={s}><span>{s}</span><b>{i%2?"Seasonal":"Signature"}</b></p>)}</div></section>
    <section className="section programmes"><div className="sectionTitle"><span>Programmes</span><h2>Structured options for different goals.</h2></div><div>{services.slice(0,4).map((x,i)=><article key={x}><small>{i+1}</small><h3>{x}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Call us</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Playful / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
