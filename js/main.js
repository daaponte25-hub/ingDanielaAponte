document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. SECCIÓN PRINCIPAL (HERO) --- */
    const heroTitle = document.querySelector('.head h1');
    const heroSubtitle = document.querySelector('.head p');
    const heroBtn = document.querySelector('.head .head-cta');

    if (heroTitle) {
        // Estilo inicial
        [heroTitle, heroSubtitle, heroBtn].forEach(el => {
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'all 0.8s cubic-bezier(0.2, 0.9, 0.2, 1)';
            }
        });

        // Animación de entrada
        setTimeout(() => { heroTitle.style.opacity = '1'; heroTitle.style.transform = 'translateY(0)'; }, 200);
        setTimeout(() => { if(heroSubtitle) { heroSubtitle.style.opacity = '1'; heroSubtitle.style.transform = 'translateY(0)'; } }, 450);
        setTimeout(() => { if(heroBtn) { heroBtn.style.opacity = '1'; heroBtn.style.transform = 'translateY(0)'; } }, 700);
    }

    /* --- 2. SECCIÓN TECNOLOGÍA (REVELADO + HOVER) --- */
    const tecCards = Array.from(document.querySelectorAll('#tecnologia .card'));
    
    if (tecCards.length > 0) {
        const observerOptions = { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.12 };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const idx = parseInt(el.getAttribute('data-index') || '0', 10);
                    el.style.transitionDelay = `${Math.min(idx * 120, 400)}ms`;
                    el.classList.add('is-visible');
                    
                    setTimeout(() => {
                        setupTechHover(el);
                        el.style.transitionDelay = '0ms';
                    }, 800);
                    obs.unobserve(el);
                }
            });
        }, observerOptions);

        tecCards.forEach(c => observer.observe(c));
    }

    function setupTechHover(card) {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "translateY(-15px) scale(1.02)";
            card.style.boxShadow = "0 20px 45px rgba(0,0,0,0.2)";
            card.style.zIndex = "10";
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = "translateY(0) scale(1)";
            card.style.boxShadow = "0 14px 40px rgba(0,0,0,0.14)";
            card.style.zIndex = "1";
        });
    }

    const laboralCards = document.querySelectorAll('.laboral-card');
    laboralCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = "translateY(-12px)";
            card.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = "translateY(0)";
            card.style.boxShadow = "0 4px 15px rgba(0,0,0,0.08)";
        });
    });


    const contactBtns = document.querySelectorAll('.btn-contact');
    const contactImg = document.querySelector('.contact-img');

    contactBtns.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.backgroundColor = '#7159C1'; 
            btn.style.transform = 'scale(1.05)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.backgroundColor = '#ff1f5a';
            btn.style.transform = 'scale(1)';
        });
    });

    if (contactImg) {
        const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    contactImg.classList.add('is-visible');
                }
            });
        }, { threshold: 0.5 });

        contactObserver.observe(contactImg);
    }

    /*  SMOOTH SCROLL PARA EL HEADER*/
    const headerContactBtn = document.querySelector('.btn-header');

    if (headerContactBtn) {
        headerContactBtn.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, 
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    const serviciosSection = document.querySelector('#servicios');
    const sText = document.querySelector('#servicios .reveal-text');
    const sImg = document.querySelector('#servicios .reveal-img');

    if (serviciosSection && sText && sImg) {
        const pinzaObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    sText.classList.add('is-visible');
                    sImg.classList.add('is-visible');
                    pinzaObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        pinzaObserver.observe(serviciosSection);
    }

});