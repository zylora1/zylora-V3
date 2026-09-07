"""Server-rendered public product and solution pages.

These pages intentionally live beside the existing static application. They are
read-only presentation routes: they do not alter authentication, billing, or
customer-site APIs, and their copy is kept in a small manifest so each page can
be reviewed as an independent search-intent document.
"""
from __future__ import annotations

import json
from html import escape
from typing import Any

from fastapi import APIRouter, HTTPException
from fastapi.responses import HTMLResponse

from .config import settings
from .template_catalogue import public_templates

router = APIRouter()


PRODUCTS: dict[str, dict[str, Any]] = {
    "/website-builder": {
        "title": "Website Builder for Businesses | Zylora",
        "description": "Build, edit, publish and grow a business website with Zylora’s visual studio, lead capture, appointments and analytics.",
        "eyebrow": "Business website builder",
        "h1": "A website builder built around what your business needs next.",
        "intro": "Zylora brings creation, editing, publishing and customer follow-up into one focused workspace. Start with a clear brief, shape the experience visually, and keep improving it as your business changes.",
        "visual": "Website structure · Visual editing · Lead capture · Appointments",
        "workflow": ["Describe the business and its audience", "Generate a structured starting point", "Refine pages, content and calls to action in Studio", "Publish, learn from analytics and improve"],
        "capabilities": ["AI-assisted site creation without a locked starting template", "Direct manipulation editing for type, buttons, cards, images and layout", "Built-in forms, AI Sales Assistant and appointment flows", "SEO settings, sitemap, robots and exportable site source"],
        "use_cases": "A practical fit for small businesses, independent professionals, agencies and teams that need a credible web presence connected to real customer workflows.",
        "faq": [("Can I edit the site after it is generated?", "Yes. Zylora Studio keeps the generated site editable so you can change structure, copy, styling and responsive behavior."), ("Can I connect a custom domain?", "Yes. Custom domains and SSL are available through the existing domain workflow in the workspace."), ("Does Zylora only create landing pages?", "No. The page structure can include the sections and conversion paths your business actually needs, including forms, content collections and booking." )],
        "related": [("AI website builder", "/ai-website-builder"), ("Zylora Studio", "/zylora-studio"), ("My Templates", "/signup")],
    },
    "/ai-website-builder": {
        "title": "AI Website Builder for Small Business | Zylora",
        "description": "Turn a plain-language business brief into an editable, publishable website with Zylora’s AI website builder.",
        "eyebrow": "AI website creation",
        "h1": "Describe the business. Start with a site that already has a point of view.",
        "intro": "Zylora turns the information you already know—your offer, audience, location and goals—into a considered website structure. The result is a starting point you can own, edit and publish.",
        "visual": "Prompt brief → Page structure → Art direction → Editable site",
        "workflow": ["Share the offer, audience and required actions", "Let Zylora shape the information architecture", "Review content, visual direction and pages", "Open the site in Studio and make it yours"],
        "capabilities": ["Natural-language brief intake", "Business-aware page and section structure", "Editable generated content and visual direction", "A direct path from creation to publishing and lead capture"],
        "use_cases": "Useful when a founder has the business knowledge but not the time—or the starting point—to design a complete web presence from a blank canvas.",
        "faq": [("Do I need to know how to prompt AI?", "No. A clear description of the business and desired outcome is enough to begin."), ("Is the generated site a static image?", "No. It opens in the same editable site runtime used by manually created sites."), ("Can I change the AI’s content?", "Yes. Generated content remains part of the editable site and can be revised in Studio." )],
        "related": [("AI website generator", "/ai-website-generator"), ("Studio editing", "/zylora-studio"), ("How to create a website with AI", "/guides/how-to-create-a-website-with-ai")],
    },
    "/ai-website-generator": {
        "title": "AI Website Generator | Zylora",
        "description": "Generate a business website from a short brief, then edit and publish it with Zylora’s visual tools.",
        "eyebrow": "From brief to browser",
        "h1": "A generated website should be a beginning, not a dead end.",
        "intro": "Zylora’s AI website generator creates a structured first version of your site, then hands control back to you. The value is not just speed—it is the editable path from an idea to a live business system.",
        "visual": "Requirements · Structure · Content · Responsive composition",
        "workflow": ["Write the business brief in plain language", "Review the generated page architecture", "Tune content and visual details", "Publish the version that is ready for customers"],
        "capabilities": ["Prompt-derived page hierarchy", "Responsive desktop, tablet and mobile previews", "AI-assisted revisions with existing editor history", "Connected publishing, SEO and conversion tools"],
        "use_cases": "A good fit for a new business, a new offer, a fast campaign site or a team validating a new direction before investing in a full build.",
        "faq": [("How long does generation take?", "Generation time depends on the brief and current service conditions; the product is designed to provide a useful starting point quickly."), ("Can I save my own design for reuse?", "Yes. Studio can save a private reusable snapshot of a design after you have made it your own."), ("Does generation change my existing site?", "No. Site creation and editing operate within the existing workspace flows and do not alter other sites without an explicit action." )],
        "related": [("AI website builder", "/ai-website-builder"), ("Website examples", "/website-examples"), ("Zylora Studio", "/zylora-studio")],
    },
    "/zylora-studio": {
        "title": "Zylora Studio | Visual Website Editor",
        "description": "Design and refine your website visually with responsive editing, direct manipulation and AI-assisted revisions in Zylora Studio.",
        "eyebrow": "Direct-manipulation editor",
        "h1": "Professional control, without turning the canvas into a code project.",
        "intro": "Zylora Studio is the place where the generated idea becomes your actual site. Edit the parts that matter, check responsive breakpoints, and keep the result connected to publishing, SEO and customer workflows.",
        "visual": "Layers · Canvas · Inspector · Responsive preview",
        "workflow": ["Select a page or section", "Edit content and layout directly on the canvas", "Check desktop, tablet and mobile states", "Save, preview and publish when ready"],
        "capabilities": ["Direct editing of text, buttons, cards and image frames", "Typography, colors, opacity, positioning and spacing controls", "Responsive preview modes and structured page layers", "AI edits plus revision history in the existing editor workflow"],
        "use_cases": "Designed for founders who want to move quickly and designers who still need enough control to make a site feel intentional.",
        "faq": [("Can I edit responsive layouts?", "Studio includes responsive preview modes so you can review the site across the supported viewport states before publishing."), ("Can I publish from Studio?", "Yes. Publishing remains part of the existing Zylora workflow after review and site settings are complete."), ("Can I export the site?", "The existing export workflow can generate an independent Next.js project from the site document." )],
        "related": [("AI website builder", "/ai-website-builder"), ("CMS", "/cms"), ("Custom domains", "/custom-domains")],
    },
    "/ai-sales-assistant": {
        "title": "AI Sales Assistant for Websites | Zylora",
        "description": "Let an AI Sales Assistant answer visitor questions, qualify leads and guide people toward a real next step on your website.",
        "eyebrow": "Conversations that move",
        "h1": "Your website can keep the conversation moving while you work.",
        "intro": "Zylora’s AI Sales Assistant gives visitors a useful response based on approved business context, captures the details that matter and can guide qualified people toward an appointment or enquiry.",
        "visual": "Visitor question → Helpful answer → Qualification → Next action",
        "workflow": ["Add the business knowledge visitors need", "Let the assistant answer common questions", "Capture qualified contact details", "Route the person toward a form or appointment"],
        "capabilities": ["Grounded answers based on your configured business context", "Visitor conversations that can capture lead details", "Appointment-aware next steps where configured", "Lead records that remain visible in the workspace"],
        "use_cases": "Especially useful for clinics, consultants, agencies, local services and any business where a fast, informed response can make the difference between interest and action.",
        "faq": [("Will it invent answers about my business?", "The assistant is designed to use the business context configured in Zylora; teams should still review and maintain that context as offers change."), ("Does it replace my team?", "No. It handles first responses and qualification so your team can spend more time on the conversations that need a person."), ("Can visitors book appointments?", "Appointment actions are supported when the relevant scheduling configuration is enabled." )],
        "related": [("Lead generation", "/lead-generation"), ("Appointments", "/appointments"), ("CRM", "/crm")],
    },
    "/lead-generation": {
        "title": "Website Lead Generation Tools | Zylora",
        "description": "Capture and organize leads from website forms and AI conversations in one Zylora workspace.",
        "eyebrow": "From interest to follow-up",
        "h1": "Make every useful enquiry easier to see and act on.",
        "intro": "A good website does more than look credible. Zylora brings form submissions and AI-assisted conversations into the workspace so you can understand who reached out and what they need next.",
        "visual": "Form · Conversation · Lead record · Follow-up",
        "workflow": ["Give visitors a clear reason to enquire", "Capture the information your team actually needs", "Review and qualify incoming leads", "Follow up from the workspace and connected tools"],
        "capabilities": ["Contextual lead-capture forms", "Lead records from supported website conversations", "Status and qualification cues for prioritization", "Existing integrations for notifications and Sheets workflows"],
        "use_cases": "For local businesses, service providers, agencies and teams that want a more dependable bridge between website traffic and sales follow-up.",
        "faq": [("Where do leads come from?", "Leads can come from forms and supported AI Sales Assistant conversations on your Zylora website."), ("Can I export or sync leads?", "The existing workspace supports connected lead workflows, including Google Sheets where configured."), ("Can I see lead status?", "The leads surface provides the existing status and management workflow available to your account." )],
        "related": [("AI Sales Assistant", "/ai-sales-assistant"), ("CRM", "/crm"), ("Website conversion guide", "/guides/how-to-get-leads-from-your-website")],
    },
    "/crm": {
        "title": "CRM for Small Businesses | Zylora",
        "description": "Keep contacts, companies, deals, tasks and customer activity close to the website that creates demand with Zylora CRM.",
        "eyebrow": "Customer relationship workspace",
        "h1": "The website and the follow-up should know about each other.",
        "intro": "Zylora CRM gives your team a place to organize the relationships created through your website. Keep the context close to the work: contacts, companies, deals, tasks and the actions that keep opportunities moving.",
        "visual": "Contacts · Pipeline · Tasks · Reports",
        "workflow": ["Capture a contact from a site interaction", "Organize the relationship and company context", "Move active opportunities through the pipeline", "Use tasks and reports to keep follow-up consistent"],
        "capabilities": ["Contacts and company records", "Pipeline and deal tracking", "Tasks, activity and automation surfaces", "CRM reporting connected to the workspace"],
        "use_cases": "A practical next step for a business that has outgrown scattered spreadsheets but still wants a calm, understandable operating surface.",
        "faq": [("Is CRM separate from my website?", "It is a workspace surface in the same Zylora product, so the customer context created by the website can stay close to follow-up."), ("Can I manage deals?", "The existing CRM surface includes pipeline and deal workflows."), ("Does CRM change my billing?", "No. Billing rules remain controlled by the existing plan and account configuration." )],
        "related": [("Lead generation", "/lead-generation"), ("Appointments", "/appointments"), ("Analytics", "/analytics")],
    },
    "/appointments": {
        "title": "Online Appointment Booking Website | Zylora",
        "description": "Add a clear appointment path to your website with availability, booking and customer management in Zylora.",
        "eyebrow": "Scheduling that feels connected",
        "h1": "Turn “I’m interested” into a time on the calendar.",
        "intro": "For appointment-led businesses, the best next step is often simple: show availability, let someone choose a time and make the confirmation clear. Zylora keeps that flow close to the website and customer record.",
        "visual": "Availability → Booking → Confirmation → Customer record",
        "workflow": ["Define the availability you can actually offer", "Present a focused booking action", "Confirm the selected time", "Keep the appointment visible for follow-up"],
        "capabilities": ["Website booking calls to action", "Availability-aware scheduling flow", "Confirmation and customer-management surfaces", "AI Sales Assistant handoff where configured"],
        "use_cases": "Useful for clinics, salons, coaches, consultants, studios and local services where a booked slot is the clearest conversion event.",
        "faq": [("Can the assistant help visitors book?", "Yes, where the assistant and appointment configuration are enabled, it can guide visitors toward an available next step."), ("Do I need an appointment business to use Zylora?", "No. Forms and other calls to action are available for businesses that do not schedule meetings."), ("Can I manage appointments after booking?", "The existing workspace includes appointment management for configured accounts." )],
        "related": [("AI Sales Assistant", "/ai-sales-assistant"), ("Lead generation", "/lead-generation"), ("Solutions for clinics", "/solutions/clinics")],
    },
    "/cms": {
        "title": "Website CMS for Service Businesses | Zylora",
        "description": "Manage structured website content such as services, properties, team members and other collections with Zylora CMS.",
        "eyebrow": "Content that stays useful",
        "h1": "Keep changing business information out of the page source.",
        "intro": "Zylora CMS gives your site a place for the content that changes often: services, properties, menu items, team members and other structured collections. Edit the content once and keep the presentation consistent.",
        "visual": "Collection schema · Content items · Dynamic binding · Live page",
        "workflow": ["Define the content fields your business needs", "Add and update collection items", "Bind content to the page structure", "Review and publish the updated site"],
        "capabilities": ["Structured collections for common business content", "Dynamic content binding in supported site layouts", "Content editing without rebuilding every section", "Existing SEO and publishing controls"],
        "use_cases": "A strong fit for real estate, hospitality, clinics, agencies and any business with repeatable content that needs to stay current.",
        "faq": [("What can I manage with CMS?", "The runtime supports structured content patterns such as services, properties, menu items and team members, depending on the site configuration."), ("Is CMS a separate blog product?", "The platform CMS is for customer-site content collections; public editorial publishing remains a separate SUPER_ADMIN workflow."), ("Do CMS changes publish immediately?", "Content continues through the existing draft and publish flow so changes can be reviewed before going live." )],
        "related": [("Zylora Studio", "/zylora-studio"), ("Website builder", "/website-builder"), ("Website examples", "/website-examples")],
    },
    "/analytics": {
        "title": "Website Analytics for Customer Growth | Zylora",
        "description": "Understand website activity, leads and conversion signals in the same workspace where you build and publish with Zylora.",
        "eyebrow": "Learn from the work",
        "h1": "See what your website is helping people do.",
        "intro": "Zylora analytics are designed to answer practical questions: what is getting attention, where are enquiries coming from and which follow-up deserves your time? Use the signals available to your account without inventing business results.",
        "visual": "Traffic · Leads · Appointments · Activity",
        "workflow": ["Publish a clear path for visitors", "Capture meaningful interactions", "Review trends and recent activity", "Use the evidence to refine pages and follow-up"],
        "capabilities": ["Performance and traffic surfaces", "Lead and appointment context", "Recent activity for the workspace", "Restrained visualizations with empty states when data is unavailable"],
        "use_cases": "For business owners who want a useful feedback loop between the public website and the decisions they make each week.",
        "faq": [("Does Zylora show fake demo numbers?", "Production analytics should use the data available to the account; empty states are used when there is not enough real activity to report."), ("Can I see leads and appointments together?", "The dashboard and related workspace surfaces provide the real data available for those features."), ("Can analytics improve SEO?", "Analytics can help you prioritize improvements, while the SEO controls and content structure handle crawlability." )],
        "related": [("Lead generation", "/lead-generation"), ("Appointments", "/appointments"), ("Website conversion guide", "/guides/website-conversion-optimization")],
    },
    "/custom-domains": {
        "title": "Custom Domains for Business Websites | Zylora",
        "description": "Connect a custom domain to your Zylora website and manage the existing SSL and publishing workflow from your workspace.",
        "eyebrow": "Your address on the web",
        "h1": "Publish on the domain your customers already trust.",
        "intro": "A strong website should be easy to find and easy to remember. Zylora’s domain workflow connects a custom address to the site you manage, with the existing SSL lifecycle and publishing controls close at hand.",
        "visual": "Domain · DNS · SSL · Live site",
        "workflow": ["Choose or prepare the domain", "Connect it from workspace settings", "Complete the required DNS steps", "Verify the live site and canonical address"],
        "capabilities": ["Custom domain connection workflow", "SSL status and lifecycle visibility", "Canonical URL support for public site pages", "Publishing controls remain in the authenticated workspace"],
        "use_cases": "For businesses ready to move from a temporary address to a web presence that belongs in their business cards, search results and customer conversations.",
        "faq": [("Does connecting a domain change my site content?", "No. It connects the chosen address to the existing site and publishing workflow."), ("Is SSL included?", "SSL status is managed through the existing domain lifecycle; availability depends on the domain configuration."), ("Can I keep the preview address?", "The workspace continues to provide preview and site-management links alongside the custom domain workflow." )],
        "related": [("Website builder", "/website-builder"), ("SEO foundation", "/guides/how-to-build-a-business-website"), ("Pricing", "/pricing")],
    },
    "/integrations": {
        "title": "Website Integrations | Zylora",
        "description": "Connect the website workflows your business already uses with Zylora’s supported integrations and notifications.",
        "eyebrow": "Connected workflows",
        "h1": "Keep the handoff from website to team from disappearing.",
        "intro": "Zylora’s integrations are there to move useful information into the places your team already works. Configure the supported connections your account needs, then keep the website experience and follow-up loop together.",
        "visual": "Website action · Integration · Team notification · Follow-up",
        "workflow": ["Choose the workflow that needs a handoff", "Connect the supported destination", "Test the data and notification path", "Review outcomes in the workspace"],
        "capabilities": ["Google Sheets lead synchronization where configured", "Email and notification delivery paths", "Domain and publishing integrations", "Provider status and configuration visibility in the workspace"],
        "use_cases": "For teams that want website activity to arrive where decisions happen, without building a separate automation stack for every lead or booking.",
        "faq": [("Which integrations are supported?", "Support depends on the configured Zylora account and the provider paths already implemented; the workspace is the source of truth."), ("Does Zylora claim integrations it does not support?", "This page intentionally describes supported workflow categories rather than promising an unconfigured third-party connector."), ("Can integrations be managed by an administrator?", "Configuration remains subject to the existing account and role permissions." )],
        "related": [("Lead generation", "/lead-generation"), ("Appointments", "/appointments"), ("Site health", "/website-builder")],
    },
    "/pricing": {
        "title": "Zylora Pricing and Plans",
        "description": "Explore Zylora plans for AI website creation, Studio editing, publishing and customer growth workflows.",
        "eyebrow": "Plans that follow the business",
        "h1": "Start with the work you need today. Keep room to grow.",
        "intro": "Zylora pricing is configured through the existing plan and billing system. Compare the current offers, regional settings and included capabilities in the live plan surface before choosing a path.",
        "visual": "Create · Edit · Publish · Grow",
        "workflow": ["Start with the free creation path", "Use the workspace to understand the fit", "Choose a plan when publishing needs require it", "Upgrade through the existing billing flow"],
        "capabilities": ["AI website creation and editing credits based on current plan configuration", "Publishing and domain capabilities based on configured offers", "AI Sales Assistant and lead workflows governed by the live product rules", "Regional and current pricing controlled by the backend configuration"],
        "use_cases": "Choose a plan for the way you work—not for a page count invented by the marketing site. The live billing surface remains authoritative.",
        "faq": [("Are prices hard-coded on this page?", "No. Use the live plan comparison at /choose-plan for current regional pricing and billing configuration."), ("Can I start before paying?", "The existing product provides a free starting path; the current eligibility and limits are shown in the live plan surface."), ("Can pricing change?", "Plan configuration is controlled by the existing administrative and billing system." )],
        "related": [("Website builder", "/website-builder"), ("Zylora Studio", "/zylora-studio"), ("Choose a plan", "/choose-plan")],
    },
}


SOLUTIONS: dict[str, dict[str, Any]] = {
    "/solutions/small-business": {"name": "Small businesses", "title": "Website Builder for Small Business | Zylora", "description": "Create a small-business website that explains your offer, captures leads and makes the next step clear.", "need": "A small business usually needs a focused home page, service or product detail, proof, contact path and a clear local or appointment action—not a sprawling brochure.", "pages": "Home, Services, About, FAQs, Contact and a focused booking or enquiry path.", "lead": "Lead capture turns occasional interest into a follow-up list your team can actually work.", "assistant": "The AI Sales Assistant can handle common questions about services, availability and next steps while you are serving customers.", "appointment": "Use booking for consultations, estimates, discovery calls or service visits when time is the real conversion.", "cta": "Call, request a quote, book a time or visit the location.", "related": [("Website builder", "/website-builder"), ("Lead generation", "/lead-generation"), ("Small-business guide", "/guides/small-business-website-checklist")]},
    "/solutions/agencies": {"name": "Agencies", "title": "Website Builder for Agencies | Zylora", "description": "Give agency teams a flexible website starting point, visual control and a cleaner path from enquiry to delivery.", "need": "An agency needs a credible services story, selected work, case studies, process, team context and a strong brief or enquiry path.", "pages": "Home, Services, Work, Case Studies, Process, About, Resources and Contact.", "lead": "Qualified project enquiries should arrive with enough context to decide whether a conversation is worth scheduling.", "assistant": "The assistant can answer questions about services, timelines and fit using the approved agency context.", "appointment": "Offer discovery calls, project consultations or workshop slots with a deliberate handoff from enquiry.", "cta": "Start a project, view case studies, request a proposal or book a discovery call.", "related": [("Zylora Studio", "/zylora-studio"), ("CRM", "/crm"), ("Lead generation", "/lead-generation")]},
    "/solutions/freelancers": {"name": "Freelancers", "title": "Website Builder for Freelancers | Zylora", "description": "Build a freelancer website that makes your specialty clear and turns the right visitor into a project conversation.", "need": "A freelancer needs a memorable introduction, focused services, proof of quality, availability context and an easy project enquiry.", "pages": "Home, Services, Selected Work, About, Testimonials where available, FAQ and Contact.", "lead": "A short project brief form helps separate a real opportunity from a vague hello.", "assistant": "The assistant can answer questions about services, process, availability and what a first conversation looks like.", "appointment": "Use a discovery call or portfolio review booking when a conversation helps qualify fit.", "cta": "View work, request availability, start a project or book a call.", "related": [("Website examples", "/website-examples"), ("Lead generation", "/lead-generation"), ("Guides", "/guides/how-to-build-a-business-website")]},
    "/solutions/restaurants": {"name": "Restaurants", "title": "Restaurant Website Builder | Zylora", "description": "Create a restaurant website with menu content, atmosphere, local discovery and booking or enquiry paths.", "need": "A restaurant website should answer the essentials quickly: what is served, where it is, when it is open and how to reserve or order.", "pages": "Home, Menu, About, Visit, Gallery, Private Events, Reservations and Contact.", "lead": "Enquiries matter for reservations, private dining, catering and event partnerships—not only for online orders.", "assistant": "The assistant can answer approved questions about the menu, location, hours, dietary information and reservations.", "appointment": "Reservations, tasting appointments and private-event consultations are the natural scheduling flows.", "cta": "View the menu, reserve a table, order, get directions or enquire about an event.", "related": [("CMS", "/cms"), ("Appointments", "/appointments"), ("Zylora Studio", "/zylora-studio")]},
    "/solutions/clinics": {"name": "Clinics", "title": "Clinic Website Builder with Appointment Booking | Zylora", "description": "Build a clinic website that explains care clearly, answers patient questions and makes consultation booking easier.", "need": "A clinic needs clear services, practitioner context, patient-friendly expectations, location details and a safe route to request an appointment.", "pages": "Home, Treatments, Practitioners, Patient Information, FAQs, Booking and Contact.", "lead": "A structured enquiry captures the service requested and the best way for the clinic to follow up.", "assistant": "The assistant can provide approved general information and guide visitors toward a consultation request without replacing clinical judgment.", "appointment": "Consultations, assessments and follow-up visits can each have a focused booking path when configured.", "cta": "Understand treatment, request a consultation, call the clinic or get directions.", "related": [("AI Sales Assistant", "/ai-sales-assistant"), ("Appointments", "/appointments"), ("Zylora Studio", "/zylora-studio")]},
    "/solutions/salons": {"name": "Salons", "title": "Salon Website Builder with Online Booking | Zylora", "description": "Create a salon website that showcases services, makes availability visible and helps visitors book with confidence.", "need": "A salon site should make the service menu, style, team, location and booking action easy to understand on a phone.", "pages": "Home, Services, Team, Gallery, Pricing where configured, FAQs, Booking and Contact.", "lead": "Capture service interest and preferred timing when a visitor is not ready to book immediately.", "assistant": "The assistant can answer common questions about services, preparation, availability and what to expect.", "appointment": "Bookings are usually the primary conversion: service, stylist, date and confirmation.", "cta": "Book an appointment, explore services, see the work or ask a question.", "related": [("Appointments", "/appointments"), ("AI Sales Assistant", "/ai-sales-assistant"), ("Zylora Studio", "/zylora-studio")]},
    "/solutions/gyms": {"name": "Gyms and fitness businesses", "title": "Gym Website Builder for Memberships and Enquiries | Zylora", "description": "Build a gym website that explains the offer, showcases the experience and turns interest into a visit or membership conversation.", "need": "A gym needs a clear offer, schedule or class context, trainer credibility, location and a low-friction first visit or enquiry.", "pages": "Home, Memberships, Classes, Trainers, Results where available, FAQs, Trial Visit and Contact.", "lead": "Lead capture can ask about goals, preferred timing and membership interest before the first visit.", "assistant": "The assistant can explain approved membership, class and visit information and direct people to the right next step.", "appointment": "Trial sessions, consultations and trainer introductions are useful appointment moments.", "cta": "Book a trial, view classes, ask about membership or visit the gym.", "related": [("Lead generation", "/lead-generation"), ("Appointments", "/appointments"), ("Website builder", "/website-builder")]},
    "/solutions/coaches": {"name": "Coaches and consultants", "title": "Website Builder for Coaches and Consultants | Zylora", "description": "Build a coaching or consulting website that makes your method clear and gives prospects a useful next step.", "need": "A coaching or consulting site needs a precise promise, audience context, method, proof, offer details and a path to a qualified conversation.", "pages": "Home, Program or Services, Method, About, Results where supported, FAQ, Resources and Book a Call.", "lead": "A short fit form can surface goals and timing before a discovery conversation.", "assistant": "The assistant can answer approved questions about the program, approach, format and fit.", "appointment": "Discovery calls, assessments and onboarding conversations are natural booking flows.", "cta": "Understand the approach, explore the offer, apply or book a call.", "related": [("AI Sales Assistant", "/ai-sales-assistant"), ("CRM", "/crm"), ("Appointments", "/appointments")]},
    "/solutions/real-estate": {"name": "Real estate businesses", "title": "Real Estate Website Builder with Property Content | Zylora", "description": "Create a real estate website that presents properties clearly and turns buyer or seller interest into a conversation.", "need": "Real estate sites need property detail, location context, trust signals, agent information and a reliable enquiry or viewing path.", "pages": "Home, Properties, Property Detail, Areas, About, Buying or Selling Guide, Viewing Request and Contact.", "lead": "Capture the property, budget and timing context that helps an agent respond well.", "assistant": "The assistant can answer approved questions about listings, viewing requests and the next steps in the process.", "appointment": "Property viewings, valuations and buyer consultations are useful appointment flows.", "cta": "View properties, request a viewing, book a valuation or speak with an agent.", "related": [("CMS", "/cms"), ("Lead generation", "/lead-generation"), ("Website examples", "/website-examples")]},
}


GUIDES: dict[str, dict[str, Any]] = {
    "/guides/how-to-build-a-business-website": {"title": "How to Build a Business Website | Zylora Guide", "description": "A practical guide to planning the pages, content, calls to action and follow-up a business website needs.", "h1": "How to build a business website that has a job to do.", "intro": "A business website is most useful when it answers a visitor’s questions and makes the next action obvious. This guide walks from business goal to page structure, content, conversion and iteration.", "sections": [("Start with the customer decision", "Write down what a visitor should understand and do after the first visit. The answer shapes the hierarchy more effectively than choosing a visual style first."), ("Create only the pages that earn their place", "Most businesses need a clear home, offer detail, proof, about context, FAQ and contact path. Add pages when they answer a distinct question or support a real workflow."), ("Connect the action to follow-up", "A form, assistant or booking flow is only valuable when the business can see and respond to what happened next."), ("Publish, then learn", "Use real activity and questions from customers to improve the site. The first version should be useful enough to learn from, not perfect enough to avoid learning.")], "related": [("Website builder", "/website-builder"), ("Small businesses", "/solutions/small-business"), ("Lead generation", "/lead-generation")]},
    "/guides/how-to-create-a-website-with-ai": {"title": "How to Create a Website with AI | Zylora Guide", "description": "Learn how to give an AI website builder the business context it needs, then review and improve the result.", "h1": "How to create a website with AI without losing the plot.", "intro": "AI can remove the blank-page problem, but the quality of the result still depends on the clarity of the business brief and the review that follows. Use AI for momentum, then use judgment for the parts customers see.", "sections": [("Describe the business in outcomes", "Include the audience, offer, location, differentiator and desired action. These details are more useful than a list of fashionable adjectives."), ("Review structure before polishing", "Check whether the pages and sections answer real customer questions before spending time on colors, images or animation."), ("Make the output yours", "Edit the words, proof points and calls to action so they reflect what the business can actually deliver."), ("Keep a human review step", "AI-generated copy should be checked for accuracy, tone, accessibility and claims before publishing.")], "related": [("AI website builder", "/ai-website-builder"), ("Zylora Studio", "/zylora-studio"), ("Website examples", "/website-examples")]},
    "/guides/how-to-get-leads-from-your-website": {"title": "How to Get Leads from a Website | Zylora Guide", "description": "Improve website lead generation by clarifying the offer, reducing friction and designing a follow-up path.", "h1": "How to get better leads from your website.", "intro": "Lead generation is a design and operations problem together. The page has to earn attention, ask for the right information and make the next response easy for the business.", "sections": [("Give the visitor a reason to act", "A clear offer or useful next step performs better than a generic request to contact the business."), ("Ask for enough, not everything", "Collect the details needed to respond well. Save longer discovery for the conversation that follows."), ("Offer more than one path", "Some visitors want to book, some want to ask a question and some want to read first. Map the primary and secondary calls to action intentionally."), ("Treat response time as part of conversion", "A captured lead still needs a reliable handoff, clear ownership and a useful reply.")], "related": [("Lead generation", "/lead-generation"), ("AI Sales Assistant", "/ai-sales-assistant"), ("CRM", "/crm")]},
    "/guides/how-to-add-ai-chat-to-a-website": {"title": "How to Add AI Chat to a Website | Zylora Guide", "description": "Plan a useful AI website chat experience with approved business context, qualification and a human handoff.", "h1": "How to add AI chat that helps visitors move forward.", "intro": "AI chat works best when it is connected to a specific visitor job: answer a question, clarify fit, capture context or guide someone to a real next step.", "sections": [("Define the assistant’s job", "Choose the questions and actions the assistant should handle before writing a welcome message."), ("Ground it in approved context", "Keep the information current, specific and easy to review. Avoid asking the assistant to guess about policies, prices or availability."), ("Design the handoff", "A useful assistant knows when to capture contact details, offer booking or direct someone to a person."), ("Review conversations", "Use real questions to improve the knowledge and the website pages that should answer them directly.")], "related": [("AI Sales Assistant", "/ai-sales-assistant"), ("Appointments", "/appointments"), ("Lead generation", "/lead-generation")]},
    "/guides/small-business-website-checklist": {"title": "Small Business Website Checklist | Zylora Guide", "description": "Use this practical checklist to review a small-business website before publishing.", "h1": "A small-business website checklist for the final review.", "intro": "Before publishing, review the site as a first-time visitor on a phone. The best checklist is short enough to use and specific enough to catch the things that block trust or action.", "sections": [("Clarity", "Can a visitor tell what the business does, who it serves and where it operates within a few seconds?"), ("Proof", "Are the claims, examples, team context and customer signals accurate and easy to scan?"), ("Action", "Is there a clear primary action, and does it work on mobile without requiring a hunt through the page?"), ("Operations", "Will enquiries, bookings and domain or publishing changes be visible to the people responsible for them?"), ("Findability", "Are titles, descriptions, headings, canonical URLs, sitemap and robots rules in place?")], "related": [("Website builder", "/website-builder"), ("Analytics", "/analytics"), ("Solutions for small businesses", "/solutions/small-business")]},
    "/guides/website-conversion-optimization": {"title": "Website Conversion Optimization Guide | Zylora", "description": "Improve website conversion by aligning visitor intent, page hierarchy, calls to action and follow-up.", "h1": "Website conversion optimization starts before the button.", "intro": "Conversion is not one visual trick. It is the joined-up experience of understanding the offer, trusting the business and knowing what happens after the click.", "sections": [("Match the page to intent", "A page for a first-time local visitor should not ask the same question as a page for a returning customer ready to book."), ("Make the next step concrete", "Replace vague actions with language that tells people what they will get: request a quote, book a consultation or see availability."), ("Reduce uncertainty", "Answer the questions that stop action—timing, location, process, fit and what happens next."), ("Measure the real outcome", "Look beyond clicks to leads, qualified conversations and appointments where those data are available.")], "related": [("Appointments", "/appointments"), ("Lead generation", "/lead-generation"), ("Analytics", "/analytics")]},
}


def _base_url() -> str:
    return settings.app_url.rstrip("/")


def _nav() -> str:
    return '''<header class="z-header seo-header"><div class="z-container z-header-inner"><a class="z-logo" href="/" aria-label="Zylora home"><span class="z-logo-mark">Z</span><span class="z-logo-wordmark">Zylora</span></a><nav class="z-nav-links" id="seoPrimaryNav" aria-label="Primary"><a href="/website-builder">Products</a><a href="/solutions/small-business">Solutions</a><a href="/zylora-studio">Studio</a><a href="/guides/how-to-build-a-business-website">Resources</a><a href="/pricing">Pricing</a></nav><div class="z-header-actions"><a class="z-nav-login" href="/login">Sign in</a><a class="z-btn z-btn-primary z-btn-sm" href="/signup">Start building</a><button class="z-nav-burger" type="button" aria-label="Toggle navigation" onclick="document.getElementById('seoPrimaryNav').classList.toggle('open')"><span></span><span></span><span></span></button></div></div></header>'''


def _footer() -> str:
    groups = [("Product", [("Website Builder", "/website-builder"), ("AI inside Studio", "/ai-website-builder"), ("Zylora Studio", "/zylora-studio"), ("AI Sales Assistant", "/ai-sales-assistant"), ("CRM", "/crm"), ("Appointments", "/appointments")]), ("Solutions", [("Small Business", "/solutions/small-business"), ("Agencies", "/solutions/agencies"), ("Clinics", "/solutions/clinics"), ("Restaurants", "/solutions/restaurants"), ("Freelancers", "/solutions/freelancers"), ("Real Estate", "/solutions/real-estate")]), ("Resources", [("Guides", "/guides/how-to-build-a-business-website"), ("Website Examples", "/website-examples"), ("Studio", "/zylora-studio"), ("Blog", "/blog")]), ("Company", [("Pricing", "/pricing"), ("Contact", "/legal"), ("Privacy", "/privacy"), ("Terms", "/terms")])]
    columns = []
    for label, items in groups:
        links = ''.join('<li><a href="' + href + '">' + escape(text) + '</a></li>' for text, href in items)
        columns.append(f'<div class="z-footer-col"><h4>{escape(label)}</h4><ul>{links}</ul></div>')
    cols = ''.join(columns)
    return f'''<footer class="z-footer"><div class="z-container"><div class="z-footer-grid"><div class="z-footer-brand-col"><a class="z-logo" href="/" style="color:#fff"><span class="z-logo-mark">Z</span><span class="z-logo-wordmark" style="color:#fff">Zylora</span></a><p>A website and customer growth platform for businesses that want their web presence to do more.</p></div>{cols}</div><div class="z-footer-bottom"><span>© 2026 Zylora Platforms Inc.</span><span>Built for real business outcomes.</span></div></div></footer>'''


def _blank_studio_copy(body: str) -> str:
    """Keep retired catalogue/AI-first language out of active public pages."""
    replacements = {
        'href="/templates"': 'href="/signup"',
        '>Explore templates<': '>Open blank Studio<',
        '>Browse templates<': '>Open blank Studio<',
        '>Templates<': '>Studio<',
        '>Create with AI<': '>Open blank Studio<',
        'Start with a business brief, a template or the workflow you already know you need.': 'Open a blank Studio and build visually, with optional AI help whenever you want it.',
        'Start with the business, not the blank page.': 'Start with a blank page and make the design yours.',
    }
    for old, new in replacements.items():
        body = body.replace(old, new)
    return body


def _head(title: str, description: str, canonical: str, schema: dict[str, Any]) -> str:
    schema_json = json.dumps(schema, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/")
    return f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{escape(title)}</title><meta name="description" content="{escape(description, quote=True)}"><meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"><link rel="canonical" href="{escape(canonical, quote=True)}"><meta property="og:type" content="website"><meta property="og:title" content="{escape(title, quote=True)}"><meta property="og:description" content="{escape(description, quote=True)}"><meta property="og:url" content="{escape(canonical, quote=True)}"><meta property="og:image" content="{_base_url()}/static/og-zylora.webp"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{escape(title, quote=True)}"><meta name="twitter:description" content="{escape(description, quote=True)}"><meta name="twitter:image" content="{_base_url()}/static/og-zylora.webp"><script type="application/ld+json">{schema_json}</script><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="/static/public-theme.css"><link rel="stylesheet" href="/static/public-redesign.css"></head>'''


def _product_page(path: str, item: dict[str, Any]) -> HTMLResponse:
    canonical = _base_url() + path
    faq_html = ''.join(f'<details class="seo-faq"><summary>{escape(q)}<span>+</span></summary><p>{escape(a)}</p></details>' for q, a in item['faq'])
    workflow_html = ''.join(f'<li><span>{idx:02d}</span><div>{escape(step)}</div></li>' for idx, step in enumerate(item['workflow'], 1))
    capability_html = ''.join(f'<li><span aria-hidden="true">✓</span>{escape(text)}</li>' for text in item['capabilities'])
    related_html = ''.join(f'<a class="seo-related-link" href="{href}"><span>{escape(text)}</span><span aria-hidden="true">↗</span></a>' for text, href in item['related'])
    schema = {'@context': 'https://schema.org', '@type': 'SoftwareApplication', 'name': 'Zylora', 'url': canonical, 'applicationCategory': 'BusinessApplication', 'description': item['description'], 'publisher': {'@type': 'Organization', 'name': 'Zylora'}}
    body = f'''{_nav()}<main class="seo-page"><section class="seo-hero"><div class="z-container seo-hero-grid"><div><div class="eyebrow-pill">✦ {escape(item['eyebrow'])}</div><h1>{escape(item['h1'])}</h1><p class="seo-intro">{escape(item['intro'])}</p><div class="seo-actions"><a class="z-btn z-btn-primary z-btn-lg" href="/signup">Start building free</a><a class="z-btn z-btn-secondary z-btn-lg" href="/templates">Explore templates</a></div></div><div class="seo-product-visual" aria-label="Zylora product workflow"><div class="seo-window-bar"><span></span><span></span><span></span><b>Zylora workspace</b></div><div class="seo-visual-body"><div class="seo-visual-sidebar"><strong>Zylora</strong><small>Workspace</small><small>Websites</small><small>Leads</small><small>Appointments</small></div><div class="seo-visual-main"><div class="seo-visual-kicker">LIVE PRODUCT VIEW</div><strong>{escape(item['visual'])}</strong><div class="seo-visual-flow"><span>Input</span><i>→</i><span>Build</span><i>→</i><span>Grow</span></div><div class="seo-visual-lines"><span></span><span></span><span></span></div></div></div></div></div></section><div class="z-container seo-breadcrumb"><a href="/">Home</a><span>/</span><span>{escape(item['eyebrow'])}</span></div><section class="seo-section"><div class="seo-two-col"><div><span class="seo-kicker">How it works</span><h2>Move from a useful first step to a website your customers can use.</h2></div><ol class="seo-workflow">{workflow_html}</ol></div></section><section class="seo-section seo-tint"><div class="seo-two-col"><div><span class="seo-kicker">Built for the workflow</span><h2>The details matter because the next action matters.</h2><p class="seo-body">{escape(item['use_cases'])}</p></div><ul class="seo-capabilities">{capability_html}</ul></div></section><section class="seo-section"><div class="seo-narrow-heading"><span class="seo-kicker">Questions, answered</span><h2>What to know before you start.</h2></div><div class="seo-faq-list">{faq_html}</div></section><section class="seo-section seo-related"><div class="seo-narrow-heading"><span class="seo-kicker">Keep exploring</span><h2>Related Zylora workflows.</h2></div><div class="seo-related-grid">{related_html}</div></section><section class="seo-cta"><div><span class="seo-kicker">Ready when you are</span><h2>Give your next customer a clearer way in.</h2><p>Start with a business brief, a template or the workflow you already know you need.</p></div><a class="z-btn z-btn-primary z-btn-lg" href="/signup">Start building free <span>→</span></a></section></main>{_footer()}'''
    return HTMLResponse(_head(item['title'], item['description'], canonical, schema) + '<body>' + _blank_studio_copy(body) + '</body></html>', headers={'Cache-Control': 'public,max-age=300'})


def _solution_page(path: str, item: dict[str, Any]) -> HTMLResponse:
    canonical = _base_url() + path
    points = [("What the website needs", item['need']), ("Pages to consider", item['pages']), ("Why lead generation matters", item['lead']), ("How the AI Sales Assistant helps", item['assistant']), ("Appointment flow", item['appointment']), ("Calls to action", item['cta'])]
    cards = ''.join(f'<article class="seo-solution-card"><span>0{idx}</span><h3>{escape(label)}</h3><p>{escape(text)}</p></article>' for idx, (label, text) in enumerate(points, 1))
    related = ''.join(f'<a class="seo-related-link" href="{href}"><span>{escape(text)}</span><span aria-hidden="true">↗</span></a>' for text, href in item['related'])
    schema = {'@context': 'https://schema.org', '@type': 'WebPage', 'name': item['title'], 'url': canonical, 'description': item['description'], 'isPartOf': {'@type': 'WebSite', 'name': 'Zylora', 'url': _base_url()}}
    body = f'''{_nav()}<main class="seo-page"><section class="seo-hero seo-solution-hero"><div class="z-container"><div class="eyebrow-pill">✦ Zylora for {escape(item['name'])}</div><h1>{escape(item['title'].split(' | ')[0])}</h1><p class="seo-intro">{escape(item['description'])} {escape(item['need'])}</p><div class="seo-actions"><a class="z-btn z-btn-primary z-btn-lg" href="/signup">Start building free</a><a class="z-btn z-btn-secondary z-btn-lg" href="/website-builder">See the website builder</a></div><div class="seo-solution-banner"><strong>Design the site around the customer decision.</strong><span>{escape(item['cta'])}</span></div></div></section><div class="z-container seo-breadcrumb"><a href="/">Home</a><span>/</span><a href="/solutions/small-business">Solutions</a><span>/</span><span>{escape(item['name'])}</span></div><section class="seo-section"><div class="seo-narrow-heading"><span class="seo-kicker">A useful starting brief</span><h2>What this kind of business needs from its website.</h2><p class="seo-body">{escape(item['need'])}</p></div><div class="seo-solution-grid">{cards}</div></section><section class="seo-section seo-tint"><div class="seo-two-col"><div><span class="seo-kicker">Implementation path</span><h2>Use Zylora to turn the brief into a connected customer experience.</h2></div><div class="seo-solution-path"><span>Choose a starting point</span><i>→</i><span>Make the offer clear</span><i>→</i><span>Capture intent</span><i>→</i><span>Follow up</span></div></div></section><section class="seo-section seo-related"><div class="seo-narrow-heading"><span class="seo-kicker">Next steps</span><h2>Explore the workflows behind the site.</h2></div><div class="seo-related-grid">{related}</div></section><section class="seo-cta"><div><span class="seo-kicker">Built for the real work</span><h2>Make the website useful before you make it bigger.</h2></div><a class="z-btn z-btn-primary z-btn-lg" href="/signup">Start building free <span>→</span></a></section></main>{_footer()}'''
    return HTMLResponse(_head(item['title'], item['description'], canonical, schema) + '<body>' + _blank_studio_copy(body) + '</body></html>', headers={'Cache-Control': 'public,max-age=300'})


def _guide_page(path: str, item: dict[str, Any]) -> HTMLResponse:
    canonical = _base_url() + path
    sections = ''.join(f'<article class="guide-section"><span>{idx:02d}</span><div><h2>{escape(title)}</h2><p>{escape(text)}</p></div></article>' for idx, (title, text) in enumerate(item['sections'], 1))
    related = ''.join(f'<a class="seo-related-link" href="{href}"><span>{escape(text)}</span><span aria-hidden="true">↗</span></a>' for text, href in item['related'])
    schema = {'@context': 'https://schema.org', '@type': 'Article', 'headline': item['title'], 'description': item['description'], 'mainEntityOfPage': canonical, 'author': {'@type': 'Organization', 'name': 'Zylora'}, 'publisher': {'@type': 'Organization', 'name': 'Zylora'}}
    body = f'''{_nav()}<main class="seo-page"><section class="seo-hero guide-hero"><div class="z-container seo-narrow-heading"><div class="eyebrow-pill">✦ Zylora guide</div><h1>{escape(item['h1'])}</h1><p class="seo-intro">{escape(item['intro'])}</p></div></section><div class="z-container seo-breadcrumb"><a href="/">Home</a><span>/</span><a href="/guides/how-to-build-a-business-website">Guides</a><span>/</span><span>{escape(item['h1'])}</span></div><section class="seo-section guide-content"><div class="guide-list">{sections}</div><aside class="guide-aside"><span class="seo-kicker">Make it real</span><h2>Put the ideas into a site your customers can use.</h2><p>When you are ready, Zylora gives you a brief-to-publish path with visual editing and customer growth tools.</p><a class="z-btn z-btn-primary" href="/signup">Start building</a></aside></section><section class="seo-section seo-related"><div class="seo-narrow-heading"><span class="seo-kicker">Continue reading</span><h2>Related Zylora paths.</h2></div><div class="seo-related-grid">{related}</div></section></main>{_footer()}'''
    return HTMLResponse(_head(item['title'], item['description'], canonical, schema) + '<body>' + _blank_studio_copy(body) + '</body></html>', headers={'Cache-Control': 'public,max-age=300'})


@router.get('/website-examples', response_class=HTMLResponse, include_in_schema=False)
def website_examples() -> HTMLResponse:
    canonical = _base_url() + '/website-examples'
    categories = [('Restaurant websites', '/solutions/restaurants', 'Menus, reservations and local discovery.'), ('Clinic websites', '/solutions/clinics', 'Services, trust and consultation paths.'), ('Agency websites', '/solutions/agencies', 'Work, process and project enquiries.'), ('Portfolio websites', '/solutions/freelancers', 'A focused showcase with a clear contact path.'), ('Gym websites', '/solutions/gyms', 'Membership, classes and trial visits.'), ('Real-estate websites', '/solutions/real-estate', 'Property content, viewings and buyer intent.')]
    cards = ''.join(f'<a class="example-card" href="{href}"><div class="example-card-art"><span>ZY</span><i></i><i></i><i></i></div><div><h2>{escape(title)}</h2><p>{escape(desc)}</p><span>Explore the path ↗</span></div></a>' for title, href, desc in categories)
    schema = {'@context': 'https://schema.org', '@type': 'CollectionPage', 'name': 'Zylora Website Examples', 'url': canonical, 'description': 'Website examples and industry paths for businesses building with Zylora.'}
    body = f'''{_nav()}<main class="seo-page"><section class="seo-hero"><div class="z-container seo-narrow-heading"><div class="eyebrow-pill">✦ Website examples</div><h1>See the kind of website your business can grow into.</h1><p class="seo-intro">Explore useful starting directions for restaurants, clinics, agencies, portfolios, gyms and real-estate businesses. Each path connects the page structure to the customer action it needs to support.</p><div class="seo-actions"><a class="z-btn z-btn-primary z-btn-lg" href="/templates">Browse templates</a><a class="z-btn z-btn-secondary z-btn-lg" href="/ai-website-builder">Create with AI</a></div></div></section><div class="z-container seo-breadcrumb"><a href="/">Home</a><span>/</span><span>Website examples</span></div><section class="seo-section"><div class="seo-example-grid">{cards}</div></section><section class="seo-cta"><div><span class="seo-kicker">Your direction can be different</span><h2>Start with the business, not the blank page.</h2></div><a class="z-btn z-btn-primary z-btn-lg" href="/signup">Start building free <span>→</span></a></section></main>{_footer()}'''
    return HTMLResponse(_head('Website Examples for Businesses | Zylora', 'Explore useful Zylora website directions for restaurants, clinics, agencies, portfolios, gyms and real estate.', canonical, schema) + '<body>' + _blank_studio_copy(body) + '</body></html>', headers={'Cache-Control': 'public,max-age=300'})


@router.get('/templates/{slug}', response_class=HTMLResponse, include_in_schema=False)
def template_detail(slug: str) -> HTMLResponse:
    # The platform catalogue is retired. Historical renderer data remains only
    # for backwards compatibility with already-created customer sites.
    raise HTTPException(status_code=404, detail='Platform templates are retired')
    item = next((template for template in public_templates() if str(template.get('slug')) == slug), None)
    if not item:
        raise HTTPException(status_code=404, detail='Template not found')
    name = str(item.get('name') or slug.replace('-', ' ').title())
    industry = str(item.get('industry') or item.get('category') or 'Business')
    style = str(item.get('style') or 'Art-directed starting point')
    description = str(item.get('description') or item.get('demo_description') or f'{name} is an editable Zylora website template for {industry.lower()} businesses.')
    pages = int(item.get('pages') or len(item.get('page_slugs') or []) or 1)
    preview = str(item.get('preview') or f'/static/template-previews/{slug}.png')
    canonical = _base_url() + '/templates/' + slug
    schema = {'@context': 'https://schema.org', '@type': 'WebPage', 'name': f'{name} Website Template | Zylora', 'url': canonical, 'description': description, 'image': _base_url() + preview, 'isPartOf': {'@type': 'CollectionPage', 'name': 'Zylora Website Templates', 'url': _base_url() + '/templates'}}
    page_names = ['Home'] + [str(value).replace('-', ' ').title() for value in item.get('page_slugs') or []]
    page_list = ''.join(f'<li>{escape(value)}</li>' for value in page_names[:8])
    body = f'''{_nav()}<main class="seo-page template-detail-page"><section class="seo-hero"><div class="z-container seo-hero-grid"><div><div class="eyebrow-pill">✦ {escape(industry)} template</div><h1>{escape(name)} gives the business a considered starting point.</h1><p class="seo-intro">{escape(description)}</p><div class="seo-actions"><a class="z-btn z-btn-primary z-btn-lg" href="/signup?template={escape(slug)}">Use this template</a><a class="z-btn z-btn-secondary z-btn-lg" href="/template-preview/{escape(slug)}">Open preview</a></div></div><div class="template-detail-preview"><img src="{escape(preview, quote=True)}" alt="{escape(name)} website template preview" width="1200" height="760" loading="eager"></div></div></section><div class="z-container seo-breadcrumb"><a href="/">Home</a><span>/</span><a href="/templates">Templates</a><span>/</span><span>{escape(name)}</span></div><section class="seo-section"><div class="seo-two-col"><div><span class="seo-kicker">Template details</span><h2>A visual direction with room for the real business.</h2><p class="seo-body">Use this template as a starting point, then update the content, brand, conversion path and business context in Zylora Studio.</p></div><div class="template-detail-facts"><div><span>Industry</span><strong>{escape(industry)}</strong></div><div><span>Style</span><strong>{escape(style)}</strong></div><div><span>Pages in the starting point</span><strong>{pages}</strong></div></div></div></section><section class="seo-section seo-tint"><div class="seo-two-col"><div><span class="seo-kicker">Included pages</span><h2>Start with the structure. Make the content yours.</h2></div><ul class="template-page-list">{page_list}</ul></div></section><section class="seo-cta"><div><span class="seo-kicker">Ready to customize</span><h2>Put your offer in a better frame.</h2><p>Use the template, open it in your workspace and keep refining until the next action feels obvious.</p></div><a class="z-btn z-btn-primary z-btn-lg" href="/signup?template={escape(slug)}">Use this template <span>→</span></a></section></main>{_footer()}'''
    return HTMLResponse(_head(f'{name} Website Template | Zylora', description, canonical, schema) + '<body>' + body + '</body></html>', headers={'Cache-Control': 'public,max-age=300'})


@router.get('/{path:path}', response_class=HTMLResponse, include_in_schema=False)
def public_seo_catchall(path: str) -> HTMLResponse:
    path = '/' + path.strip('/')
    if path in PRODUCTS:
        return _product_page(path, PRODUCTS[path])
    if path in SOLUTIONS:
        return _solution_page(path, SOLUTIONS[path])
    if path in GUIDES:
        return _guide_page(path, GUIDES[path])
    raise HTTPException(status_code=404, detail='Public page not found')


PUBLIC_SEO_PATHS = tuple([*PRODUCTS.keys(), *SOLUTIONS.keys(), *GUIDES.keys(), '/website-examples'])
