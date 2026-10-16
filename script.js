// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const mainNavigation = document.getElementById('main-navigation');
const menuToggle = document.querySelector('.menu-toggle');

mainNavigation.addEventListener('pointerenter', () => {
    if (window.matchMedia('(min-width: 769px)').matches) {
        header.classList.add('menu-open');
    }
});

header.addEventListener('pointerleave', () => {
    header.classList.remove('menu-open');
});

header.addEventListener('focusin', () => {
    header.classList.add('menu-open');
});

header.addEventListener('focusout', (event) => {
    if (!header.contains(event.relatedTarget)) {
        header.classList.remove('menu-open');
    }
});

menuToggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('mobile-menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? '메뉴 닫기' : '메뉴 열기');
});

// 테마 설정 함수
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
}

// 초기 테마 로드
const savedTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme(systemTheme);
}

// 토글 버튼 이벤트
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

// Slider Logic
const wrapper = document.querySelector('.slider-wrapper');

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let autoPlayInterval;
let resumeTimer;
let startX = 0;
let isDragging = false;

// 슬라이드 이동 함수
function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    
    currentIndex = index;
    wrapper.style.transform = `translateX(-${currentIndex * 33.3333}%)`;
    
    // 도트 업데이트
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// 자동 재생 시작
function startAutoPlay() {
    stopAutoPlay(); // 중복 방지
    autoPlayInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
    }, 4000);
}

// 자동 재생 정지
function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// 조작 후 재시작 로직 (5초 후 다시 시작)
function handleInteraction() {
    stopAutoPlay();
    clearTimeout(resumeTimer);
    resumeTimer = setTimeout(() => {
        startAutoPlay();
    }, 5000);
}

// 스와이프 이벤트 (터치 & 마우스)
wrapper.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    handleInteraction();
});

wrapper.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) { // 50px 이상 밀었을 때
        if (diff > 0) goToSlide(currentIndex + 1);
        else goToSlide(currentIndex - 1);
    }
    isDragging = false;
});

// 마우스 드래그 지원 (PC)
wrapper.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
    handleInteraction();
});

wrapper.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    const endX = e.clientX;
    const diff = startX - endX;

    if (Math.abs(diff) > 50) {
        if (diff > 0) goToSlide(currentIndex + 1);
        else goToSlide(currentIndex - 1);
    }
    isDragging = false;
});

// 도트 클릭 이벤트
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        goToSlide(i);
        handleInteraction();
    });
});

// 초기 실행
startAutoPlay();