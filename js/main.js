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
