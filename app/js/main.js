$(function() {
 
  $('.top-slider__inner').slick({
    dots: true,
    arrows:false,
    fade: true 
  });

  $('.star').rateYo({
    rating: 3.6,
    starWidth: "17px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true

  });
});