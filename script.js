// ===== LulusYuk - script.js =====

// 0. Daftarin Service Worker biar bisa jadi PWA (installable di HP)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((err) => {
      console.error('Gagal daftarin service worker:', err);
    });
  });
}


// 1. Loading screen -> auto pindah ke Login setelah 2.5 detik
if (document.body.classList.contains('page-loading')) {
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 2500);
}

// 2. Form Login -> langsung ke Dashboard (nanti tinggal diganti logic auth beneran)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'dashboard.html';
  });
}

// 3. Form Sign Up -> langsung ke Dashboard juga
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = 'dashboard.html';
  });
}