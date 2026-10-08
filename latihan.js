// ===== LulusYuk - latihan.js =====
// Dipakai oleh: latihan.html, detail.html, soal.html
// Butuh script.js (getCurrentUser) dan soal-data.js (LATIHAN) yang dimuat lebih dulu.

const BADGE_CLASS = { Mudah: 'badge-mudah', Sedang: 'badge-sedang', Sulit: 'badge-sulit' };
const HURUF = ['A', 'B', 'C', 'D', 'E'];

// Halaman latihan cuma boleh dibuka kalau sudah login
function requireLogin() {
  if (!getCurrentUser()) {
    window.location.href = 'login.html';
    return false;
  }
  return true;
}

function getLatihan() {
  const id = new URLSearchParams(window.location.search).get('id');
  return LATIHAN.find((l) => l.id === id) || null;
}

// ---------- 1. BANK SOAL (daftar latihan) ----------
if (document.body.classList.contains('page-latihan') && requireLogin()) {
  const list = document.getElementById('latihanList');

  LATIHAN.forEach((l) => {
    const card = document.createElement('div');
    card.className = 'latihan-card';
    card.innerHTML = `
      <div class="latihan-top">
        <div class="latihan-info">
          <div class="latihan-title">${l.judul}</div>
          <div class="latihan-count">${l.soal.length} Soal</div>
        </div>
        <span class="badge ${BADGE_CLASS[l.kesulitan]}">${l.kesulitan}</span>
      </div>
      <a href="detail.html?id=${l.id}" class="btn-mulai">Mulai</a>
    `;
    list.appendChild(card);
  });
}

// ---------- 2. DETAIL LATIHAN ----------
if (document.body.classList.contains('page-detail') && requireLogin()) {
  const l = getLatihan();

  if (!l) {
    window.location.href = 'latihan.html';
  } else {
    document.getElementById('detailTitle').textContent = l.judul;
    document.getElementById('detailTag').textContent = l.tag;
    document.getElementById('dJumlah').textContent = l.soal.length;
    document.getElementById('dWaktu').textContent = l.waktu;
    document.getElementById('dKesulitan').textContent = l.kesulitan;
    document.getElementById('detailDesc').textContent = l.deskripsi;
    document.getElementById('btnMulai').href = 'soal.html?id=' + l.id;
  }
}

// ---------- 3. HALAMAN SOAL ----------
if (document.body.classList.contains('page-soal') && requireLogin()) {
  const l = getLatihan();

  if (!l) {
    window.location.href = 'latihan.html';
  } else {
    const total = l.soal.length;
    const jawaban = new Array(total).fill(null); // jawaban user per soal (0-4), null = belum dijawab
    const durasiDetik = l.waktu * 60;
    const waktuSelesai = Date.now() + durasiDetik * 1000;
    let index = 0;
    let selesai = false;
    let timerId = null;

    const el = {
      quiz: document.getElementById('quizView'),
      result: document.getElementById('resultView'),
      timer: document.getElementById('timer'),
      judul: document.getElementById('soalJudul'),
      nomor: document.getElementById('soalNomor'),
      box: document.getElementById('soalBox'),
      opsi: document.getElementById('opsiList'),
      prev: document.getElementById('btnPrev'),
      next: document.getElementById('btnNext'),
      back: document.getElementById('btnBack')
    };

    el.judul.textContent = l.judul;

    function formatWaktu(detik) {
      const m = String(Math.floor(detik / 60)).padStart(2, '0');
      const s = String(detik % 60).padStart(2, '0');
      return `${m}:${s}`;
    }

    function render() {
      const s = l.soal[index];

      el.nomor.textContent = `Soal ${index + 1}/${total}`;

      // teks soal (+ gambar kalau ada)
      el.box.innerHTML = '';
      const p = document.createElement('p');
      p.className = 'soal-text';
      p.textContent = s.soal;
      el.box.appendChild(p);
      if (s.gambar) {
        const img = document.createElement('img');
        img.src = s.gambar;
        img.alt = 'Gambar soal';
        img.className = 'soal-img';
        el.box.appendChild(img);
      }

      // pilihan jawaban A-E
      el.opsi.innerHTML = '';
      s.opsi.forEach((teks, i) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'opsi' + (jawaban[index] === i ? ' selected' : '');

        const huruf = document.createElement('span');
        huruf.className = 'opsi-letter';
        huruf.textContent = HURUF[i];

        const isi = document.createElement('span');
        isi.textContent = teks;

        btn.appendChild(huruf);
        btn.appendChild(isi);
        btn.addEventListener('click', () => {
          jawaban[index] = i;
          render();
        });
        el.opsi.appendChild(btn);
      });

      el.prev.disabled = index === 0;
      el.next.textContent = index === total - 1 ? 'Selesai' : 'Selanjutnya';
    }

    function tick() {
      const sisa = Math.max(0, Math.ceil((waktuSelesai - Date.now()) / 1000));
      el.timer.textContent = formatWaktu(sisa);
      if (sisa === 0) {
        akhiri(true);
      }
    }

    function akhiri(waktuHabis) {
      if (selesai) return;

      if (!waktuHabis) {
        const kosong = jawaban.filter((j) => j === null).length;
        const pesan = kosong > 0
          ? `Masih ada ${kosong} soal yang belum dijawab. Yakin mau selesai?`
          : 'Selesaikan latihan sekarang?';
        if (!confirm(pesan)) return;
      }

      selesai = true;
      clearInterval(timerId);

      const benar = jawaban.filter((j, i) => j === l.soal[i].jawaban).length;
      const terpakai = Math.min(durasiDetik, Math.round(durasiDetik - (waktuSelesai - Date.now()) / 1000));

      simpanHasil({
        id: l.id,
        judul: l.judul,
        dijawab: jawaban.filter((x) => x !== null).length,
        benar: benar,
        total: total,
        skor: Math.round((benar / total) * 100),
        terpakai: terpakai,
        tanggal: Date.now()
      });

      document.getElementById('resultJudul').textContent = l.judul;
      document.getElementById('resultSkor').textContent = Math.round((benar / total) * 100);
      document.getElementById('resultDetail').textContent = `${benar} dari ${total} soal dijawab dengan benar`;
      document.getElementById('resultWaktu').textContent =
        (waktuHabis ? 'Waktu habis! ' : '') + `Waktu terpakai: ${formatWaktu(terpakai)}`;

      el.quiz.hidden = true;
      el.result.hidden = false;
    }

    el.prev.addEventListener('click', () => {
      if (index > 0) {
        index--;
        render();
      }
    });

    el.next.addEventListener('click', () => {
      if (index < total - 1) {
        index++;
        render();
      } else {
        akhiri(false);
      }
    });

    el.back.addEventListener('click', () => {
      if (confirm('Keluar dari latihan? Jawabanmu belum tersimpan.')) {
        window.location.href = 'detail.html?id=' + l.id;
      }
    });

    document.getElementById('btnUlang').addEventListener('click', () => {
      window.location.reload();
    });

    render();
    tick();
    timerId = setInterval(tick, 1000);
  }
}