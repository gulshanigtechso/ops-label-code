
let btns = document.querySelector('.image');
let closeBtn = document.querySelector(".close");

function showPopUp(){
    document.querySelector("#modals").style.display = 'block';
    console.log("modal opened")
}
function hidePopUp(){
    console.log('close button')
    document.querySelector("#modals").style.display = 'none';
}

// services tab box
let arr = document.querySelectorAll('.lead-booster-info');
let btn1 = document.querySelector('#pink-btn');
let btn2 = document.querySelector('#orange-btn');
let btn3 = document.querySelector("#white-btn");


const caseSwiper = new Swiper('.caseSwiper', {
    loop: true,
    slidesPerView: 1,
    effect: "fade",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

let arr_1 = document.querySelectorAll(".nav-link")

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
        arr_1.forEach((item)=>{item.style.backgroundColor='white'});
        document.getElementById("blue_bg").style.backgroundColor = "#3aa4d8";
    } else if (id == '#ex1-tabs-2') {
        btn1.style.backgroundColor = '#ffe9a6';
        btn2.style.backgroundColor = '#ffc47f';
        btn3.style.backgroundColor = '#ff9027';
        arr_1.forEach((item)=>{item.style.backgroundColor='white'});
        document.getElementById("orng_bg").style.backgroundColor = "#ff9027";
    } else if (id == '#ex1-tabs-3') {
        btn1.style.backgroundColor = '#fedfed';
        btn2.style.backgroundColor = '#dec7e6';
        btn3.style.backgroundColor = '#ad7bc0';
        arr_1.forEach((item)=>{item.style.backgroundColor='white'});
        document.getElementById("prple_bg").style.backgroundColor = "#ad7bc0";
    } else{
        arr_1.forEach((item)=>{item.style.backgroundColor='white'});
        document.getElementById("lprple_bg").style.backgroundColor = "#dec7e6";
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

// ----------- carousle ------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


