// ===== LulusYuk - script.js =====

// 0. Daftarin Service Worker biar bisa jadi PWA (installable di HP)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch((err) => {
      console.error('Gagal daftarin service worker:', err);
    });
  });
}

// 1. Helper penyimpanan data (localStorage) -- ini cuma simulasi akun buat demo,
//    belum pakai backend/database beneran.
const USERS_KEY = 'lulusyuk_users';
const CURRENT_KEY = 'lulusyuk_current';

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getCurrentUser() {
  const email = localStorage.getItem(CURRENT_KEY);
  return getUsers().find((u) => u.email === email) || null;
}

function simpanHasil(hasil) {
  const users = getUsers();
  const current = users.find((u) => u.email === localStorage.getItem(CURRENT_KEY));
  if (!current) return;
  current.hasil = current.hasil || [];
  current.hasil.push(hasil);
  saveUsers(users);
}

// 2. Loading screen -> auto pindah ke Login setelah 2.5 detik
if (document.body.classList.contains('page-loading')) {
  setTimeout(() => {
    window.location.href = 'login.html';
  }, 2500);
}

// 3. Sign Up -> simpan akun baru -> lanjut ke halaman Target
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim().toLowerCase();
    const password = document.getElementById('signupPassword').value;

    const users = getUsers();
    if (users.some((u) => u.email === email)) {
      alert('Email ini sudah terdaftar. Silakan login ya!');
      return;
    }

    users.push({ name, email, password, univ: '', jurusan: '' });
    saveUsers(users);
    localStorage.setItem(CURRENT_KEY, email);

    window.location.href = 'target.html';
  });
}

// 4. Login -> cek akun -> langsung ke Dashboard (Target dilewati kalau udah pernah diisi)
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    const password = document.getElementById('loginPassword').value;

    const user = getUsers().find((u) => u.email === email && u.password === password);
    if (!user) {
      alert('Email atau kata sandi salah, atau akun belum terdaftar.');
      return;
    }

    localStorage.setItem(CURRENT_KEY, email);
    window.location.href = user.univ ? 'dashboard.html' : 'target.html';
  });
}

// 5. Halaman Target -> simpan univ & jurusan -> lanjut ke Dashboard
if (document.body.classList.contains('page-target')) {
  const user = getCurrentUser();

  if (!user) {
    window.location.href = 'login.html';
  } else if (user.univ) {
    window.location.href = 'dashboard.html';
  }

  const targetForm = document.getElementById('targetForm');
  targetForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const users = getUsers();
    const current = users.find((u) => u.email === localStorage.getItem(CURRENT_KEY));
    if (!current) {
      window.location.href = 'login.html';
      return;
    }

    current.univ = document.getElementById('targetUniv').value.trim();
    current.jurusan = document.getElementById('targetJurusan').value.trim();
    saveUsers(users);

    window.location.href = 'dashboard.html';
  });
}

// 6. Dashboard -> sapaan, statistik minggu ini, dan rekomendasi latihan dari data akun

// Awal minggu = hari Senin jam 00:00 (waktu lokal)
function awalMingguIni() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return d.getTime();
}

function isiStatistik(user) {
  const batas = awalMingguIni();
  const minggu = (user.hasil || []).filter((h) => h.tanggal >= batas);
  const dijawab = minggu.reduce((a, h) => a + h.dijawab, 0);
  const benar = minggu.reduce((a, h) => a + h.benar, 0);

  document.getElementById('statTotal').textContent = dijawab;
  document.getElementById('statAkurasi').textContent =
    dijawab > 0 ? Math.round((benar / dijawab) * 100) + '%' : '-';
}

// Rekomendasi: utamakan latihan yang BELUM pernah dikerjakan (gonta-ganti tiap hari).
// Kalau semuanya sudah pernah, rekomendasiin yang skor terbaiknya paling rendah.
function pilihRekomendasi(user) {
  const hasil = user.hasil || [];
  const skorTerbaik = (id) => {
    const skor = hasil.filter((h) => h.id === id).map((h) => h.skor);
    return skor.length ? Math.max(...skor) : null;
  };

  const belum = LATIHAN.filter((l) => skorTerbaik(l.id) === null);
  if (belum.length > 0) {
    const sekarang = new Date();
    const hariKe = Math.floor((sekarang.getTime() - sekarang.getTimezoneOffset() * 60000) / 86400000);
    return { latihan: belum[hariKe % belum.length], terbaik: null };
  }

  return LATIHAN
    .map((l) => ({ latihan: l, terbaik: skorTerbaik(l.id) }))
    .sort((a, b) => a.terbaik - b.terbaik)[0];
}

function isiRekomendasi(user) {
  const rek = pilihRekomendasi(user);
  document.getElementById('recoCard').href = 'detail.html?id=' + rek.latihan.id;
  document.getElementById('recoJudul').textContent = rek.latihan.judul;
  document.getElementById('recoBar').style.width = (rek.terbaik === null ? 0 : rek.terbaik) + '%';
  document.getElementById('recoMeta').textContent =
    rek.terbaik === null ? 'Belum pernah dikerjakan' : 'Skor terbaikmu: ' + rek.terbaik;
}

if (document.body.classList.contains('page-dashboard')) {
  const user = getCurrentUser();

  if (!user) {
    window.location.href = 'login.html';
  } else if (!user.univ) {
    window.location.href = 'target.html';
  } else {
    document.getElementById('userName').textContent = user.name.split(' ')[0];
    document.getElementById('userUniv').textContent = user.univ;
    isiStatistik(user);
    isiRekomendasi(user);
  }

  // Kalau balik ke dashboard pakai tombol back, muat ulang biar statistik ikut update
  window.addEventListener('pageshow', (e) => {
    if (e.persisted) window.location.reload();
  });
}