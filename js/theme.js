// ===== FUNCIÓN PRINCIPAL PARA CAMBIAR TEMA =====
function changeTheme(theme = null) {
    // Si no viene parámetro, usar light por defecto
    if (!theme) {
        theme = 'light';
    }
    
    // Cambiar el atributo data-theme en el HTML
    document.documentElement.setAttribute('data-theme', theme);
    
    // Guardar en localStorage
    localStorage.setItem('theme', theme);
    
    // Actualizar el botón principal con el tema actual
    updateThemeButton(theme);
    
    // Marcar la opción activa en el dropdown
    markActiveTheme(theme);
}

// ===== ACTUALIZAR BOTÓN PRINCIPAL =====
function updateThemeButton(theme) {
    const themeButton = document.getElementById('theme-button');
    
    // Convertir valor del tema a nombre bonito
    let themeName = 'Claro';
    if (theme === 'dark') themeName = 'Oscuro';
    if (theme === 'pink') themeName = 'Rosa';
    
    // Actualizar texto del botón
    themeButton.innerHTML = `${themeName} <span class="arrow">▼</span>`;
}

function markActiveTheme(activeTheme) {
    const themeButtons = document.querySelectorAll('.theme-options button');
    
    themeButtons.forEach(button => {
        const buttonTheme = button.getAttribute('data-theme');
        
        // Quitar clase activa de todos
        button.classList.remove('active-option');
        
        // Añadir clase activa solo al botón correspondiente
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
    
    // 1. Mostrar/ocultar opciones al hacer click
    themeButton.addEventListener('click', (e) => {
        e.stopPropagation();
        themeOptions.classList.toggle('show');
    });
    
    // 2. Cambiar tema al seleccionar una opción
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            
            // Cambiar tema
            changeTheme(theme);
            
            // Ocultar opciones
            themeOptions.classList.remove('show');
        });
    });
    
    // 3. Cerrar opciones al hacer click fuera
    document.addEventListener('click', (e) => {
        if (!themeButton.contains(e.target) && !themeOptions.contains(e.target)) {
            themeOptions.classList.remove('show');
        }
    });
}

// ===== CARGAR TEMA GUARDADO AL INICIAR =====
function loadSavedTheme() {
    // Obtener tema guardado o usar light por defecto
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // Aplicar tema guardado
    changeTheme(savedTheme);
}

// ===== INICIALIZAR TODO CUANDO CARGA LA PÁGINA =====
document.addEventListener('DOMContentLoaded', function() {
    // Configurar el selector de temas
    setupThemeSelector();
    
    // Cargar tema guardado
    loadSavedTheme();
});
