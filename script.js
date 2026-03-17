// Ambil semua elemen link-item
const linkItems = document.querySelectorAll('.link-item');
const toast = document.getElementById('toast');

// Fungsi untuk menampilkan toast
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Event klik pada link-item
linkItems.forEach(item => {
    const desc = item.getAttribute('data-description') || 'Link ini akan segera diarahkan';
    item.addEventListener('click', (e) => {
        const link = item.querySelector('a');
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            showToast(`🔔 ${desc}`);
        } else {
            e.preventDefault();
            showToast(`🚀 Mengarahkan ke ${link.textContent.trim()}...`);
            setTimeout(() => {
                window.open(link.href, '_blank');
            }, 1000);
        }
    });
});

// Klik pada logo
const logo = document.querySelector('.logo-switch');
logo.addEventListener('click', () => {
    showToast('SEMANGAT ANGGOTA KOMINFO');
});

// Opsional: tambahkan toast untuk sosial media (jika link masih #)
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        if (icon.getAttribute('href') === '#') {
            e.preventDefault();
            showToast('🔗 Sosial media akan diisi nanti');
        }
        // jika sudah diisi, redirect biasa tanpa toast
    });
});