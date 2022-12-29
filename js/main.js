const badgeEl = document.querySelector('header .badges');
const topEl = document.querySelector('#to-top');


//scrool값이 500이 넘을때 사라지게 만들기
window.addEventListener('scroll', _.throttle(function() {
    if (window.scrollY > 500) {
        gsap.to(badgeEl, .6, {
            opacity: 0,
            display: 'none'
        });
        gsap.to(topEl, .3, {
            x: 0
        })

    } else {
        gsap.to(badgeEl, .6, {
            opacity: 1,
            display: 'block'
        });

        //버튼 숨기기!
        gsap.to(topEl, .3, {
            x: 100
        })
    }
}, 300));

//페이지 상단으로 이동
topEl.addEventListener('click', function() {
    gsap.to(window, .5, {
        scrollTo: 0
    })
})




const fadeInEls = document.querySelectorAll('.visual .fade-in');
fadeInEls.forEach(function(fadeInEl, index) {
    gsap.to(fadeInEl, 1, {
        delay: (index + 1) * 0.5,
        opacity: 1
    })
});

// swiper
new Swiper('.text--left .swiper', {
    // Optional parameters
    direction: 'vertical',
    autoplay: true,
    loop: true
});


//  slidesPerView 한 번에 3개 출력
// spaceBetween 요소마다 10px씩 margin
// centeredSlides 가운데에 가장 첫번째 요소 출력
// autoplay 는 기본이 3초 인데 delay 5000(5s)를 넣어 5초로 변경

new Swiper('.promotion .swiper', {
    // Optional parameters
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },

    pagination: {
        el: '.promotion .swiper-pagination',
        clickable: true
    },

    navigation: {
        nextEl: '.promotion .swiper-button-next',
        prevEl: '.promotion .swiper-button-prev'
    }
});

//프로모션 버튼 클릭했을 때 프로모션 숨김/보임
const promotionEl = document.querySelector('.promotion');
const toggleEl = document.querySelector('.toggle-promotion');
let isHide = false;


toggleEl.addEventListener('click', function() {
    isHide = !isHide;

    if (isHide) {
        promotionEl.classList.add('hide')
    } else {
        promotionEl.classList.remove('hide')
    }
});

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
    // `.toFixed()`를 통해 반환된 문자 데이터를,
    // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}


//gsap.to(요소,transition 시간, 속성)

function floatingObject(selector, delay, size) {
    gsap.to(selector, 2, {
        y: size,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true,
        delay: random(0, delay)
    })
};

floatingObject('.floating1', 2, 20);
floatingObject('.floating2', 3, 10);
floatingObject('.floating3', 2, 50);


// scroll magin 사용하기
const spyEls = document.querySelectorAll('section .scroll-spy');
spyEls.forEach(function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, //보여짐 여부를 감시할 요소
            triggerHook: .8 //뷰포트 시작이 0 끝이 1 그 사이 0.8에 걸리면 setClassToggle이실행이 된다
        })
        .setClassToggle(spyEl, 'show') //show 클래스를 추가해 CSS에 애니메이션 설정
        .addTo(new ScrollMagic.Controller());
});

new Swiper('.award .swiper', {
    // Optional parameters
    slidesPerView: 5,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000
    },

    navigation: {
        nextEl: '.award .swiper-button-next',
        prevEl: '.award .swiper-button-prev'
    }
});