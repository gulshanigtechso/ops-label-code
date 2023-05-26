
let btns = document.querySelector('.image');
let closeBtn = document.querySelector(".close");

function showPopUp(){
    document.documentElement.classList.add('overflow_hide');
    document.querySelector("#modals").style.display = 'block';
}
function hidePopUp(){
    document.documentElement.classList.remove('overflow_hide');
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

let arr_1 = document.querySelectorAll(".nav-link");
let arr_2 = document.querySelectorAll(".price");
let arr_3 = document.querySelectorAll(".mobie-view");

// ------- window screen size ----------
let x = window.matchMedia("(max-width: 567px)")

const show = (id) => {
    document.getElementById("sales_show").style.display = 'block';
    document.getElementById('sales_hide').style.display = 'none';
    localStorage.setItem('id', id);

    // ---------- hide all content box --------
    arr.forEach((item) => {
        item.classList.add('hide1');
    });

    // ---------- removing active class from all content box -------
    arr.forEach((item) => {
        item.classList.remove('active');
    }); 
    // ----------- adding background clr to all price btn
    arr_2.forEach((item)=>{item.style.backgroundColor='whitesmoke'});
    document.querySelector(id).classList.add('active');

    if (id == '#lead-starter') {
        arr_1.forEach((item)=>{item.style.backgroundColor='white'}); // adding bgColor to all btn
        document.getElementById("blue_bg").style.backgroundColor = "#3aa4d8"; // adding bgcolor to particular btn
        document.getElementById("pink-btn").style.backgroundColor = "#3aa4d8"; // adding bgcolor to particular btn

        if(x.matches){
            arr_1.forEach((item)=>{item.style.display = 'none'}); // removing all btn
            arr_3.forEach((item)=>{item.style.display = 'block'}); // showing all price btn
            document.getElementById("blue_bg").style.display = "block"; //adding bgColor to highlight btn
        }

    } else if (id == '#appointment-starter') {
        arr_1.forEach((item)=>{item.style.backgroundColor='white'});
        document.getElementById("orng_bg").style.backgroundColor = "#ff9027";
        document.getElementById("pink-btn").style.backgroundColor = "#ff9027";

        if(x.matches){
            arr_1.forEach((item)=>{item.style.display = 'none'});
            arr_3.forEach((item)=>{item.style.display = 'block'});
            document.getElementById("orng_bg").style.display = "block";
        }

    } else if (id == '#closer-starter') {
        arr_1.forEach((item)=>{item.style.backgroundColor='white'});
        document.getElementById("prple_bg").style.backgroundColor = "#ad7bc0";      
        document.getElementById("pink-btn").style.backgroundColor = "#ad7bc0";
        
        if(x.matches){
            arr_1.forEach((item)=>{item.style.display = 'none'});
            arr_3.forEach((item)=>{item.style.display = 'block'});
            document.getElementById("prple_bg").style.display = "block";
        }
        
    } else{
        arr_1.forEach((item)=>{item.style.backgroundColor='white'});
        document.getElementById("lprple_bg").style.backgroundColor = "#dec7e6";
        document.getElementById("sales_show").style.display = 'none';
        document.getElementById('sales_hide').style.display = 'block';

        if(x.matches){
            arr_1.forEach((item)=>{item.style.display = 'none'});
            document.getElementById("lprple_bg").style.display = "block";
        }
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
    arr_2.forEach((item)=>{item.style.backgroundColor='whitesmoke'});
    if (id === '#lead-starter') {
        btn1.style.backgroundColor = '#3aa4d8';
        document.querySelector('#lead-starter').classList.add('active');
    } else if (id === '#appointment-starter') {
        btn1.style.backgroundColor = '#ff9027';
        document.querySelector('#appointment-starter').classList.add('active');
    } else if (id === '#closer-starter') {
        btn1.style.backgroundColor = '#ad7bc0';
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
    arr_2.forEach((item)=>{item.style.backgroundColor='whitesmoke'});
    if (id === '#lead-starter') {
        btn2.style.backgroundColor = '#3aa4d8';
        document.querySelector('#lead-pro').classList.add('active');
    }else if (id === '#appointment-starter') {
        btn2.style.backgroundColor = '#ff9027';
        document.querySelector('#appointment-pro').classList.add('active');
    } else if (id === '#closer-starter') {
        btn2.style.backgroundColor = '#ad7bc0';
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
    arr_2.forEach((item)=>{item.style.backgroundColor='whitesmoke'});
    if (id === '#lead-starter') {
        btn3.style.backgroundColor = '#3aa4d8';
        document.querySelector('#lead-premium').classList.add('active');
    } else if (id === '#appointment-starter') {
        btn3.style.backgroundColor = '#ff9027';
        document.querySelector('#appointment-premium').classList.add('active');
    } else if (id === '#closer-starter') {
        btn3.style.backgroundColor = '#ad7bc0';
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


