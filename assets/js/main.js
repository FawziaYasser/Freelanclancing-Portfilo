// ===========================================
// Initialize AOS Animation Library
// ===========================================
AOS.init({
    duration: 1000,
    once: false,
    mirror: true,
    offset: 50,
    easing: 'ease-out-cubic'
});

// ===========================================
// Mobile Menu Toggle
// ===========================================
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
            
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                if (icon) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                }
            } else {
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }
}

// ===========================================
// Sticky Navbar Background
// ===========================================
function initStickyNavbar() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
}

// ===========================================
// Dynamic Year
// ===========================================
function initDynamicYear() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===========================================
// Typewriter Effect
// ===========================================
function initTypewriter() {
    const textElement = document.getElementById('typewriter');
    if (!textElement) return;
    
    const phrases = ["Frontend Developer", "React Developer"];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(typeWriter, typeSpeed);
    }

    setTimeout(typeWriter, 1000);
}

// ===========================================
// Active Navigation Link Highlighting
// ===========================================
function initActiveNavHighlight() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    if (sections.length === 0) return;

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// ===========================================
// Smooth Scroll for Navigation Links
// ===========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================================
// Project Modal Functionality
// ===========================================
function initProjectModal() {
    const modal = document.getElementById('projectModal');
    const modalBody = document.getElementById('modalBody');
    const viewButtons = document.querySelectorAll('.view-features-btn');
    const closeBtn = document.querySelector('.modal-close');
    const overlay = document.querySelector('.modal-overlay');

    // Project data
    const projectData = {
        bank: {
            title: 'National Bank Portal',
            client: 'National Bank of Egypt',
            overview: 'A comprehensive online banking platform that enables customers to securely manage their accounts, transfer funds, pay bills, and access a wide range of financial services through a modern, user-friendly interface.',
            challenge: 'The main challenge was implementing a secure authentication system while maintaining a seamless user experience. We needed to ensure PCI compliance and integrate with multiple banking APIs while creating an intuitive interface for users of all technical levels.',
            solution: 'Built a responsive single-page application using modern JavaScript frameworks with end-to-end encryption. Implemented multi-factor authentication, real-time transaction monitoring, and a personalized dashboard with customizable widgets.',
            results: 'Successfully launched with 50,000+ active users within the first month. Customer satisfaction increased by 40%, and online transactions grew by 65% compared to the previous system.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Security APIs']
        },
        restaurant: {
            title: 'Gourmet Restaurant Site',
            client: 'Taste of Egypt Restaurant',
            overview: 'An elegant and sophisticated restaurant website featuring online reservations, interactive menu display with beautiful food photography, chef specials section, and customer reviews system.',
            challenge: 'Creating an immersive visual experience that reflects the restaurant\'s premium brand while ensuring fast loading times and mobile responsiveness for guests browsing on various devices.',
            solution: 'Designed a visually stunning interface with high-quality imagery and smooth animations. Implemented a real-time reservation system with calendar integration and automated email confirmations.',
            results: 'Restaurant reservations increased by 45% within the first month. The website became the primary booking channel, reducing phone call volume by 60%.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Booking API']
        },
        company: {
            title: 'TechCorp Corporate Site',
            client: 'TechCorp Solutions',
            overview: 'A professional corporate website showcasing company services, team members, portfolio of completed projects, and contact information with a modern, trustworthy design.',
            challenge: 'Balancing professional corporate aesthetics with engaging visual elements to build trust while effectively communicating the company\'s value proposition and service offerings.',
            solution: 'Created a clean, modern design with strategic use of whitespace, professional imagery, and compelling content sections. Implemented a dynamic portfolio system and team showcase.',
            results: 'Lead generation increased by 35%. Average time on site improved by 50%, indicating better engagement with content.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'CMS Integration']
        },
        calculator: {
            title: 'Smart Calculator',
            client: 'Personal Project',
            overview: 'A feature-rich calculator application with scientific functions, calculation history tracking, dark mode support, and full keyboard navigation for efficient daily calculations.',
            challenge: 'Implementing complex scientific functions while maintaining an intuitive interface and ensuring accurate calculations across various mathematical operations.',
            solution: 'Built a responsive calculator with scientific mode, history tracking stored locally, theme switching, and keyboard support for power users.',
            results: 'Downloaded by 10,000+ users with 4.8-star rating. Praised for clean interface and reliable calculations.',
            tech: ['HTML5', 'CSS3', 'JavaScript']
        },
        portfolio: {
            title: 'Personal Portfolio',
            client: 'Self Portfolio',
            overview: 'A stunning personal portfolio website showcasing skills, projects, experience, and contact information with smooth animations and modern design aesthetics.',
            challenge: 'Creating a unique, memorable design that stands out while effectively presenting professional information and encouraging visitor engagement.',
            solution: 'Designed a modern, interactive portfolio with smooth scroll animations, project showcases, and a clean layout that highlights expertise and accomplishments.',
            results: 'Received positive feedback from recruiters and clients. Portfolio helped secure multiple freelance projects.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'AOS Animation']
        },
        dashboard: {
            title: 'Admin Dashboard',
            client: 'Business Analytics Inc.',
            overview: 'A comprehensive admin dashboard featuring data visualization with interactive charts, user management system, analytics reports, and real-time updates for business monitoring.',
            challenge: 'Processing and visualizing large amounts of data in real-time while maintaining performance and providing actionable insights through an intuitive interface.',
            solution: 'Built a powerful dashboard with dynamic charts using data visualization libraries, implemented real-time data streaming, and created customizable widgets for different user roles.',
            results: 'Improved decision-making speed by 40%. User engagement increased by 55% with the new interactive features.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Chart.js']
        }
    };

    // Open modal
    viewButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectKey = btn.getAttribute('data-project');
            const data = projectData[projectKey];
            
            if (data && modalBody) {
                modalBody.innerHTML = `
                    <div class="modal-section">
                        <h3 class="text-2xl font-bold text-white mb-2">${data.title}</h3>
                        <p class="text-a78bfa"><i class="fa-solid fa-user mr-2"></i>${data.client}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h4 class="modal-section-title">Project Overview</h4>
                        <p class="modal-section-content">${data.overview}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h4 class="modal-section-title">The Challenge</h4>
                        <p class="modal-section-content">${data.challenge}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h4 class="modal-section-title">The Solution</h4>
                        <p class="modal-section-content">${data.solution}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h4 class="modal-section-title">Key Results</h4>
                        <p class="modal-section-content">${data.results}</p>
                    </div>
                    
                    <div class="modal-section">
                        <h4 class="modal-section-title">Tech Stack</h4>
                        <div class="modal-tech">
                            ${data.tech.map(t => `<span>${t}</span>`).join('')}
                        </div>
                    </div>
                `;
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal functions
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (overlay) {
        overlay.addEventListener('click', closeModal);
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}

// ===========================================
// Initialize Everything
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initStickyNavbar();
    initDynamicYear();
    initTypewriter();
    initActiveNavHighlight();
    initSmoothScroll();
    initProjectModal();
});
