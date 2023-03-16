var swiper = new Swiper(".push", {
    slidesPerView: 1,
    spaceBetween: 0,
    observer: true,
    observeParents: true,
    touchRatio:0,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
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

  //모바일 나브
window.onload = () => { };
const gnb = document.querySelector("ul.gnb01");
function addOn() {
  // this.classList.add("on");
  gnb.classList.add("on");
  // .classList는 IE9이하 버전에서는 작동하지 않는다.
}
let removeOn = () => {
  gnb.classList.remove("on");
};
const closeBt = document.querySelector(".close");
const mMenuBt = document.querySelector(".mMenuBt");

mMenuBt.addEventListener('click', addOn);
closeBt.addEventListener('click', removeOn);
