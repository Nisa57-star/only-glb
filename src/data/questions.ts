import { Question } from '../types/game';

/**
 * BANK SOAL RESMI: GLB, JARAK, DAN PERPINDAHAN
 * Sesuai daftar 20 soal dan kunci jawaban yang diberikan guru:
 *
 * 1. Gerak benda yang lintasannya lurus dan memiliki kecepatan tetap -> C (Gerak lurus beraturan)
 * 2. Satuan SI untuk jarak -> B (meter)
 * 3. Satuan SI untuk kecepatan -> C (meter/sekon)
 * 4. Mobil v=10 m/s dalam t=5 s -> C (50 m)
 * 5. Rumus jarak GLB -> A (s = v × t)
 * 6. Sepeda v=5 m/s selama t=10 s -> C (50 m)
 * 7. Jarak merupakan -> B (panjang lintasan yang ditempuh benda)
 * 8. Perpindahan merupakan -> B (perubahan posisi benda dari titik awal ke titik akhir)
 * 9. Andi berjalan 20 m ke arah timur. Perpindahan -> C (20 m ke timur)
 * 10. Budi berjalan 30 m ke timur kemudian kembali 10 m ke barat. Jarak -> D (40 m)
 * 11. Perpindahan Budi (nomor 10) -> A (20 m ke timur)
 * 12. Berjalan dari rumah ke sekolah 500 m. Jarak -> C (500 m)
 * 13. Benda kembali ke posisi awal, perpindahannya -> A (0 m)
 * 14. Bus v=20 m/s selama 10 sekon. Jarak -> D (200 m)
 * 15. Kecepatan tetap, waktu sama, menempuh -> B (jarak yang sama)
 * 16. Contoh GLB sehari-hari -> B (mobil bergerak lurus dengan kecepatan tetap)
 * 17. Mobil menempuh s=100 m dalam t=10 s. Kecepatan -> B (10 m/s)
 * 18. v=10 m/s dan t=20 s. Jarak -> C (200 m)
 * 19. Berjalan 10 m ke utara kemudian 10 m ke selatan. Jarak -> C (20 m)
 * 20. Perpindahan orang (nomor 19) -> A (0 m)
 */

export const QUESTION_BANK: Question[] = [
  {
    id: 'soal-01',
    topic: 'GLB',
    cognitiveLevel: 'C1',
    text: 'Gerak benda yang lintasannya lurus dan memiliki kecepatan tetap disebut ....',
    options: [
      { key: 'A', text: 'Gerak jatuh bebas' },
      { key: 'B', text: 'Gerak lurus berubah beraturan' },
      { key: 'C', text: 'Gerak lurus beraturan' },
      { key: 'D', text: 'Gerak melingkar' },
    ],
    correctAnswer: 'C',
    explanation:
      'Gerak Lurus Beraturan (GLB) adalah gerak suatu benda pada lintasan lurus dengan kelajuan/kecepatan konstan (tetap) dan percepatan a = 0.',
    graph: {
      kind: 'vt-glb',
      title: 'Grafik Kecepatan Tetap (GLB)',
      yAxisLabel: 'v (m/s)',
      xAxisLabel: 't (s)',
      values: { v0: 20 },
    },
  },
  {
    id: 'soal-02',
    topic: 'JARAK_PERPINDAHAN',
    cognitiveLevel: 'C1',
    text: 'Satuan SI (Sistem Internasional) untuk jarak adalah ....',
    options: [
      { key: 'A', text: 'sekon' },
      { key: 'B', text: 'meter' },
      { key: 'C', text: 'kilometer/jam' },
      { key: 'D', text: 'meter/sekon' },
    ],
    correctAnswer: 'B',
    explanation:
      'Satuan standar internasional (SI) untuk panjang lintasan atau jarak (s) adalah meter (m).',
  },
  {
    id: 'soal-03',
    topic: 'GLB',
    cognitiveLevel: 'C1',
    text: 'Satuan SI (Sistem Internasional) untuk kecepatan adalah ....',
    options: [
      { key: 'A', text: 'meter' },
      { key: 'B', text: 'sekon' },
      { key: 'C', text: 'meter/sekon' },
      { key: 'D', text: 'kilometer' },
    ],
    correctAnswer: 'C',
    explanation:
      'Kecepatan didefinisikan sebagai perpindahan dibagi waktu (m/s). Satuan SI untuk kecepatan adalah meter per sekon (m/s).',
  },
  {
    id: 'soal-04',
    topic: 'GLB',
    cognitiveLevel: 'C2',
    text: 'Sebuah mobil bergerak dengan kecepatan tetap 10 m/s. Dalam 5 sekon, mobil menempuh jarak ....',
    options: [
      { key: 'A', text: '2 m' },
      { key: 'B', text: '15 m' },
      { key: 'C', text: '50 m' },
      { key: 'D', text: '100 m' },
    ],
    correctAnswer: 'C',
    explanation:
      'Diketahui: v = 10 m/s, t = 5 s. Jarak s = v × t = 10 m/s × 5 s = 50 meter.',
    graph: {
      kind: 'vt-calc-distance',
      title: 'Grafik Gerak Mobil (v = 10 m/s, t = 5 s)',
      yAxisLabel: 'v (m/s)',
      xAxisLabel: 't (s)',
      values: { v0: 10, t: 5, s: 50 },
    },
  },
  {
    id: 'soal-05',
    topic: 'GLB',
    cognitiveLevel: 'C1',
    text: 'Rumus untuk menghitung jarak pada Gerak Lurus Beraturan (GLB) adalah ....',
    options: [
      { key: 'A', text: 's = v × t' },
      { key: 'B', text: 's = v + t' },
      { key: 'C', text: 's = v − t' },
      { key: 'D', text: 's = v / t' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada GLB kecepatan v tetap, sehingga rumus jarak adalah s = v × t (jarak = kelajuan/kecepatan dikalikan waktu tempuh).',
  },
  {
    id: 'soal-06',
    topic: 'GLB',
    cognitiveLevel: 'C2',
    text: 'Sebuah sepeda bergerak dengan kecepatan 5 m/s selama 10 sekon. Jarak yang ditempuh adalah ....',
    options: [
      { key: 'A', text: '2 m' },
      { key: 'B', text: '15 m' },
      { key: 'C', text: '50 m' },
      { key: 'D', text: '100 m' },
    ],
    correctAnswer: 'C',
    explanation:
      'Diketahui: v = 5 m/s, t = 10 s. Jarak yang ditempuh s = v × t = 5 m/s × 10 s = 50 meter.',
    graph: {
      kind: 'vt-calc-distance',
      title: 'Grafik Gerak Sepeda (v = 5 m/s, t = 10 s)',
      yAxisLabel: 'v (m/s)',
      xAxisLabel: 't (s)',
      values: { v0: 5, t: 10, s: 50 },
    },
  },
  {
    id: 'soal-07',
    topic: 'JARAK_PERPINDAHAN',
    cognitiveLevel: 'C1',
    text: 'Jarak merupakan ....',
    options: [
      { key: 'A', text: 'perubahan posisi benda' },
      { key: 'B', text: 'panjang lintasan yang ditempuh benda' },
      { key: 'C', text: 'waktu yang diperlukan benda' },
      { key: 'D', text: 'kecepatan benda' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jarak adalah panjang seluruh lintasan yang ditempuh oleh suatu benda yang bergerak tanpa memperhitungkan arah pergerakannya (besaran skalar).',
  },
  {
    id: 'soal-08',
    topic: 'JARAK_PERPINDAHAN',
    cognitiveLevel: 'C1',
    text: 'Perpindahan merupakan ....',
    options: [
      { key: 'A', text: 'panjang seluruh lintasan benda' },
      { key: 'B', text: 'perubahan posisi benda dari titik awal ke titik akhir' },
      { key: 'C', text: 'waktu perjalanan benda' },
      { key: 'D', text: 'kecepatan benda' },
    ],
    correctAnswer: 'B',
    explanation:
      'Perpindahan adalah perubahan posisi atau kedudukan benda dihitung lurus dari titik posisi awal hingga posisi akhir beserta arahnya (besaran vektor).',
  },
  {
    id: 'soal-09',
    topic: 'JARAK_PERPINDAHAN',
    cognitiveLevel: 'C2',
    text: 'Andi berjalan 20 m ke arah timur. Perpindahan Andi adalah ....',
    options: [
      { key: 'A', text: '0 m' },
      { key: 'B', text: '10 m ke barat' },
      { key: 'C', text: '20 m ke timur' },
      { key: 'D', text: '40 m ke timur' },
    ],
    correctAnswer: 'C',
    explanation:
      'Karena Andi bergerak lurus satu arah sejauh 20 m ke timur dari posisi awal, maka besar perpindahannya adalah 20 m ke timur.',
    graph: {
      kind: 'disp-1d',
      title: 'Diagram Garis Lintasan Andi',
      values: { d1: 20, d2: 0, pointA: 'Awal (0 m)', pointB: 'Akhir (20 m Timur)' },
    },
  },
  {
    id: 'soal-10',
    topic: 'JARAK_PERPINDAHAN',
    cognitiveLevel: 'C2',
    text: 'Budi berjalan 30 m ke timur kemudian kembali 10 m ke barat. Jarak yang ditempuh Budi adalah ....',
    options: [
      { key: 'A', text: '10 m' },
      { key: 'B', text: '20 m' },
      { key: 'C', text: '30 m' },
      { key: 'D', text: '40 m' },
    ],
    correctAnswer: 'D',
    explanation:
      'Jarak adalah panjang seluruh lintasan total yang dilalui: s = 30 m + 10 m = 40 meter.',
    graph: {
      kind: 'disp-1d',
      title: 'Lintasan Gerak Budi (30 m Timur, lalu 10 m Barat)',
      values: { d1: 30, d2: 10, pointA: 'Awal (0 m)', pointB: 'Titik Balik (30 m)', pointC: 'Akhir (20 m)' },
    },
  },
  {
    id: 'soal-11',
    topic: 'JARAK_PERPINDAHAN',
    cognitiveLevel: 'C2',
    text: 'Berdasarkan soal nomor 10 (Budi berjalan 30 m ke timur kemudian kembali 10 m ke barat), perpindahan Budi adalah ....',
    options: [
      { key: 'A', text: '20 m ke timur' },
      { key: 'B', text: '20 m ke barat' },
      { key: 'C', text: '40 m ke timur' },
      { key: 'D', text: '40 m ke barat' },
    ],
    correctAnswer: 'A',
    explanation:
      'Perpindahan diukur dari posisi awal: (+30 m ke timur) + (-10 m ke barat) = +20 m ke timur.',
    graph: {
      kind: 'disp-1d',
      title: 'Perpindahan Posisi Akhir Budi terhadap Titik Awal',
      values: { d1: 30, d2: 10, pointA: 'Awal (0 m)', pointB: '30 m', pointC: 'Posisi Akhir (+20 m)' },
    },
  },
  {
    id: 'soal-12',
    topic: 'JARAK_PERPINDAHAN',
    cognitiveLevel: 'C1',
    text: 'Seseorang berjalan dari rumah ke sekolah sejauh 500 m. Jarak yang ditempuh orang tersebut adalah ....',
    options: [
      { key: 'A', text: '0 m' },
      { key: 'B', text: '250 m' },
      { key: 'C', text: '500 m' },
      { key: 'D', text: '1.000 m' },
    ],
    correctAnswer: 'C',
    explanation:
      'Panjang lintasan dari rumah ke sekolah yang ditempuh secara langsung adalah 500 meter.',
  },
  {
    id: 'soal-13',
    topic: 'JARAK_PERPINDAHAN',
    cognitiveLevel: 'C2',
    text: 'Jika sebuah benda kembali ke posisi awal setelah bergerak, maka perpindahannya adalah ....',
    options: [
      { key: 'A', text: '0 m' },
      { key: 'B', text: '1 m' },
      { key: 'C', text: 'sama dengan jarak' },
      { key: 'D', text: 'lebih besar dari jarak' },
    ],
    correctAnswer: 'A',
    explanation:
      'Karena posisi akhir berimpit kembali dengan posisi awal (Δx = x_akhir - x_awal = 0), maka perpindahannya bernilai 0 m meskipun jarak tempuhnya tidak nol.',
  },
  {
    id: 'soal-14',
    topic: 'GLB',
    cognitiveLevel: 'C2',
    text: 'Sebuah bus bergerak dengan kecepatan 20 m/s selama 10 sekon. Jarak yang ditempuh bus adalah ....',
    options: [
      { key: 'A', text: '20 m' },
      { key: 'B', text: '30 m' },
      { key: 'C', text: '100 m' },
      { key: 'D', text: '200 m' },
    ],
    correctAnswer: 'D',
    explanation:
      'Diketahui: v = 20 m/s, t = 10 s. Jarak yang ditempuh bus s = v × t = 20 m/s × 10 s = 200 meter.',
    graph: {
      kind: 'vt-calc-distance',
      title: 'Grafik Perjalanan Bus (v = 20 m/s, t = 10 s)',
      yAxisLabel: 'v (m/s)',
      xAxisLabel: 't (s)',
      values: { v0: 20, t: 10, s: 200 },
    },
  },
  {
    id: 'soal-15',
    topic: 'GLB',
    cognitiveLevel: 'C2',
    text: 'Sebuah benda bergerak dengan kecepatan tetap. Dalam waktu yang sama, benda tersebut akan menempuh ....',
    options: [
      { key: 'A', text: 'jarak yang berbeda' },
      { key: 'B', text: 'jarak yang sama' },
      { key: 'C', text: 'perpindahan yang selalu nol' },
      { key: 'D', text: 'waktu yang berbeda' },
    ],
    correctAnswer: 'B',
    explanation:
      'Ciri khas Gerak Lurus Beraturan (GLB) dengan kecepatan konstan adalah dalam selang waktu yang sama selalu menempuh jarak yang sama besar.',
    graph: {
      kind: 'st-glb',
      title: 'Grafik Jarak terhadap Waktu pada GLB',
      yAxisLabel: 's (m)',
      xAxisLabel: 't (s)',
      values: { s: 40, t: 4 },
    },
  },
  {
    id: 'soal-16',
    topic: 'GLB',
    cognitiveLevel: 'C1',
    text: 'Contoh gerak lurus beraturan dalam kehidupan sehari-hari adalah ....',
    options: [
      { key: 'A', text: 'buah jatuh dari pohon' },
      { key: 'B', text: 'mobil bergerak lurus dengan kecepatan tetap' },
      { key: 'C', text: 'bola dilempar ke atas' },
      { key: 'D', text: 'sepeda yang direm hingga berhenti' },
    ],
    correctAnswer: 'B',
    explanation:
      'Mobil yang bergerak pada jalan tol lurus mendatar dengan kelajuan speedometer tetap (konstan) merupakan contoh GLB. Pilihan A, C, dan D merupakan gerak yang kecepatannya berubah.',
  },
  {
    id: 'soal-17',
    topic: 'GLB',
    cognitiveLevel: 'C2',
    text: 'Sebuah mobil menempuh jarak 100 m dalam waktu 10 sekon. Kecepatan mobil adalah ....',
    options: [
      { key: 'A', text: '5 m/s' },
      { key: 'B', text: '10 m/s' },
      { key: 'C', text: '50 m/s' },
      { key: 'D', text: '100 m/s' },
    ],
    correctAnswer: 'B',
    explanation:
      'Diketahui: s = 100 m, t = 10 s. Kecepatan v = s / t = 100 m / 10 s = 10 m/s.',
    graph: {
      kind: 'st-calc-speed',
      title: 'Grafik s-t Gerak Mobil (100 m dalam 10 s)',
      yAxisLabel: 's (m)',
      xAxisLabel: 't (s)',
      values: { s: 100, t: 10, v0: 10 },
    },
  },
  {
    id: 'soal-18',
    topic: 'GLB',
    cognitiveLevel: 'C2',
    text: 'Jika kecepatan sebuah benda 10 m/s dan waktu geraknya 20 sekon, jarak yang ditempuh adalah ....',
    options: [
      { key: 'A', text: '30 m' },
      { key: 'B', text: '100 m' },
      { key: 'C', text: '200 m' },
      { key: 'D', text: '300 m' },
    ],
    correctAnswer: 'C',
    explanation:
      'Diketahui: v = 10 m/s, t = 20 s. Jarak s = v × t = 10 m/s × 20 s = 200 meter.',
    graph: {
      kind: 'vt-calc-distance',
      title: 'Grafik Kecepatan Benda (v = 10 m/s, t = 20 s)',
      yAxisLabel: 'v (m/s)',
      xAxisLabel: 't (s)',
      values: { v0: 10, t: 20, s: 200 },
    },
  },
  {
    id: 'soal-19',
    topic: 'JARAK_PERPINDAHAN',
    cognitiveLevel: 'C2',
    text: 'Seseorang berjalan 10 m ke utara kemudian 10 m ke selatan. Jarak yang ditempuh adalah ....',
    options: [
      { key: 'A', text: '0 m' },
      { key: 'B', text: '10 m' },
      { key: 'C', text: '20 m' },
      { key: 'D', text: '30 m' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jarak adalah total seluruh panjang langkah yang dilalui: s = 10 m + 10 m = 20 meter.',
    graph: {
      kind: 'disp-1d',
      title: 'Diagram Lintasan: 10 m Utara lalu 10 m Selatan',
      values: { d1: 10, d2: 10, pointA: 'Awal (0 m)', pointB: 'Titik Balik (10 m)', pointC: 'Posisi Akhir (0 m)' },
    },
  },
  {
    id: 'soal-20',
    topic: 'JARAK_PERPINDAHAN',
    cognitiveLevel: 'C2',
    text: 'Berdasarkan soal nomor 19 (berjalan 10 m ke utara kemudian 10 m ke selatan), perpindahan orang tersebut adalah ....',
    options: [
      { key: 'A', text: '0 m' },
      { key: 'B', text: '10 m ke utara' },
      { key: 'C', text: '10 m ke selatan' },
      { key: 'D', text: '20 m ke utara' },
    ],
    correctAnswer: 'A',
    explanation:
      'Karena orang tersebut kembali tepat ke posisi semula (10 m ke utara dikurangi 10 m ke selatan), maka perpindahannya adalah 0 meter.',
    graph: {
      kind: 'disp-1d',
      title: 'Perpindahan Posisi Akhir terhadap Titik Awal',
      values: { d1: 10, d2: 10, pointA: 'Awal (0 m)', pointB: '10 m', pointC: 'Akhir (0 m)' },
    },
  },
];
