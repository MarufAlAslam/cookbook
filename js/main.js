
$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  $('.hasChild').click(function(e){
      e.preventDefault()
      $(this).parent().children('.sidebar-submenu').toggle(200)
  })

  $('.fa-bars').click(function(){
    $('.col-md-2.sidebar.px-2.h-100.border-right.py-2').css("transform","translateX(0)")
  })

  $('.btn-closer').click(function(){
    $('.col-md-2.sidebar.px-2.h-100.border-right.py-2').css("transform","translateX(-100%)")
  })