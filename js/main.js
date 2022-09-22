// const ham = document.querySelector(".trigger");
// function clickE() {
//   ham.classList.toggle("on");
// }

// ham.addEventListener("click", clickE);

// function click(ham) {
//   ham.classList.toggle("on");
// }

$(".m_menuBtn").click(function () {
  $(".menu_container").toggleClass("on");
  $("svg text").toggleClass("stroke");
  $(".m_menuBtn .line1").toggleClass("close");
  $(".m_menuBtn .line2").toggleClass("close");
  $(".m_menuBtn .line3").toggleClass("close");
  $(".m_menuBtn .line4").toggleClass("close");
});
$(".reservation_container").click(function () {
  $(".reservation_container2").toggleClass("on");
  $("svg text").toggleClass("stroke");
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 820) {
    $(".m_menuBtn span").addClass("scroll");
    $(".header").addClass("linecolor");
  } else {
    $(".m_menuBtn span").removeClass("scroll");
    $(".header").removeClass("linecolor");
  }
});
