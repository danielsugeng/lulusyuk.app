// ===== LulusYuk - riwayat.js =====
// Butuh script.js (getCurrentUser). Data diambil dari user.hasil (disimpan tiap selesai latihan/tryout).

// Warna baris ditentukan skor: >= 75 hijau, 50-74 oranye, < 50 merah
function warnaSkor(skor) {
  if (skor >= 75) return 'rw-hijau';
  if (skor >= 50) return 'rw-oranye';
  return 'rw-merah';
}

function isiRiwayat(wadahId, daftar, pesanKosong) {
  const wadah = document.getElementById(wadahId);

  if (daftar.length === 0) {
    const kosong = document.createElement('div');
    kosong.className = 'kosong-card';
    kosong.textContent = pesanKosong;
    wadah.appendChild(kosong);
    return;
  }

  daftar.forEach((h) => {
    const baris = document.createElement('div');
    baris.className = 'riwayat-item ' + warnaSkor(h.skor);

    const nama = document.createElement('div');
    nama.className = 'riwayat-nama';
    nama.textContent = h.judul;

    const tanggal = new Date(h.tanggal).toLocaleString('id-ID', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
    const meta = document.createElement('div');
    meta.className = 'riwayat-meta';
    meta.textContent = `Skor ${h.skor} · ${h.benar}/${h.total} benar · ${tanggal}`;

    baris.appendChild(nama);
    baris.appendChild(meta);
    wadah.appendChild(baris);
  });
}

if (document.body.classList.contains('page-riwayat')) {
  const user = getCurrentUser();

  if (!user) {
    window.location.href = 'login.html';
  } else {
    // Terbaru di atas
    const hasil = (user.hasil || []).slice().sort((a, b) => b.tanggal - a.tanggal);

    isiRiwayat('listTryout', hasil.filter((h) => h.tipe === 'tryout'),
      'Belum ada tryout yang diselesaikan.');
    isiRiwayat('listLatihan', hasil.filter((h) => h.tipe !== 'tryout'),
      'Belum ada latihan yang diselesaikan.');
  }
}
