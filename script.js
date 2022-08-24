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

$('.a-top-nav').click(function() {
  $('.a-top-nav').removeClass("active-link");
  $('a-top-nav.active').removeClass("active-link");
  $(this).addClass("active-link");
});


  

