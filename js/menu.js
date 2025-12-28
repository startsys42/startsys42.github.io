document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.querySelector(".nav-menu");
    
    if (toggle && menu) {
        // 1. ABRIR/CERRAR MENÚ
        toggle.addEventListener("click", function() {
            menu.classList.toggle("open");
            // Cambiar el icono
            this.textContent = menu.classList.contains("open") ? "✕" : "☰";
        });
        
        // 2. SUBMENÚS EN MÓVIL
        const submenuLinks = document.querySelectorAll(".has-submenu > a");
        submenuLinks.forEach(link => {
            link.addEventListener("click", function(e) {
                // Solo en móvil
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const parent = this.parentElement;
                    parent.classList.toggle("active");
                }
            });
        });
    }
});
