var swiper = new Swiper('.swiper-container', {
   slidesPerView: 3,
   spaceBetween: 30,
   // centeredSlides: true,
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


   //  responsive
   breakpoints: {
      650: {
         slidesPerView: 4
      },
      900: {
         slidesPerView: 5
      }
   }


});