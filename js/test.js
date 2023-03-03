
// window.onLoad = () =>{

//   setInterval(()=>{
//       const date = new Date()
//       const hours =  date.getHours() < 10 ? '0'+date.getHours() : date.getHours() 
//       const minute = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()
//       const currentTime = String(hours)+ String(minute)
//       // 2227
//     console.log(date);

//       const list = document.querySelectorAll('.timeline .swiper-slide')
//       console.log(list);
    
//       for(let index = 0;  index < list.length; index++ ){
 
//           const {children: [h3,span]} = list[index]
//           // const h3 = list[index].children[0]
//           // const span = list[index].children[1]
//           // 마지막 프로그램은 앞 뒤로 비교할 수 있는 프로그램이 없기에 무조건 활성화 시킴.
//           if(index === list.length - 1){
//               h3.classList.add('active')
//               break // 여기까지만 코드가 동작을하고 아래 부분이 무시되 돌지 않아
//           }
//           //'AM 12:34' 0~7 substr(시작 인덱스, 시작인덱스부터 가져올 스트링의 길이)

//           // 프로그램 사이사이 시간을 구하는 구간
//           var currentProgramTime = span.innerText.substr(3,2) + span.innerText.substr(6) // 0127
//           var nextProgramTime = list[index+1].children[1].innerText.substr(3,2) + list[index+1].children[1].innerText.substr(6) // 1927

//           if(currentTime >= currentProgramTime &&  currentTime < nextProgramTime ){
//               h3.classList.add('active')
//               break
//           }
//       }
//   }, 1000)
// };


window.onload = () => {

    setTimeout (() => {
  
      const day = new Date();
      // 2. UTC 시간 계산
      const utc = day.getTime() + (day.getTimezoneOffset() * 60 * 1000);
      // 3. UTC to KST (UTC + 9시간)
      const KR_TIME_DIFF = 9 * 60 * 60 * 1000;  //한국 시간(KST)은 UTC시간보다 9시간 더 빠르므로 9시간을 밀리초 단위로 변환.
      const kr = new Date(utc + (KR_TIME_DIFF));  //UTC 시간을 한국 시간으로 변환하기 위해 utc 밀리초 값에 9시간을 더함.
  
      // console.log(kr);
  
      const date = (kr);
      console.log(date);
      const hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours()
      // console.log(hours)
      const minute = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()
      // console.log(minute);
      const currentTime = String(hours) + String(minute)
      // console.log(currentTime);
      
      const list = document.querySelectorAll('.timeline .swiper-slide')
      // console.log(list);
      for (let index = 0; index < list.length; index++) {
        const h3 = list[index].children[0]
        const span = list[index].children[1]
        // console.log(span);
        // console.log(h3);
        if(index === list.length - 1){
          h3.classList.add('active');
        }
      };
  
      var currentProgramTime = span.innerText.substr(3,2) + span.innerText.substr(6)
      var nextProgramTime = list[index+1].children[1].innerText.substr(3,2) + list[index+1].children[1].innerText.substr(6)
      // console.log(currentProgramTime);
      // console.log(nextProgramTime);
      if(currentTime >= currentProgramTime &&  currentTime < nextProgramTime ){
        h3.classList.add('active')
        // break
      };
    }, 1000)
  };