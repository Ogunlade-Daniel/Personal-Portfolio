const html = document.documentElement;
const THEME_KEY = 'portfolio-theme';

function resolveTheme(pref) {
  if (pref === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return pref;
}

function iconFor(pref) {
  if (pref === 'light') return 'bi bi-sun';
  if (pref === 'dark') return 'bi bi-moon-stars';
  return 'bi bi-circle-half';
}

function setTheme(pref) {
  const resolved = resolveTheme(pref);
  html.setAttribute('data-theme', resolved);
  html.setAttribute('data-theme-pref', pref);
  localStorage.setItem(THEME_KEY, pref);

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.content = resolved === 'dark' ? '#14151A' : '#F7F6F3';
  }

  const mainToggleIcon = document.querySelector('.theme-toggle i');
  if (mainToggleIcon) {
    mainToggleIcon.className = iconFor(pref);
  }

  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    themeIcon.className = iconFor(pref);
  }

  document.querySelectorAll('.theme-option').forEach((option) => {
    option.classList.toggle('current', option.dataset.theme === pref);
    option.setAttribute('aria-pressed', String(option.dataset.theme === pref));
  });
}

const storedTheme = localStorage.getItem(THEME_KEY) || 'system';
setTheme(storedTheme);

document.querySelectorAll('.theme-option').forEach((option) => {
  option.addEventListener('click', () => {
    setTheme(option.dataset.theme);
    const dropdown = option.closest('.theme-dropdown');
    dropdown?.classList.remove('open');
    dropdown?.setAttribute('aria-hidden', 'true');
    themeBtn?.setAttribute('aria-expanded', 'false');
  });
});

const themeBtn = document.getElementById('themeBtn');
const themeDropdown = document.getElementById('themeDropdown');

document.addEventListener('click', (event) => {
  if (!themeDropdown) return;
  if (!themeDropdown.contains(event.target) && !themeBtn?.contains(event.target)) {
    themeDropdown.classList.remove('open');
    themeDropdown.setAttribute('aria-hidden', 'true');
    themeBtn?.setAttribute('aria-expanded', 'false');
  }
});

if (themeBtn) {
  themeBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = !themeDropdown?.classList.contains('open');
    themeDropdown?.classList.toggle('open', open);
    themeDropdown?.setAttribute('aria-hidden', String(!open));
    themeBtn.setAttribute('aria-expanded', String(open));
  });
}

if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const pref = localStorage.getItem(THEME_KEY) || 'system';
    if (pref === 'system') setTheme('system');
  });
}

document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach((link) => {
  const href = link.getAttribute('href');
  if (!href) return;
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  if (href === currentPath || (href === 'index.html' && currentPath === '')) {
    link.classList.add('active');
  }
});

const mobileNavToggle = document.getElementById('navToggle');
const mobileNavClose = document.getElementById('mobileNavClose');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavPanel = document.getElementById('mobileNavPanel');

function toggleMobileNav(open) {
  document.body.classList.toggle('mobile-nav-open', open);
  mobileNavOverlay?.classList.toggle('open', open);
  mobileNavPanel?.classList.toggle('open', open);
  mobileNavToggle?.setAttribute('aria-expanded', String(open));
  mobileNavOverlay?.setAttribute('aria-hidden', String(!open));
  mobileNavPanel?.setAttribute('aria-hidden', String(!open));
  if (mobileNavPanel) {
    mobileNavPanel.inert = !open;
  }

  if (open) {
    mobileNavClose?.focus();
  } else if (mobileNavToggle) {
    mobileNavToggle.focus();
  }
}

mobileNavToggle?.addEventListener('click', () => toggleMobileNav(true));
mobileNavClose?.addEventListener('click', () => toggleMobileNav(false));
mobileNavOverlay?.addEventListener('click', () => toggleMobileNav(false));
mobileNavPanel?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => toggleMobileNav(false));
});

const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 30);
  });
}

const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), (index % 3) * 90);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach((element) => obs.observe(element));
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && themeDropdown?.classList.contains('open')) {
    themeDropdown.classList.remove('open');
    themeDropdown.setAttribute('aria-hidden', 'true');
    themeBtn?.setAttribute('aria-expanded', 'false');
    themeBtn?.focus();
  }

  if (event.key === 'Escape' && mobileNavPanel?.classList.contains('open')) {
    toggleMobileNav(false);
  }

  if (event.key === 'Escape' && contactPanel?.classList.contains('open')) {
    closeContactPanel(true);
  }

  if (event.key === 'Tab' && mobileNavPanel?.classList.contains('open')) {
    const focusable = [...mobileNavPanel.querySelectorAll('a[href], button:not([disabled])')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 992 && mobileNavPanel?.classList.contains('open')) {
    toggleMobileNav(false);
  }
});

const contactToggleBtn = document.getElementById('contactToggleBtn');
const contactPanel = document.getElementById('contactPanel');
const brClose = document.getElementById('brClose');
const brContactForm = document.getElementById('brContactForm');
const backTopBtn = document.getElementById('backTopBtn');

if (contactToggleBtn && contactPanel) {
  contactToggleBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = !contactPanel.classList.contains('open');
    contactPanel.classList.toggle('open', open);
    contactPanel.setAttribute('aria-hidden', String(!open));
    contactPanel.inert = !open;
    contactToggleBtn.setAttribute('aria-expanded', String(open));
    if (open) {
      document.getElementById('brName')?.focus();
    }
  });
}

function closeContactPanel(returnFocus = false) {
  contactPanel?.classList.remove('open');
  contactPanel?.setAttribute('aria-hidden', 'true');
  if (contactPanel) contactPanel.inert = true;
  contactToggleBtn?.setAttribute('aria-expanded', 'false');
  if (returnFocus) contactToggleBtn?.focus();
}

brClose?.addEventListener('click', () => {
  closeContactPanel(true);
});
document.addEventListener('click', (event) => {
  if (!contactPanel) return;
  if (!contactPanel.contains(event.target) && !contactToggleBtn?.contains(event.target)) {
    closeContactPanel();
  }
});

brContactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('brName')?.value.trim();
  const email = document.getElementById('brEmail')?.value.trim();
  const message = document.getElementById('brMessage')?.value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name || email}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href = `mailto:ogunladedaniel12@gmail.com?subject=${subject}&body=${body}`;
  closeContactPanel();
  brContactForm.reset();
});

if (backTopBtn) {
  function updateBackProgress() {
    const scrolled = window.scrollY || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = height > 0 ? Math.min(100, Math.round((scrolled / height) * 100)) : 0;
    backTopBtn.style.setProperty('--progress', percent + '%');
    backTopBtn.classList.toggle('is-visible', scrolled > 120);
  }

  window.addEventListener('scroll', updateBackProgress, { passive: true });
  window.addEventListener('resize', updateBackProgress);
  updateBackProgress();
  backTopBtn.addEventListener('click', () => {
    backTopBtn.style.setProperty('--progress', '0%');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

(function () {
  const loader = document.getElementById('pageLoader');
  const fill = document.getElementById('loaderFill');
  if (!loader || !fill) return;

  let percent = 0;
  let timer;

  function tick() {
    percent = Math.min(98, percent + Math.random() * 1.5);
    fill.style.width = percent + '%';
    if (percent < 98) timer = setTimeout(tick, 500 + Math.random() * 400);
  }

  tick();
  window.addEventListener('load', () => {
    clearTimeout(timer);
    fill.style.width = '100%';
    setTimeout(() => loader.classList.add('hidden'), 450);
  }, { once: true });

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    fill.style.width = '100%';
    loader.classList.add('hidden');
  }
})();
