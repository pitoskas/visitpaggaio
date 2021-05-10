const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})



$(document).ready(function () {


  $('.second-button').on('click', function () {

    $('.animated-icon').toggleClass('open');
  });

});
