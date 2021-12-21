const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapper.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
});


//Targeting Top Button To scroll at the top
var topbutton = document.getElementById("topBtn");
var nav = document.getElementById("navbar");
// When the user scrolls down 20px from the top of the document, show the button
// window.addEventListener('scroll',scrollFunction())
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function atTheTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// preloader
$(document).ready(function($) {
    // hide preloader when everthing in the document load
    $('#preloader').css('display', 'none');
});

// Cursor 
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    innerCursor.style.left = `${x}px`;
    innerCursor.style.top = `${y}px`;
    outerCursor.style.left = `${x}px`;
    outerCursor.style.top = `${y}px`;
});