import re
from pathlib import Path

seo_path = Path("app/public_seo.py")
content = seo_path.read_text(encoding='utf-8')

new_pages = """
    "/compare": {
        "title": "Compare Zylora | Alternatives & Comparisons",
        "description": "See how Zylora compares to Wix, Webflow, Framer, Squarespace, and WordPress for AI generation, visual editing, and CRM.",
        "eyebrow": "Compare Zylora",
        "h1": "Choose the right foundation for your business.",
        "intro": "A website is an operational asset. Compare Zylora against traditional site builders to see where AI, native CRM, and Canva-grade visual editing make the difference.",
        "visual": "COMPARISON HUB",
        "workflow": [
            "Review your requirements",
            "Understand the trade-offs",
            "Choose a platform that scales"
        ],
        "use_cases": "Zylora is built for businesses that want to launch fast with AI but need the professional design control and built-in CRM that most AI generators lack.",
        "capabilities": [
            "Canva-grade Visual Studio",
            "Native Lead Capture & CRM",
            "Automated SSL & Custom Domains"
        ],
        "faq": [
            ("Why choose Zylora over a template builder?", "Zylora generates a custom starting point based on your business, rather than forcing your content into a rigid pre-made template.")
        ],
        "related": [
            ("Zylora vs Wix", "/compare/wix"),
            ("Zylora vs Webflow", "/compare/webflow"),
            ("Zylora vs Framer", "/compare/framer"),
            ("Zylora vs WordPress", "/compare/wordpress")
        ]
    },
    "/compare/wix": {
        "title": "Zylora vs Wix | AI Website Builder Comparison",
        "description": "Compare Zylora and Wix. See why businesses choose Zylora for its focused AI generation, professional Studio, and native CRM.",
        "eyebrow": "Zylora vs Wix",
        "h1": "Zylora vs Wix: Which is right for you?",
        "intro": "Wix is a mature, general-purpose website builder. Zylora is a focused, AI-first platform built specifically for businesses that need to move from an idea to a converting website without wrestling with complex grids.",
        "visual": "ZYLORA VS WIX",
        "workflow": [
            "Wix offers hundreds of generic templates. Zylora generates a site structure specifically for your brief.",
            "Wix's editor can become cluttered. Zylora provides a clean, Canva-grade visual workspace.",
            "Both offer business tools, but Zylora integrates CRM and lead capture directly into the publishing workflow."
        ],
        "use_cases": "If you want to spend hours tweaking absolutely everything in a traditional template, Wix is solid. If you want a professional result fast with AI, use Zylora.",
        "capabilities": [
            "Zylora: AI-First Generation",
            "Zylora: Integrated CRM Pipeline",
            "Wix: Massive Template Library"
        ],
        "faq": [
            ("Does Zylora have templates like Wix?", "Zylora uses AI to generate your layout, but also offers high-quality production starting points if you prefer.")
        ],
        "related": [
            ("Compare All", "/compare"),
            ("Zylora Studio", "/zylora-studio"),
            ("Pricing", "/pricing")
        ]
    },
    "/compare/webflow": {
        "title": "Zylora vs Webflow | Visual Development Comparison",
        "description": "Compare Zylora and Webflow. Learn why teams choose Zylora for faster business iteration without needing a frontend developer.",
        "eyebrow": "Zylora vs Webflow",
        "h1": "Zylora vs Webflow: Speed vs Complexity.",
        "intro": "Webflow is a powerful visual development tool that requires an understanding of HTML and CSS. Zylora gives you professional visual control without the steep learning curve.",
        "visual": "ZYLORA VS WEBFLOW",
        "workflow": [
            "Webflow requires knowledge of classes, divs, and flexbox.",
            "Zylora uses a Canva-grade direct manipulation editor that anyone can use.",
            "Zylora natively includes an AI Sales Assistant and CRM out of the box."
        ],
        "use_cases": "Use Webflow if you are a frontend developer building complex, bespoke animations. Use Zylora if you are a business owner or agency wanting to launch and convert customers fast.",
        "capabilities": [
            "Zylora: Zero Learning Curve Editor",
            "Webflow: Advanced CSS Control",
            "Zylora: Built-in Lead Generation"
        ],
        "faq": [
            ("Can I export code from Zylora like Webflow?", "Zylora hosts your site on its edge network with custom domains included, optimizing performance automatically.")
        ],
        "related": [
            ("Compare All", "/compare"),
            ("AI Website Builder", "/ai-website-builder"),
            ("Features", "/features")
        ]
    },
    "/compare/framer": {
        "title": "Zylora vs Framer | Design Tool Comparison",
        "description": "Compare Zylora and Framer. Discover the difference between a designer-focused tool and a business-focused growth platform.",
        "eyebrow": "Zylora vs Framer",
        "h1": "Zylora vs Framer: Business growth vs Prototyping.",
        "intro": "Framer is excellent for designers who want to publish their Figma-like prototypes. Zylora is built for businesses that need to actually capture leads, schedule appointments, and manage customers.",
        "visual": "ZYLORA VS FRAMER",
        "workflow": [
            "Framer focuses heavily on scroll animations and visual effects.",
            "Zylora focuses on high-converting copy, clear architecture, and lead capture.",
            "Zylora's Studio is easier for non-designers to update content."
        ],
        "use_cases": "If your primary goal is award-winning micro-interactions, Framer is a great choice. If your goal is to acquire customers and manage leads, Zylora is the better tool.",
        "capabilities": [
            "Zylora: Built-in CRM and Appointments",
            "Framer: Advanced Animation Engine",
            "Zylora: AI Copy & Layout Generation"
        ],
        "faq": [
            ("Does Zylora have animations?", "Zylora includes tasteful, performance-optimized animations out of the box without requiring complex timeline configuration.")
        ],
        "related": [
            ("Compare All", "/compare"),
            ("Appointments", "/appointments"),
            ("Lead Generation", "/lead-generation")
        ]
    },
    "/compare/squarespace": {
        "title": "Zylora vs Squarespace | Website Builder Comparison",
        "description": "Compare Zylora and Squarespace. See why modern businesses prefer Zylora's AI generation and integrated CRM over older template builders.",
        "eyebrow": "Zylora vs Squarespace",
        "h1": "Zylora vs Squarespace: The modern alternative.",
        "intro": "Squarespace provides beautiful static templates. Zylora provides dynamic AI generation, a more flexible editor, and built-in tools to actually run your business.",
        "visual": "ZYLORA VS SQUARESPACE",
        "workflow": [
            "Squarespace locks you into a specific grid system.",
            "Zylora gives you a flexible, Canva-like canvas to move elements freely.",
            "Zylora includes an AI Sales Assistant to engage visitors 24/7."
        ],
        "use_cases": "Squarespace is fine for a basic portfolio. Zylora is built for service businesses, agencies, and companies that want their website to act as a growth engine.",
        "capabilities": [
            "Zylora: Flexible Visual Studio",
            "Squarespace: Rigid Template Engine",
            "Zylora: 24/7 AI Sales Assistant"
        ],
        "faq": [
            ("Is Zylora harder to use than Squarespace?", "No. Zylora's AI gets you to a first draft faster, and the Visual Studio is as intuitive as presentation software.")
        ],
        "related": [
            ("Compare All", "/compare"),
            ("Website Builder", "/website-builder"),
            ("Zylora AI", "/ai-editor")
        ]
    },
    "/compare/wordpress": {
        "title": "Zylora vs WordPress | Platform Comparison",
        "description": "Compare Zylora and WordPress. Stop managing plugins, updates, and servers. Build and grow with Zylora's unified platform.",
        "eyebrow": "Zylora vs WordPress",
        "h1": "Zylora vs WordPress: Unified vs Fragmented.",
        "intro": "WordPress requires you to stitch together hosting, themes, plugins, and security updates. Zylora is a unified, fully-managed platform where everything just works.",
        "visual": "ZYLORA VS WORDPRESS",
        "workflow": [
            "WordPress means constant plugin updates and security risks.",
            "Zylora is fully managed on an enterprise edge network.",
            "Zylora replaces 10+ WordPress plugins (SEO, forms, caching, CRM) out of the box."
        ],
        "use_cases": "If you want to spend time managing servers and plugins, use WordPress. If you want to spend time growing your business, use Zylora.",
        "capabilities": [
            "Zylora: Zero Maintenance",
            "Zylora: Built-in SEO & Performance",
            "WordPress: Requires Third-party Plugins"
        ],
        "faq": [
            ("Do I need to buy hosting with Zylora?", "No. Enterprise-grade edge hosting and SSL are included with your Zylora plan automatically.")
        ],
        "related": [
            ("Compare All", "/compare"),
            ("Custom Domains", "/custom-domains"),
            ("Pricing", "/pricing")
        ]
    },
    "/compare/canva": {
        "title": "Zylora vs Canva Websites | Comparison",
        "description": "Compare Zylora and Canva Websites. Canva is great for graphics, but Zylora is built for real, multi-page business websites with CRM.",
        "eyebrow": "Zylora vs Canva",
        "h1": "Zylora vs Canva: Real websites vs Graphics.",
        "intro": "Canva is an incredible graphic design tool that added basic single-page websites. Zylora is a dedicated website platform built for SEO, multi-page architecture, and lead capture.",
        "visual": "ZYLORA VS CANVA",
        "workflow": [
            "Canva websites are essentially published presentations.",
            "Zylora generates semantic HTML, proper SEO structures, and fast-loading assets.",
            "Zylora includes a native CRM to capture and manage leads."
        ],
        "use_cases": "Use Canva for social media posts and flyers. Use Zylora for your actual business website.",
        "capabilities": [
            "Zylora: Multi-page Architecture & SEO",
            "Zylora: Integrated CRM Pipeline",
            "Canva: Single-page basic publishing"
        ],
        "faq": [
            ("Is Zylora's editor similar to Canva?", "Yes! We built the Zylora Studio to be as intuitive as Canva, but with the power to output professional, responsive web code.")
        ],
        "related": [
            ("Compare All", "/compare"),
            ("SEO", "/seo"),
            ("Zylora Studio", "/zylora-studio")
        ]
    },
"""

pattern = r'(PRODUCTS:\s*dict\[str,\s*dict\[str,\s*Any\]\]\s*=\s*\{)'
if re.search(pattern, content):
    content = re.sub(pattern, r'\g<1>\n' + new_pages, content)
    seo_path.write_text(content, encoding='utf-8')
    print("Success")
else:
    print("Failed to find PRODUCTS dictionary.")
