import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0161-coaching-japanese-minimalism", "family": "Japanese Minimalism", "pages": 7, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|typography-only|case-study-led|hours>newsletter>proof>services>faq>location|square-editorial|friendly", "industry": "coaching", "hero": "typography-only", "navigation": "classic-horizontal", "layout": "case-study-led"};

export default function Template0161({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Northline Coaching Centre");
  const headline = String(content.headline || "Focused preparation with clear schedules, regular feedback, and measurable progress.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Exam preparation", "Weekly classes", "Mock tests", "Doubt sessions", "Progress reviews"];
  const industryLabel = "Coaching centre";
  const serviceNotes = ["Structured 90-day programmes with clear milestones reviewed together every fortnight.", "Evidence-based frameworks translated into practical, daily action steps.", "Accountability check-ins between sessions to maintain momentum.", "Access to tools, templates, and reading lists curated for your specific challenge.", "Progress documented so you can see exactly how far you've come."];
  const proofPoints = ["ICF certified coaches", "Money-back guarantee", "Video and in-person sessions", "Peer group included"];
  const testimonial = "I'd spent years knowing what I needed to do but not doing it. Having someone hold me to account changed everything.";
  const faqs = [["How do I get started?", "Use the contact button to send an enquiry or choose an available appointment time."], ["What should I prepare?", "Share the goal, any useful context, and the best way to contact you."], ["Can I ask a question first?", "Yes. The website chatbot can answer from the business information and uploaded documents."]];
  const team = [{"name": "Fieldwork Lead", "role": "Principal / Lead"}, {"name": "Common Team", "role": "Client experience"}, {"name": "Stillwater Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Coaching centre / Project A", "Coaching centre / Project B", "Coaching centre / Project C", "Coaching centre / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Focused preparation with clear schedules, regular feedback, and measurable progress. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  return <main className="zp0161" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0161{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:0px;--shadow:none;--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Verdana, sans-serif;font-size:17px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0161 *{box-sizing:border-box}
.zp0161 a{color:inherit;text-decoration:none}
.zp0161 h1,.zp0161 h2,.zp0161 h3,.zp0161 blockquote{font-family:Trebuchet MS, Arial, sans-serif;text-wrap:balance}
.zp0161 img{max-width:100%;display:block}
.zp0161 button,.zp0161 a{-webkit-tap-highlight-color:transparent}
.zp0161 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0161 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0161 .nav strong{font-family:Trebuchet MS, Arial, sans-serif;font-size:18px}
.zp0161 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0161 .mobileMenu{display:none}
.zp0161 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0161 .heroCopy{position:relative;z-index:2;max-width:900px}
.zp0161 .eyebrow,.zp0161 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0161 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0161 .lede{font-size:clamp(17px,1.6vw,23px);max-width:62ch;color:var(--muted);margin:0}
.zp0161 .heroActions{display:flex;gap:10px;flex-wrap:wrap;margin-top:30px}
.zp0161 .heroActions a,.zp0161 .newsletter>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0161 .heroActions .primary{background:var(--primary);color:var(--primary-fg);border-color:var(--primary)}
.zp0161 .typeOnly{grid-template-columns:1fr .28fr}
.zp0161 .oversizeWord{font-family:Trebuchet MS, Arial, sans-serif;font-size:min(38vw,520px);line-height:.7;color:var(--primary);opacity:.14;justify-self:end}
.zp0161 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0161 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0161 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0161 .serviceGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.zp0161 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0161 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0161 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0161 .serviceGrid p{color:var(--muted)}
.zp0161 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0161 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0161 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0161 .faqList{max-width:900px;margin-left:auto}
.zp0161 details{border-top:1px solid var(--border);padding:20px 0}
.zp0161 details summary{font-weight:800;cursor:pointer}
.zp0161 details p{color:var(--muted);max-width:70ch}
.zp0161 .hours{display:grid;grid-template-columns:1fr 1fr;gap:6vw}
.zp0161 .hours dl{margin:0}
.zp0161 .hours dl div{display:flex;justify-content:space-between;padding:16px 0;border-bottom:1px solid var(--border)}
.zp0161 .location{display:grid;grid-template-columns:1fr 1fr;gap:5vw;align-items:center}
.zp0161 .locationMap{min-height:390px;background:repeating-linear-gradient(-35deg,var(--surface) 0 30px,var(--border) 31px 32px);position:relative;padding:24px}
.zp0161 .locationMap i{position:absolute;width:18px;aspect-ratio:1;background:var(--primary);border-radius:50%;left:55%;top:48%}
.zp0161 .newsletter{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0161 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0161 .contact .eyebrow{color:var(--bg)}
.zp0161 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0161 .contactMeta{display:grid;gap:10px}
.zp0161 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0161 .section{padding-top:clamp(90px,12vw,180px);padding-bottom:clamp(90px,12vw,180px)}
.zp0161 .sectionTitle h2{font-weight:400}
.zp0161 .heroCopy{animation:enter-160 .7s cubic-bezier(.2,.8,.2,1) both}
@keyframes enter-160{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0161 .hero{min-height:auto}
.zp0161 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0161 .proof{grid-template-columns:1fr 1fr}}
@media(max-width:768px){.zp0161 .nav nav{display:none}
.zp0161 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0161 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0161 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0161 .mobileMenu nav a{padding:10px 8px}
.zp0161 .hero{grid-template-columns:1fr}
.zp0161 .section,.zp0161 .sectionTitle,.zp0161 .hours,.zp0161 .location,.zp0161 .contact{grid-template-columns:1fr}
.zp0161 .section{display:block}}
@media(max-width:430px){.zp0161{font-size:16px}
.zp0161 .hero,.zp0161 .section,.zp0161 .contact{padding-left:18px;padding-right:18px}
.zp0161 .serviceGrid,.zp0161 .proof{grid-template-columns:1fr}
.zp0161 h1{font-size:clamp(42px,14vw,70px)}}

.zp0161 .heroActions a,.zp0161 .primary,.zp0161 .ctaBtn,.zp0161 .btnPrimary,.zp0161 .schedule>a,.zp0161 .newsletter>a{transition:all .2s ease}
.zp0161 .heroActions a:hover,.zp0161 .primary:hover,.zp0161 .ctaBtn:hover,.zp0161 .btnPrimary:hover{
  opacity:.75
}
.zp0161 nav a,.zp0161 .nav a,.zp0161 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0161 nav a:hover,.zp0161 .nav a:hover,.zp0161 .footer a:hover{
  opacity:.6
}
.zp0161 .serviceGrid article,.zp0161 .projectCard,.zp0161 .teamCard,.zp0161 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0161 .serviceGrid article:hover,.zp0161 .projectCard:hover,.zp0161 .teamCard:hover,.zp0161 .bentoCard:hover{
  opacity:.9
}
@media(prefers-reduced-motion:reduce){.zp0161 *,.zp0161 *::before,.zp0161 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0161 a,.zp0161 button,.zp0161 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero typeOnly"><div className="heroCopy"><span className="eyebrow">{industryLabel}</span><h1>{headline}</h1><p className="lede">{description}</p><div className="heroActions"><a className="primary" href="#contact">Join the community</a><a href="#services">Explore</a></div></div><div className="oversizeWord">{businessName.slice(0,1)}</div></section>
    <section className="section hours"><div><span>Hours</span><h2>Plan your visit.</h2></div><dl><div><dt>Mon–Fri</dt><dd>{hoursWeek}</dd></div><div><dt>Saturday</dt><dd>{hoursSat}</dd></div><div><dt>Sunday</dt><dd>{hoursSun}</dd></div></dl></section>
    <section className="section newsletter"><div><span>Updates</span><h2>Occasional notes worth opening.</h2></div><a href={`mailto:${email}?subject=Newsletter`}>Join by email</a></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section faq"><div className="sectionTitle"><span>Questions</span><h2>Useful answers before you get in touch.</h2></div><div className="faqList">{faqs.map((x,i)=><details key={i}><summary>{x[0]}</summary><p>{x[1]}</p></details>)}</div></section>
    <section className="section location"><div className="locationMap"><i/><i/><span>{address || "Your neighbourhood"}</span></div><div><span>Find us</span><h2>{address || "Easy to reach, simple to contact."}</h2><a href="#contact">Get directions / contact</a></div></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Join the community</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Japanese Minimalism / case-study-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
