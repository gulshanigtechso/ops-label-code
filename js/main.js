const whyopsSwiper = new Swiper('.whyops_swiper', {
    slidesPerView: 1,
    slideToClickedSlide: true,
    touchMoveStopPropagation: false,
    simulateTouch: false,
    allowSwipeToNext: true,
    allowSwipeToPrev: true,
    allowPageScroll: "auto ",
    navigation: {
        nextEl: '.whyops_swiper .swiper-button-next',
        prevEl: '.whyops_swiper .swiper-button-prev',
    },
});

const whyopsInnerSwiper = new Swiper('.whyops_inner_swiper', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
});

// const whyopsSwiper2 = new Swiper('.whyops_swiper2', {
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
// });

// const whyopsSwiper3 = new Swiper('.whyops_swiper3', {
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
// });

// const whyopsSwiper4 = new Swiper('.whyops_swiper4', {
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
// });

// const whyopsSwiper5 = new Swiper('.whyops_swiper5', {
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
// });

// const whyopsSwiper6 = new Swiper('.whyops_swiper6', {
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
// });



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
    slidesPerView: 3,
    spaceBetween: 50,
    grabCursor: true,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        640: {
            slidesPerView: 3,
            // spaceBetween: 30
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 4,
            // spaceBetween: 40
        },
        1000: {
            slidesPerView: 6,
            // spaceBetween: 40
        },
    }
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



// services tab box
let arr = document.querySelectorAll('.lead-booster-info');
let btn1 = document.querySelector('#pink-btn');
let btn2 = document.querySelector('#orange-btn');
let btn3 = document.querySelector("#white-btn");

const show = (id) => {
    localStorage.setItem('id', id);
    arr.forEach((item) => {
        item.classList.add('hide1');
    });
    arr.forEach((item) => {
        item.classList.remove('active');
    });
    document.querySelector(id).classList.add('active');
    if (id == '#ex1-tabs-1') {
        btn1.style.backgroundColor = '#d0f0ed';
        btn2.style.backgroundColor = '#72c6ca';
        btn3.style.backgroundColor = '#3aa4d8';
    } else if (id == '#ex1-tabs-2') {
        btn1.style.backgroundColor = '#ffe9a6';
        btn2.style.backgroundColor = '#ffc47f';
        btn3.style.backgroundColor = '#ff9027';
    } else if (id == '#ex1-tabs-3') {
        btn1.style.backgroundColor = '#fedfed';
        btn2.style.backgroundColor = '#dec7e6';
        btn3.style.backgroundColor = '#ad7bc0';
    }
};

function starter() {
    let id = localStorage.getItem('id');
    arr.forEach((item) => {
        item.classList.add('hide1');
    });
    arr.forEach((item) => {
        item.classList.remove('active');
    });
    if (id === '#ex1-tabs-1') {
        document.querySelector('#lead-starter').classList.add('active');
    }
    else if (id === '#ex1-tabs-2') {
        document.querySelector('#appointment-starter').classList.add('active');
    } else if (id === '#ex1-tabs-3') {
        document.querySelector('#closer-starter').classList.add('active');
    } else {
        document.querySelector(id).classList.add('active');
    }
}

function pro() {
    let id = localStorage.getItem('id');
    arr.forEach((item) => {
        item.classList.add('hide1');
    });
    arr.forEach((item) => {
        item.classList.remove('active');
    });
    if (id === '#ex1-tabs-1') {
        document.querySelector('#lead-pro').classList.add('active');
    }
    else if (id === '#ex1-tabs-2') {
        document.querySelector('#appointment-pro').classList.add('active');
    } else if (id === '#ex1-tabs-3') {
        document.querySelector('#closer-pro').classList.add('active');
    } else {
        document.querySelector(id).classList.add('active');
    }
}

function premium() {
    let id = localStorage.getItem('id');
    arr.forEach((item) => {
        item.classList.add('hide1');
    });
    arr.forEach((item) => {
        item.classList.remove('active');
    });
    if (id === '#ex1-tabs-1') {
        document.querySelector('#lead-premium').classList.add('active');
    } else if (id === '#ex1-tabs-2') {
        document.querySelector('#appointment-premium').classList.add('active');
    }
    else if (id === '#ex1-tabs-3') {
        document.querySelector('#closer-premium').classList.add('active');
    } else {
        document.querySelector(id).classList.add('active');
    }
}


// sticky header
const header = document.querySelector("header");
window.addEventListener('scroll', () => {
    window.scrollY > 80 ? header.classList.add("sticky") : header.classList.remove("sticky");
});

// Typed
var typed = new Typed('#typedElement', {
    strings: ['CLOSING MORE DEALS', '15-20+ Leads', '20-100+ Meetings', 'Valuable Connections'],
    typeSpeed: 60,
    loop: true,
});
