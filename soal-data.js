// ===== LulusYuk - soal-data.js =====
// Semua data latihan ada di sini. Mau nambah latihan/soal? Tinggal tambah object baru di array LATIHAN.
//
// Format tiap soal:
//   soal    : teks soal (enter/baris baru ikut tampil)
//   gambar  : (opsional) nama file gambar, misal 'soal1.png' -> tampil di bawah teks soal
//   opsi    : array 5 pilihan jawaban [A, B, C, D, E]
//   jawaban : nomor jawaban benar, mulai dari 0 (0 = A, 1 = B, 2 = C, 3 = D, 4 = E)

const LATIHAN = [
  {
    id: 'penalaran-umum',
    judul: 'Penalaran Umum',
    tag: 'UTBK-SNBT 2026',
    kesulitan: 'Sulit',
    waktu: 10, // menit
    deskripsi: 'Latihan Penalaran Umum yang mencakup penalaran deduktif (silogisme dan kondisional), penalaran induktif (pola bilangan dan huruf), serta penalaran kuantitatif sederhana. Disusun mengikuti format subtes Penalaran Umum UTBK-SNBT.',
    soal: [
      {
        soal: 'Semua pelajar yang rajin pasti lulus ujian.\nSebagian pelajar tidak lulus ujian.\n\nKesimpulan yang PASTI benar adalah ...',
        opsi: ['Semua pelajar rajin.', 'Sebagian pelajar tidak rajin.', 'Semua pelajar yang lulus ujian rajin.', 'Tidak ada pelajar yang rajin.', 'Sebagian pelajar yang rajin tidak lulus ujian.'],
        jawaban: 1
      },
      {
        soal: 'Perhatikan pola bilangan berikut.\n2, 6, 12, 20, 30, ...\n\nBilangan selanjutnya adalah ...',
        opsi: ['36', '40', '44', '48', '42'],
        jawaban: 4
      },
      {
        soal: 'Lima orang duduk berjajar dari kiri ke kanan. Ani duduk paling kiri. Cika duduk tepat di sebelah kiri Dodi. Budi duduk di antara Ani dan Cika. Eka duduk tepat di sebelah kanan Dodi.\n\nSiapa yang duduk di posisi ketiga dari kiri?',
        opsi: ['Ani', 'Budi', 'Cika', 'Dodi', 'Eka'],
        jawaban: 2
      },
      {
        soal: 'Jika hujan turun, maka jalan menjadi basah.\nSaat ini jalan tidak basah.\n\nKesimpulan yang tepat adalah ...',
        opsi: ['Hujan turun.', 'Jalan basah karena hujan.', 'Mungkin hujan turun.', 'Hujan tidak turun.', 'Tidak dapat ditarik kesimpulan.'],
        jawaban: 3
      },
      {
        soal: 'Dokter : Rumah Sakit = Guru : ...',
        opsi: ['Sekolah', 'Murid', 'Buku', 'Pendidikan', 'Ijazah'],
        jawaban: 0
      },
      {
        soal: 'Di sebuah kelas, 20 siswa menyukai Matematika, 15 siswa menyukai Fisika, dan 8 siswa menyukai keduanya. Sebanyak 5 siswa tidak menyukai keduanya.\n\nBerapa jumlah siswa di kelas tersebut?',
        opsi: ['30', '32', '35', '38', '40'],
        jawaban: 1
      },
      {
        soal: 'Perhatikan pola huruf berikut.\nB, D, G, K, P, ...\n\nHuruf selanjutnya adalah ...',
        opsi: ['T', 'U', 'W', 'V', 'X'],
        jawaban: 3
      },
      {
        soal: 'Semua anggota klub catur pandai berpikir logis.\nRina bukan anggota klub catur.\n\nKesimpulan yang tepat adalah ...',
        opsi: ['Rina tidak pandai berpikir logis.', 'Rina pandai berpikir logis.', 'Rina mungkin pandai atau mungkin tidak pandai berpikir logis.', 'Rina tidak mungkin pandai berpikir logis.', 'Rina anggota klub lain.'],
        jawaban: 2
      },
      {
        soal: 'Andi lebih tinggi daripada Budi.\nCika lebih pendek daripada Budi.\nDedi lebih tinggi daripada Andi.\n\nPernyataan yang PASTI benar adalah ...',
        opsi: ['Budi paling tinggi.', 'Cika lebih tinggi daripada Andi.', 'Andi lebih pendek daripada Cika.', 'Budi lebih tinggi daripada Dedi.', 'Dedi lebih tinggi daripada Cika.'],
        jawaban: 4
      },
      {
        soal: 'Sebuah kota menerapkan aturan ganjil-genap sehingga kemacetan berkurang 20%. Pada periode yang sama, jumlah pengguna transportasi umum naik 35%.\n\nKesimpulan yang paling didukung oleh informasi tersebut adalah ...',
        opsi: ['Aturan ganjil-genap kemungkinan mendorong sebagian orang beralih ke transportasi umum.', 'Transportasi umum menyebabkan kemacetan berkurang 20%.', 'Semua pengendara kendaraan pribadi beralih ke transportasi umum.', 'Aturan ganjil-genap tidak efektif mengurangi kemacetan.', 'Kemacetan di kota tersebut akan hilang sepenuhnya.'],
        jawaban: 0
      }
    ]
  },

  {
    id: 'pengetahuan-kuantitatif',
    judul: 'Pengetahuan Kuantitatif',
    tag: 'UTBK-SNBT 2026',
    kesulitan: 'Sedang',
    waktu: 10,
    deskripsi: 'Latihan Pengetahuan Kuantitatif: aljabar dasar, persentase, rasio dan perbandingan, rata-rata, kecepatan, geometri, pecahan, eksponen, dan barisan aritmetika. Disusun mengikuti format subtes Pengetahuan Kuantitatif UTBK-SNBT.',
    soal: [
      {
        soal: 'Jika 3x + 5 = 20, maka nilai 2x - 1 adalah ...',
        opsi: ['7', '8', '9', '10', '11'],
        jawaban: 2
      },
      {
        soal: 'Harga sebuah buku setelah diskon 20% adalah Rp48.000.\n\nHarga buku sebelum diskon adalah ...',
        opsi: ['Rp58.000', 'Rp60.000', 'Rp62.000', 'Rp64.000', 'Rp68.000'],
        jawaban: 1
      },
      {
        soal: 'Rata-rata lima bilangan adalah 12. Jika salah satu bilangan, yaitu 20, dikeluarkan, maka rata-rata empat bilangan sisanya adalah ...',
        opsi: ['10', '9', '8', '11', '12'],
        jawaban: 0
      },
      {
        soal: 'Sebuah mobil menempuh jarak 180 km dalam waktu 3 jam. Dengan kecepatan yang sama, berapa jarak yang ditempuh dalam 5 jam?',
        opsi: ['240 km', '270 km', '280 km', '300 km', '320 km'],
        jawaban: 3
      },
      {
        soal: 'Perbandingan umur ayah dan anak adalah 7 : 2. Jika jumlah umur mereka 45 tahun, maka umur anak adalah ...',
        opsi: ['8 tahun', '9 tahun', '12 tahun', '14 tahun', '10 tahun'],
        jawaban: 4
      },
      {
        soal: 'Nilai dari (2^3 x 2^4) : 2^5 adalah ...',
        opsi: ['2', '4', '8', '16', '32'],
        jawaban: 1
      },
      {
        soal: 'Luas sebuah persegi panjang adalah 72 cm2 dan panjangnya 12 cm. Keliling persegi panjang tersebut adalah ...',
        opsi: ['30 cm', '32 cm', '34 cm', '36 cm', '38 cm'],
        jawaban: 3
      },
      {
        soal: 'Sebuah tangki berisi 2/5 bagian air. Setelah ditambah 21 liter air, tangki tersebut terisi 3/4 bagian.\n\nKapasitas tangki tersebut adalah ...',
        opsi: ['40 liter', '50 liter', '60 liter', '70 liter', '80 liter'],
        jawaban: 2
      },
      {
        soal: 'Diketahui a : b = 2 : 3 dan b : c = 4 : 5.\n\nPerbandingan a : c adalah ...',
        opsi: ['2 : 5', '8 : 15', '3 : 5', '4 : 5', '5 : 8'],
        jawaban: 1
      },
      {
        soal: 'Suku pertama suatu barisan aritmetika adalah 4 dan bedanya 3.\n\nSuku ke-10 barisan tersebut adalah ...',
        opsi: ['28', '30', '33', '34', '31'],
        jawaban: 4
      }
    ]
  },

  {
    id: 'literasi-bahasa-indonesia',
    judul: 'Literasi Bahasa Indonesia',
    tag: 'UTBK-SNBT 2026',
    kesulitan: 'Mudah',
    waktu: 14,
    deskripsi: 'Latihan Literasi Bahasa Indonesia: menentukan gagasan utama, makna kata dalam konteks, kalimat efektif, kata baku, ejaan, hingga penarikan simpulan dari teks. Disusun mengikuti format subtes Literasi dalam Bahasa Indonesia UTBK-SNBT.',
    soal: [
      {
        soal: 'Kebiasaan membaca buku selama 20 menit setiap hari terbukti meningkatkan kosakata dan kemampuan memahami bacaan. Selain itu, membaca melatih konsentrasi karena pembaca harus mengikuti alur cerita atau argumen. Oleh karena itu, kebiasaan ini layak ditanamkan sejak dini.\n\nGagasan utama paragraf tersebut adalah ...',
        opsi: ['Membaca buku harus dilakukan 20 menit setiap malam.', 'Kebiasaan membaca setiap hari bermanfaat dan layak ditanamkan sejak dini.', 'Konsentrasi hanya dapat dilatih dengan membaca.', 'Anak-anak wajib membaca buku cerita.', 'Kosakata hanya bertambah melalui membaca.'],
        jawaban: 1
      },
      {
        soal: 'Kepala sekolah memberi penghargaan kepada siswa yang gigih berlatih hingga berhasil menjuarai olimpiade sains.\n\nMakna kata "gigih" dalam kalimat tersebut adalah ...',
        opsi: ['tekun dan pantang menyerah', 'cepat puas dengan hasil', 'ceroboh dalam bekerja', 'bersemangat hanya sesaat', 'suka berkompetisi'],
        jawaban: 0
      },
      {
        soal: 'Kalimat yang efektif adalah ...',
        opsi: ['Para hadirin-hadirin dimohon untuk berdiri.', 'Di dalam rapat itu membahas anggaran tahun depan.', 'Pengurus OSIS menyusun program kerja untuk satu tahun ke depan.', 'Meskipun hujan deras, tetapi pertandingan tetap dilanjutkan.', 'Adik saya membeli buku-buku baru yang banyak sekali jumlahnya.'],
        jawaban: 2
      },
      {
        soal: 'Penulisan kata baku yang tepat terdapat pada ...',
        opsi: ['analisa', 'risiko', 'apotik', 'sistim', 'ijin'],
        jawaban: 1
      },
      {
        soal: 'Sebuah survei terhadap 500 siswa menunjukkan bahwa 70% di antaranya tidur kurang dari tujuh jam pada malam hari sekolah. Dari kelompok tersebut, sebagian besar melaporkan sulit berkonsentrasi pada jam pelajaran pertama.\n\nSimpulan yang paling sesuai dengan teks tersebut adalah ...',
        opsi: ['Semua siswa kurang tidur karena banyak tugas.', 'Siswa yang tidur cukup selalu berprestasi.', 'Jam pelajaran pertama sebaiknya dihapus.', 'Kurang tidur kemungkinan berkaitan dengan sulitnya berkonsentrasi pada jam pelajaran awal.', 'Sebagian besar siswa tidak peduli pada kesehatan.'],
        jawaban: 3
      },
      {
        soal: 'Penulisan huruf kapital yang tepat terdapat pada kalimat ...',
        opsi: ['Dia berasal dari suku jawa.', 'Kami merayakan hari kemerdekaan indonesia.', 'Kakak kuliah di universitas gadjah mada.', 'Kami berlibur ke danau Toba.', 'Ibu membeli kain batik di Pasar Klewer.'],
        jawaban: 4
      },
      {
        soal: 'Pemerintah daerah menyusun program mitigasi untuk wilayah yang rawan banjir.\n\nPadanan kata "mitigasi" dalam kalimat tersebut adalah ...',
        opsi: ['penanggulangan setelah bencana terjadi', 'pengungsian korban bencana', 'upaya mengurangi risiko bencana', 'penyaluran bantuan', 'pencatatan kerugian'],
        jawaban: 2
      },
      {
        soal: 'Perpustakaan kota buka pukul 08.00-16.00 pada hari Senin sampai Jumat dan pukul 09.00-13.00 pada hari Sabtu. Pada hari Minggu dan hari libur nasional, perpustakaan tutup. Rina berencana meminjam buku pada hari Sabtu pukul 14.00.\n\nPernyataan yang sesuai dengan teks adalah ...',
        opsi: ['Rina tidak dapat meminjam buku karena perpustakaan sudah tutup pada pukul 14.00 hari Sabtu.', 'Rina dapat meminjam buku karena perpustakaan buka hingga sore pada hari Sabtu.', 'Perpustakaan tutup sepanjang hari Sabtu.', 'Perpustakaan tetap buka pada hari Minggu.', 'Rina harus datang sebelum pukul 08.00.'],
        jawaban: 0
      },
      {
        soal: 'Hindari menyentuh wajah dengan tangan yang kotor. Cuci tangan dengan sabun selama sedikitnya 20 detik. Gunakan masker saat berada di tempat ramai.\n\nCiri kebahasaan yang dominan pada teks tersebut adalah ...',
        opsi: ['kalimat tanya retoris', 'majas hiperbola', 'kata sifat yang bermakna ganda', 'kalimat perintah (imperatif)', 'kalimat majemuk bertingkat'],
        jawaban: 3
      },
      {
        soal: 'Kata penghubung yang tepat untuk melengkapi kalimat berikut adalah ...\n\nIa sudah belajar semalaman, ... nilai ujiannya tetap tidak memuaskan.',
        opsi: ['karena', 'sehingga', 'namun', 'oleh karena itu', 'agar'],
        jawaban: 2
      }
    ]
  }
];
