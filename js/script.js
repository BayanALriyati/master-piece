// let navbar = document.querySelector('.head .flex .navbar');
// let profile = document.querySelector('.head .flex .profile');

// // document.querySelector('#menu-btn').onclick = () =>{
// //    navbar.classList.toggle('active');
// //    profile.classList.remove('active');
// // }

// document.querySelector('#user-btn').onclick = () =>{
//    profile.classList.toggle('active');
//    nav.classList.remove('active');
// }

// window.onscroll = () =>{
//    profile.classList.remove('active');
//    nav.classList.remove('active');
// }


// searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//   searchForm.classList.toggle('active');
// }

// let loginForm = document.querySelector('.login-form-container');

// document.querySelector('#login-btn').onclick = () =>{
//   loginForm.classList.toggle('active');
// }

// document.querySelector('#close-login-btn').onclick = () =>{
//   loginForm.classList.remove('active');
// }

// window.onscroll = () =>{

//   searchForm.classList.remove('active');

//   if(window.scrollY > 80){
//     document.querySelector('.header .header-2').classList.add('active');
//   }else{
//     document.querySelector('.header .header-2').classList.remove('active');
//   }

// }



var swiper = new Swiper(".heading", {
   loop:true,
   centeredSlides: true,
   autoplay: {
     delay: 4500,
     disableOnInteraction: false,
   },
   breakpoints: {
     0: {
       slidesPerView: 1,
     }
   },
 });

 var swiper = new Swiper(".products-slider", {
  spaceBetween: 10,
  loop:true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

//  let loginForm = document.querySelector('.login-container');

// document.querySelector('#user-btn').onclick = () =>{
//   loginForm.classList.toggle('active');
// }

// document.querySelector('#close-login-btn').onclick = () =>{
//   loginForm.classList.remove('active');
// }