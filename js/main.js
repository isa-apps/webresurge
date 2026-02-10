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

    // 2. Navbar Background Change on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
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
