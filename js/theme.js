function changeTheme(theme = null) {
    if (!theme) theme = 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateThemeButton(theme);
    markActiveTheme(theme); // Esta función ahora SOLO maneja clases
}

// ===== ACTUALIZAR BOTÓN PRINCIPAL =====
function updateThemeButton(theme) {
    const themeButton = document.getElementById('theme-button');
    let themeName = 'Claro';
    if (theme === 'dark') themeName = 'Oscuro';
    if (theme === 'pink') themeName = 'Rosa';
    themeButton.innerHTML = `${themeName} <span class="arrow">▼</span>`;
}

// ===== MARCAR TEMA ACTIVO (SOLO con clases, SIN estilos en línea) =====
function markActiveTheme(activeTheme) {
    const themeButtons = document.querySelectorAll('.theme-options button');
    themeButtons.forEach(button => {
        const buttonTheme = button.getAttribute('data-theme');
        // Solo maneja clases, NO estilos en línea
        button.classList.remove('active-option');
        if (buttonTheme === activeTheme) {
            button.classList.add('active-option');
        }
    });
}

// ===== DROPDOWN PERSONALIZADO =====
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

// ===== CARGAR TEMA GUARDADO AL INICIAR =====
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    changeTheme(savedTheme);
}

// ===== INICIALIZAR TODO CUANDO CARGA LA PÁGINA =====
document.addEventListener('DOMContentLoaded', function() {
    setupThemeSelector();
    loadSavedTheme();
});
