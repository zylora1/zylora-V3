import re
from pathlib import Path

index_path = Path("static/index.html")
content = index_path.read_text(encoding='utf-8')

head_match = re.search(r'(?s)(<!doctype html>.*?</nav>\s*</div>\s*<!-- Mobile Drawer -->.*?</div>\s*)<main>', content)
head_nav = head_match.group(1) if head_match else ""

footer_match = re.search(r'(?s)(</main>\s*<script>.*)', content)
if not footer_match:
    footer_match = re.search(r'(?s)(</main>.*)', content)
footer = footer_match.group(1) if footer_match else "</main>\n</body>\n</html>"

pricing = Path("scratch_pricing.txt").read_text(encoding='utf-16') if Path("scratch_pricing.txt").exists() else ""
pricing = pricing.replace("Transparent Pricing", "SIMPLE PRICING").replace("Simple plans. No hidden <span>commissions.</span>", "Build and publish from $9/month.")

faq = Path("scratch_faq.txt").read_text(encoding='utf-16') if Path("scratch_faq.txt").exists() else ""
faq = faq.replace("Common Questions", "Questions, answered")

templates = Path("scratch_templates.txt").read_text(encoding='utf-16') if Path("scratch_templates.txt").exists() else ""
templates = templates.replace("Production Templates", "START WITH AN IDEA OR A TEMPLATE").replace("Pick a build. Make it yours.", "Build for the business you actually have.")

workflow = Path("scratch_workflow.txt").read_text(encoding='utf-16') if Path("scratch_workflow.txt").exists() else ""
workflow = workflow.replace("Connected Lifecycle", "How does Zylora work?").replace("Describe. Generate. Edit. <span>Publish.</span>", "One continuous workflow.")

main_content = f"""<main>
    <section class="bp-hero" aria-labelledby="hero-title">
      <div class="bp-hero-lines" aria-hidden="true">
        <svg viewBox="0 0 1200 600" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 6" opacity="0.18">
          <circle cx="600" cy="300" r="280" />
          <circle cx="600" cy="300" r="180" />
          <line x1="100" y1="300" x2="1100" y2="300" />
          <line x1="600" y1="50" x2="600" y2="550" />
        </svg>
      </div>

      <div class="bp-hero-content container">
        <div class="bp-badge">
          <span class="bp-badge-dot"></span>
          AI WEBSITE BUILDER + PROFESSIONAL VISUAL STUDIO
        </div>
        <h1 id="hero-title">Build the website. <span>Run the business.</span></h1>
        <p class="bp-hero-description">
          Create with AI. Design with professional control. Publish and run the website in one place.
        </p>

        <div class="bp-prompt-area">
          <form class="bp-prompt" id="hardwarePromptForm">
            <label for="businessPrompt" class="sr-only">Describe the website project you want to build</label>
            <textarea id="businessPrompt" maxlength="500" rows="3" placeholder="Build a modern business website with a contact form and a portfolio gallery..."></textarea>
            
            <div class="bp-prompt-footer">
              <div class="bp-prompt-actions">
                <a class="bp-submit-button" href="/signup" style="text-decoration:none;">
                  <span>Start building</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </a>
                <a class="bp-demo-button" href="/zylora-studio" style="text-decoration:none;">
                  Explore Zylora Studio
                </a>
              </div>
            </div>
          </form>
        </div>

        <div class="hero-visual-enhancement">
          <div class="ui-topbar">
            <div class="ui-topbar-left">
              <div class="ui-dot"></div><div class="ui-dot"></div><div class="ui-dot"></div>
            </div>
            <div style="font-size:12px; color:#a8a59d; font-family:var(--bp-font-mono); letter-spacing:0.05em;">FROM PROMPT TO PUBLISHED WEBSITE</div>
            <div style="width:100px;"></div>
          </div>
          
          <div class="ui-workspace" style="padding: 40px; text-align: center;">
            <h2 style="color: #fff; font-size: 24px; margin-bottom: 10px;">One workflow from idea to live website.</h2>
            <p style="color: #a8a59d; font-size: 16px;">Describe -> Design -> Publish</p>
          </div>
        </div>
      </div>
    </section>

    <section class="capabilities-section container" style="padding: 80px 0;">
        <header class="section-header">
          <span class="section-label">BUILT FOR THE WHOLE WEBSITE LIFECYCLE</span>
          <h2 class="section-title">Create, design, publish, and manage without stitching tools together.</h2>
        </header>
        <div class="capabilities-grid">
          <div class="capability-card">
            <h3 class="capability-title">Create</h3>
            <p class="capability-desc">Start with AI. Describe your business to get a structured first draft.</p>
          </div>
          <div class="capability-card">
            <h3 class="capability-title">Design</h3>
            <p class="capability-desc">Edit in Studio. Full Canva-grade visual control over every layer.</p>
          </div>
          <div class="capability-card">
            <h3 class="capability-title">Publish</h3>
            <p class="capability-desc">Deploy instantly. Connected to custom domains on a global edge network.</p>
          </div>
          <div class="capability-card">
            <h3 class="capability-title">Manage</h3>
            <p class="capability-desc">Run the business. Built-in lead capture, CRM, and appointment scheduling.</p>
          </div>
        </div>
    </section>

    <section class="container" style="padding: 80px 0; max-width: 800px; text-align: center;">
        <span class="section-label">What is Zylora?</span>
        <h2 class="section-title">A complete operating system for your public web presence.</h2>
        <p style="font-size: 1.1rem; color: var(--zy-warm-text); line-height: 1.6; margin-top: 20px;">
          Zylora replaces the fragmented stack of website builders, hosting providers, form plugins, and analytics tools. 
          It gives you an AI engine to start, a professional Visual Studio to edit, and built-in conversion tools to grow.
        </p>
    </section>

    {workflow}

    <section class="container capabilities-section" style="padding: 80px 0;">
        <div class="capabilities-grid">
            <div class="capability-card" style="grid-column: span 2;">
                <span class="section-label">ZYLORA STUDIO</span>
                <h2 class="section-title">AI gets you started. Studio gives you control.</h2>
                <p class="capability-desc">Don't get stuck with a rigid AI generation. Move into a full-featured visual editor with layers, responsive breakpoints, and custom typography.</p>
            </div>
            <div class="capability-card" style="grid-column: span 2;">
                <span class="section-label">ZYLORA AI</span>
                <h2 class="section-title">Use AI before, during, and after the first draft.</h2>
                <p class="capability-desc">AI isn't just for templates. Ask the Studio AI to write better headlines, adjust sections, or act as a 24/7 sales assistant on your live site.</p>
            </div>
        </div>
    </section>

    <section class="container capabilities-section" style="padding: 80px 0;">
        <header class="section-header">
            <span class="section-label">AFTER YOU PUBLISH</span>
            <h2 class="section-title">A website is only useful when it can do something.</h2>
        </header>
        <div class="capabilities-grid">
            <div class="capability-card">
                <h3 class="capability-title">Integrated CRM</h3>
                <p class="capability-desc">Capture leads natively.</p>
            </div>
            <div class="capability-card">
                <h3 class="capability-title">Appointments</h3>
                <p class="capability-desc">Book meetings easily.</p>
            </div>
            <div class="capability-card">
                <h3 class="capability-title">PUBLISHING INCLUDED</h3>
                <p class="capability-desc">Design it here. Publish it here. Custom domains and SSL.</p>
            </div>
            <div class="capability-card">
                <h3 class="capability-title">BUILT FOR MOBILE</h3>
                <p class="capability-desc">Manage your website without opening a desktop.</p>
            </div>
        </div>
    </section>

    {templates}

    <section class="container capabilities-section" style="padding: 80px 0;">
        <header class="section-header">
            <span class="section-label">Who is Zylora for?</span>
            <h2 class="section-title">Built for builders, businesses, and agencies.</h2>
        </header>
        <div class="capabilities-grid">
            <div class="capability-card">
                <h3 class="capability-title">Small Businesses</h3>
                <p class="capability-desc">Get online fast and start capturing leads without hiring a dev team.</p>
            </div>
            <div class="capability-card">
                <h3 class="capability-title">Agencies & Freelancers</h3>
                <p class="capability-desc">Build sites faster for clients, hand them a clean dashboard.</p>
            </div>
            <div class="capability-card">
                <h3 class="capability-title">Creators</h3>
                <p class="capability-desc">Launch portfolios and landing pages that convert.</p>
            </div>
        </div>
    </section>

    <section class="container" style="padding: 80px 0; text-align: center;">
        <span class="section-label">COMPARE ZYLORA</span>
        <h2 class="section-title">See how Zylora fits your workflow.</h2>
        <div style="display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-top: 40px;">
            <a href="/compare/wix" class="btn btn-secondary">Zylora vs Wix</a>
            <a href="/compare/webflow" class="btn btn-secondary">Zylora vs Webflow</a>
            <a href="/compare/framer" class="btn btn-secondary">Zylora vs Framer</a>
            <a href="/compare/squarespace" class="btn btn-secondary">Zylora vs Squarespace</a>
            <a href="/compare/wordpress" class="btn btn-secondary">Zylora vs WordPress</a>
            <a href="/compare/canva" class="btn btn-secondary">Zylora vs Canva</a>
        </div>
    </section>

    <section class="container" style="padding: 80px 0;">
        <span class="section-label">More than an AI website generator.</span>
        <h2 class="section-title" style="margin-bottom:40px;">Zylora vs The Rest</h2>
        <table style="width: 100%; text-align: left; border-collapse: collapse;">
            <thead>
                <tr style="border-bottom: 2px solid var(--zy-warm-line-soft);">
                    <th style="padding: 16px;">Feature</th>
                    <th style="padding: 16px; color: var(--zy-brand-primary);">Zylora</th>
                    <th style="padding: 16px;">Others</th>
                </tr>
            </thead>
            <tbody>
                <tr style="border-bottom: 1px solid var(--zy-warm-line-soft);">
                    <td style="padding: 16px;">AI Generation</td>
                    <td style="padding: 16px; font-weight: bold;">Native & Contextual</td>
                    <td style="padding: 16px; color: #8c8c85;">Basic templates</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--zy-warm-line-soft);">
                    <td style="padding: 16px;">Visual Studio</td>
                    <td style="padding: 16px; font-weight: bold;">Canva-grade Control</td>
                    <td style="padding: 16px; color: #8c8c85;">Rigid blocks</td>
                </tr>
                <tr style="border-bottom: 1px solid var(--zy-warm-line-soft);">
                    <td style="padding: 16px;">Built-in CRM</td>
                    <td style="padding: 16px; font-weight: bold;">Yes</td>
                    <td style="padding: 16px; color: #8c8c85;">Expensive add-on</td>
                </tr>
            </tbody>
        </table>
    </section>

    {pricing}
    {faq}

    <section class="container" style="padding: 120px 0; text-align: center;">
        <span class="section-label">READY TO BUILD?</span>
        <h2 class="section-title" style="font-size: 3rem; margin-bottom: 30px;">Start with an idea. End with a live website.</h2>
        <a href="/signup" class="btn btn-primary" style="font-size: 1.25rem; padding: 16px 32px;">Start building free</a>
    </section>
"""

new_content = head_nav + main_content + footer
index_path.write_text(new_content, encoding='utf-8')
print("Wrote new index.html")
