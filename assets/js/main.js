// ==========================
// PREMIUM JAVASCRIPT - Biscuit & Jam
// Advanced Interactions & Animations
// ==========================

// ==== FLAVOR DATA ====
const flavorsData = {
    'pistachio-raspberry': {
        title: 'Фисташка-Малина',
        description: 'Элегантное сочетание нежной фисташки с яркой малиной создает гармоничный вкус. Фисташковый крем дополняется свежей малиновой начинкой.',
        tags: ['Ореховый', 'Ягодный'],
        images: ['assets/img/IMG_8737.jpeg', 'assets/img/IMG_8749.jpeg', 'assets/img/IMG_8740.jpeg']
    },
    'pear-caramel': {
        title: 'Груша-Карамель',
        description: 'Сладкая карамель с ароматной грушей создает утонченный десерт. Нежная грушевая начинка прекрасно сочетается с насыщенной карамелью.',
        tags: ['Фруктовый', 'Сладкий'],
        images: ['assets/img/IMG_8735.jpeg', 'assets/img/IMG_8728.jpeg', 'assets/img/IMG_8718.jpeg']
    },
    'blackberry': {
        title: 'Ежевика',
        description: 'Насыщенный ягодный вкус с легкой кислинкой. Свежая ежевика в сочетании с нежным кремом создает идеальный баланс.',
        tags: ['Ягодный', 'Свежий'],
        images: ['assets/img/IMG_8626.jpeg', 'assets/img/IMG_8628.jpeg', 'assets/img/Ejevika2.png']
    },
    'strawberry': {
        title: 'Клубника',
        description: 'Классический вкус сочной клубники в нежном макароне. Натуральная клубничная начинка дарит настоящий летний вкус.',
        tags: ['Классика', 'Любимый'],
        images: ['assets/img/1k.png', 'assets/img/2k.png', 'assets/img/3k.png']
    },
    'mango': {
        title: 'Манго',
        description: 'Тропическая сладость солнечного манго переносит вас на экзотические пляжи. Сочная начинка из спелого манго.',
        tags: ['Экзотика', 'Тропики'],
        images: ['assets/img/IMG_8408 (2).jpeg', 'assets/img/IMG_8376 (2) (1).jpeg', 'assets/img/IMG_8501.jpg']
    },
    'newyear': {
        title: 'Новогодние',
        description: 'Новогодние макаруны в форме рождественского венка для праздничного настроения, начинка: любой вкус из ассортимента',
        tags: ['Праздник', 'Пряный'],
        images: ['assets/img/ng1.jpeg', 'assets/img/ng2.jpeg', 'assets/img/ng3.jpeg']
    }
};

// ==== INIT ON DOM LOAD ====
document.addEventListener('DOMContentLoaded', function() {
    initPreloader();
    initCursor();
    initParticles();
    initAOS();
    initNavigation();
    initFlavors();
    initReviews();
    initConstructor();
    initStats();
    initScrollEffects();
    initBackToTop();
});

// ==== PRELOADER ====
function initPreloader() {
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.classList.add('hidden');
            setTimeout(() => preloader.style.display = 'none', 500);
        }, 1500);
    });
}

// ==== CUSTOM CURSOR ====
function initCursor() {
    if (window.matchMedia("(hover: hover)").matches) {
        const cursor = document.querySelector('.cursor');
        const follower = document.querySelector('.cursor-follower');

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animate() {
            cursorX += (mouseX - cursorX) * 0.5;
            cursorY += (mouseY - cursorY) * 0.5;
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;

            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            follower.style.left = followerX + 'px';
            follower.style.top = followerY + 'px';

            requestAnimationFrame(animate);
        }
        animate();

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .flavor-card');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                follower.style.width = '60px';
                follower.style.height = '60px';
            });
            el.addEventListener('mouseleave', () => {
                follower.style.width = '40px';
                follower.style.height = '40px';
            });
        });
    }
}

// ==== PARTICLES ====
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 30, density: { enable: true, value_area: 800 } },
                color: { value: ['#fdecda', '#ffd6d6', '#ffe4e1', '#fff5e1', '#e8f5e9'] },
                shape: {
                    type: ['circle', 'edge'],
                    stroke: { width: 2, color: '#0abab1' }
                },
                opacity: { value: 0.3, random: true, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
                size: { value: 8, random: true, anim: { enable: true, speed: 3, size_min: 4 } },
                line_linked: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 1.5,
                    direction: 'top',
                    random: true,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'bubble' },
                    onclick: { enable: false }
                },
                modes: {
                    bubble: { distance: 200, size: 12, duration: 2, opacity: 0.5 }
                }
            }
        });
    }
}

// ==== AOS INIT ====
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 100
        });
    }
}

// ==== NAVIGATION ====
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.getElementById('navbar');

    // Toggle menu
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = navbar.offsetHeight;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ==== FLAVORS & FILTERS ====
function initFlavors() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const flavorCards = document.querySelectorAll('.flavor-card');

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.dataset.filter;

            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            flavorCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => card.style.opacity = '1', 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => card.style.display = 'none', 300);
                }
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById('flavorModal');
    const modalClose = document.getElementById('modalClose');
    const modalOverlay = modal.querySelector('.modal-overlay');

    flavorCards.forEach(card => {
        card.addEventListener('click', function() {
            const flavorKey = this.dataset.flavor;
            const flavorData = flavorsData[flavorKey];
            if (flavorData) openFlavorModal(flavorData);
        });
    });

    function openFlavorModal(data) {
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalDescription').textContent = data.description;

        const tagsContainer = document.getElementById('modalTags');
        tagsContainer.innerHTML = data.tags.map(tag =>
            `<span class="tag">${tag}</span>`
        ).join('');

        if (data.images && data.images.length > 0) {
            document.getElementById('modalMainImage').src = data.images[0];
            const thumbsContainer = document.getElementById('modalThumbnails');
            thumbsContainer.innerHTML = data.images.map((img, idx) =>
                `<img src="${img}" alt="${data.title}" class="${idx === 0 ? 'active' : ''}">`
            ).join('');

            thumbsContainer.querySelectorAll('img').forEach((thumb, idx) => {
                thumb.addEventListener('click', function() {
                    document.getElementById('modalMainImage').src = data.images[idx];
                    thumbsContainer.querySelectorAll('img').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        }

        const orderText = encodeURIComponent(`Здравствуйте! Хотел(а) бы заказать макарон ${data.title}!`);
        document.getElementById('modalOrderBtn').href = `https://wa.me/79067402165?text=${orderText}`;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
}

// ==== REVIEWS CAROUSEL ====
function initReviews() {
    const carousel = document.querySelector('.reviews-carousel');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    if (!carousel || !dots.length) return;

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });

    function updateCarousel() {
        const scrollAmount = carousel.scrollWidth / dots.length * currentIndex;
        carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' });

        dots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    // Auto-scroll
    setInterval(() => {
        currentIndex = (currentIndex + 1) % dots.length;
        updateCarousel();
    }, 5000);
}

// ==== CONSTRUCTOR ====
function initConstructor() {
    const flavorOptions = document.querySelectorAll('.flavor-option');
    const summaryItems = document.getElementById('summaryItems');
    const totalCount = document.getElementById('totalCount');
    const totalPrice = document.getElementById('totalPrice');
    const sendOrderBtn = document.getElementById('sendOrder');

    const order = {};
    const PRICE_PER_UNIT = 200;

    flavorOptions.forEach(option => {
        const checkbox = option.querySelector('input[type="checkbox"]');
        const qtyInput = option.querySelector('.qty-input');
        const flavorCount = option.querySelector('.flavor-count');
        const plusBtn = option.querySelector('.qty-btn.plus');
        const minusBtn = option.querySelector('.qty-btn.minus');
        const flavorName = option.querySelector('.flavor-name').textContent;

        plusBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentVal = parseInt(qtyInput.value);
            if (currentVal < 24) {
                qtyInput.value = currentVal + 1;
                updateOrder(flavorName, currentVal + 1);
                checkbox.checked = true;
            }
        });

        minusBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const currentVal = parseInt(qtyInput.value);
            if (currentVal > 0) {
                qtyInput.value = currentVal - 1;
                updateOrder(flavorName, currentVal - 1);
                if (currentVal - 1 === 0) checkbox.checked = false;
            }
        });

        qtyInput.addEventListener('change', () => {
            let val = parseInt(qtyInput.value) || 0;
            if (val < 0) val = 0;
            if (val > 24) val = 24;
            qtyInput.value = val;
            updateOrder(flavorName, val);
            checkbox.checked = val > 0;
        });

        checkbox.addEventListener('change', () => {
            if (!checkbox.checked) {
                qtyInput.value = 0;
                updateOrder(flavorName, 0);
            }
        });
    });

    function updateOrder(flavor, quantity) {
        if (quantity > 0) {
            order[flavor] = quantity;
        } else {
            delete order[flavor];
        }
        updateSummary();
    }

    function updateSummary() {
        if (Object.keys(order).length === 0) {
            summaryItems.innerHTML = '<p class="empty-message">Выберите вкусы слева</p>';
            totalCount.textContent = '0';
            totalPrice.textContent = '0 ₽';
            return;
        }

        let html = '';
        let total = 0;
        for (const [flavor, qty] of Object.entries(order)) {
            html += `<div class="summary-item" style="display:flex; justify-content:space-between; margin-bottom:8px;">
                <span>${flavor}</span>
                <strong>${qty} шт</strong>
            </div>`;
            total += qty;
        }
        summaryItems.innerHTML = html;
        totalCount.textContent = total;
        totalPrice.textContent = (total * PRICE_PER_UNIT) + ' ₽';

        // Update flavor counts
        flavorOptions.forEach(option => {
            const flavorName = option.querySelector('.flavor-name').textContent;
            const flavorCount = option.querySelector('.flavor-count');
            flavorCount.textContent = order[flavorName] || 0;
        });
    }

    sendOrderBtn.addEventListener('click', () => {
        if (Object.keys(order).length === 0) {
            alert('Пожалуйста, выберите хотя бы один вкус');
            return;
        }

        const total = Object.values(order).reduce((a, b) => a + b, 0);
        if (total < 3) {
            alert('Минимальный заказ - 3 макарон');
            return;
        }

        let message = 'Здравствуйте! Хотел(а) бы сделать заказ:%0A%0A';
        for (const [flavor, qty] of Object.entries(order)) {
            message += `${flavor}: ${qty} шт%0A`;
        }
        message += `%0AВсего: ${total} шт`;

        window.open(`https://wa.me/79067402165?text=${message}`, '_blank');
    });
}

// ==== ANIMATED COUNTERS ====
function initStats() {
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;

    function animateCounter(el) {
        const target = parseInt(el.dataset.count);
        const duration = 2000;
        const start = 0;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                el.textContent = target + '+';
                clearInterval(timer);
            } else {
                el.textContent = Math.floor(current);
            }
        }, 16);
    }

    function checkStatsInView() {
        if (animated) return;

        const statsSection = document.querySelector('.stats-section');
        if (!statsSection) return;

        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            stats.forEach(stat => animateCounter(stat));
            animated = true;
        }
    }

    window.addEventListener('scroll', checkStatsInView);
    checkStatsInView();
}

// ==== SCROLL EFFECTS ====
function initScrollEffects() {
    const parallaxBg = document.querySelector('.parallax-bg');

    window.addEventListener('scroll', () => {
        if (parallaxBg) {
            const scrolled = window.scrollY;
            parallaxBg.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

// ==== BACK TO TOP ====
function initBackToTop() {
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ==== UTILITY FUNCTIONS ====
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

console.log('🍰 Biscuit & Jam - Premium Site Loaded Successfully!');
