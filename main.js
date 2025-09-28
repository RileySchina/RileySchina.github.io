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
    //sets which slide is the current slide
    window.currentSlide = function(n) {
        showSlides(slideIndex = n);
    }
    //displays the slide and creates the dots for the slideshow
    function showSlides(n) {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");

        //this segment returns which slide is in use
        if (slides.length === 0) return;

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        //hides the non-active slides
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        //controls which dot is shown as active
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        //increments through
        slides[slideIndex - 1].style.display = "block";
        if (dots[slideIndex - 1]) {
            dots[slideIndex - 1].className += " active";
        }
    }
});
