// ===========================
// PRELOADER
// ===========================

$(window).on("load", function () {

    $("#status").fadeOut();

    $("#preloader").delay(300).fadeOut("slow");

    $("body").css({
        overflow: "visible"
    });

});

// ===========================
// DOCUMENT READY
// ===========================

$(document).ready(function () {

    // ==========================
    // WOW ANIMATION
    // ==========================

    new WOW({
        mobile: false
    }).init();

    // ==========================
    // IMAGE POPUP
    // ==========================

    $(".image-link").magnificPopup({
        type: "image",
        gallery: {
            enabled: true
        }
    });

    // ==========================
    // PRODUCT CAROUSEL
    // ==========================

    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        pagination: true
    });

    // ==========================
    // TESTIMONIAL CAROUSEL
    // ==========================

    $("#owl-demo-1").owlCarousel({
        singleItem: true,
        autoPlay: 4000,
        slideSpeed: 500,
        paginationSpeed: 500
    });

    // ==========================
    // SMOOTH SCROLL
    // ==========================

    $('a[href*="#"]').on("click", function (e) {

        const target = $(this.hash);

        if (target.length) {

            e.preventDefault();

            $("html, body").animate({
                scrollTop: target.offset().top
            }, 700);

        }

    });

    // ==========================
    // NAVBAR EFFECT
    // ==========================

    $(window).scroll(function () {

        if ($(window).scrollTop() > 50) {

            $(".navbar").addClass("navbar-scroll");

        } else {

            $(".navbar").removeClass("navbar-scroll");

        }

    });

    // ==========================
    // PRODUCT HOVER EFFECT
    // ==========================

    $(".product-card").hover(

        function () {

            $(this).css({
                transform: "scale(1.04)",
                transition: "0.3s",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
            });

        },

        function () {

            $(this).css({
                transform: "scale(1)",
                boxShadow: "none"
            });

        }

    );

    // ==========================
    // IMAGE ZOOM EFFECT
    // ==========================

    $(".product-card img").hover(

        function () {

            $(this).css({
                transform: "scale(1.12)",
                transition: "0.4s"
            });

        },

        function () {

            $(this).css({
                transform: "scale(1)"
            });

        }

    );

    // ==========================
    // SEARCH PRODUCTS
    // ==========================

    $("#searchInput").on("keyup", function () {

        let value = $(this).val().toLowerCase();

        $(".product-card").filter(function () {

            $(this).toggle(

                $(this).text().toLowerCase().indexOf(value) > -1

            );

        });

    });

    // ==========================
    // FAVORITES BUTTON
    // ==========================

    $(".favorite-btn").click(function () {

        $(this).toggleClass("active-favorite");

        if ($(this).hasClass("active-favorite")) {

            $(this).html("❤️");

        } else {

            $(this).html("🤍");

        }

    });

    // ==========================
    // ADD TO CART
    // ==========================

    let cartCount = 0;

    $(".add-cart").click(function () {

        cartCount++;

        $("#cart-count").text(cartCount);

        $(".cart-message")
            .fadeIn()
            .delay(1000)
            .fadeOut();

    });

    // ==========================
    // CONTACT FORM
    // ==========================

    $("#contactForm").submit(function (e) {

        e.preventDefault();

        let name = $("#name").val();
        let email = $("#email").val();
        let message = $("#message").val();

        if (name === "" || email === "" || message === "") {

            alert("Por favor complete todos los campos.");

        } else {

            alert("Mensaje enviado correctamente ✨");

            $("#contactForm")[0].reset();

        }

    });

    // ==========================
    // BACK TO TOP BUTTON
    // ==========================

    $(window).scroll(function () {

        if ($(this).scrollTop() > 300) {

            $("#backToTop").fadeIn();

        } else {

            $("#backToTop").fadeOut();

        }

    });

    $("#backToTop").click(function () {

        $("html, body").animate({
            scrollTop: 0
        }, 700);

    });

    // ==========================
    // DARK MODE
    // ==========================

    $("#darkModeToggle").click(function () {

        $("body").toggleClass("dark-mode");

    });

    // ==========================
    // MODAL
    // ==========================

    $("#exampleModal").on("show.bs.modal", function (event) {

        const button = $(event.relatedTarget);

        const recipient = button.data("whatever");

        const modal = $(this);

        modal.find(".modal-title").text(
            "Mensaje para " + recipient
        );

        modal.find(".modal-body input").val(recipient);

    });

});
/* ========================================= */
/* LOGIN VALIDACION */
/* ========================================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;

        if (email === "" || password === "") {

            alert("Completa todos los campos");

        } else {

            alert("Inicio de sesión exitoso ✨");

            window.location.href = "index.html";

        }

    });

}

/* ========================================= */
/* REGISTER VALIDACION */
/* ========================================= */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const password =
            document.getElementById("password").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {

            alert("Las contraseñas no coinciden");

            return;

        }

        alert("Cuenta creada correctamente 💖");

        window.location.href = "login.html";

    });

}
