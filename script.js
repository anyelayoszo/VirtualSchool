var swiper = new Swiper(".slide-content", {
    slidesPerView: 5,
    spaceBetween: 35,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
        1750: {
            slidesPerView: 5,
        },
    },
  });



$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
        $('.navbar').addClass("sticky");
        }else{
        $('.navbar').removeClass("sticky");
        }
    });

   // toggle menu/navbar script
   
   $('.menu-btn').click(function(){
       $('.navbar .menu').toggleClass("active");
       $('.menu-btn i').toggleClass("active");
   })
   
})


