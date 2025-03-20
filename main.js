// 页面加载动画
document.addEventListener('DOMContentLoaded', function() {
    // 初始化AOS动画库
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // 荣誉卡片点击效果
    const honorCards = document.querySelectorAll('.honor-card');
    honorCards.forEach(card => {
        card.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    });

    // 滚动监听
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 初始化页面元素
    initPage();
});

function initPage() {
    // 添加AOS属性
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.setAttribute('data-aos', 'fade-up');
        section.setAttribute('data-aos-delay', index * 100);
    });

    // 添加图片懒加载
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
        img.onload = () => img.classList.add('loaded');
    });
}

// 添加AOS库
const aosScript = document.createElement('script');
aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
document.head.appendChild(aosScript);

// 添加AOS样式
const aosStyle = document.createElement('link');
aosStyle.rel = 'stylesheet';
aosStyle.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
document.head.appendChild(aosStyle);
