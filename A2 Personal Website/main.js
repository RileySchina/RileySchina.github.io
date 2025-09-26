document.addEventListener("DOMContentLoaded", function () {
    console.log("main.js loaded");

    const mainTitle = document.querySelector("#main-title");
    if (mainTitle) {
        mainTitle.addEventListener("click", function () {
            alert("Thanks for clicking the title!");
        });
    }

    let slideIndex = 1;
    showSlides(slideIndex);

    // Expose functions globally so they work with HTML onclick
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        if (slides.length === 0) return;

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideIndex - 1].style.display = "block";
        if (dots[slideIndex - 1]) {
            dots[slideIndex - 1].className += " active";
        }
    }
});
