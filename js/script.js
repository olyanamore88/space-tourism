$(function(){
 $('.slider__box').slick({
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="img/Arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="img/Arrow-right.svg" alt="arrow-right">',
    responsive: [
       {
          breakpoint: 481,
          settings: {
            arrows:false,
            infinite: true,
            dots: true
          }
       }
    ]
 });

 
 $('.menu-btn').on('click', function(){
   $('.menu-btn ,.menu__list').toggleClass('active');
   $('body').toggleClass('lock');
});

});