var bullet = ['PROFILE', 'SKILL', 'PROJECT', 'CONTACT'];

new Swiper(".index", {
  effect: "cube",
  cubeEffect: {
    slideShadows: true,
    shadow: true,
    shadowOffset: 30,
    shadowScale: 1,
  },
  grabCursor: true,
  mousewheel: {
    invent: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type : 'bullets',
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
    }
  },
});
