// ===== LulusYuk - profil.js =====
// Butuh script.js (getCurrentUser, CURRENT_KEY).

if (document.body.classList.contains('page-profil')) {
  const user = getCurrentUser();

  if (!user) {
    window.location.href = 'login.html';
  } else {
    // Data dari Sign Up (nama) dan halaman Target (univ & jurusan)
    document.getElementById('profilNama').textContent = user.name;
    document.getElementById('profilUniv').textContent = user.univ || 'Belum ada target universitas';
    document.getElementById('profilJurusan').textContent = user.jurusan || 'Belum ada target jurusan';

    // Statistik dari semua hasil latihan & tryout
    const hasil = user.hasil || [];
    document.getElementById('statSoal').textContent = hasil.reduce((a, h) => a + h.dijawab, 0);
    document.getElementById('statTryout').textContent = hasil.filter((h) => h.tipe === 'tryout').length;

    // Edit Profil: halamannya belum ada (belum ada desain), jadi tombolnya belum ke mana-mana
    document.getElementById('btnEdit').addEventListener('click', (e) => e.preventDefault());

    // Logout: hapus sesi login saja. Data akun & hasil latihan tetap tersimpan.
    document.getElementById('btnLogout').addEventListener('click', () => {
      if (confirm('Yakin mau logout?')) {
        localStorage.removeItem(CURRENT_KEY);
        window.location.href = 'login.html';
      }
    });
  }
}
