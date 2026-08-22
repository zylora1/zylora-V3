import React from "react";
import type { SiteTemplateProps } from "./types";

export const metadata = {"key": "template-0081-gym-playful", "family": "Playful", "pages": 8, "qualityTier": "premium", "standalone": true, "composition": "classic-horizontal|magazine-cover|community-led|packages>case-study>proof>services>availability>research>community|square-editorial|slab", "industry": "gym", "hero": "magazine-cover", "navigation": "classic-horizontal", "layout": "community-led"};

export default function Template0081({content = {}, theme = {}}: SiteTemplateProps) {
  const businessName = String(content.businessName || "Oak & Tide Training Gym");
  const headline = String(content.headline || "Coaching-led training for people who want structure, progress, and accountability.");
  const description = String(content.description || "Clear information, credible proof, and an intentional path to the next action.");
  const email = String(content.email || "hello@example.com");
  const phone = String(content.phone || "");
  const address = String(content.address || "");
  const heroImage = String(content.heroImage || "");
  const imageAlt = String(content.imageAlt || businessName);
  const galleryImages = Array.isArray(content.galleryImages) ? content.galleryImages.map(String) : [];
  const services = Array.isArray(content.services) && content.services.length ? content.services.map((x:any)=>typeof x === "string" ? x : String(x?.name || "Service")) : ["Strength coaching", "Small-group training", "Open gym", "Mobility sessions", "Performance testing"];
  const serviceNotes = ["Open 24 hours so your schedule drives your training, not ours.", "Strength, cardio, and functional zones across 600+ sq metres of equipment.", "Personal training with coaches who build programmes around your goals, not templates.", "Monthly fitness assessments to track progress and adjust your plan.", "Recovery studio with sauna, ice bath, and stretch space included in membership."];
  const proofPoints = ["Open 24/7, 365 days", "50+ classes per week", "No contract options", "Free induction session"];
  const storyBody = "Oak & Tide Training Gym is presented as a real working training gym, with useful information arranged around trust, clarity, and the visitor\u2019s next decision.";
  const testimonial = "First gym I've kept going to for more than a month. The coaches check in without being pushy — it actually works.";
  const team = [{"name": "Pavilion Lead", "role": "Principal / Lead"}, {"name": "Bureau Team", "role": "Client experience"}, {"name": "Elm Studio", "role": "Specialist"}];
  const packages = [{"name": "Essential", "note": "A focused starting point for straightforward needs.", "price": "From enquiry"}, {"name": "Complete", "note": "Broader support with planning and follow-through.", "price": "Most selected"}, {"name": "Bespoke", "note": "For complex requirements that need a tailored scope.", "price": "Custom"}];
  const projects = ["Training gym / Project A", "Training gym / Project B", "Training gym / Project C", "Training gym / Project D"];
  const metrics = [["01", "Clear owner"], ["24h", "Typical reply"], ["AA", "Accessibility target"], ["100%", "Responsive"]];
  const credentials = ["Qualified team", "Clear policies", "Accessible service", "Privacy-aware"];
  const manifesto = "Coaching-led training for people who want structure, progress, and accountability. Good design should make that promise easy to understand, trust, and act on.";
  const hoursWeek = String(content.hoursWeek || "09:00–18:00");
  const hoursSat = String(content.hoursSat || "By appointment");
  const hoursSun = String(content.hoursSun || "Closed");
  const accent = typeof theme.accent === "string" ? theme.accent : "#d5b36a";
  return <main className="zp0081" style={{"--primary": accent} as React.CSSProperties}>
    <style>{`.zp0081{--bg:#0a0a0a;--fg:#f5f0e8;--primary:#d5b36a;--primary-fg:#050505;--secondary:#8b6f47;--surface:color-mix(in srgb,var(--bg) 92%,var(--fg));--muted:color-mix(in srgb,var(--fg) 72%,var(--bg));--border:color-mix(in srgb,var(--fg) 22%,var(--bg));--radius:0px;--line:1px;--shadow:0 12px 32px color-mix(in srgb,var(--fg) 10%,transparent);--max:1120px;--space:24px;background:var(--bg);color:var(--fg);font-family:Arial, sans-serif;font-size:18px;line-height:1.55;min-height:100vh;overflow:hidden}
.zp0081 *{box-sizing:border-box}
.zp0081 a{color:inherit;text-decoration:none}
.zp0081 h1,.zp0081 h2,.zp0081 h3,.zp0081 blockquote{font-family:Rockwell, Courier New, serif;text-wrap:balance}
.zp0081 img{max-width:100%;display:block}
.zp0081 button,.zp0081 a{-webkit-tap-highlight-color:transparent}
.zp0081 a:focus-visible{outline:3px solid var(--primary);outline-offset:4px}
.zp0081 .nav{min-height:72px;padding:16px max(24px,calc((100vw - var(--max))/2));display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:var(--line) solid var(--border);position:relative;z-index:8}
.zp0081 .nav strong{font-family:Rockwell, Courier New, serif;font-size:18px}
.zp0081 .nav nav{display:flex;align-items:center;gap:20px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
.zp0081 .mobileMenu{display:none}
.zp0081 .hero{min-height:78vh;padding:clamp(70px,9vw,140px) max(24px,calc((100vw - var(--max))/2));position:relative;display:grid;align-items:center;gap:clamp(28px,6vw,90px);border-bottom:var(--line) solid var(--border)}
.zp0081 .eyebrow,.zp0081 .sectionTitle>span{display:block;font-size:11px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--fg);margin-bottom:18px}
.zp0081 h1{font-size:clamp(48px,5.8vw,92px);line-height:.9;letter-spacing:-.055em;margin:0 0 24px;max-width:11ch}
.zp0081 .schedule>a,.zp0081 .community>a{display:inline-flex;padding:13px 17px;border:var(--line) solid var(--border);border-radius:var(--radius);font-weight:800;font-size:13px}
.zp0081 .visual,.zp0081 .heroPhoto{min-height:340px;width:100%;border-radius:var(--radius);border:var(--line) solid var(--border);box-shadow:var(--shadow)}
.zp0081 .visual{background:linear-gradient(135deg,color-mix(in srgb,var(--primary) 48%,var(--bg)),color-mix(in srgb,var(--secondary) 24%,var(--bg)));display:flex;align-items:flex-end;justify-content:space-between;padding:28px;position:relative;overflow:hidden}
.zp0081 .visual:before{content:"";position:absolute;width:48%;aspect-ratio:1;border:1px solid color-mix(in srgb,var(--fg) 30%,transparent);border-radius:0px;right:-8%;top:-18%;transform:rotate(16deg)}
.zp0081 .visualMark{width:42%;height:24%;background:var(--fg);clip-path:polygon(0 30%,70% 0,100% 55%,30% 100%)}
.zp0081 .heroPhoto{object-fit:cover}
.zp0081 .coverHero{grid-template-columns:.12fr 1.05fr .83fr;align-items:end}
.zp0081 .coverHero>h1{writing-mode:vertical-rl;transform:rotate(180deg);font-size:clamp(50px,8vw,130px);max-width:none}
.zp0081 .coverCaption{align-self:end}
.zp0081 .section{padding:clamp(64px,8vw,120px) max(24px,calc((100vw - var(--max))/2));border-bottom:var(--line) solid var(--border);position:relative}
.zp0081 .sectionTitle{display:grid;grid-template-columns:.36fr 1.64fr;gap:5vw;align-items:start;margin-bottom:44px}
.zp0081 .sectionTitle h2{font-size:clamp(38px,5.2vw,82px);line-height:.95;letter-spacing:-.04em;margin:0;max-width:13ch}
.zp0081 .serviceGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
.zp0081 .serviceGrid article{min-height:170px;padding:22px;border:var(--line) solid var(--border);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between;background:var(--surface)}
.zp0081 .serviceGrid article:nth-child(2){background:var(--primary);color:var(--primary-fg)}
.zp0081 .serviceGrid h3{font-size:clamp(24px,3vw,42px);line-height:1;margin:20px 0}
.zp0081 .serviceGrid p{color:var(--muted)}
.zp0081 .proof{display:grid;grid-template-columns:1.4fr repeat(3,1fr);gap:1px;background:var(--border);padding:1px}
.zp0081 .proof>div{padding:30px;background:var(--bg);min-height:150px;display:flex;flex-direction:column;justify-content:space-between}
.zp0081 .proofLead strong{font-size:clamp(28px,4vw,60px);line-height:1}
.zp0081 details{border-top:1px solid var(--border);padding:20px 0}
.zp0081 details summary{font-weight:800;cursor:pointer}
.zp0081 details p{color:var(--muted);max-width:70ch}
.zp0081 .projects .projectGrid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
.zp0081 .projects article{min-height:260px;padding:24px;background:var(--surface);border-radius:var(--radius);display:flex;flex-direction:column;justify-content:space-between}
.zp0081 .projects article:nth-child(2){transform:translateY(32px)}
.zp0081 .schedule,.zp0081 .community{display:flex;align-items:end;justify-content:space-between;gap:40px}
.zp0081 .researchRows p{display:grid;grid-template-columns:100px 1fr;padding:15px 0;border-bottom:1px solid var(--border)}
.zp0081 .packages{display:grid;grid-template-columns:1fr repeat(3,1fr);gap:12px}
.zp0081 .packages>.sectionTitle{grid-column:1/-1}
.zp0081 .packages article{padding:24px;border:1px solid var(--border)}
.zp0081 .researchRows{max-width:900px;margin-left:auto}
.zp0081 .contact{padding:clamp(72px,10vw,150px) max(24px,calc((100vw - var(--max))/2));background:var(--fg);color:var(--bg);display:grid;grid-template-columns:1.5fr .5fr;gap:5vw;align-items:end}
.zp0081 .contact .eyebrow{color:var(--bg)}
.zp0081 .contact h2{font-size:clamp(48px,8vw,130px);line-height:.88;letter-spacing:-.055em;margin:0;max-width:9ch}
.zp0081 .contactMeta{display:grid;gap:10px}
.zp0081 .footer{padding:24px max(24px,calc((100vw - var(--max))/2));display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;border-top:var(--line) solid var(--border);font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
@keyframes enter-80{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@media(max-width:1024px){.zp0081 .hero{min-height:auto}
.zp0081 .serviceGrid{grid-template-columns:repeat(2,1fr)}
.zp0081 .proof{grid-template-columns:1fr 1fr}
.zp0081 .packages{grid-template-columns:1fr 1fr}
.zp0081 .packages>.sectionTitle{grid-column:1/-1}}
@media(max-width:768px){.zp0081 .nav nav{display:none}
.zp0081 .mobileMenu{display:block;position:absolute;right:18px;top:16px;z-index:30}
.zp0081 .mobileMenu summary{cursor:pointer;padding:9px 12px;border:1px solid var(--border);background:var(--bg);border-radius:var(--radius);font-weight:800;list-style:none}
.zp0081 .mobileMenu nav{position:absolute;right:0;top:44px;display:grid;min-width:170px;background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);padding:10px}
.zp0081 .mobileMenu nav a{padding:10px 8px}
.zp0081 .hero,.zp0081 .coverHero{grid-template-columns:1fr}
.zp0081 .section,.zp0081 .sectionTitle,.zp0081 .contact{grid-template-columns:1fr}
.zp0081 .projects .projectGrid{grid-template-columns:1fr}
.zp0081 .projects article:nth-child(2){transform:none}
.zp0081 .section{display:block}}
@media(max-width:430px){.zp0081{font-size:16px}
.zp0081 .hero,.zp0081 .section,.zp0081 .contact{padding-left:18px;padding-right:18px}
.zp0081 .serviceGrid,.zp0081 .proof,.zp0081 .packages{grid-template-columns:1fr}
.zp0081 h1{font-size:clamp(42px,14vw,70px)}}

.zp0081 .heroActions a,.zp0081 .primary,.zp0081 .ctaBtn,.zp0081 .btnPrimary,.zp0081 .schedule>a,.zp0081 .newsletter>a{transition:all .2s ease}
.zp0081 .heroActions a:hover,.zp0081 .primary:hover,.zp0081 .ctaBtn:hover,.zp0081 .btnPrimary:hover{
  transform:scale(1.05) rotate(-1deg)
}
.zp0081 nav a,.zp0081 .nav a,.zp0081 .footer a{transition:opacity .15s ease,color .15s ease}
.zp0081 nav a:hover,.zp0081 .nav a:hover,.zp0081 .footer a:hover{
  color:var(--primary)
}
.zp0081 .serviceGrid article,.zp0081 .projectCard,.zp0081 .teamCard,.zp0081 .bentoCard{transition:transform .2s ease,box-shadow .2s ease,opacity .2s ease}
.zp0081 .serviceGrid article:hover,.zp0081 .projectCard:hover,.zp0081 .teamCard:hover,.zp0081 .bentoCard:hover{
  transform:scale(1.02) rotate(.5deg)
}
@media(prefers-reduced-motion:reduce){.zp0081 *,.zp0081 *::before,.zp0081 *::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}@media(max-width:430px){.zp0081 a,.zp0081 button,.zp0081 summary{min-height:44px;min-width:44px;display:inline-flex;align-items:center}}}
`}</style>
    <header className="nav"><strong>{businessName}</strong><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></header>
    <details className="mobileMenu"><summary>Menu</summary><nav><a href="#services">Services</a><a href="#proof">Proof</a><a href="#contact">Contact</a></nav></details>
    <section className="hero coverHero"><div className="issue">Issue 0081</div><h1>{businessName}</h1>{heroImage ? <img className="heroPhoto" src={heroImage} alt={imageAlt}/> : <div className="visual"><span className="visualIndex">80</span><div className="visualMark"/><small>{businessName}</small></div>}<div className="coverCaption"><b>{headline}</b><p>{description}</p></div></section>
    <section className="section packages"><div className="sectionTitle"><span>Packages</span><h2>Choose the level of support you need.</h2></div>{packages.map(x=><article key={x.name}><h3>{x.name}</h3><p>{x.note}</p><b>{x.price}</b></article>)}</section>
    <section className="section projects"><div className="sectionTitle"><span>Selected work</span><h2>Recent work with the decisions left visible.</h2></div><div className="projectGrid">{projects.map((p,i)=><article key={p}><span>{String(i+1).padStart(2,"0")}</span><h3>{p}</h3><p>{serviceNotes[(i+1)%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section proof" id="proof"><div className="proofLead"><span>Why clients choose us</span><strong>{proofPoints[0]}</strong></div>{proofPoints.slice(1).map(x=><div key={x}><span>✓</span><b>{x}</b></div>)}</section>
    <section className="section services" id="services"><div className="sectionTitle"><span>Services</span><h2>What people come here for.</h2></div><div className="serviceGrid">{services.map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{serviceNotes[i%serviceNotes.length]}</p></article>)}</div></section>
    <section className="section schedule"><div><span>Availability</span><h2>Choose a time that works.</h2><p>Live appointment availability is shown in the Zylora contact panel.</p></div><a href="#contact">Open booking</a></section>
    <section className="section research"><div className="sectionTitle"><span>Evidence</span><h2>Decisions grounded in useful information.</h2></div><div className="researchRows">{proofPoints.map((x,i)=><p key={x}><b>R{i+1}</b><span>{x}</span></p>)}</div></section>
    <section className="section community"><div><span>Community</span><h2>Built around people, not just transactions.</h2></div><p>{storyBody}</p><a href="#contact">Join / enquire</a></section>
    <section className="contact" id="contact"><div><span className="eyebrow">Next step</span><h2>Send an enquiry</h2></div><div className="contactMeta"><span>{email}</span>{phone&&<span>{phone}</span>}{address&&<span>{address}</span>}<small>The floating Zylora contact panel handles forms, lead capture, chat, and appointment booking.</small></div></section>
    <footer className="footer"><span>{businessName}</span><span>Playful / community-led</span><span>Responsive · Accessible · Lead-ready</span></footer>
  </main>;
}
