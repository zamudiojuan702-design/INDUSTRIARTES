console.log("Sitio web de INDUSTRIARTES cargado correctamente.");

// Efectos interactivos y mejoras UX para el sitio web
document.addEventListener("DOMContentLoaded", () => {
    // 1. Cambiar opacidad y estilo del header al hacer scroll
    const header = document.querySelector(".main-header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.5)";
            header.style.background = "rgba(7, 7, 10, 0.95)";
            header.style.padding = "0.8rem 0";
        } else {
            header.style.boxShadow = "none";
            header.style.background = "rgba(7, 7, 10, 0.7)";
            header.style.padding = "1.25rem 0";
        }
    });

    // 2. Toggle de Menú Móvil (Hamburguesa)
    const menuToggle = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("navigation-menu");
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            navMenu.classList.toggle("active");
            
            // Cambiar icono de hamburguesa a equis (X)
            const icon = menuToggle.querySelector("i");
            if (navMenu.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");
            } else {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }
        });

        // Cerrar el menú móvil al hacer clic fuera
        document.addEventListener("click", (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            }
        });

        // Cerrar menú móvil al hacer clic en un enlace de navegación
        const navLinksList = navMenu.querySelectorAll("a");
        navLinksList.forEach(link => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                const icon = menuToggle.querySelector("i");
                if (icon) {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }
            });
        });
    }

    // 3. Efecto de iluminación interactiva (glow) en las tarjetas de servicios
    const serviceCards = document.querySelectorAll(".service-card");
    serviceCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.background = `radial-gradient(circle 200px at ${x}px ${y}px, rgba(99, 102, 241, 0.15), rgba(255, 255, 255, 0.03) 80%)`;
            card.style.borderColor = "rgba(255, 255, 255, 0.25)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.background = "var(--bg-card)";
            card.style.borderColor = "var(--border-card)";
        });
    });

    // 4. Resaltar enlace de navegación activo al hacer scroll
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".main-nav a");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 180) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});
