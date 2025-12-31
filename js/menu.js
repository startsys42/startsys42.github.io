document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("nav-toggle");
    const menu = document.querySelector(".nav-menu");
    const submenuLinks = document.querySelectorAll(".has-submenu > a");

    // ===== 1. ABRIR / CERRAR MENÚ PRINCIPAL =====
    if (toggle && menu) {
        toggle.addEventListener("click", function () {
            menu.classList.toggle("open");
            this.textContent = menu.classList.contains("open") ? "✕" : "☰";
        });
    }

    // ===== 2. SUBMENÚS EN MÓVIL =====
    submenuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            if (window.innerWidth <= 1068) {
                e.preventDefault();
                const parent = this.parentElement;
                parent.classList.toggle("active");
            }
        });
    });

    // ===== 3. RESET AL CAMBIAR A DESKTOP =====
    function resetMenuOnResize() {
        if (window.innerWidth > 1068) {
            // Cierra menú móvil
            menu.classList.remove("open");

            // Resetea submenús
            document.querySelectorAll(".has-submenu")
                .forEach(item => item.classList.remove("active"));

            // Restaura icono hamburguesa
            if (toggle) toggle.textContent = "☰";
        }
    }

    // Ejecutar al redimensionar
    window.addEventListener("resize", resetMenuOnResize);

    // Ejecutar al cargar (por si recargan en desktop)
    resetMenuOnResize();
});
