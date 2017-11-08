$('.sldiermain').slick({
  dots: true,
  fade: true,
  prevArrow: $(".sldierarrow .left"),
  nextArrow: $(".sldierarrow .right")
});

$('.product-slick-1').slick({
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  prevArrow: $(".arrow-1 .left"),
  nextArrow: $(".arrow-1 .right"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    }
  ]
});

$('.product-slick-2').slick({
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 2,
  prevArrow: $(".arrow-2 .left"),
  nextArrow: $(".arrow-2 .right"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2, dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1, dots: false
      }
    }
  ]
});


/*---------------------------------------------------------

*/
$('.footer-col span.opener').on("click", function(){
  
    if ($(this).hasClass("plus")) {
      $(this).parent().find('.content').slideDown();
      $(this).removeClass('plus');
      $(this).addClass('minus');

      // alert("zz");
    }
    else
    {
      $(this).parent().find('.content').slideUp();
      $(this).removeClass('minus');
      $(this).addClass('plus');
    }
    return false;
  });
