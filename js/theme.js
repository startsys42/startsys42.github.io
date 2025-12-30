// ===== VERSIÓN LIMPIA - SIN ESTILOS EN LÍNEA =====
function changeTheme(theme) {
    if (!theme) theme = 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const names = { light: 'Claro', dark: 'Oscuro', pink: 'Rosa' };
    document.getElementById('theme-button').innerHTML = `${names[theme]} <span class="arrow">▼</span>`;
}

function setupThemeSelector() {
    const themeBtn = document.getElementById('theme-button');
    const themeOpts = document.getElementById('theme-options');
    if (!themeBtn || !themeOpts) return;
    
    themeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        themeOpts.classList.toggle('show');
    });
    
    themeOpts.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            changeTheme(btn.getAttribute('data-theme'));
            themeOpts.classList.remove('show');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (!themeBtn.contains(e.target) && !themeOpts.contains(e.target)) {
            themeOpts.classList.remove('show');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupThemeSelector();
    const saved = localStorage.getItem('theme') || 'light';
    changeTheme(saved);
});
