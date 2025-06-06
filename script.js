document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Sayfa yüklendiğinde local storage'ı kontrol et
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
    }

    // Butona tıklanınca temayı değiştir ve local storage'a kaydet
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Temayı local storage'a kaydet
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
});
