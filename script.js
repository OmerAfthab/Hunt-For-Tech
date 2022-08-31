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


//form validation
// function validate(){
//   let email = document.querySelector('.email')
//   let username = document.querySelector(".username");
//   var text;
//   if(username.value.length < 5){
//     username.classList.add("fail");
//     return false;
//   }else {
//     username.classList.remove('fail')
//   }
//   if(email.value.indexOf("@") == -1 || email.value.length < 6){
//     email.classList.add("fail");
//     return false;
//   }else {
//     email.classList.remove('fail')
//   }
//   alert("Form Submitted Successfully!");
//   return true;
// }


// function validateName(e) {
// e.preventDefault()
//   var name = document.getElementById('contact-name').value;

//   if(name.length == 0) {

//     producePrompt('Name is required', 'name-error' , 'red')
//     return false;

// }

// if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

//     producePrompt('First and last name, please.','name-error', 'red');
//     return false;

// }

// producePrompt('Valid', 'name-error', 'green');
// return true;

// }

// function validateEmail(e) {
//   e.preventDefault()
//   var email = document.getElementById('contact-email').value;
  
//   if(email.length == 0) {
  
//   producePrompt('Email Invalid','email-error', 'red');
//   return false;
  
//   }
  
//   if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
  
//   producePrompt('Email Invalid', 'email-error', 'red');
//   return false;
  
//   }
  
//   producePrompt('Valid', 'email-error', 'green');
//   return true;
  
//   }

// function validatePhone(e) {
//   e.preventDefault()
// var phone = document.getElementById('contact-phone').value;

// if(phone.length == 0) {
//   producePrompt('Phone number is required.', 'phone-error', 'red');
//   return false;
// }

// if(phone.length != 10) {
//   producePrompt('Include area code.', 'phone-error', 'red');
//   return false;
// }

// if(!phone.match(/^[0-9]{10}$/)) {
//   producePrompt('Only digits, please.' ,'phone-error', 'red');
//   return false;
// }

// producePrompt('Valid', 'phone-error', 'green');
// return true;

// }



// function validateMessage(e) {
//   e.preventDefault()
// var message = document.getElementById('contact-message').value;
// var required = 30;
// var left = required - message.length;

// if (left > 0) {
// producePrompt(left + ' more characters required','message-error','red');
// return false;
// }

// producePrompt('Valid', 'message-error', 'green');
// return true;

// }


// function validateForm(e) {
//   e.preventDefault()
// if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
// jsShow('submit-error');
// producePrompt('Please fix errors to submit.', 'submit-error', 'red');
// setTimeout(function(){jsHide('submit-error');}, 2000);
// return false;
// }
// else {

// }
// }

// function jsShow(id) {
// document.getElementById(id).style.display = 'block';
// }

// function jsHide(id) {
// document.getElementById(id).style.display = 'none';
// }


// function producePrompt(message, promptLocation, color) {

// document.getElementById(promptLocation).innerHTML = message;
// document.getElementById(promptLocation).style.color = color;

// }