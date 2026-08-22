import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0772-events-organic", "family": "Organic", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "transparent-overlay|bento-hero|single-column-longform|proof>faq>testimonial>services>community|cut-corners|sports-editorial", "industry": "events", "hero": "bento-hero", "navigation": "transparent-overlay", "layout": "single-column-longform"};

export default function Template0772({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Fieldwork Event Studio");
  const headline = String(content.headline || "Events designed around guest experience, operational detail, and memorable moments.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Corporate events", "Launches", "Private celebrations", "Production", "Venue sourcing"];
  const industryLabel = "Event studio";
  const serviceNotes = ["Tailored to your specific situation from the first conversation.", "Delivered by specialists with direct experience in this field.", "Clear timelines and deliverables agreed before any work begins.", "Regular progress updates so you're never left wondering what's happening.", "Follow-through support to make sure outcomes are sustained after delivery."];
  const proofPoints = ["Independently certified", "Years of proven delivery", "Transparent pricing", "Client satisfaction: 97%"];
  const storyBody = "Fieldwork Event Studio is presented as a real working event studio, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "I had researched six alternatives. This was the only team that took time to understand our situation before proposing anything.";
  const testimonialName = "Vale client";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Lumen Lead", "role": "Principal / Lead"}, {"name": "Juniper Team", "role": "Client experience"}, {"name": "Miller & Rowe Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Event studio / Project A", "Event studio / Project B", "Event studio / Project C", "Event studio / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Events designed around guest experience, operational detail, and memorable moments. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#ff3b30";
  return <main className="zp0772" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0772{--bg:#f7f7f7;--fg:#101010;--primary:#ff3b30;--primary-fg:#050505;--secondary:#2222aa;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:2px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1200px;--space:36px;background:var(--bg);color:var(--fg);font-family:Georgia, serif;font-size:16px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0772 *{box-sizing:border-box}
.zp0772 a{color:inherit;text-decoration:none}
.zp0772 h1,.zp0772 h2,.zp0772 h3,.zp0772 blockquote{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;text-wrap:balance}
.zp0772 img{max-width:100%;display:block}
.zp0772 button,.zp0772 a{-webkit-tap-highlight-color:transparent}
.zp0772 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0772 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0772 .nav strong{font-family:Franklin Gothic Medium, Arial Narrow, Arial, sans-serif;font-size:18px}
.zp0772 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0772 .nav.overlay{position:absolute;inset:0 0 auto;background:linear-gradient(180deg,color-mix(in srgb,var(--bg) 76%,transparent),transparent);border:0}
.zp0772 .mobileMenu{display:none}
.zp0772 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0772 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0772 .eyebrow,.zp0772 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0772 h1{font-size:clamp(48px,6.35vw,146px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0772 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0772 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0772 .heroActions a,.zp0772 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0772 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0772 .visual,.zp0772 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0772 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0772 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:2px;right:-8%;top:-18%;transform:rotate(8deg)}
.zp0772 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0772 .heroPhoto{object-fit:cover}
.zp0772 .bentoHero{grid-template-columns:.8fr 1.2fr}
.zp0772 .bentoHeroGrid{display:grid;grid-template-columns:1.4fr .6fr;grid-template-rows:1fr 1fr;gap:12px}
.zp0772 .bentoHeroGrid>*{border:1px solid var(--border);border-radius:var(--radius);padding:18px}
.zp0772 .bentoHeroGrid>*:first-child{grid-row:1/3;padding:0;overflow:hidden}
.zp0772 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0772 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0772 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0772 .serviceGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0772 .serviceGrid article{min-height:242px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0772 .serviceGrid article:nth-child(5){background:var(--primary);color:var(--primary-fg)}
.zp0772 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0772 .serviceGrid p{color:var(--muted)}
.zp0772 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0772 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0772 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0772 .testimonial{background:var(--primary);color:var(--primary-fg);display:grid;grid-template-columns:1.5fr .5fr;gap:4vw}
.zp0772 .testimonial blockquote{font-size:clamp(34px,5vw,74px);line-height:.98;margin:0}
.zp0772 .testimonial>div{align-self:end}
.zp0772 .testimonial span{display:block;opacity:.7}
.zp0772 .faqList{max-width:900px;margin-left:auto}
.zp0772 details{border-top:1px solid var(--border);padding:20px 0}
.zp0772 details summary{font-weight:800;cursor:pointer}
.zp0772 details p{color:var(--muted);max-width:70ch}
.zp0772 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0772 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0772 .contact .eyebrow{color:var(--bg)}
.zp0772 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0772 .contactMeta{display:grid;gap:10px}
.zp0772 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0772 .section>*{max-width:820px;margin-left:auto;margin-right:auto}
.zp0772 .sectionTitle{display:block}
.zp0772 .heroCopy{animation:enter-771 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-771{from{opacity:0;transform:translateY(29px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0772 .hero{min-height:auto}
.zp0772 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0772 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0772 .nav nav{display:none}
.zp0772 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0772 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0772 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0772 .mobileMenu nav a{padding:10px 8px}
.zp0772 .hero,.zp0772 .bentoHero{grid-template-columns:1fr}
.zp0772 .section,.zp0772 .sectionTitle,.zp0772 .contact{grid-template-columns:1fr}
.zp0772 .testimonial{grid-template-columns:1fr}
.zp0772 .section{display:block}}
@media(max-width:430px){.zp0772{font-size:16px}
.zp0772 .hero,.zp0772 .section,.zp0772 .contact{padding-left:18px;padding-right:18px}
.zp0772 .serviceGrid,.zp0772 .proof{grid-template-columns:1fr}
.zp0772 h1{font-size:clamp(42px,14vw,70px)}}

.zp0772 .heroActions a,.zp0772 .primary,.zp0772 .ctaBtn,.zp0772 .btnPrimary,.zp0772 .schedule>a,.zp0772 .newsletter>a{transition:all .2s ease}
.zp0772 .heroActions a:hover,.zp0772 .primary:hover,.zp0772 .ctaBtn:hover,.zp0772 .btnPrimary:hover{
  background:var(--primary);color:var(--primary-fg);border-radius:30px
}
.zp0772 nav a,.zp0772 .nav a,.zp0772 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0772 nav a:hover,.zp0772 .nav a:hover,.zp0772 .footer a:hover{
  color:var(--primary)
}
.zp0772 .serviceGrid article,.zp0772 .projectCard,.zp0772 .teamCard,.zp0772 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0772 .serviceGrid article:hover,.zp0772 .projectCard:hover,.zp0772 .teamCard:hover,.zp0772 .bentoCard:hover{
  transform:translateY(-4px)
}
@media(prefers-reduced-motion:reduce){.zp0772 *,.zp0772 *::before,.zp0772 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0772 a,.zp0772 button,.zp0772 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav overlay"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero bentoHero"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Register now</a><a href="#services">Explore</a></div></div><div className="bentoHeroGrid">{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">71</span><div className="visualMark"/><small>{businessName}</small></div>}<div><b>{services[0]}</b></div><div><b>{services[1]}</b></div></div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section testimonial"><blockquote>“{testimonial}”</blockquote><div><strong>{testimonialName}</strong><span>Verified client</span></div></section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Register now</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Organic / single-column-longform</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
