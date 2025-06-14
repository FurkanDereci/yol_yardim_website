document.addEventListener('DOMContentLoaded', function() {
    console.log("Document loaded");
    
    // Global Değişkenler
    let currentLanguage = localStorage.getItem('language') || 'tr';
    
    // Dil ve tema ayarını ilk yüklendiğinde ayarla
    initializeLanguage();
    
    // Event Listener'ları Ekle
    addEventListeners();
    
    // Sayfa İçeriğini Güncelle
    updatePageContent();
    
    // Dil değiştirme ayarları
    function initializeLanguage() {
        console.log('Initializing language:', currentLanguage);
        
        // RTL desteği için html dir özelliği
        if (currentLanguage === 'ar') {
            document.documentElement.dir = 'rtl';
            document.body.classList.add('rtl');
        } else {
            document.documentElement.dir = 'ltr';
            document.body.classList.remove('rtl');
        }
        
        // Dark mode ayarını yükle
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
        }
    }
    
    // Dil Seçici İşlevselliği
    function initializeLanguageSelector() {
        const languageSelector = document.getElementById('languageSelector');
        if (!languageSelector) {
            console.error("Language selector not found");
            return;
        }
        
        languageSelector.value = currentLanguage;
        languageSelector.addEventListener('change', function() {
            currentLanguage = this.value;
            localStorage.setItem('language', currentLanguage);
            
            // Sayfayı yeniden yükle (en kolay çözüm)
            window.location.reload();
        });
    }
    
    // Dark Mode İşlevselliği
    function initializeDarkModeToggle() {
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (!darkModeToggle) {
            console.error("Dark mode toggle not found");
            return;
        }
        
        // Dark mode başlangıç durumunu ayarla
        const body = document.body;
        const isDarkMode = body.classList.contains('dark-mode');
        
        // translations hazır olana kadar bekle
        if (window.translations && window.translations[currentLanguage]) {
            darkModeToggle.textContent = isDarkMode ? 
                window.translations[currentLanguage].lightMode : 
                window.translations[currentLanguage].darkMode;
                
            darkModeToggle.addEventListener('click', function() {
                body.classList.toggle('dark-mode');
                
                const isNowDark = body.classList.contains('dark-mode');
                localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
                
                darkModeToggle.textContent = isNowDark ? 
                    window.translations[currentLanguage].lightMode : 
                    window.translations[currentLanguage].darkMode;
            });
        } else {
            console.error("Translations not loaded yet for", currentLanguage);
            setTimeout(initializeDarkModeToggle, 100); // Retry after a short delay
        }
    }
    
    // Sayfa İçeriğini Güncelleme
    function updatePageContent() {
        console.log("Updating page content with language:", currentLanguage);
        
        if (!window.translations || !window.translations[currentLanguage]) {
            console.error("Translations not available for", currentLanguage);
            return;
        }
        
        // Başlık güncelleme
        document.title = window.translations[currentLanguage].siteTitle;
        
        // Meta bilgileri güncelleme
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) {
            descMeta.setAttribute('content', window.translations[currentLanguage].aboutText1.substring(0, 150) + '...');
        }
        
        // Sayfa içerik değişikliği için tüm data-i18n attribute'larını kontrol et
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            
            // HTML içeriği veya özellik güncelleme
            if (window.translations[currentLanguage][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = window.translations[currentLanguage][key];
                } else {
                    element.innerHTML = window.translations[currentLanguage][key];
                }
            } else {
                console.warn(`Missing translation for key: ${key} in language: ${currentLanguage}`);
            }
        });
    }
    
    // Event listener'ları ekle
    function addEventListeners() {
        // Dil seçici
        initializeLanguageSelector();
        
        // Dark mode toggle
        initializeDarkModeToggle();
        
        // Sayfa içi gezinme linkleri
        const callNowButton = document.getElementById('callNowButton');
        if (callNowButton) {
            callNowButton.addEventListener('click', function(e) {
                e.preventDefault();
                scrollToElement('contact');
            });
        }
        
        const learnMoreButton = document.getElementById('learnMoreButton');
        if (learnMoreButton) {
            learnMoreButton.addEventListener('click', function(e) {
                e.preventDefault();
                scrollToElement('about');
            });
        }
        
        const backToTopButton = document.getElementById('backToTopButton');
        if (backToTopButton) {
            backToTopButton.addEventListener('click', function(e) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
        
        // Animasyonların İşlevselliği
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }
});

// Sayfayı Kaydırma Animasyonu
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 20,
            behavior: 'smooth'
        });
    }
}