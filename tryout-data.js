// ===== LulusYuk - tryout-data.js =====
// Tryout Center menampilkan 1 tryout per minggu (gonta-ganti otomatis kalau isi array TRYOUT lebih dari satu).
//
// label  : tulisan di pill kecil sebelah "Tryout Minggu Ini" (kosongin '' kalau mau disembunyikan)
// waktu  : total durasi tryout (menit), satu timer buat semua materi
// materi : tiap materi punya nama, sub (2 baris sub materi yang tampil di Detail Sesi), dan soal
// Format soal sama kayak soal-data.js (jawaban: 0 = A, 1 = B, 2 = C, 3 = D, 4 = E)

const TRYOUT = [
  {
    id: 'tryout-utbk-snbt-2026',
    judul: 'Tryout UTBK-SNBT 2026',
    label: 'GRATIS',
    waktu: 20,
    materi: [
      {
        nama: 'Penalaran Matematika',
        sub: ['Aljabar & Fungsi', 'Statistika & Peluang'],
        soal: [
          {
            soal: 'Sebuah taksi online menetapkan tarif Rp8.000 untuk 1 km pertama dan Rp3.500 untuk setiap km berikutnya.\n\nBerapa tarif untuk perjalanan sejauh 9 km?',
            opsi: ['Rp31.500', 'Rp33.500', 'Rp36.000', 'Rp39.500', 'Rp40.000'],
            jawaban: 2
          },
          {
            soal: 'Biaya produksi suatu barang dinyatakan dengan f(x) = 2.000x + 500.000, dengan x adalah jumlah unit yang diproduksi.\n\nJika biaya produksi sebesar Rp2.100.000, berapa unit yang diproduksi?',
            opsi: ['650 unit', '700 unit', '750 unit', '800 unit', '850 unit'],
            jawaban: 3
          },
          {
            soal: 'Nilai ulangan lima siswa adalah 70, 75, 80, 85, dan x. Jika rata-rata nilai kelima siswa tersebut adalah 80, maka nilai x adalah ...',
            opsi: ['85', '90', '95', '100', '80'],
            jawaban: 1
          },
          {
            soal: 'Sebuah dadu bersisi enam dilempar dua kali.\n\nPeluang munculnya jumlah mata dadu sama dengan 7 adalah ...',
            opsi: ['1/12', '1/9', '1/6', '1/4', '1/3'],
            jawaban: 2
          },
          {
            soal: 'Harga 3 pensil dan 2 buku adalah Rp19.000, sedangkan harga 2 pensil dan 3 buku adalah Rp21.000.\n\nBerapa harga satu buku?',
            opsi: ['Rp5.000', 'Rp4.000', 'Rp4.500', 'Rp5.500', 'Rp6.000'],
            jawaban: 0
          },
          {
            soal: 'Dina menabung Rp2.000.000 dengan bunga tunggal 6% per tahun.\n\nBerapa total tabungan Dina setelah 2 tahun?',
            opsi: ['Rp2.120.000', 'Rp2.240.000', 'Rp2.247.200', 'Rp2.360.000', 'Rp2.400.000'],
            jawaban: 1
          },
          {
            soal: 'Sebuah kolam berbentuk balok berukuran panjang 20 m, lebar 10 m, dan kedalaman 2 m. Kolam diisi air dengan debit 800 liter per menit.\n\nBerapa lama waktu yang dibutuhkan sampai kolam penuh? (1 m3 = 1.000 liter)',
            opsi: ['8 jam 20 menit', '6 jam 40 menit', '10 jam', '12 jam 30 menit', '16 jam 40 menit'],
            jawaban: 0
          },
          {
            soal: 'Seorang atlet berlari sejauh 2 km pada hari pertama, lalu menambah jarak larinya 0,5 km setiap hari.\n\nBerapa total jarak yang ia tempuh selama 6 hari?',
            opsi: ['15 km', '18 km', '21 km', '19,5 km', '27 km'],
            jawaban: 3
          }
        ]
      },

      {
        nama: 'Literasi Bahasa Inggris',
        sub: ['Main Idea & Detail', 'Vocabulary & Inference'],
        soal: [
          {
            soal: 'Urban gardening has grown rapidly in many cities. Residents turn rooftops, balconies, and empty lots into small farms. These gardens provide fresh vegetables, reduce heat in crowded neighborhoods, and give neighbors a place to meet.\n\nWhat is the main idea of the passage?',
            opsi: ['Cities should ban empty lots.', 'Urban gardening offers several benefits to city residents.', 'Vegetables grow better on rooftops than in fields.', 'Neighbors rarely meet in crowded areas.', 'Gardening is too difficult in big cities.'],
            jawaban: 1
          },
          {
            soal: 'The scientist was meticulous in recording every result, even the smallest measurement, so that no detail was ever lost.\n\nThe word "meticulous" is closest in meaning to ...',
            opsi: ['careless', 'reluctant', 'extremely careful', 'very fast', 'easily bored'],
            jawaban: 2
          },
          {
            soal: 'Maya arrived at the station just as the last train pulled away. She looked at her watch, sighed, and began searching for a place to call her brother.\n\nWhat can be inferred from the passage?',
            opsi: ['Maya missed the last train.', 'Maya was early for the train.', 'Maya\'s brother was driving the train.', 'Maya forgot her watch.', 'Maya enjoys waiting at stations.'],
            jawaban: 0
          },
          {
            soal: 'The city library will extend its opening hours during the exam season. Starting next Monday, it will stay open until 9 p.m. on weekdays, while the weekend schedule remains unchanged.\n\nAccording to the text, what will happen next Monday?',
            opsi: ['The library will open on weekends.', 'The library will close earlier on weekdays.', 'The library will stay open until 9 p.m. on weekdays.', 'The library will change its weekend schedule.', 'The library will stop lending books.'],
            jawaban: 2
          },
          {
            soal: 'Please remember to bring your student card and arrive at least thirty minutes before the exam begins. Mobile phones must be switched off and stored in your bag.\n\nWhat is the main purpose of the text?',
            opsi: ['To tell a story about a student', 'To describe an exam room', 'To persuade students to study harder', 'To give instructions to exam participants', 'To compare two kinds of exams'],
            jawaban: 3
          },
          {
            soal: 'Dr. Rahma developed a simple water filter from sand and charcoal. It costs less than ten dollars, yet it can remove most harmful particles from river water.\n\nThe word "It" in the second sentence refers to ...',
            opsi: ['the water filter', 'sand', 'charcoal', 'Dr. Rahma', 'river water'],
            jawaban: 0
          },
          {
            soal: 'Sales of electric scooters doubled in the city after the government offered a discount on charging stations. At the same time, the number of petrol scooters sold dropped by one third.\n\nWhich statement is best supported by the passage?',
            opsi: ['Petrol scooters are cheaper than electric scooters.', 'Electric scooters cause petrol prices to fall.', 'Everyone in the city now owns an electric scooter.', 'The government has banned petrol scooters.', 'The charging-station discount may have encouraged people to choose electric scooters.'],
            jawaban: 4
          },
          {
            soal: 'Although the first experiment failed, the team remained undeterred. They adjusted their method and tried again the following week.\n\nThe word "undeterred" most nearly means ...',
            opsi: ['discouraged and unwilling to continue', 'confused about the results', 'angry about the failure', 'not discouraged from continuing', 'satisfied with the outcome'],
            jawaban: 3
          }
        ]
      }
    ]
  }
];
