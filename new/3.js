// Menyembunyikan teks saat menggulir halaman ke bawah
window.addEventListener('scroll', function() {
    const fixedText = document.querySelector('.fixed-text');
    const scrollPosition = window.scrollY;
    const headerHeight = document.querySelector('header').offsetHeight;

    if (scrollPosition > headerHeight) {
        fixedText.style.display = 'none';
    } else {
        fixedText.style.display = 'block';
    }
});
