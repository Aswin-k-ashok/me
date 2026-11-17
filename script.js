(function () {
    document.documentElement.classList.remove('no-js');
    var nav = document.querySelector('.nav');
    var toggle = document.querySelector('.nav__toggle');
    var menu = document.getElementById('nav-menu');

    // Nav background once the page scrolls
    function onScroll() {
        nav.classList.toggle('is-scrolled', window.scrollY > 20);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile menu
    function setMenu(open) {
        menu.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
    }
    toggle.addEventListener('click', function () {
        setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (e) {
        if (e.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') setMenu(false);
    });

    // Reveal on scroll
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        items.forEach(function (el) { el.classList.add('is-in'); });
        return;
    }
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-in');
                io.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    items.forEach(function (el, i) {
        // light stagger for items that enter together
        el.style.transitionDelay = (i % 4) * 60 + 'ms';
        io.observe(el);
    });
})();
