$(document).ready(function () {
  $('.roadmap-container').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    nextArrow: '<button type="button" class="carrossel-seta">&rsaquo;</button>',
    prevArrow: false,
    variableWidth: true
  });
});