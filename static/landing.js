/**
 * Zylora Landing Page Interactions — Tinkered.ai UX Parity
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Navigation Scroll Effect
  const navWrapper = document.querySelector('.nav-wrapper');
  if (navWrapper) {
    const onScroll = () => {
      if (window.scrollY > 24) {
        navWrapper.classList.add('nav-scrolled');
      } else {
        navWrapper.classList.remove('nav-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // 2. Mobile Drawer Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileDrawer = document.querySelector('.mobile-drawer');
  const hamburger = document.querySelector('.hamburger');

  if (mobileToggle && mobileDrawer && hamburger) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      hamburger.classList.toggle('is-active', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        hamburger.classList.remove('is-active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  // 3. Prompt Submission & Quick Chips
  const promptForm = document.getElementById('hardwarePromptForm') || document.querySelector('.bp-prompt');
  const promptInput = document.getElementById('hardware-prompt') || document.getElementById('businessPrompt');
  const promptChips = document.querySelectorAll('.bp-chip');

  if (promptChips.length && promptInput) {
    promptChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const text = chip.getAttribute('data-prompt') || chip.textContent.trim();
        promptInput.value = text;
        promptInput.focus();
      });
    });
  }

  if (promptForm && promptInput) {
    promptForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const prompt = promptInput.value.trim();
      if (!prompt) {
        promptInput.focus();
        return;
      }
      try {
        sessionStorage.setItem('zyloraAiDraft', prompt);
      } catch (err) {
        // Safe fallback
      }
      window.location.href = `/signup?prompt=${encodeURIComponent(prompt)}`;
    });
  }

  // 4. "Watch Demo" Action
  const demoButtons = document.querySelectorAll('.bp-demo-button');
  demoButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById('how-it-works') || document.querySelector('.platform-workflow');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 5. Template Rail Scrolling Controls
  const templateRail = document.querySelector('.maker-template-rail');
  const prevBtn = document.querySelector('.maker-template-prev');
  const nextBtn = document.querySelector('.maker-template-next');

  if (templateRail && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      templateRail.scrollBy({ left: -360, behavior: 'smooth' });
    });
    nextBtn.addEventListener('click', () => {
      templateRail.scrollBy({ left: 360, behavior: 'smooth' });
    });
  }

  // 6. Workflow Interactive Tabs
  const workflowTabs = document.querySelectorAll('.workflow-tab');
  const workflowPanels = document.querySelectorAll('.workflow-panel-item');
  const activeTitle = document.getElementById('workflowActiveTitle');
  const activeDesc = document.getElementById('workflowActiveDesc');

  const workflowContent = {
    describe: {
      title: "Describe the business in natural language.",
      desc: "Zylora extracts requirements, infers visual direction, structures pages, and writes high-converting copy without needing an arbitrary starting template."
    },
    generate: {
      title: "Generate a validated, multi-page SiteDocument.",
      desc: "Our engine synthesizes responsive layouts, accessibility metadata, clean markup, and database models as one connected, ready-to-run website."
    },
    edit: {
      title: "Refine in Canva-grade Visual Studio or code.",
      desc: "Direct-manipulation visual canvas, inline editing, responsive multi-device viewport toggles, AI conversational assistant, and full undo/redo revisions."
    },
    publish: {
      title: "Publish to custom domains with built-in CRM & AI agent.",
      desc: "1-click Cloudflare edge publishing, automated SSL, 24/7 AI Sales Assistant that qualifies inquiries, and zero-config Google Sheets lead synchronization."
    }
  };

  if (workflowTabs.length) {
    workflowTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const step = tab.getAttribute('data-step');
        workflowTabs.forEach(t => {
          t.classList.remove('is-active');
          t.setAttribute('aria-pressed', 'false');
        });
        tab.classList.add('is-active');
        tab.setAttribute('aria-pressed', 'true');

        if (workflowPanels.length) {
          workflowPanels.forEach(p => {
            if (p.getAttribute('data-step') === step) {
              p.style.display = 'block';
            } else {
              p.style.display = 'none';
            }
          });
        }

        if (workflowContent[step] && activeTitle && activeDesc) {
          activeTitle.textContent = workflowContent[step].title;
          activeDesc.textContent = workflowContent[step].desc;
        }
      });
    });
  }
});
