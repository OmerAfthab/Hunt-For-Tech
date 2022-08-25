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

  
