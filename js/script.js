/* =========================================================
   Autora: Marcela Adriana Serrano
========================================================= */

$(document).ready(function () {

    /* =========================================
       PRELOADER
    ========================================= */

    $(window).on("load", function () {

        $("#status").fadeOut();

        $("#preloader").delay(400).fadeOut("slow");

        $("body").css("overflow", "visible");

    });

    /* =========================================
       WOW ANIMATIONS
    ========================================= */

    if (typeof WOW === "function") {

        new WOW({
            mobile: false
        }).init();

    }

    /* =========================================
       MAGNIFIC POPUP
    ========================================= */

    if ($(".image-link").length) {

        $(".image-link").magnificPopup({
            type: "image",
            gallery: {
                enabled: true
            }
        });

    }

    /* =========================================
       OWL CAROUSEL
    ========================================= */

    if ($("#owl-demo").length) {

        $("#owl-demo").owlCarousel({

            items: 3,
            navigation: false,
            pagination: true,
            autoPlay: true,

            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 2],
            itemsTablet: [768, 2],
            itemsMobile: [480, 1]

        });

    }

    /* =========================================
       NAVBAR SCROLL
    ========================================= */

    $(window).scroll(function () {

        if ($(this).scrollTop() > 50) {

            $(".navbar").addClass("navbar-scroll");

        } else {

            $(".navbar").removeClass("navbar-scroll");

        }

    });

    /* =========================================
       SMOOTH SCROLL
    ========================================= */

    $('a[href^="#"]').on("click", function (e) {

        const target = $(this.getAttribute("href"));

        if (target.length) {

            e.preventDefault();

            $("html, body").stop().animate({

                scrollTop: target.offset().top - 70

            }, 800);

        }

    });

    /* =========================================
       FAVORITOS
    ========================================= */

    $(".favorite-btn").click(function () {

        $(this).toggleClass("active");

        const icon = $(this).find("i");

        if ($(this).hasClass("active")) {

            icon.removeClass("bx-heart");
            icon.addClass("bxs-heart");

        } else {

            icon.removeClass("bxs-heart");
            icon.addClass("bx-heart");

        }

    });

    /* =========================================
       CARRITO
    ========================================= */

    let cartCount = 3;

    $(".btn-dark").click(function (e) {

        if ($(this).text().includes("Comprar")) {

            e.preventDefault();

            cartCount++;

            $(".cart-badge").text(cartCount);

            $(".cart-badge").addClass("bounce");

            setTimeout(() => {

                $(".cart-badge").removeClass("bounce");

            }, 500);

        }

    });

    /* =========================================
       BUSCADOR PRODUCTOS
    ========================================= */

    $("#buscador").on("keyup", function () {

        let value = $(this).val().toLowerCase();

        $(".producto-card").filter(function () {

            $(this).toggle(

                $(this).text().toLowerCase().indexOf(value) > -1

            );

        });

    });

    /* =========================================
       FILTROS PRODUCTOS
    ========================================= */

    $(".filtros-productos button").click(function () {

        $(".filtros-productos button").removeClass("active");

        $(this).addClass("active");

        const filtro = $(this).text().toLowerCase();

        $(".producto-card").show();

        if (filtro !== "todos") {

            $(".producto-card").filter(function () {

                $(this).toggle(

                    $(this).text().toLowerCase().indexOf(filtro) > -1

                );

            });

        }

    });

    /* =========================================
       SCROLL TOP BUTTON
    ========================================= */

    $(window).scroll(function () {

        if ($(this).scrollTop() > 300) {

            $("#scrollTopBtn").fadeIn();

        } else {

            $("#scrollTopBtn").fadeOut();

        }

    });

    $("#scrollTopBtn").click(function () {

        $("html, body").animate({

            scrollTop: 0

        }, 800);

    });

    /* =========================================
       NEWSLETTER
    ========================================= */

    $(".newsletter-form").submit(function (e) {

        e.preventDefault();

        const email = $(this).find("input").val();

        if (email === "") {

            alert("Ingresá tu email");

            return;

        }

        alert("💌 Gracias por suscribirte");

        this.reset();

    });

    /* =========================================
       CONTACTO
    ========================================= */

    $(".formulario-contacto").submit(function (e) {

        const nombre = $(this).find('input[name="nombre"]').val();

        const email = $(this).find('input[name="email"]').val();

        const mensaje = $(this).find("textarea").val();

        if (nombre === "" || email === "" || mensaje === "") {

            e.preventDefault();

            alert("Completá todos los campos");

        }

    });

    /* =========================================
       LOGIN MODAL
    ========================================= */

    $("#loginModal form").submit(function (e) {

        e.preventDefault();

        const email = $(this).find('input[type="email"]').val();

        const password = $(this).find('input[type="password"]').val();

        if (email === "" || password === "") {

            alert("Completá todos los campos");

            return;

        }

        alert("✨ Bienvenida a MARCOSMETIC");

        $("#loginModal").modal("hide");

    });

});
  /* =========================================
   BANNER SLIDER
========================================= */

if ($("#banner-slider").length) {

    $("#banner-slider").owlCarousel({

        singleItem: true,

        autoPlay: 3500,

        navigation: false,

        pagination: true,

        stopOnHover: true,

        slideSpeed: 800,

        paginationSpeed: 1000

    });

}
