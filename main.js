$(".slider-one")
 .not(".slick-intialized")
 .slick({
     autoplay: true,
     autoplaySpeed: 3000,
     dots: true,
     prevArrow: ".site-slider .slider-btn .prev",
     nextArrow: ".site-slider .slider-btn .next"
 });




 $(".slider-two")
 .not(".slick-intialized")
 .slick({
     prevArrow: ".site-slider-two .prev",
     nextArrow: ".site-slider-two .next",
     slidesToShow: 5,
     autoplaySpeed: 3000
 });

 



 function isCardVisible() {
    for (card of cards) {
      isElementInViewport(card)
        ? card.classList.add("isVisible")
        : card.classList.remove("isVisible");
    }
  }
  
  document.addEventListener("DOMContentLoaded", isCardVisible);
  window.addEventListener("scroll", isCardVisible);
  window.addEventListener("resize", isCardVisible);