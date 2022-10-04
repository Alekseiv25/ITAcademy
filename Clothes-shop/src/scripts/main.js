import $ from "jquery";
import "slick-carousel";

//Tabs
let tab = function () {
    let tabNav = document.querySelectorAll('.tabs-nav-item'),
        tabContent = document.querySelectorAll('.clothes-content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};

//Change language
tab();
$(".item-lang").click(function () {
    $(".item-lang").removeClass("selected");
    $(this).addClass("selected");
});

$(".list-item").click(function () {
    $(".list-item").removeClass("selected");
    $(this).addClass("selected");
});
//Accordion
$(document).ready(function () {
    $('.acc-menu .acc-head').on('click', f_acc);
});
function f_acc() {
    $(this).toggleClass('_active')
    $(this).next().slideToggle(1000);
}
//Slick slider
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

//Burger menu
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