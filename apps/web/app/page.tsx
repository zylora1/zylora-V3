import MarketingNav from '../components/MarketingNav';
import type {Metadata} from 'next';
import Link from 'next/link';

export const metadata:Metadata={
  title:'Zylora — Build the website. Run the business.',
  description:'Create a premium website, edit with AI, publish, capture leads, schedule appointments and export your source.',
  alternates:{canonical:'/'},
  openGraph:{
    title:'Zylora — Build the website. Run the business.',
    description:'Premium websites, AI editing, leads, appointments and publishing in one platform.',
    url:'/',siteName:'Zylora',type:'website',images:['/zylora-logo.png']
  },
  twitter:{card:'summary_large_image',title:'Zylora — Build the website. Run the business.',description:'Premium website creation, AI editing, publishing, leads, appointments and source export.',images:['/zylora-logo.png']}
};

export default function Home(){
  const ld={
    "@context":"https://schema.org",
    "@graph":[
      {"@type":"Organization","@id":"https://zylora.com/#organization",name:"Zylora",url:"https://zylora.com",logo:"https://zylora.com/zylora-logo.png"},
      {"@type":"SoftwareApplication",name:"Zylora",applicationCategory:"BusinessApplication",operatingSystem:"Web",description:"Website creation, publishing, lead generation and business web operations platform."}
    ]
  };

  const showcaseTemplates=[
    {key:'template-0046-physio-brutalism',label:'Brutalism',sub:'Raw, deliberate, editorial'},
    {key:'template-0219-cafe-art-deco',label:'Art Deco',sub:'Cinematic, opulent, structured'},
    {key:'template-0494-ai-company-neo-futurism',label:'Neo-Futurism',sub:'Tech-forward, clean precision'},
    {key:'template-0001-dental-minimalism',label:'Minimalism',sub:'Restrained, elegant, purposeful'},
    {key:'template-0065-wellness-claymorphism',label:'Claymorphism',sub:'Soft, dimensional, approachable'},
    {key:'template-0131-school-neo-brutalism',label:'Neo-Brutalism',sub:'Bold type, deliberate tension'},
  ];

  return (
    <main className="landing">
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(ld).replace(/</g,'\\u003c')}}/>
      <MarketingNav/>

      {/* HERO */}
      <section className="hero">
        <span className="eyebrow">Website creation, re-engineered</span>
        <h1>Build the website.<br/>Run the business.</h1>
        <p>Premium design, AI editing, publishing, leads, appointments, analytics and source export — connected in one operating system for your web presence.</p>
        <div className="hero-ctas">
          <Link href="/signup" className="btn-primary">Create your website</Link>
          <Link href="/templates" className="btn-secondary">Browse templates</Link>
        </div>
        <div className="orb" aria-hidden="true"/>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="story" id="platform">
        <span className="eyebrow">One connected platform</span>
        <h2>Your website shouldn&apos;t stop working when it goes live.</h2>
        <div className="rail">
          <article className="feature">
            <div className="featureIcon">🎨</div>
            <strong>A broad design catalogue.</strong>
            <p>Explore distinctive editorial, Swiss, brutalist, cinematic, luxury, bento, retro and experimental design directions. Over 1,008 templates.</p>
          </article>
          <article className="feature">
            <div className="featureIcon">✦</div>
            <strong>Edit manually or with AI.</strong>
            <p>Use OpenAI-powered editing to update your content, layout and settings while keeping the professional composition intact.</p>
          </article>
          <article className="feature">
            <div className="featureIcon">⚡</div>
            <strong>Turn visitors into customers.</strong>
            <p>Lead capture forms, an intelligent website chatbot and server-authoritative appointment scheduling built directly into your site.</p>
          </article>
        </div>
      </section>

      {/* TEMPLATE SHOWCASE */}
      <section className="section-showcase">
        <div className="showcaseHeader">
          <span className="eyebrow">Design Directions</span>
          <h2>Start from a premium foundation</h2>
          <p>Over 1,008 distinct templates across 63 industries and 76 design styles — editorial, brutalist, minimal, cinematic, glassmorphic, retro and more.</p>
        </div>
        <div className="showcase-grid">
          {showcaseTemplates.map(({key,label,sub})=>(
            <Link key={key} href={`/template-preview/${key}`} target="_blank" className="showcase-item">
              <div className="showcase-image" style={{backgroundImage:`url(/template-previews/${key}.jpg)`}}/>
              <div className="showcase-info">
                <h3>{label}</h3>
                <p>{sub}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="showcaseCta">
          <Link href="/templates" className="btn-secondary">View all 1,008 templates →</Link>
        </div>
      </section>

      {/* OPERATIONS */}
      <section className="story">
        <span className="eyebrow">Everything you need to operate</span>
        <h2>Not just a page builder.</h2>
        <div className="rail">
          <article className="feature">
            <div className="featureIcon">📥</div>
            <strong>Lead capture &amp; chatbot</strong>
            <p>Forms and AI-powered conversational agents that capture and qualify visitors around the clock — without third-party tools.</p>
          </article>
          <article className="feature">
            <div className="featureIcon">📅</div>
            <strong>Appointment scheduling</strong>
            <p>Let clients book directly on your site. Set availability, manage appointments and send confirmations from the same dashboard.</p>
          </article>
          <article className="feature">
            <div className="featureIcon">📦</div>
            <strong>Export &amp; ownership</strong>
            <p>You own your code. Export your entire project as standard React/Next.js whenever you want. No lock-in.</p>
          </article>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="section-ai">
        <div className="aiContent">
          <span className="eyebrow">AI by OpenAI</span>
          <h2>Your website, edited by AI.</h2>
          <p>Describe a change in plain language and Zylora&apos;s AI applies it directly — updating copy, reconfiguring sections and adjusting settings while preserving your template&apos;s professional composition.</p>
          <p>Manual editing tools sit alongside AI — switch between them freely. Every change is reversible.</p>
          <Link href="/signup" className="btn-primary">Try AI editing</Link>
        </div>
      </section>

      {/* PUBLISHING */}
      <section className="story">
        <span className="eyebrow">Publishing</span>
        <h2>One click to go live.</h2>
        <div className="rail">
          <article className="feature">
            <div className="featureIcon">🌐</div>
            <strong>Publish instantly</strong>
            <p>Your website goes live on a Zylora subdomain immediately. No DNS waiting, no hosting configuration.</p>
          </article>
          <article className="feature">
            <div className="featureIcon">🔗</div>
            <strong>Custom domains</strong>
            <p>Point your own domain to your Zylora site. Full HTTPS, fast CDN and reliable uptime included.</p>
          </article>
          <article className="feature">
            <div className="featureIcon">🔄</div>
            <strong>Switch designs freely</strong>
            <p>Change your template or redesign your site while keeping all your leads, appointments and business data intact.</p>
          </article>
        </div>
      </section>

      {/* PRICING */}
      <section className="section-pricing" id="pricing">
        <div className="showcaseHeader">
          <span className="eyebrow">Pricing</span>
          <h2>Start free. Grow when you&apos;re ready.</h2>
          <p>No credit card required to get started.</p>
        </div>
        <div className="pricingGrid">
          <div className="pricingCard">
            <div className="pricingName">Free</div>
            <div className="pricingPrice">$0</div>
            <div className="pricingPer">forever</div>
            <ul className="pricingFeatures">
              <li>1 website</li>
              <li>Zylora subdomain</li>
              <li>Lead capture</li>
              <li>Website chatbot</li>
              <li>Template gallery access</li>
            </ul>
            <Link href="/signup" className="btn-secondary pricingCta">Get started free</Link>
          </div>
          <div className="pricingCard">
            <div className="pricingName">Starter</div>
            <div className="pricingPrice">From $12</div>
            <div className="pricingPer">per month</div>
            <ul className="pricingFeatures">
              <li>Everything in Free</li>
              <li>Custom domain</li>
              <li>AI editing credits</li>
              <li>Appointment scheduling</li>
              <li>Analytics</li>
            </ul>
            <Link href="/signup" className="btn-secondary pricingCta">Start Starter</Link>
          </div>
          <div className="pricingCard pricingFeatured">
            <div className="pricingBadge">Most popular</div>
            <div className="pricingName">Growth</div>
            <div className="pricingPrice">From $29</div>
            <div className="pricingPer">per month</div>
            <ul className="pricingFeatures">
              <li>Everything in Starter</li>
              <li>More AI credits</li>
              <li>Priority support</li>
              <li>Source export</li>
              <li>Ownership transfer</li>
            </ul>
            <Link href="/signup" className="btn-primary pricingCta">Start Growth</Link>
          </div>
          <div className="pricingCard">
            <div className="pricingName">Managed</div>
            <div className="pricingPrice">Custom</div>
            <div className="pricingPer">expert-built</div>
            <ul className="pricingFeatures">
              <li>Expert design &amp; build</li>
              <li>Custom brief consultation</li>
              <li>Full handover on completion</li>
              <li>Ongoing managed support</li>
              <li>Priority delivery</li>
            </ul>
            <Link href="/managed" className="btn-secondary pricingCta">Talk to experts</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-faq">
        <div className="showcaseHeader">
          <span className="eyebrow">FAQ</span>
          <h2>Common questions</h2>
        </div>
        <div className="faqGrid">
          <details className="faqItem">
            <summary>Can I use my own domain?</summary>
            <p>Yes. On Starter and above, you can connect a custom domain to your Zylora website. We handle HTTPS and CDN configuration automatically.</p>
          </details>
          <details className="faqItem">
            <summary>Can I edit any template?</summary>
            <p>Yes. Every template is fully editable. You can change content, typography, colours, images and supported layout properties using the visual editor or AI.</p>
          </details>
          <details className="faqItem">
            <summary>Can AI change my site without my permission?</summary>
            <p>No. AI editing is always initiated by you with a specific instruction. Every AI change is previewed before it applies and can be reverted.</p>
          </details>
          <details className="faqItem">
            <summary>Can I export my website code?</summary>
            <p>Yes, on Growth and above. Export your complete project as a standard React/Next.js codebase that you can host anywhere.</p>
          </details>
          <details className="faqItem">
            <summary>Can I switch templates after I&apos;ve built my site?</summary>
            <p>Yes. Your leads, appointments and business content stay intact when you change template or redesign your site.</p>
          </details>
          <details className="faqItem">
            <summary>Do I need technical knowledge?</summary>
            <p>No. Zylora is designed for business owners. The visual editor and AI assistant handle the technical work. Export is available if you later want to involve a developer.</p>
          </details>
          <details className="faqItem">
            <summary>What is &quot;Managed by experts&quot;?</summary>
            <p>A fully hands-off service where our team designs, builds and delivers a complete website to your brief. You own the result and manage it from your dashboard.</p>
          </details>
          <details className="faqItem">
            <summary>What happens to my leads?</summary>
            <p>Leads captured from your website forms and chatbot are stored in your Zylora dashboard. You can view, export and manage them at any time.</p>
          </details>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="dark-tease">
        <span className="eyebrow">Get started today</span>
        <h2>Your website is waiting.</h2>
        <p className="darkLead">Join thousands of businesses using Zylora to build premium websites, capture leads and run their web operations from one place.</p>
        <div className="hero-ctas">
          <Link className="btn-primary" href="/signup">Create your site — it&apos;s free</Link>
          <Link className="btn-ghost" href="/managed">Talk to our experts</Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footerTop">
          <Link className="brand" href="/"><img src="/zylora-logo.png" alt="Zylora"/></Link>
          <div className="footerLinks">
            <div>
              <strong>Platform</strong>
              <Link href="/#platform">Features</Link>
              <Link href="/templates">Templates</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/managed">Managed</Link>
            </div>
            <div>
              <strong>Resources</strong>
              <Link href="/blog">Blog</Link>
              <Link href="/managed">Get in touch</Link>
            </div>
            <div>
              <strong>Account</strong>
              <Link href="/login">Sign in</Link>
              <Link href="/signup">Create account</Link>
              <Link href="/dashboard">Dashboard</Link>
            </div>
            <div>
              <strong>Legal</strong>
              <Link href="/privacy">Privacy policy</Link>
              <Link href="/terms">Terms of service</Link>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <span>© {new Date().getFullYear()} Zylora. All rights reserved.</span>
        </div>
      </footer>
    </main>
  );
}
