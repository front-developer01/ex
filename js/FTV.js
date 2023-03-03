// full banner
var swiper = new Swiper(".banner", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
});

// timeline
var swiper = new Swiper(".timeline", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: true,
  centeredSlides: true,
  breakpoints: {
    431: {
      slidesPerView: 4,
      spaceBetween: 0,
      loop: true,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 0,
      navigation: {
        nextEl: ".control02 > .swiper-button-next",
        prevEl: ".control02 > .swiper-button-prev",
      },
      loop: true,
      centeredSlides: true,
    },
  },
});


// --------------------------------------------
// window.onload = () => {
//   setInterval(() => {
//     const date = new Date(DateString);
//     console.log(date.toLocaleTimeString("ko-KR"));
//   },1000)
// };

const date = new Date();
var options = { hour: "numeric", minute: "numeric" };
console.log(date.toLocaleTimeString("ko-KR", options));
var hours = date.getHours();
console.log(hours)
var min = date.getMinutes();
console.log(min)
const currentTime = String(hours) + String(minute)
// console.log()

// const day = new Date();
//     // 2. UTC 시간 계산
//     const utc = day.getTime() + (day.getTimezoneOffset() * 60 * 1000);
//     // 3. UTC to KST (UTC + 9시간)
//     const KR_TIME_DIFF = 9 * 60 * 60 * 1000;  //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
//     const kr = new Date(utc + (KR_TIME_DIFF));  //UTC 시간을 한국 시간으로 변환하기 위해 utc 밀리초 값에 9시간을 더함.

//     // console.log(kr);

//     const date = (kr);
//     console.log(date);
//     const hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
//     // console.log(hours)
//     const minute = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()
//     // console.log(minute);
//     const currentTime = String(hours) + String(minute)
//     console.log(currentTime);


 // 인터내셔널(Intl) 사용해보기
        // Intl.DateTimeFormat
        // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

        // 한국식으로 날짜 포맷팅 
        // let day2 = new Date();
        // let krDay = new Intl.DateTimeFormat('kr').format(day2);
        // console.log(krDay);

        // options = {
        //     weekday: 'long',
        //     year: 'numeric',
        //     month: 'long',
        //     day: 'numeric',
        //     dayPeriod: "short",
        //     hour: 'numeric',
        //     hour12: false,
        //     minute: 'numeric',
        //     second: 'numeric',
        //     timeZoneName: 'short'
        // };
        // let krFullDay = new Intl.DateTimeFormat('kr', options).format(day2);
        // console.log(krFullDay);


// ------------------------------------

// window.onload = () => {

//   setInterval (() => {

//     const day = new Date();
//     // 2. UTC 시간 계산
//     const utc = day.getTime() + (day.getTimezoneOffset() * 60 * 1000);
//     // 3. UTC to KST (UTC + 9시간)
//     const KR_TIME_DIFF = 9 * 60 * 60 * 1000;  //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
//     const kr = new Date(utc + (KR_TIME_DIFF));  //UTC 시간을 한국 시간으로 변환하기 위해 utc 밀리초 값에 9시간을 더함.

//     // console.log(kr);

//     const date = (kr);
//     console.log(date);
//     const hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
//     // console.log(hours)
//     const minute = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()
//     // console.log(minute);
//     const currentTime = String(hours) + String(minute)
//     console.log(currentTime);
    
//     let list = document.querySelectorAll('.timeline .swiper-slide')
//     // console.log(list);
//     for (let index = 0; index < list.length; index++) {
//       const slide = list[index]
//       const h3 = list[index].children[0]
//       const span = list[index].children[1]
//       // console.log(span);
//       // console.log(h3);

//       if(index === list.length - 1){
//         h3.classList.add('active');
//         break
//       }

//       var currentProgramTime = span.innerText.substr(3,2) + span.innerText.substr(6)
//       var nextProgramTime = list[index+1].children[1].innerText.substr(3,2) + list[index+1].children[1].innerText.substr(6)
//       // console.log(currentProgramTime);
//       // console.log(nextProgramTime);
//       $('.timeline .swiper-slide').removeClass('swiper-slide-active')
//       $('.timeline .swiper-slide').removeClass('swiper-slide-prev')
//       $('.timeline .swiper-slide').removeClass('swiper-slide-next')
//       if(currentTime >= currentProgramTime &&  currentTime < nextProgramTime ){
//         slide.classList.add('swiper-slide-active')
//         h3.classList.add('active')
//       }

//     };
//   }, 1000)
// };

// else {
//   if (index !== list.length -1){
//     return; 
//   }

// 최신 프로그램
var swiper01 = new Swiper(".new", {
  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  breakpoints: {
    431: {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: ".control03 > .swiper-button-next",
        prevEl: ".control03 > .swiper-button-prev",
      },
      loop: true,
    },
  },
});


// 주간 best 방송
var swiper02 = new Swiper(".swiper.best", {
  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  autoplay: {
    delay: 500,
    disableOnInteraction: false
  },
  observer: true,
  observeParents: true,
  // observeSlideChildren: false,
  breakpoints: {
    431: {
      slidesPerView: 3,
      spaceBetween: 30,
      // loop: true,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
      navigation: {
        nextEl: ".control03 > .swiper-button-next",
        prevEl: ".control03 > .swiper-button-prev",
      },
    },
  },
});

// swiper01.controller.control01 = banner;

// 최신, 주간 탭구조
let tabButton01 = document.querySelectorAll('.tabButton01 > button'); // 탭버튼
Array.from(tabButton01).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    let tabBoxs = document.querySelectorAll('.tabContent01 .swiper'); // 탭박스
    for (var i = 0; i < tabBoxs.length; i++) {
      tabBoxs[i].classList.remove("on");
      tabButton01[i].classList.remove("on");
      // 모든 버튼과 박스에서 on제거
    }
    tabBoxs[index].classList.add("on");
    // 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
    this.classList.add("on");
    swiper01.update()
    swiper02.update()
  });
});
tabButton01[0].click(); // 첫번째 탭 켜기

//  종합
var swiper05 = new Swiper(".overall", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    431: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

//  민물
var swiper06 = new Swiper(".freshwater", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    431: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

//  바다
var swiper07 = new Swiper(".sea", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    431: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

//  루어
var swiper08 = new Swiper(".lure", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    431: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

// 종합 ~ 루어 탭구조
let tabButton02 = document.querySelectorAll('.tabButton02 > button'); // 탭버튼
Array.from(tabButton02).forEach((eachButton, index) => {
  eachButton.addEventListener('click', function () {
    let tabBoxs = document.querySelectorAll('.tabContent02 .swiper'); // 탭박스
    for (var i = 0; i < tabBoxs.length; i++) {
      tabBoxs[i].classList.remove("on");
      tabButton02[i].classList.remove("on");
      // 모든 버튼과 박스에서 on제거
    }
    tabBoxs[index].classList.add("on");
    // 내가 누른 탭버튼과 인덱스번호가 같은 탭박스에 class on추가
    this.classList.add("on");
  });
});
tabButton02[0].click(); // 첫번째 탭 켜기

// 최신동영상
var swiper09 = new Swiper(".youtube", {
  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  breakpoints: {
    431: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 25,
      navigation: {
        nextEl: ".control04 > .swiper-button-next",
        prevEl: ".control04 > .swiper-button-prev",
      },
      loop: true,
    },
  },
});

// 무료동영상
var swiper10 = new Swiper(".free", {
  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  breakpoints: {
    431: {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
    },
    800: {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 25,
      navigation: {
        nextEl: ".control05 > .swiper-button-next",
        prevEl: ".control05 > .swiper-button-prev",
      },
      loop: true,
    },
  },
});

//스마트스토어
var swiper11 = new Swiper(".store", {
  slidesPerView: 2,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    800: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
});

//협력기관
var swiper12 = new Swiper(".agency", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    431: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
});

// //모바일 나브 
// window.onload = () => { };
// const gnb = document.querySelector("ul.gnb01");
// function addOn() {
//   // this.classList.add("on");
//   gnb.classList.add("on");
//   // .classList는 IE9이하 버전에서는 작동하지 않는다.
// }
// let removeOn = () => {
//   gnb.classList.remove("on");
// };
// const mMenuBt = document.querySelector(".mMenuBt");
// const closeBt = document.querySelector(".close");

// mMenuBt.addEventListener('click', addOn);
// closeBt.addEventListener('click', removeOn);



