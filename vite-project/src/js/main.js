import '../less/style.less';

const navTag = document.querySelector(".nav");
const btnBurger = document.querySelector(".menu__button");
const menuBurger = document.querySelector(".burger");
const menu = document.querySelector(".menu-nav");
const width = window.innerWidth;
const tel = document.querySelector(".tel");

const menuChild = document.querySelector(".menu-nav__child");
const linkActive = document.querySelector(".nav__active");
const linkActiveChild = document.querySelector(".nav__active-child");
const menuChildSecond = document.querySelector(".menu-nav__child-second");
const headerMenu = document.querySelector(".header__block");

if (width <= 768) {
    btnBurger.classList.remove("visually-hidden");
    menu.classList.add("visually-hidden");
    btnBurger.addEventListener('click', function (event) {
        menuBurger.classList.add("menu-burger");
        menu.classList.remove("visually-hidden");
        menuChild.classList.remove("visually-hidden");
        menuChildSecond.classList.remove("visually-hidden");

    });
    } else if (width <= 386) {
        tel.classList.add("visually-hidden");
    } else {
        navTag.classList.remove("visually-hidden");
        btnBurger.classList.add("visually-hidden"); 
};
//Открытие меню при наведении
linkActive.addEventListener('mouseover', function (event) { 
    menuChild.classList.remove("visually-hidden");
});
linkActiveChild.addEventListener('mouseover', function (event) { 
    menuChildSecond.classList.remove("visually-hidden");
});

//Скрытие меню
linkActiveChild.addEventListener('mouseout', function (event) { 
    menuChildSecond.classList.add("visually-hidden");
});
headerMenu.addEventListener('mouseout', function (event) { 
    menuChild.classList.add("visually-hidden");
});
