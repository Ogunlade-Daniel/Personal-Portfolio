(function () {
    const stored = localStorage.getItem('portfolio-theme') || 'system';
    const resolved = stored === 'system'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : stored;
    document.documentElement.setAttribute('data-theme', resolved);
    document.documentElement.setAttribute('data-theme-pref', stored);
})();