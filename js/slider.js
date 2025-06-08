document.addEventListener('DOMContentLoaded', function() {
    console.log("Slider.js loaded");
    
    // Slider fonksiyonu
    function initImageSlider() {
        const sliderContainer = document.querySelector('.image-container');
        const images = document.querySelectorAll('.gallery-image');
        const prevButton = document.querySelector('.slider-button.prev');
        const nextButton = document.querySelector('.slider-button.next');
        const dotsContainer = document.querySelector('.slider-dots');
        const imageSlider = document.querySelector('.image-slider');
        
        if (!sliderContainer || images.length === 0) {
            console.warn("Slider elements not found");
            return;
        }
        
        console.log("Initializing slider with", images.length, "images");
        
        // Noktalı gezinimleri oluştur
        images.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('slider-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        // Lightbox oluştur
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close">&times;</button>
            <img class="lightbox-image" src="" alt="Full size image">
            <div class="lightbox-nav">
                <button class="lightbox-button prev">&lt;</button>
                <button class="lightbox-button next">&gt;</button>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        const lightboxImg = lightbox.querySelector('.lightbox-image');
        const lightboxClose = lightbox.querySelector('.lightbox-close');
        const lightboxPrev = lightbox.querySelector('.lightbox-button.prev');
        const lightboxNext = lightbox.querySelector('.lightbox-button.next');
        
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
        
        lightboxPrev.addEventListener('click', () => {
            goToSlide(currentIndex - 1);
            updateLightboxImage();
        });
        
        lightboxNext.addEventListener('click', () => {
            goToSlide(currentIndex + 1);
            updateLightboxImage();
        });
        
        // ESC tuşu ile lightbox'ı kapat
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') lightbox.classList.remove('active');
            if (e.key === 'ArrowLeft') {
                goToSlide(currentIndex - 1);
                if (lightbox.classList.contains('active')) updateLightboxImage();
            }
            if (e.key === 'ArrowRight') {
                goToSlide(currentIndex + 1);
                if (lightbox.classList.contains('active')) updateLightboxImage();
            }
        });
        
        function updateLightboxImage() {
            lightboxImg.src = images[currentIndex].src;
            lightboxImg.alt = images[currentIndex].alt;
        }
        
        // Desktop modunda resimlere tıklama olayı ekle
        images.forEach((img, index) => {
            img.addEventListener('click', () => {
                if (window.innerWidth > 768 && img.classList.contains('active')) {
                    updateLightboxImage();
                    lightbox.classList.add('active');
                } else if (window.innerWidth > 768) {
                    goToSlide(index);
                }
            });
        });
        
        let currentIndex = 0;
        const dots = document.querySelectorAll('.slider-dot');
        let touchStartX = 0;
        let touchEndX = 0;
        
        // Touch olaylarını ekle (mobil için kaydırma)
        sliderContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, {passive: true});
        
        sliderContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, {passive: true});
        
        // Kaydırma yönüne göre slide değiştir
        function handleSwipe() {
            const swipeThreshold = 50; // Minimum kaydırma mesafesi
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Sola kaydırma - sonraki slide
                    goToSlide(currentIndex + 1);
                } else {
                    // Sağa kaydırma - önceki slide
                    goToSlide(currentIndex - 1);
                }
            }
        }
        
        // Belirli slide'a git
        function goToSlide(index) {
            if (index < 0) index = images.length - 1;
            if (index >= images.length) index = 0;
            
            currentIndex = index;
            updateSlider();
        }
        
        // Slider'ı güncelle
        function updateSlider() {
            // Aktif nokta güncelleme
            dots.forEach((dot, idx) => {
                dot.classList.toggle('active', idx === currentIndex);
            });
            
            // Resim sayacını güncelle
            imageSlider.setAttribute('data-counter', `${currentIndex + 1}/${images.length}`);
            
            // Mobil görünüm için kaydırma
            if (window.innerWidth < 768) {
                const imageWidth = images[0].offsetWidth;
                const gap = 20; // CSS'te tanımlanan boşluk
                sliderContainer.style.transform = `translateX(-${currentIndex * (imageWidth + gap)}px)`;
                
                // Mobil görünüm için class'ları temizle
                images.forEach(img => {
                    img.classList.remove('active', 'prev', 'next');
                });
            } else {
                // Masaüstü görünümünde class temizleme
                images.forEach(img => {
                    img.classList.remove('active', 'prev', 'next');
                });
                
                // Aktif ve yanındaki resimleri ayarla
                images[currentIndex].classList.add('active');
                
                // Önceki resim
                const prevIndex = (currentIndex - 1 + images.length) % images.length;
                images[prevIndex].classList.add('prev');
                
                // Sonraki resim
                const nextIndex = (currentIndex + 1) % images.length;
                images[nextIndex].classList.add('next');
            }
        }
        
        // Önceki ve sonraki butonları
        if (prevButton) {
            prevButton.addEventListener('click', () => goToSlide(currentIndex - 1));
        }
        
        if (nextButton) {
            nextButton.addEventListener('click', () => goToSlide(currentIndex + 1));
        }
        
        // Otomatik ilerleme
        let interval = setInterval(() => goToSlide(currentIndex + 1), 5000);
        
        // Kullanıcı etkileşimi olduğunda otomatik ilerlemeyi durdur
        sliderContainer.addEventListener('mouseenter', () => clearInterval(interval));
        sliderContainer.addEventListener('touchstart', () => clearInterval(interval), {passive: true});
        lightbox.addEventListener('mouseenter', () => clearInterval(interval));
        
        sliderContainer.addEventListener('mouseleave', () => {
            clearInterval(interval);
            interval = setInterval(() => goToSlide(currentIndex + 1), 5000);
        });
        
        sliderContainer.addEventListener('touchend', () => {
            clearInterval(interval);
            interval = setInterval(() => goToSlide(currentIndex + 1), 5000);
        }, {passive: true});
        
        // Pencere boyutu değiştiğinde güncelle
        window.addEventListener('resize', updateSlider);
        
        // İlk yükleme
        updateSlider();
    }
    
    // Sayfa tam yüklendikten sonra slider'ı başlat
    setTimeout(initImageSlider, 500);
});