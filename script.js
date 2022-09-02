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
    clickable: true,
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



function validateName() {

  var name = document.getElementById('contact-name').value;

  if(name.length == 0) {

    producePrompt('Name is required', 'name-error' , 'red')
    document.querySelector('.modal-dialog').style.display='none'
    return false;

}

if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {

    producePrompt('First and last name, please.','name-error', 'red');
    document.querySelector('.modal-dialog').style.display='none'
    return false;

}

producePrompt('Valid', 'name-error', 'green');
document.querySelector('.modal-dialog').style.display='block'
return true;

}

function validatePhone() {

var phone = document.getElementById('phone').value;
console.log(phone)

if(phone.length == 0) {
  producePrompt('Phone number is required.', 'phone-error', 'red');
  document.querySelector('.modal-dialog').style.display='none'
  return false;
}

if(phone.length <= 8 ) {
  producePrompt('Number with Country Code.', 'phone-error', 'red');
  document.querySelector('.modal-dialog').style.display='none';
  return false;
}

if(!phone.match(/^[0-9]{0,10}$/)) {
  producePrompt('Only digits, please.' ,'phone-error', 'red');
  document.querySelector('.modal-dialog').style.display='none'
  return false;
}

producePrompt('Valid', 'phone-error', 'green');
document.querySelector('.modal-dialog').style.display='block'

return true;

}

function validateEmail () {

var email = document.getElementById('contact-email').value;

if(email.length == 0) {

producePrompt('Email Invalid','email-error', 'red');
document.querySelector('.modal-dialog').style.display='none'
return false;

}

if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {

producePrompt('Email Invalid', 'email-error', 'red');
document.querySelector('.modal-dialog').style.display='none'

return false;

}

producePrompt('Valid', 'email-error', 'green');
document.querySelector('.modal-dialog').style.display='block'

return true;

}

function validateMessage() {
var message = document.getElementById('contact-message').value;
var required = 20;
var left = required - message.length;

if (left > 0) {
producePrompt(left + ' more characters required','message-error','red');
document.querySelector('.modal-dialog').style.display='none'
return false;
}

producePrompt('Valid', 'message-error', 'green');
document.querySelector('.modal-dialog').style.display='block'

return true;

}

function validateForm() {
if (!validateName() || !validateEmail() || !validatePhone() || !validateMessage()) {

jsShow('submit-error');
producePrompt('Please fix errors to submit.', 'submit-error', 'red');
// setTimeout(function(){jsHide('submit-error');}, 2000);
return false;
}
else {
 
}
}

function jsShow(id) {
document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
document.getElementById(id).style.display = 'none';
}


function producePrompt(message, promptLocation, color) {

document.getElementById(promptLocation).innerHTML = message;
document.getElementById(promptLocation).style.color = color;

}




