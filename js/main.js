document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 800,   
        easing: 'ease-in-out', 
        once: true,      
        offset: 50       
    });
});

function inicializarCarruselServicios() {
    const slider = document.getElementById("servicesSlider");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (slider && prevBtn && nextBtn) {
        
        const obtenerAnchoDesplazamiento = () => {
            const tarjeta = slider.querySelector(".service-card");
            if (tarjeta) {
                
                return tarjeta.offsetWidth + 24; 
            }
            return 340; 
        };

        nextBtn.onclick = function(e) {
            e.preventDefault();
            slider.scrollBy({ left: obtenerAnchoDesplazamiento(), behavior: "smooth" });
        };

        
        prevBtn.onclick = function(e) {
            e.preventDefault();
            slider.scrollBy({ left: -obtenerAnchoDesplazamiento(), behavior: "smooth" });
        };
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarCarruselServicios);
} else {
    inicializarCarruselServicios();
}

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('servicesSlider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let isHovered = false;
    const speed = 0.8;
    
    function autoScroll() {
        if (!isHovered) {
            slider.scrollLeft += speed;
            if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
                slider.scrollLeft = 0;
            }
        }
        requestAnimationFrame(autoScroll);
    }

    slider.addEventListener('mouseenter', () => {
        isHovered = true;
    });

    slider.addEventListener('mouseleave', () => {
        isHovered = false;
    });

    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 350, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -350, behavior: 'smooth' });
        });

        [nextBtn, prevBtn].forEach(btn => {
            btn.addEventListener('mouseenter', () => isHovered = true);
            btn.addEventListener('mouseleave', () => isHovered = false);
        });
    }

    requestAnimationFrame(autoScroll);
});