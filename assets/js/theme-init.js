(function () {
    const isDevDashboard = window.location.pathname.split('/').pop() === 'dev_dashboard.html';
    const themeKey = isDevDashboard ? 'portfolio-dev-theme' : 'portfolio-theme';
    const supportedThemes = isDevDashboard
        ? ['light', 'dark', 'nord', 'dracula', 'monokai', 'solarized-dark', 'solarized-light', 'system']
        : ['light', 'dark', 'system'];
    const stored = localStorage.getItem(themeKey);
    const preference = supportedThemes.includes(stored) ? stored : isDevDashboard ? 'dark' : 'system';
    const resolved = preference === 'system'
        ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        : preference;
    document.documentElement.setAttribute('data-theme', resolved);
    document.documentElement.setAttribute('data-theme-pref', preference);

    const dashboardThemeColors = {
        light: '#F4F3EF',
        dark: '#0B0D12',
        nord: '#2E3440',
        dracula: '#282A36',
        monokai: '#272822',
        'solarized-dark': '#002B36',
        'solarized-light': '#FDF6E3'
    };
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
        themeColor.content = isDevDashboard
            ? dashboardThemeColors[resolved]
            : resolved === 'dark' ? '#14151A' : '#F7F6F3';
    }
})();