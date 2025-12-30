function changeTheme(theme = null) {
    // Si no viene parámetro, obtener del select antiguo (por compatibilidad)
    if (!theme) {
        const select = document.getElementById('theme-select');
        if (select) {
            theme = select.value;
        } else {
            theme = 'light'; // Valor por defecto
        }
    }
    
    // Resto de tu código para cambiar tema...
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}


// Selector de tema personalizado
const themeButton = document.getElementById('theme-button');
const themeOptions = document.getElementById('theme-options');
const themeButtons = themeOptions.querySelectorAll('button');

// 1. Mostrar/ocultar opciones al hacer click
themeButton.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que se cierre inmediatamente
    themeOptions.classList.toggle('show');
});

// 2. Cambiar tema al seleccionar una opción
themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const theme = button.getAttribute('data-theme');
        const themeName = button.textContent;
        
        // Actualizar botón principal
        themeButton.innerHTML = `${themeName} <span class="arrow">▼</span>`;
        
        // Ocultar opciones
        themeOptions.classList.remove('show');
        
        // Cambiar tema (usa tu función existente)
        changeTheme(theme);
    });
});

// 3. Cerrar opciones al hacer click fuera
document.addEventListener('click', (e) => {
    if (!themeButton.contains(e.target) && !themeOptions.contains(e.target)) {
        themeOptions.classList.remove('show');
    }
});
