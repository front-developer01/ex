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
    breakpoints: {
      431: {
      slidesPerView: 5,
      spaceBetween: 0, 
    },
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false
      },
    },
  });

// 최신 프로그램
  var swiper = new Swiper(".new", {
    slidesPerView: 2,
    spaceBetween: 5,
    breakpoints: {
      431: {
      slidesPerView: 4,
      spaceBetween: 40, 
      },
    },
  });

// 주간 best 방송
  var swiper = new Swiper(".best", {
    slidesPerView: 2,
    spaceBetween: 5,
    breakpoints: {
      431: {
      slidesPerView: 4,
      spaceBetween: 40, 
      },
    },
  });

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
	});
});
tabButton01[0].click(); // 첫번째 탭 켜기

//  종합
var swiper = new Swiper(".overall", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    431: {
    slidesPerView: 3,
    spaceBetween: 40, 
    },
  },
});

//  민물
var swiper = new Swiper(".freshwater", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    431: {
    slidesPerView: 3,
    spaceBetween: 40, 
    },
  },
});

//  바다
var swiper = new Swiper(".sea", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    431: {
    slidesPerView: 3,
    spaceBetween: 40, 
    },
  },
});

//  루어
var swiper = new Swiper(".lure", {
  slidesPerView: 1,
  spaceBetween: 0,
  breakpoints: {
    431: {
    slidesPerView: 3,
    spaceBetween: 40, 
    },
  },
});

// var swiper = new Swiper(".lure", {
//   effect: "cards",
//   grabCursor: true,
// });

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
var swiper = new Swiper(".youtube", {
  slidesPerView: 2,
  spaceBetween: 5,
  breakpoints: {
    431: {
    slidesPerView: 5,
    spaceBetween: 25, 
    },
  },
});

// 무료동영상
var swiper = new Swiper(".free", {
  slidesPerView: 2,
  spaceBetween: 5,
  breakpoints: {
    431: {
    slidesPerView: 5,
    spaceBetween: 25, 
    },
  },
});

//스마트스토어
var swiper = new Swiper(".store", { 
  slidesPerView: 2,
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    431: {
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
var swiper = new Swiper(".agency", {
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

//모바일 나브 
window.onload = () => {}
  const gnb = document.querySelector("ul.gnb01");
  function addOn() {
      // this.classList.add("on");
      gnb.classList.add("on");
      // .classList는 IE9이하 버전에서는 작동하지 않는다.
  }
  let removeOn = () => {
      gnb.classList.remove("on");
  };
  const mMenuBt = document.querySelector(".mMenuBt");
  const closeBt = document.querySelector(".close");
  
  mMenuBt.addEventListener('click', addOn);
  closeBt.addEventListener('click', removeOn);



