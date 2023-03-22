window.onload = () => {

  // full banner
  var banner = new Swiper(".banner", {
    navigation: {
      nextEl: ".control01 > .swiper-button-next",
      prevEl: ".control01 > .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
  });
  
  // ---------------------------------------
  
  // timeline
  var timeline = new Swiper(".timeline", {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    observer: true,
    observeParents: true,
    breakpoints: {
      431: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 0,
        centeredSlides: true,
      },
    },
  });
    
    setInterval(() => {
      const date = new Intl.DateTimeFormat("ko", { hour12: false, hour: "2-digit", minute: "2-digit" }).format(new Date());
      // console.log(date.toString());
      const currentTime = date.toString();
      // console.log(currentTime);
  
      let list = document.querySelectorAll('.timeline .swiper-slide');
      // console.log(list);
      for (var index = 0; index < list.length; index++) {
        const h3 = list[index].children[0];
        const span = list[index].children[1];
        // console.log(span);
        // console.log(h3);
  
        if (index === list.length - 1) {
          h3.classList.add('active');
          break;
        };
  
        var currentProgramTime = span.innerText.substr(3);
        var nextProgramTime = list[index + 1].children[1].innerText.substr(3);
        // console.log(currentProgramTime);
        // console.log(nextProgramTime);
        if (currentTime >= currentProgramTime && currentTime < nextProgramTime) {
          h3.classList.add('active');
          timeline.slideTo(index, 0, true);
          break;
        };
      };
    }, 1000);
  
  // --------------------------------------------
  
  // 최신 프로그램
  var swiper01 = new Swiper(".new", {
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
      431: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        navigation: {
          nextEl: ".control02 > .swiper-button-next",
          prevEl: ".control02 > .swiper-button-prev",
        },
      },
    },
  });
  
  // ---------------------------------
  
  // 주간 best 방송
  var swiper02 = new Swiper(".swiper.best", {
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    observer: true,
    observeParents: true,
    // observeSlideChildren: false,
    breakpoints: {
      431: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
        navigation: {
          nextEl: ".control02 > .swiper-button-next",
          prevEl: ".control02 > .swiper-button-prev",
        },
      },
    },
  });
  
  // -----------------------------------------------
  
  
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
  
  // --------------------------------------------
  
  //  종합
  var swiper05 = new Swiper(".overall", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
    },
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
  
  // ------------------------------------------------
  
  //  민물
  var swiper06 = new Swiper(".freshwater", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
    },
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
  
  // ------------------------------------------------
  
  //  바다
  var swiper07 = new Swiper(".sea", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
    },
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
  
  // ------------------------------------------------
  
  //  루어
  var swiper08 = new Swiper(".lure", {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
    },
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
  
  // ------------------------------------------------
  
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
  
  // ------------------------------------------------
  
  // 최신동영상
  var swiper09 = new Swiper(".youtube", {
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
      431: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 25,
        navigation: {
          nextEl: ".control03 > .swiper-button-next",
          prevEl: ".control03 > .swiper-button-prev",
        },
      },
    },
  });
  
  // ------------------------------------------------
  
  // 무료동영상
  var swiper10 = new Swiper(".free", {
    slidesPerView: 2,
    spaceBetween: 5,
    loop: true,
    breakpoints: {
      431: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 25,
        navigation: {
          nextEl: ".control04 > .swiper-button-next",
          prevEl: ".control04 > .swiper-button-prev",
        },
      },
    },
  });
  
  // ------------------------------------------------
  
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
  
  // ------------------------------------------------
  
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
  
  // -----------------------------------------------------------------
  // 전역변수
  var list = [];
  $.ajax({
    type: "GET",
    url: "http://www.khoa.go.kr/api/oceangrid/fcIndexOfType/search.do?ServiceKey=hRYjS8/htbwC4t13ViXoQ==&Type=SF&ResultType=json",
    dataType: "json",
    success: function (data) {
      var info = data;
      list = info.result.data;
      const result = {};
  
      // 섬가져오기
      for (const obj of list) {
        if (!result[obj['name']]) {
          result[obj['name']] = []
        }
        result[obj['name']].push(obj)
      }
  
      initMap(result)
    },
    error: function (xhr) {
      console.log(xhr.status + "/" + xhr.errorText);
    },
  });
  
  function initMap(islands) {
  
    // 클로저 개념을 공부 해야함.
    // 맨날 봐라 생활코딩
    const markerClickEvent = (thismarker) => {
       const oceanInfoAlert = document.getElementById('alertInfo');
       const alertclose = document.getElementById('alertClose');
       let removeOn = () => {
         oceanInfoAlert.classList.remove('on')
       };
       google.maps.event.addListener(thismarker,'click',function() {
         oceanInfoAlert.classList.add('on');
         alertclose.addEventListener('click', removeOn);
         document.getElementById("localName").innerText = thismarker.label.text;
         // global
         const point = list.filter((e => e.name === thismarker.label.text))
         let elem = "";
         $.each(point, function(index, obj) {
            elem +=`<tr>`;
                elem +=`<td>${obj.date.slice(5,10)}</td>`;
                elem +=`<td>${obj.time_type}</td>`;
                elem +=`<td>${obj.fish_name}</td>`;
                //  elem +=`<td>${obj.wave_height}</td>`;
                //  elem +=`<td>${obj.water_temp}</td>`;
                elem +=`<td>${obj.air_temp}</td>`;
                elem +=`<td>${obj.tide_time_score}</td>`;
                elem +=`<td>${obj.total_score}</td>`;
            elem +=`</tr>`;
          });
          try{
            // $("table tbody").html(''); // 초기화
            $("table tbody").html(elem);
            // 휴지통에 쓰레기를 버린다
          }catch(e){
            console.log('error', e)
          }
       });
    }
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 36.1750231, lng: 127.7834302 },
      zoom: 6,
      mapId: 'AIzaSyDGXqVI2iQwjccmV4YR07X6CyrjGNAsl_Y',
      mapTypeId: google.maps.MapTypeId.HYBRID,
    });
  
    if (JSON.stringify(islands) !== '{}') {
      for (const key in islands) {
        // console.log(islands[key][0].lat, islands[key][0].lon, key)
        // console.log(islands, key)
       // 메모리
       // 메모리에 marker 변수의 공간이 만들어져
        var marker =  new google.maps.Marker({
          position: new google.maps.LatLng(islands[key][0].lat, islands[key][0].lon),
          map: map,
          label: {
            text: key,
            color: "yellow",
            fontSize: "12px",
          },
          optimized: true,
          icon: {
            url: "http://maps.gstatic.com/mapfiles/ridefinder-images/mm_20_orange.png",
            labelOrigin: new google.maps.Point(0, -10),
            // anchor: new google.maps.Point(0,0)
          },
        });
        markerClickEvent(marker)
        // const text = document.createTextNode();
        // let local = document.getElementById("localName");
        // local.appendChild(text);
      }
    }
  };
  
  // -------------------------------------------------------
  
  // var geomundo = list.filter((e => e.name === "거문도"))
  // var geojedo = list.filter((e => e.name === "거제도"))
  // var busanSouth = list.filter((e => e.name === "부산남부"))
  // var busanEast = list.filter((e => e.name === "부산동부"))
  // var busanWest = list.filter((e => e.name === "부산서부"))
  // var shinjido = list.filter((e => e.name === "신지도"))
  // var yeondo = list.filter((e => e.name === "연도"))
  // var yokjido = list.filter((e => e.name === "욕지도"))
  // var ayajin = list.filter((e => e.name === "아야진항"))
  // var oeongch = list.filter((e => e.name === "외옹치항"))
  // var yokjido = list.filter((e => e.name === "울릉도"))
  // var ulsan = list.filter((e => e.name === "울산"))
  // var uljin = list.filter((e => e.name === "울진 후정"))
  // var pohang = list.filter((e => e.name === "포항"))
  // var hupo = list.filter((e => e.name === "후포"))
  // var gageodo = list.filter((e => e.name === "가거도"))
  // var gyema = list.filter((e => e.name === "계마항"))
  // var gukhwado = list.filter((e => e.name === "국화도"))
  // var mohang = list.filter((e => e.name === "모항항"))
  // var Sangwangdeungdo = list.filter((e => e.name === "상왕등도"))
  // var eocheongdo = list.filter((e => e.name === "어청도"))
  // var yeongheungdo = list.filter((e => e.name === "영흥도"))
  // var hajodo = list.filter((e => e.name === "하조도"))
  // var Kimnyeong = list.filter((e => e.name === "김녕"))
  // var seogwipo = list.filter((e => e.name === "서귀포"))
  // var seongsanpo = list.filter((e => e.name === "성산포"))
  // var chujado = list.filter((e => e.name === "추자도"))
  // console.log(chujado);
  
  // --------------------------------------------------
  
  //모바일 나브
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
  
  };