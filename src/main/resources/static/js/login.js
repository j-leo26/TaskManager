$(document).ready(function () {
    console.log("login.js cargado");

    // Animaciones para inputs
    $(".contenedor-formularios").find("input, textarea").on("keyup blur focus", function (e) {
        var $this = $(this),
            label = $this.prev("label");

        if (e.type === "keyup") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.addClass("active highlight");
            }
        } else if (e.type === "blur") {
            if ($this.val() === "") {
                label.removeClass("active highlight");
            } else {
                label.removeClass("highlight");
            }
        } else if (e.type === "focus") {
            if ($this.val() === "") {
                label.removeClass("highlight");
            } else {
                label.addClass("highlight");
            }
        }
    });

    // Tabs (Iniciar sesión / Registrarse)
    $(".tab a").on("click", function (e) {
        e.preventDefault();
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");

        const target = $(this).attr("href");

        $(".contenido-tab > div").not(target).hide();
        $(target).fadeIn(600);

        // Limpia todos los inputs visibles dentro del tab mostrado
        $(target).find("input[type='text'], input[type='email'], input[type='password']").val("");

        // Limpieza especial para el usuario en iniciar sesión
        $("#usuario-login").val("");
    });

    // Botón "Sign up for free" del navbar
    $("#signup-btn").on("click", function () {
        const tabRegistro = $(".tab-primera a");
        if (tabRegistro.length) {
            tabRegistro.click();

            // Scroll al formulario (opcional)
            const formSection = document.querySelector("#registrarse");
            if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
     // Detecta si se accede a /login?register=true
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("register") === "true") {
        const tabRegistro = $(".tab-primera a");
        if (tabRegistro.length) {
            tabRegistro.click();

            // Scroll al formulario (opcional)
            const formSection = document.querySelector("#registrarse");
            if (formSection) {
                formSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
});
