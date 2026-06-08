/**
 * main.js
 * Just Pump Water — Main Entry Point
 * Imports and boots all scripts
 */

'use strict';

/* ─── Utility: Load External Scripts ────────────────────────── */
// All animation + nav scripts are loaded via <script> tags in HTML.
// This file handles remaining global interactions.

/* ─── Video Hero Autoplay ────────────────────────────────────── */

function initHeroVideo() {
  const video = document.querySelector('[data-hero-video]');
  if (!video) return;

  video.muted = true;
  video.playsInline = true;
  video.autoplay = true;
  video.loop = true;

  // Attempt to play (required on some browsers)
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Autoplay blocked — show poster / static fallback
      video.closest('[data-hero]')?.classList.add('video-blocked');
    });
  }

  // Reduce quality for mobile data saving
  if (window.innerWidth < 768) {
    video.style.display = 'none';
  }
}

/* ─── Stats Counter (hero bar) ───────────────────────────────── */

function initStats() {
  // Counters are handled by scroll-animations.js CounterAnimator
  // This is a hook for any additional stat logic
}

/* ─── WhatsApp Float Button ──────────────────────────────────── */

function initWhatsApp() {
  const btn = document.querySelector('[data-whatsapp]');
  if (!btn) return;

  // Show after 3 seconds
  setTimeout(() => btn.classList.add('is-visible'), 3000);
}

/* ─── Smooth Anchor Scroll ───────────────────────────────────── */

function initAnchorScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const headerH = document.querySelector('[data-header]')?.offsetHeight || 0;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerH;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
}

/* ─── Lazy Loading Enhancement ───────────────────────────────── */

function initLazyLoad() {
  if ('loading' in HTMLImageElement.prototype) return; // Native support

  const images = document.querySelectorAll('img[loading="lazy"]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const img = entry.target;
      if (img.dataset.src) img.src = img.dataset.src;
      observer.unobserve(img);
    });
  });

  images.forEach(img => observer.observe(img));
}

/* ─── Form Enhancements ──────────────────────────────────────── */

function initForms() {
  document.querySelectorAll('[data-form]').forEach(form => {
    const inputs = form.querySelectorAll('input, textarea, select');

    inputs.forEach(input => {
      // Float label behaviour
      input.addEventListener('focus', () => {
        input.closest('.form-group')?.classList.add('is-focused');
      });
      input.addEventListener('blur', () => {
        input.closest('.form-group')?.classList.remove('is-focused');
        if (input.value) {
          input.closest('.form-group')?.classList.add('has-value');
        } else {
          input.closest('.form-group')?.classList.remove('has-value');
        }
      });
    });

    // Submit handling
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = form.querySelector('[type="submit"]');
      if (!btn) return;

      btn.classList.add('is-loading');
      btn.disabled = true;

      // Simulate submission — replace with real endpoint
      await new Promise(r => setTimeout(r, 1500));

      btn.classList.remove('is-loading');
      btn.classList.add('is-success');
      btn.textContent = 'Message Sent ✓';

      // Reset after 3s
      setTimeout(() => {
        btn.classList.remove('is-success');
        btn.disabled = false;
        btn.textContent = btn.dataset.originalText || 'Send Message';
        form.reset();
        form.querySelectorAll('.form-group').forEach(g => g.classList.remove('has-value'));
      }, 3000);
    });
  });
}

/* ─── Tab System ─────────────────────────────────────────────── */

function initTabs() {
  document.querySelectorAll('[data-tabs]').forEach(tabsContainer => {
    const triggers = tabsContainer.querySelectorAll('[data-tab]');
    const panels   = tabsContainer.querySelectorAll('[data-tab-panel]');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const target = trigger.dataset.tab;

        triggers.forEach(t => t.classList.remove('is-active'));
        panels.forEach(p => p.classList.remove('is-active'));

        trigger.classList.add('is-active');
        tabsContainer.querySelector(`[data-tab-panel="${target}"]`)?.classList.add('is-active');
      });
    });

    // Activate first tab
    triggers[0]?.click();
  });
}

/* ─── Accordion / FAQ ────────────────────────────────────────── */

function initAccordion() {
  document.querySelectorAll('[data-accordion]').forEach(accordion => {
    const items = accordion.querySelectorAll('[data-accordion-item]');

    items.forEach(item => {
      const trigger = item.querySelector('[data-accordion-trigger]');
      const body    = item.querySelector('[data-accordion-body]');
      if (!trigger || !body) return;

      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Close all
        items.forEach(i => {
          i.classList.remove('is-open');
          i.querySelector('[data-accordion-body]')?.style.setProperty('max-height', '0');
        });

        // Open clicked
        if (!isOpen) {
          item.classList.add('is-open');
          body.style.maxHeight = `${body.scrollHeight}px`;
        }
      });
    });
  });
}

/* ─── Boot ───────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initHeroVideo();
  initStats();
  initWhatsApp();
  initAnchorScroll();
  initLazyLoad();
  initForms();
  initTabs();
  initAccordion();

  // Mark page as JS-loaded
  document.documentElement.classList.add('js-loaded');
});
