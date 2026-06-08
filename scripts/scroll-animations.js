/**
 * scroll-animations.js
 * Just Pump Water — Scroll-Triggered Animation System
 * Inspired by Lando Norris: purposeful, smooth, non-gimmicky
 */

'use strict';

/* ─── Configuration ──────────────────────────────────────────── */

const ANIMATION_CONFIG = {
  threshold:    0.1,
  rootMargin:  '0px 0px -60px 0px',
  once:         true,   // Animate once; use false for re-trigger
};

/* ─── Animation Classes Map ──────────────────────────────────── */
/*
 * Add [data-animate="<name>"] to any element.
 * Add [data-delay="<ms>"] for staggered reveals.
 * Add [data-duration="<ms>"] to override default speed.
 * Add [data-stagger] to a parent to auto-stagger children.
 */

const ANIMATIONS = {
  'fade-up':      { from: 'opacity:0;transform:translateY(40px)',   to: 'opacity:1;transform:translateY(0)'   },
  'fade-down':    { from: 'opacity:0;transform:translateY(-40px)',  to: 'opacity:1;transform:translateY(0)'   },
  'fade-left':    { from: 'opacity:0;transform:translateX(-60px)',  to: 'opacity:1;transform:translateX(0)'   },
  'fade-right':   { from: 'opacity:0;transform:translateX(60px)',   to: 'opacity:1;transform:translateX(0)'   },
  'fade-in':      { from: 'opacity:0',                              to: 'opacity:1'                            },
  'scale-up':     { from: 'opacity:0;transform:scale(0.9)',         to: 'opacity:1;transform:scale(1)'        },
  'scale-in':     { from: 'opacity:0;transform:scale(0.95)',        to: 'opacity:1;transform:scale(1)'        },
  'slide-up':     { from: 'opacity:0;transform:translateY(80px)',   to: 'opacity:1;transform:translateY(0)'   },
  'clip-reveal':  { from: 'clip-path:inset(0 100% 0 0)',            to: 'clip-path:inset(0 0% 0 0)'           },
  'line-reveal':  { from: 'transform:scaleX(0);transform-origin:left', to: 'transform:scaleX(1)' },
  'counter':      null, // Handled by CounterObserver
};

/* ─── Core Observer ──────────────────────────────────────────── */

class ScrollAnimator {
  constructor() {
    this.observer = null;
    this.init();
  }

  init() {
    // Inject base transition styles
    const style = document.createElement('style');
    style.textContent = `
      [data-animate] {
        transition-property: opacity, transform, clip-path;
        transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        transition-duration: 700ms;
        will-change: transform, opacity;
      }
      [data-animate].is-animated {
        transition-delay: var(--anim-delay, 0ms);
      }
    `;
    document.head.appendChild(style);

    this.observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      ANIMATION_CONFIG
    );

    this.observe();
  }

  observe() {
    // Animate individual elements
    document.querySelectorAll('[data-animate]').forEach(el => {
      const animName = el.dataset.animate;
      const anim = ANIMATIONS[animName];
      if (!anim) return;

      // Set initial state
      this.applyStyles(el, anim.from);
      this.observer.observe(el);
    });

    // Stagger children
    document.querySelectorAll('[data-stagger]').forEach(parent => {
      const children = parent.querySelectorAll(':scope > *');
      const baseDelay = parseInt(parent.dataset.staggerDelay || 80);
      children.forEach((child, i) => {
        if (!child.dataset.animate) {
          child.dataset.animate = parent.dataset.stagger || 'fade-up';
        }
        child.style.setProperty('--anim-delay', `${i * baseDelay}ms`);
        const anim = ANIMATIONS[child.dataset.animate];
        if (anim) this.applyStyles(child, anim.from);
        this.observer.observe(child);
      });
    });
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      const animName = el.dataset.animate;
      const anim = ANIMATIONS[animName];
      const delay = el.dataset.delay || el.style.getPropertyValue('--anim-delay') || '0';
      const duration = el.dataset.duration;

      if (!anim) return;

      if (duration) el.style.transitionDuration = `${duration}ms`;
      el.style.setProperty('--anim-delay', delay);
      el.classList.add('is-animated');

      // Apply "to" state after tiny paint frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.applyStyles(el, anim.to);
        });
      });

      if (ANIMATION_CONFIG.once) {
        this.observer.unobserve(el);
      }
    });
  }

  applyStyles(el, styleString) {
    if (!styleString) return;
    styleString.split(';').forEach(rule => {
      if (!rule.trim()) return;
      const [prop, ...vals] = rule.split(':');
      el.style[this.camelCase(prop.trim())] = vals.join(':').trim();
    });
  }

  camelCase(str) {
    return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  }
}

/* ─── Counter Animation ──────────────────────────────────────── */

class CounterAnimator {
  constructor() {
    this.observer = new IntersectionObserver(
      this.handleIntersect.bind(this),
      { threshold: 0.5, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('[data-counter]').forEach(el => {
      this.observer.observe(el);
    });
  }

  handleIntersect(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.counter);
      const suffix = el.dataset.counterSuffix || '';
      const prefix = el.dataset.counterPrefix || '';
      const duration = parseInt(el.dataset.counterDuration || 2000);
      const decimals = el.dataset.counterDecimals ? parseInt(el.dataset.counterDecimals) : 0;

      this.animate(el, target, suffix, prefix, duration, decimals);
      this.observer.unobserve(el);
    });
  }

  animate(el, target, suffix, prefix, duration, decimals) {
    const start = performance.now();
    const startVal = 0;

    const easeOut = t => 1 - Math.pow(1 - t, 3);

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const current = startVal + (target - startVal) * easeOut(progress);

      el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      }
    };

    requestAnimationFrame(tick);
  }
}

/* ─── Parallax System ────────────────────────────────────────── */

class ParallaxSystem {
  constructor() {
    this.elements = [];
    this.ticking = false;
    this.init();
  }

  init() {
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.dataset.parallax || 0.3);
      this.elements.push({ el, speed, offsetY: 0 });
    });

    if (this.elements.length > 0) {
      window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
      this.update();
    }
  }

  onScroll() {
    if (!this.ticking) {
      requestAnimationFrame(() => {
        this.update();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  update() {
    const scrollY = window.pageYOffset;
    this.elements.forEach(({ el, speed }) => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;

      // Only parallax when visible
      if (rect.bottom < 0 || rect.top > viewH) return;

      const relPos = (rect.top + rect.height / 2) / viewH;
      const offset = (relPos - 0.5) * speed * 100;
      el.style.transform = `translateY(${offset}px)`;
    });
  }
}

/* ─── Horizontal Scroll Reveal ───────────────────────────────── */

class HorizontalScroller {
  constructor() {
    document.querySelectorAll('[data-hscroll]').forEach(container => {
      this.init(container);
    });
  }

  init(container) {
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', e => {
      isDown = true;
      container.classList.add('is-dragging');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      isDown = false;
      container.classList.remove('is-dragging');
    });

    container.addEventListener('mouseup', () => {
      isDown = false;
      container.classList.remove('is-dragging');
    });

    container.addEventListener('mousemove', e => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    });
  }
}

/* ─── Text Split Animation ───────────────────────────────────── */

class TextReveal {
  constructor() {
    document.querySelectorAll('[data-text-reveal]').forEach(el => {
      this.split(el);
    });
  }

  split(el) {
    const text = el.textContent;
    const words = text.split(' ');
    el.innerHTML = words
      .map((word, i) => `
        <span class="word-wrapper" style="display:inline-block;overflow:hidden;vertical-align:bottom;">
          <span class="word" data-animate="fade-up" data-delay="${i * 60}" style="display:inline-block">
            ${word}&nbsp;
          </span>
        </span>
      `).join('');
  }
}

/* ─── Marquee / Infinite Scroll ──────────────────────────────── */

class MarqueeSystem {
  constructor() {
    document.querySelectorAll('[data-marquee]').forEach(el => {
      this.init(el);
    });
  }

  init(el) {
    const speed = parseFloat(el.dataset.marqueeSpeed || 40); // px/s
    const direction = el.dataset.marqueeDir === 'right' ? 1 : -1;

    // Clone content for seamless loop
    const inner = el.querySelector('[data-marquee-inner]');
    if (!inner) return;

    const clone = inner.cloneNode(true);
    el.appendChild(clone);

    let pos = 0;
    let lastTime = null;

    const tick = (time) => {
      if (!lastTime) lastTime = time;
      const delta = (time - lastTime) / 1000;
      lastTime = time;

      pos += direction * speed * delta;

      const width = inner.offsetWidth;
      if (direction < 0 && Math.abs(pos) >= width) pos = 0;
      if (direction > 0 && pos >= width) pos = 0;

      inner.style.transform = `translateX(${pos}px)`;
      clone.style.transform = `translateX(${pos + (direction < 0 ? width : -width)}px)`;

      requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }
}

/* ─── Sticky Header Behaviour ────────────────────────────────── */

class StickyHeader {
  constructor() {
    this.header = document.querySelector('[data-header]');
    if (!this.header) return;

    this.lastScrollY = 0;
    this.threshold = 80;

    window.addEventListener('scroll', this.onScroll.bind(this), { passive: true });
    this.onScroll();
  }

  onScroll() {
    const scrollY = window.pageYOffset;

    // Add scrolled class after threshold
    if (scrollY > this.threshold) {
      this.header.classList.add('is-scrolled');
    } else {
      this.header.classList.remove('is-scrolled');
    }

    // Hide on scroll down, show on scroll up
    if (scrollY > this.lastScrollY && scrollY > 300) {
      this.header.classList.add('is-hidden');
    } else {
      this.header.classList.remove('is-hidden');
    }

    this.lastScrollY = scrollY;
  }
}

/* ─── Boot ───────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  new ScrollAnimator();
  new CounterAnimator();
  new ParallaxSystem();
  new HorizontalScroller();
  new MarqueeSystem();
  new StickyHeader();

  // Text reveals (opt-in)
  // new TextReveal(); // Uncomment to enable word-by-word reveals
});

export {
  ScrollAnimator,
  CounterAnimator,
  ParallaxSystem,
  HorizontalScroller,
  MarqueeSystem,
  StickyHeader,
};
