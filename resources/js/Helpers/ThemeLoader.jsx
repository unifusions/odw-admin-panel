export function applyTheme(theme) {
    // Remove existing theme link if exists
    const existingLink = document.getElementById('theme-css');
    if (existingLink) {
        existingLink.remove();
    }

    // Create new link tag
    const link = document.createElement('link');
    link.id = 'theme-css';
    link.rel = 'stylesheet';
    link.href = theme === 'dark' ? '/css/dark.css' : '/css/app.css';

    document.head.appendChild(link);
}