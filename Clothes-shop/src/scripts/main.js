import $ from "jquery";
import "slick-carousel";

$(".item-lang").click(function () {
    $(".item-lang").removeClass("selected");
    $(this).addClass("selected");
});

$(".carousel").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500
});

$(".slider").slick({
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
        {
            breakpoint: 880,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 770,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        }
    ]
});

const burgerBody = document.querySelector('.burger-body')
const iconMenu = document.querySelector('.menu-icon')
const closeBurger = document.querySelector('.close-burger')
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        burgerBody.classList.add("_active")
    })
    if (closeBurger) {
        closeBurger.addEventListener("click", function () {
            burgerBody.classList.remove("_active")
        })
    }
}