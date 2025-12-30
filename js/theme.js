// ===== FUNCIÓN PRINCIPAL PARA CAMBIAR TEMA =====
function changeTheme(theme = null) {
    if (!theme) theme = 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeButton(theme);
    // NO LLAMAR A markActiveTheme
}
function updateThemeButton(theme) {
    const themeButton = document.getElementById('theme-button');
    let themeName = 'Claro';
    if (theme === 'dark') themeName = 'Oscuro';
    if (theme === 'pink') themeName = 'Rosa';
    themeButton.innerHTML = `${themeName} <span class="arrow">▼</span>`;
}
function setupThemeSelector() {
    const themeButton = document.getElementById('theme-button');
    const themeOptions = document.getElementById('theme-options');
    if (!themeButton || !themeOptions) return;
    const themeButtons = themeOptions.querySelectorAll('button');
    themeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        themeOptions.classList.toggle('show');
    });
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            changeTheme(theme);
            themeOptions.classList.remove('show');
        });
    });
    document.addEventListener('click', (e) => {
        if (!themeButton.contains(e.target) && !themeOptions.contains(e.target)) {
            themeOptions.classList.remove('show');
        }
    });
}
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    changeTheme(savedTheme);
}
document.addEventListener('DOMContentLoaded', function() {
    setupThemeSelector();
    loadSavedTheme();
});
