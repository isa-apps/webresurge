document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scroll Reveal using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Apply reveal animation to sections and cards
    const revealElements = document.querySelectorAll('.section, .step-card, .value-item, .commitment-card, .access-box');
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
        revealObserver.observe(el);
    });

    // Custom logic to handle the "active" state for reveal
    const style = document.createElement('style');
    style.innerHTML = `
        .active {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // 2. Navbar Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.95)';
            navbar.style.padding = '1rem 4rem';
            navbar.style.borderBottom = '1px solid rgba(74, 158, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.8)';
            navbar.style.padding = '2rem 4rem';
            navbar.style.borderBottom = 'none';
        }
    });

    // 3. Form Handling (Simulated)
    const form = document.querySelector('.access-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Enviando Solicitud...';
            submitBtn.disabled = true;

            // Simulate server delay
            setTimeout(() => {
                submitBtn.textContent = 'Solicitud Recibida';
                submitBtn.style.background = '#28a745';
                submitBtn.style.borderColor = '#28a745';
                form.reset();
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.borderColor = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // 4. Subtle Parallax for the Glow Background
    document.addEventListener('mousemove', (e) => {
        const glow = document.querySelector('.glow-container');
        const x = (e.clientX / window.innerWidth) * 10;
        const y = (e.clientY / window.innerHeight) * 10;
        glow.style.transform = `translate(${x}px, ${y}px)`;
    });
});
