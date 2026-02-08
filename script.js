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

    // ===================== TRUCK HAUL ANIMATION (AUTO) =====================
    var haulTruck = document.getElementById('haulTruck');
    var reviewsGrid = document.getElementById('reviewsGrid');
    var reviewsSection = document.getElementById('reviews');

    if (haulTruck && reviewsGrid && reviewsSection) {

        var reviewSets = [
            [
                {
                    text: '"Called Beaton in the morning and they were at my house by noon. Cleared out my entire garage in under two hours. Couldn\'t believe how fast and affordable it was!"',
                    name: 'Maria G.',
                    location: 'San Antonio, TX',
                    initial: 'M'
                },
                {
                    text: '"Professional, on time, and the price was exactly what they quoted. They even swept up after themselves. Highly recommend Beaton Junk Removal to anyone!"',
                    name: 'James T.',
                    location: 'San Antonio, TX',
                    initial: 'J'
                },
                {
                    text: '"Had a ton of construction debris from a kitchen remodel. These guys handled everything \u2014 drywall, old cabinets, tile, the works. Great crew, great price."',
                    name: 'Robert L.',
                    location: 'San Antonio, TX',
                    initial: 'R'
                }
            ],
            [
                {
                    text: '"Moved my elderly mother out of her house and Beaton took care of everything we couldn\'t keep. They were so respectful and careful. Absolute lifesavers."',
                    name: 'Sandra K.',
                    location: 'Schertz, TX',
                    initial: 'S'
                },
                {
                    text: '"I\'ve used Beaton three times now for different rental properties. Always on time, always fair pricing, always leave the place spotless. My go-to crew!"',
                    name: 'David M.',
                    location: 'New Braunfels, TX',
                    initial: 'D'
                },
                {
                    text: '"They hauled away an old hot tub, a broken trampoline, and a shed full of junk in one trip. I thought it would take multiple loads. These guys are beasts!"',
                    name: 'Angela R.',
                    location: 'Converse, TX',
                    initial: 'A'
                }
            ],
            [
                {
                    text: '"Best price I found after calling five different companies. And they were the fastest to respond. Showed up two hours after I called. Incredible service."',
                    name: 'Chris P.',
                    location: 'Live Oak, TX',
                    initial: 'C'
                },
                {
                    text: '"Our office renovation left a mountain of debris. Beaton cleared it all out over a weekend so we were ready for Monday. Professional and efficient!"',
                    name: 'Lisa W.',
                    location: 'San Antonio, TX',
                    initial: 'L'
                },
                {
                    text: '"I love that they recycle and donate what they can. It made me feel good knowing my old furniture was going to families in need instead of a landfill."',
                    name: 'Marcus J.',
                    location: 'Selma, TX',
                    initial: 'M'
                }
            ]
        ];

        var currentReviewSet = 0;
        var isAnimating = false;
        var haulInterval = null;
        var sectionVisible = false;

        function buildStars() {
            return '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>';
        }

        function buildCard(review) {
            return '<div class="review-stars">' + buildStars() + '</div>' +
                '<p class="review-text">' + review.text + '</p>' +
                '<div class="review-author">' +
                    '<div class="review-avatar">' + review.initial + '</div>' +
                    '<div class="review-info">' +
                        '<strong>' + review.name + '</strong>' +
                        '<span>' + review.location + '</span>' +
                    '</div>' +
                '</div>';
        }

        function runHaulAnimation() {
            if (isAnimating || !sectionVisible) return;
            isAnimating = true;

            var cards = reviewsGrid.querySelectorAll('.review-card');

            // Start the truck driving
            haulTruck.classList.add('driving');

            // Haul each card as truck reaches it
            cards.forEach(function (card, i) {
                setTimeout(function () {
                    card.classList.add('hauling');
                }, 600 + (i * 350));
            });

            // After truck exits, swap in new reviews
            setTimeout(function () {
                haulTruck.classList.remove('driving');

                currentReviewSet = (currentReviewSet + 1) % reviewSets.length;
                var newReviews = reviewSets[currentReviewSet];

                reviewsGrid.innerHTML = '';
                newReviews.forEach(function (review) {
                    var card = document.createElement('div');
                    card.className = 'review-card';
                    card.style.opacity = '0';
                    card.innerHTML = buildCard(review);
                    reviewsGrid.appendChild(card);
                });

                var newCards = reviewsGrid.querySelectorAll('.review-card');
                newCards.forEach(function (card, i) {
                    setTimeout(function () {
                        card.classList.add('entering');
                    }, 200 + (i * 200));
                });

                setTimeout(function () {
                    newCards.forEach(function (card) {
                        card.classList.remove('entering');
                        card.style.opacity = '1';
                    });
                    isAnimating = false;
                }, 1000);

            }, 3400);
        }

        // Auto-trigger: start 1.5s after section is visible, repeat every 8s
        var reviewObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    sectionVisible = true;
                    if (!haulInterval) {
                        // First run after 1.5s delay
                        setTimeout(function () {
                            runHaulAnimation();
                        }, 1500);
                        // Then repeat every 8 seconds
                        haulInterval = setInterval(function () {
                            runHaulAnimation();
                        }, 8000);
                    }
                } else {
                    sectionVisible = false;
                    if (haulInterval) {
                        clearInterval(haulInterval);
                        haulInterval = null;
                    }
                }
            });
        }, { threshold: 0.3 });

        reviewObserver.observe(reviewsSection);
    }

});
