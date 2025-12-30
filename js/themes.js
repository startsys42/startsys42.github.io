// ====== Cargar el tema guardado ======
(function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.documentElement.setAttribute("data-theme", savedTheme);
        const select = document.getElementById("theme-select");
        if (select) select.value = savedTheme;
    }
})();

// ====== Cambiar de tema ======
function changeTheme() {
    const select = document.getElementById("theme-select");
    const theme = select.value;

    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
}
