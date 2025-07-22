
// Modern Theme Toggle System
document.addEventListener('DOMContentLoaded', function () {
    console.log('Modern theme toggle loaded');

    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Get saved theme or use default (dark)
    let currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme
    setTheme(currentTheme);

    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(currentTheme);
        });
    }

    function setTheme(theme) {
        if (theme === 'light') {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            body.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        }
        
        console.log('Theme applied:', theme);
        
        // Update aria-label for accessibility
        if (themeToggle) {
            themeToggle.setAttribute('aria-label', 
                theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
            );
        }
    }

    // Optional: Auto theme based on system preference
    function detectSystemTheme() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        } else {
            return 'light';
        }
    }

    // Apply system theme if no preference is stored (only on first visit)
    if (!localStorage.getItem('theme')) {
        const systemTheme = detectSystemTheme();
        setTheme(systemTheme);
    }

    // Listen for system theme changes (only if user hasn't manually selected)
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            // Only auto-switch if user hasn't manually selected a theme recently
            const lastManualSelection = localStorage.getItem('theme-manual-time');
            const now = Date.now();
            const oneHour = 60 * 60 * 1000;
            
            if (!lastManualSelection || (now - parseInt(lastManualSelection)) > oneHour) {
                const newTheme = e.matches ? 'dark' : 'light';
                setTheme(newTheme);
                currentTheme = newTheme;
            }
        });
    }

    // Mark theme as manually selected when toggle is used
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            localStorage.setItem('theme-manual-time', Date.now().toString());
        });
    }
});


