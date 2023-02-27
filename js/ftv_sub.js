var swiper = new Swiper(".push", {
    slidesPerView: 1,
    spaceBetween: 0,
    touchRatio:0,
    breakpoints: {
      600: {
      slidesPerView: 2,
      spaceBetween: 60,
      touchRatio:1,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 60,
        touchRatio:1, 
      },
    },
  });

//   window.addEventListener('resize', () => {
//     let wiw = window.innerWidth;

//     if (wiw < 600) {
//         swiper.off();
//     } else {
//         swiper.on();
//     }
// });

  // swiper.destroy(deleteInstance, cleanStyles)

  let tabBt = document.querySelectorAll('.tabBt > button'); // 탭버튼
  Array.from(tabBt).forEach((eachButton, index) => {
    eachButton.addEventListener('click', function () {
      let tabBoxs = document.querySelectorAll('.tabContent .tab'); // 탭박스
      for (var i = 0; i < tabBoxs.length; i++) {
        tabBoxs[i].classList.remove("on");
        tabBt[i].classList.remove("on");
        // 모든 버튼과 박스에서 on제거
      }
      tabBoxs[index].classList.add("on");
      // 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
      this.classList.add("on");
    });
  });
  tabBt[0].click(); // 첫번째 탭 켜기
