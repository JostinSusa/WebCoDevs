$('.sliderBig').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.sliderMed',
    responsive: [
      {
        breakpoint: 850,
        settings: {
          fade: false,
          dots: true,
          autoplay: true,
          autoplaySpeed: 5000
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false
        }
      }
    ]
});
$('.sliderMed').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.sliderBig',
    dots: true,
    centerMode: true,
    focusOnSelect: true
});

// slider equipo
$('.sliderEquipo').slick({
  dots: true,
  infinite: true,
  speed: 2000,
  autoplay: true,
  autoplayspeed:200,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
  {
      breakpoint: 500,
      settings: {
      slidesToShow: 1,
      slidesToScroll: 1
      }
  }
  ]
});
