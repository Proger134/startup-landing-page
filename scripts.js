
/* Паралакс еффект картинки */
// $(window).scroll(function(event) {
//     let s = 0 - $(this).scrollTop() / 1
//     $('.first-screen__background-img').css('transform', 'translate3d(0, '+s+'px, 0)')
// })


$(document).ready(() => {

    /* Меню бургер */
    $(".fixed-header__burger").click(event => {
        $(".fixed-header__burger, .fixed-header__menu").toggleClass('activeHeader')
    })

    /* Slick slider */
    $(".clients-slider").slick({
      arrows: false,
      dots: true,
    });

    $(".about-slider").slick({
      arrows: true,
      dots: false,
      slidesToShow: 4,
      easing: "ease",
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 920,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            arrows: false,
          }
        },
      ]
    })

})

$(".filter__item").click(function(event) {
  let i = $(this).data('filter')

  if(i == 1) {
    $(".works__image").show()
  } else {
    $(".works__image").hide()
    $(".works__image.f_" + i).show()
  }

  $(".filter__item").removeClass("active")
  $(this).addClass("active")
})

