// Animation and Interaction Scripts

// Smooth Scroll Reveal Effect
function initScrollReveal() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = () => {
        reveals.forEach(element => {
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 150;
            
            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('revealed');
            }
        });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// Parallax Effect for Images
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-image');
    
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        parallaxElements.forEach(element => {
            const depth = element.dataset.depth || 20;
            const moveX = mouseX * depth;
            const moveY = mouseY * depth;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
}

// Carousel Functionality
class Carousel {
    constructor(container) {
        this.container = container;
        this.track = container.querySelector('.carousel-track');
        this.slides = container.querySelectorAll('.carousel-slide');
        this.prevBtn = container.querySelector('.carousel-nav.prev');
        this.nextBtn = container.querySelector('.carousel-nav.next');
        this.dotsContainer = container.querySelector('.carousel-dots');
        this.currentIndex = 0;
        this.autoplayInterval = null;
        
        this.init();
    }
    
    init() {
        // Create dots
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
        
        // Event listeners
        if (this.prevBtn) {
            this.prevBtn.addEventListener('click', () => this.prevSlide());
        }
        if (this.nextBtn) {
            this.nextBtn.addEventListener('click', () => this.nextSlide());
        }
        
        // Touch events for mobile
        let startX = 0;
        let currentX = 0;
        
        this.track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchmove', (e) => {
            currentX = e.touches[0].clientX;
        });
        
        this.track.addEventListener('touchend', () => {
            const diff = startX - currentX;
            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });
        
        // Autoplay
        this.startAutoplay();
        
        // Pause on hover
        this.container.addEventListener('mouseenter', () => this.stopAutoplay());
        this.container.addEventListener('mouseleave', () => this.startAutoplay());
    }
    
    goToSlide(index) {
        this.currentIndex = index;
        const offset = -index * 100;
        this.track.style.transform = `translateX(${offset}%)`;
        
        // Update dots
        const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
    
    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.goToSlide(this.currentIndex);
    }
    
    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(this.currentIndex);
    }
    
    startAutoplay() {
        this.autoplayInterval = setInterval(() => this.nextSlide(), 5000);
    }
    
    stopAutoplay() {
        if (this.autoplayInterval) {
            clearInterval(this.autoplayInterval);
        }
    }
}

// Initialize all carousels on page
function initCarousels() {
    const carousels = document.querySelectorAll('.carousel-container');
    carousels.forEach(carousel => new Carousel(carousel));
}

// Gallery Lightbox
function initGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 fade-in';
            lightbox.style.cursor = 'pointer';
            
            const img = item.querySelector('img');
            const lightboxImg = document.createElement('img');
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxImg.className = 'max-w-full max-h-full object-contain rounded-lg zoom-in';
            
            const closeBtn = document.createElement('button');
            closeBtn.innerHTML = '✕';
            closeBtn.className = 'absolute top-8 right-8 text-white text-4xl hover:text-purple-500 transition-colors';
            
            lightbox.appendChild(lightboxImg);
            lightbox.appendChild(closeBtn);
            document.body.appendChild(lightbox);
            
            // Close handlers
            const closeLightbox = () => {
                lightbox.style.animation = 'fadeOut 0.3s ease-out';
                setTimeout(() => lightbox.remove(), 300);
            };
            
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });
            
            closeBtn.addEventListener('click', closeLightbox);
            
            // Keyboard navigation
            const handleKeyPress = (e) => {
                if (e.key === 'Escape') {
                    closeLightbox();
                    document.removeEventListener('keydown', handleKeyPress);
                }
            };
            document.addEventListener('keydown', handleKeyPress);
        });
    });
}

// Page Load Animation
function initPageLoad() {
    document.body.style.opacity = '0';
    window.addEventListener('load', () => {
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        document.body.style.opacity = '1';
    });
}

// Lazy Loading Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize all animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initScrollReveal();
    initParallax();
    initCarousels();
    initGalleryLightbox();
    initLazyLoading();
});

// Optional: Page load animation
// initPageLoad();



