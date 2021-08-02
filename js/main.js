$(document).ready(function () {
    $(".open").click(function () {
        $(".main_nav").css("height", "350px");
    });
    $(".open").click(function () {
        $(".open").hide(100,function () {
            $(".close").show(10)
        })
    });
    $(".close").click(function () {
        $(".main_nav").css("height", "40px");
    });
    $(".close").click(function () {
        $(".close").hide(50,function () {
            $(".open").show(10)
        })
    });

});



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    dots:false,
    navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})




    // click to scroll top
    $('.up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();
