$(document).ready(function(){
    /*Scroll*/
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = 0;
    
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();
        
        if( scrollOffset >= introH ) {
            header.addClass("header--fixed");
        } else {
            header.removeClass("header--fixed");
        }
    });
    
    
    /*Burger Menu*/
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        
    });
    
    /*Smooth Scroll*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    
    /* Slider */
    $('.slider').slick({
  centerMode: true,
  variableWidth: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ],
  autoplay: true,
  autoplaySpeed: 2000,
  asNavFor: ".sliderbig"
});
    $('.sliderbig').slick({
       arrows: false,
       fade: true,
       asNavFor: ".slider"
    });
});

        //arrows: true; //true - по-умолч.,false - выключаем стрелки
        //dots: false; //false - по-ум. true - появляються точки над слайдером
        //adaptiveHeight: false; //true - подстраивает самый высокий слайд под низкий
        //slidesToShow: 1; - количество слайдов показ за раз
        //
        //slidesToScroll: 1; - количество скроллинга слайдов за раз
        //speed: 300; - скорость проллистования слайдов
        //easing: 'linear'; - 
        //infinite: true; - бесконечный скроллинг слайдов, false - ограниченное по кол. слайдов
        //initialSlide: 0; - начала показ слайда
        //autoplay: false; - автоматический скроллинг слайдов
        //autoplaySpeed: 500; - скорость авт. скроллинга
        //pauseOnFocus: true;
        //pauseOnHover: true;
        //pauseOnDotsHover: true; //ставиться на паузу при наведении
        //draggable: true; - скролить слайды с помозью мыши, фолс - выкл на компе
        //swipe: true: - тоже самое но на моб. устр.
        //touchThreshold: 10;
        //touchMove: true; - не можем тянуть, но можем переключать
        //waitForAnimate: true; - ожидает окончание анимации и тогда он снова может проигрываться, при фолс - можно переключать без ожидания анимации
        //centerMode: true; -  1 слайд выстраиваеться по центру
        //variableWidth: false; 
        //rows 1;
        //slidesPerRow: 1;
        