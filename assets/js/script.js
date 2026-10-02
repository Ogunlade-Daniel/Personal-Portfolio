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
  html.setAttribute('data-theme', resolveTheme(pref));
  html.setAttribute('data-theme-pref', pref);
  localStorage.setItem(THEME_KEY, pref);

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
  });
}

const storedTheme = localStorage.getItem(THEME_KEY) || 'system';
setTheme(storedTheme);

document.querySelectorAll('.theme-toggle').forEach((toggle) => {
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const current = html.getAttribute('data-theme-pref') || 'system';
    const next = current === 'light' ? 'dark' : current === 'dark' ? 'system' : 'light';
    setTheme(next);
  });
});

document.querySelectorAll('.theme-option').forEach((option) => {
  option.addEventListener('click', () => {
    setTheme(option.dataset.theme);
    const dropdown = option.closest('.theme-dropdown');
    dropdown?.classList.remove('open');
  });
});

document.addEventListener('click', (event) => {
  const themeDropdown = document.getElementById('themeDropdown');
  if (!themeDropdown) return;
  if (!themeDropdown.contains(event.target) && event.target !== document.getElementById('themeBtn')) {
    themeDropdown.classList.remove('open');
  }
});

const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
  themeBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const dropdown = document.getElementById('themeDropdown');
    dropdown?.classList.toggle('open');
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

const mobileNavToggle = document.getElementById('mobileNavToggle') || document.getElementById('navToggle');
const mobileNavClose = document.getElementById('mobileNavClose');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavPanel = document.getElementById('mobileNavPanel');

function toggleMobileNav(open) {
  document.body.classList.toggle('mobile-nav-open', open);
  mobileNavOverlay?.classList.toggle('active', open);
  mobileNavPanel?.classList.toggle('open', open);
  mobileNavPanel?.classList.toggle('active', open);
  if (mobileNavPanel && !('open' in mobileNavPanel.classList)) {
    mobileNavPanel.classList.toggle('open', open);
  }
}

mobileNavToggle?.addEventListener('click', () => toggleMobileNav(true));
mobileNavClose?.addEventListener('click', () => toggleMobileNav(false));
mobileNavOverlay?.addEventListener('click', () => toggleMobileNav(false));
document.querySelectorAll('.mobile-nav-links a').forEach((link) => {
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

const navToggle = document.getElementById('navToggle');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    mobileNavPanel?.classList.add('open');
    mobileNavOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}

const closeMobileNav = () => {
  mobileNavPanel?.classList.remove('open');
  mobileNavOverlay?.classList.remove('open');
  document.body.style.overflow = '';
};

mobileNavClose?.addEventListener('click', closeMobileNav);
mobileNavOverlay?.addEventListener('click', closeMobileNav);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeMobileNav();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) closeMobileNav();
});

const contactToggleBtn = document.getElementById('contactToggleBtn');
const contactPanel = document.getElementById('contactPanel');
const brClose = document.getElementById('brClose');
const brContactForm = document.getElementById('brContactForm');
const backTopBtn = document.getElementById('backTopBtn');

if (contactToggleBtn && contactPanel) {
  contactToggleBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    contactPanel.classList.toggle('open');
  });
}

brClose?.addEventListener('click', () => contactPanel?.classList.remove('open'));
document.addEventListener('click', (event) => {
  if (!contactPanel) return;
  if (!contactPanel.contains(event.target) && event.target !== contactToggleBtn) {
    contactPanel.classList.remove('open');
  }
});

brContactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('brName')?.value.trim();
  const email = document.getElementById('brEmail')?.value.trim();
  const message = document.getElementById('brMessage')?.value.trim();
  const subject = encodeURIComponent(`Portfolio contact from ${name || email}`);
  const body = encodeURIComponent(`Name: ${name}%0AEmail: ${email}%0A%0A${message}`);
  window.location.href = `mailto:ogunladedaniel12@gmail.com?subject=${subject}&body=${body}`;
  contactPanel?.classList.remove('open');
  brContactForm.reset();
});

if (backTopBtn) {
  function updateBackProgress() {
    const scrolled = window.scrollY || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const percent = height > 0 ? Math.min(100, Math.round((scrolled / height) * 100)) : 0;
    backTopBtn.style.setProperty('--progress', percent + '%');
  }

  window.addEventListener('scroll', updateBackProgress);
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
