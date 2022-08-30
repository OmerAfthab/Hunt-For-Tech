window.onscroll = function() {myFunction()}
var header = document.getElementById("navbar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
// code for Collapse the navbar when the link is clicked
// const navLinks = document.querySelectorAll('.nav-item')
// const menuToggle = document.getElementById('navbarSupportedContent')
// const bsCollapse = new bootstrap.Collapse(menuToggle)
// navLinks.forEach((l) => {
//     l.addEventListener('click', () => { bsCollapse.toggle() })
// })


$('.a-top-nav').click(function() {
  $('.a-top-nav').removeClass("active-link");
  $('a-top-nav.active').removeClass("active-link");
  $(this).addClass("active-link");
});


var btnContainer = document.getElementById("navbar");
var btns = btnContainer.getElementsByClassName("btm");

for(var i=0; i<btns.length; i++){
  btns[i].addEventListener('click', function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active");
    this.className += " active";
  })
}

// const swiper1 = new Swiper(".mySwiper", {
//   direction: 'horizontal',
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 30,
//   breakpoints: {
//     640: {
//       slidesPerView: 1,
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 50,
//     },
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   autoplay: {
// delay: 2500,
// disableOnInteraction: false,
// },

// navigation: {
// nextEl: ".swiper-button-next1",
// prevEl: ".swiper-button-prev1",
// },
 
// });

// const swiper2 = new Swiper(".mySwiper2", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination2",
//     clickable: true,
//   },
//   autoplay: {
// delay: 2500,
// disableOnInteraction: false,
// },

// navigation: {
// nextEl: ".swiper-button-next2",
// prevEl: ".swiper-button-prev2",
// },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 50,
//     },
//   },
// });

// const swiper3 = new Swiper(".mySwiper3", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination3",
//     clickable: true,
//   },
//   autoplay: {
// delay: 2500,
// disableOnInteraction: false,
// },

// navigation: {
// nextEl: ".swiper-button-next3",
// prevEl: ".swiper-button-prev3",
// },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 3,
//       spaceBetween: 50,
//     },
//   },
// });

// const swiper4 = new Swiper(".mySwiper4", {
//   slidesPerView: 1,
//   spaceBetween: 10,
//   pagination: {
//     el: ".swiper-pagination-4",
//     clickable: true,
//   },
//   autoplay: {
// delay: 2500,
// disableOnInteraction: false,
// },

// navigation: {
// nextEl: ".swiper-button-next4",
// prevEl: ".swiper-button-prev4",
// },
//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     1024: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//   },
// });

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 30,


//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   autoplay: {
//     delay: 2400,
//     disableOnInteraction: false,
    
//     },
//     breakpoints: {
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//           1024: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//           },
//         },
// });

var mySwiper = new Swiper ('.mySwiper1', 
{
    slidesPerView: 1,
  spaceBetween: 30,

  speed:1000,
  direction: 'horizontal',
  navigation: 
  {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: 
  {
    el: '.swiper-pagination',
    dynamicBullets: true,
  },
  zoom: true,
  keyboard: 
  {
    enabled: true,
    onlyInViewport: false,
  },
  mousewheel: 
  {
    invert: true,
  },
  autoplay: 
  {
    delay: 2000,
  },
  breakpoints: {
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            },
  loop: true,
}); 