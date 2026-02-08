/* ============================================
   BEATON JUNK REMOVAL & HAULING
   Interactive JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

    // ===================== MOBILE MENU =====================
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // ===================== NAVBAR SCROLL EFFECT =====================
    const navbar = document.getElementById('navbar');

    function handleNavScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll);
    handleNavScroll();

    // ===================== BACK TO TOP BUTTON =====================
    const backToTop = document.getElementById('backToTop');

    function handleBackToTop() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', handleBackToTop);

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===================== FAQ ACCORDION =====================
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        var question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            var isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(function (otherItem) {
                otherItem.classList.remove('active');
                otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            // Open clicked item (if it wasn't already open)
            if (!isActive) {
                item.classList.add('active');
                question.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // ===================== SCROLL ANIMATIONS =====================
    var animateElements = document.querySelectorAll('[data-animate]');

    var observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(function (el) {
        observer.observe(el);
    });

    // ===================== SMOOTH SCROLL FOR NAV LINKS =====================
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                var navHeight = navbar.offsetHeight;
                var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top: targetPosition, behavior: 'smooth' });
            }
        });
    });

    // ===================== ACTIVE NAV LINK HIGHLIGHTING =====================
    var sections = document.querySelectorAll('section[id]');

    function highlightNav() {
        var scrollPos = window.scrollY + 100;

        sections.forEach(function (section) {
            var top = section.offsetTop - navbar.offsetHeight - 20;
            var bottom = top + section.offsetHeight;
            var id = section.getAttribute('id');

            var navLink = document.querySelector('.nav-links a[href="#' + id + '"]');
            if (navLink) {
                if (scrollPos >= top && scrollPos < bottom) {
                    navLink.classList.add('active');
                } else {
                    navLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNav);

    // ===================== QUOTE FORM HANDLING =====================
    var quoteForm = document.getElementById('quoteForm');
    var formSuccess = document.getElementById('formSuccess');

    if (quoteForm) {
        quoteForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Collect form data
            var formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value,
                preferredDate: document.getElementById('preferred-date').value
            };

            // Log form data (replace with actual form submission logic)
            console.log('Quote Request Submitted:', formData);

            // Show success message
            quoteForm.style.display = 'none';
            formSuccess.style.display = 'block';

            // Scroll to show the success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
    }

    // ===================== PHONE NUMBER FORMATTING =====================
    var phoneInput = document.getElementById('phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function (e) {
            var value = e.target.value.replace(/\D/g, '');
            var formatted = '';

            if (value.length > 0) {
                formatted = '(' + value.substring(0, 3);
            }
            if (value.length >= 3) {
                formatted += ') ' + value.substring(3, 6);
            }
            if (value.length >= 6) {
                formatted += '-' + value.substring(6, 10);
            }

            e.target.value = formatted;
        });
    }

    // ===================== SET MINIMUM DATE TO TODAY =====================
    var dateInput = document.getElementById('preferred-date');
    if (dateInput) {
        var today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // ===================== STAGGERED ANIMATION DELAYS =====================
    var cardGroups = [
        '.services-grid .service-card',
        '.reviews-grid .review-card',
        '.gallery-grid .gallery-item',
        '.why-us-features .feature'
    ];

    cardGroups.forEach(function (selector) {
        var cards = document.querySelectorAll(selector);
        cards.forEach(function (card, index) {
            card.style.transitionDelay = (index * 0.1) + 's';
        });
    });

});
