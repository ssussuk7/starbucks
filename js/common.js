//검색창 click 이벤트 추가
const searchEl = document.querySelector('.search');
const inputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
    inputEl.focus();
})

inputEl.addEventListener('focus', function() {
    searchEl.classList.add('focused');
    inputEl.setAttribute('placeholder', '통합검색');
});

inputEl.addEventListener('blur', function() {
    searchEl.classList.remove('focused');
    inputEl.setAttribute('placeholder', ' ');
});

//이번년도 삽입하기
const thisYear = document.querySelector('.year');
thisYear.textContent = new Date().getFullYear(); //현재년도 출력