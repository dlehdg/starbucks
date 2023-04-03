const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus(); // 선택된 요소를 선택시 코드 살행
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if(window.scrollY > 500) {
      //배지 숨기기
      gsap.to(badgeEl, .6, { // 자바스크립트 애니메이션 라이브러리
        opacity: 0,
        display: 'none'
      }); // gsap.to(요소, 지속시간, 옵션) 시간이 지나면 보이게 구현
  }
  else {
       //배지 보이기
      gsap.to(badgeEl, .6, {
        opacity: 1,
        display: 'block'
      });
  }
}, 300));

// _.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소, 지속시간(초단위), 옵션(객체))
  gsap.to(fadeEl, 1, {
    delay:(index + 1) * .7, // 지연 -> 순차적으로 0.7초 마다 화면에 나오도록 지현시킴
    opacity: 1
  });
}); // 요소들의 개수만큼 반복


new Swiper('.notice-line .swiper-container', {  // new Swiper(요소, 옵션) 생성자
  direction: 'vertical', // 방향 -> 수직
  autoplay: true, // 자동 슬라이드 재생
  loop: true, // 반복 재생
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3,  // 한번에 보여주는 슬라이드 개수
  spaceBetween: 10,  // 술라이드 사이 여백
  centeredSlides: true,  // 1번 슬라이드가 가운데에 보이기  
  loop: true,
  autoplay: {
    delay: 5000, // 0.5 초 마다 슬라이드
  },
  pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true, // 사용자의 페이지 번호 요소 제어 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', // 이전 버튼
    nextEl: '.promotion .swiper-next' // 다음 버튼
  }
}); 


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', () => {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion){
    // 숨김 처리
    promotionEl.classList.add('hide');
  }
  else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});