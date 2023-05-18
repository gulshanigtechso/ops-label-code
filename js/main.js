const show = (id) => {
    if (id == 'ex1-tabs-1') {
        document.querySelector(".hide").style.display = "block";
        document.querySelector(".hide1").style.display = "none";
        document.querySelector(".hide2").style.display = "none";
        document.querySelector(".hide3").style.display = "none";
    } else if (id == 'ex1-tabs-2') {
        document.querySelector(".hide").style.display = "none";
        document.querySelector(".hide1").style.display = "block";
        document.querySelector(".hide2").style.display = "none";
        document.querySelector(".hide3").style.display = "none";
    } else if (id == 'ex1-tabs-3') {
        document.querySelector(".hide").style.display = "none";
        document.querySelector(".hide1").style.display = "none";
        document.querySelector(".hide2").style.display = "block";
        document.querySelector(".hide3").style.display = "none";
    } else if (id == 'ex1-tabs-4') {
        document.querySelector(".hide").style.display = "none";
        document.querySelector(".hide1").style.display = "none";
        document.querySelector(".hide2").style.display = "none";
        document.querySelector(".hide3").style.display = "block";
    }
};


// sticky header
const header = document.querySelector("header");

window.addEventListener('scroll', () => {
    window.scrollY > 80 ? header.classList.add("sticky") : header.classList.remove("sticky");
});

// menubar
const menuBtn = document.querySelector(".menu_btn");
const menubar = document.querySelector("#menubar");

menuBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("overflow_hide");
    menuBtn.classList.toggle("clicked");
    menubar.classList.toggle("show");
});


// AOS
AOS.init({
    duration: 600, // values from 0 to 3000, with step 50ms
    mirror: true, // whether elements should animate out while scrolling past them
});


// Typed
var typed = new Typed('#typedElement', {
    strings: ['CLOSING MORE DEALS', '15-20+ Leads', '20-100+ Meetings', 'Valuable Connections'],
    typeSpeed: 60,
    loop: true,
});


const servicesSwiper1 = new Swiper('.services-swiper1', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
});

const servicesSwiper2 = new Swiper('.services-swiper2', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
});

const servicesSwiper3 = new Swiper('.services-swiper3', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
    },
});


const brandsSwiper = new Swiper('.brands-swiper', {
    loop: true,
    autoplay: true,
    slidesPerView: 6,
    spaceBetween: 50,
    grabCursor: true
});


const testiSwiper1 = new Swiper('.testi-swiper-img', {
    loop: true,
    autoplay: true,
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: { crossFade: true },
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const testiSwiper2 = new Swiper('.testi-swiper-txt', {
    loop: true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    slidesPerView: 1,
    grabCursor: true
});

testiSwiper1.controller.control = testiSwiper2;
testiSwiper2.controller.control = testiSwiper1;
