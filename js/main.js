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