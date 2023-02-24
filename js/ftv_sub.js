var swiper = new Swiper(".push", {
    slidesPerView: 2,
    spaceBetween: 5,
    breakpoints: {
      431: {
      slidesPerView: 3,
      spaceBetween: 30, 
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 60, 
      },
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
  });