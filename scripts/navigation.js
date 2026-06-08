/**
 * navigation.js
 * Just Pump Water — Navigation Interactions
 */

'use strict';

class Navigation {
  constructor() {
    this.nav     = document.querySelector('[data-nav]');
    this.toggle  = document.querySelector('[data-nav-toggle]');
    this.menu    = document.querySelector('[data-nav-menu]');
    this.overlay = document.querySelector('[data-nav-overlay]');
    this.dropdowns = document.querySelectorAll('[data-dropdown]');

    if (!this.nav) return;

    this.isOpen = false;
    this.bindEvents();
  }

  bindEvents() {
    // Mobile toggle
    this.toggle?.addEventListener('click', () => this.toggleMenu());
    this.overlay?.addEventListener('click', () => this.closeMenu());

    // Keyboard close
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this.closeMenu();
    });

    // Dropdowns (desktop hover, mobile click)
    this.dropdowns.forEach(item => {
      const trigger = item.querySelector('[data-dropdown-trigger]');
      const panel   = item.querySelector('[data-dropdown-panel]');
      if (!trigger || !panel) return;

      // Desktop
      if (window.innerWidth > 1024) {
        item.addEventListener('mouseenter', () => {
          panel.style.opacity = '1';
          panel.style.visibility = 'visible';
          panel.style.transform = 'translateY(0)';
        });
        item.addEventListener('mouseleave', () => {
          panel.style.opacity = '0';
          panel.style.visibility = 'hidden';
          panel.style.transform = 'translateY(-8px)';
        });
      }

      // Mobile toggle
      trigger.addEventListener('click', e => {
        e.preventDefault();
        const isExpanded = item.classList.contains('is-open');
        // Close all others
        this.dropdowns.forEach(d => d.classList.remove('is-open'));
        if (!isExpanded) item.classList.add('is-open');
      });
    });

    // Active link
    this.setActiveLink();
  }

  toggleMenu() {
    this.isOpen ? this.closeMenu() : this.openMenu();
  }

  openMenu() {
    this.isOpen = true;
    this.menu?.classList.add('is-open');
    this.overlay?.classList.add('is-visible');
    this.toggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Stagger menu items
    const items = this.menu?.querySelectorAll('[data-nav-item]');
    items?.forEach((item, i) => {
      item.style.transitionDelay = `${i * 60}ms`;
      item.classList.add('is-visible');
    });
  }

  closeMenu() {
    this.isOpen = false;
    this.menu?.classList.remove('is-open');
    this.overlay?.classList.remove('is-visible');
    this.toggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    const items = this.menu?.querySelectorAll('[data-nav-item]');
    items?.forEach(item => {
      item.style.transitionDelay = '0ms';
      item.classList.remove('is-visible');
    });
  }

  setActiveLink() {
    const current = window.location.pathname;
    this.nav?.querySelectorAll('a[href]').forEach(link => {
      const href = link.getAttribute('href');
      if (href === current || (href !== '/' && current.startsWith(href))) {
        link.classList.add('is-active');
        link.closest('[data-dropdown]')?.classList.add('has-active');
      }
    });
  }
}

/* ─── Custom Cursor ──────────────────────────────────────────── */

class CustomCursor {
  constructor() {
    this.dot  = document.querySelector('.cursor-dot');
    this.ring = document.querySelector('.cursor-ring');
    if (!this.dot || !this.ring) return;

    this.mouseX = 0;
    this.mouseY = 0;
    this.ringX  = 0;
    this.ringY  = 0;

    document.addEventListener('mousemove', e => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    });

    document.body.classList.add('cursor-active');

    document.querySelectorAll('a, button, [data-cursor-hover]').forEach(el => {
      el.addEventListener('mouseenter', () => this.ring.classList.add('cursor-hover'));
      el.addEventListener('mouseleave', () => this.ring.classList.remove('cursor-hover'));
    });

    this.animate();
  }

  animate() {
    // Dot follows immediately
    this.dot.style.left = `${this.mouseX}px`;
    this.dot.style.top  = `${this.mouseY}px`;

    // Ring follows with lag
    this.ringX += (this.mouseX - this.ringX) * 0.14;
    this.ringY += (this.mouseY - this.ringY) * 0.14;
    this.ring.style.left = `${this.ringX}px`;
    this.ring.style.top  = `${this.ringY}px`;

    requestAnimationFrame(() => this.animate());
  }
}

/* ─── Boot ───────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  new Navigation();
  if (window.innerWidth > 768) new CustomCursor();
});
