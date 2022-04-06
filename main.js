Vue.createApp({
  data() {
    return {
      header: {
        title: 'Zaydan Aymar',
        description: 'Seorang mahasiswa universitas ahmad dahlan, besar di lingkungan seniman ISI Yogyakarta. Bekerja sambilan, biasa mengerjakan foto produk, foto model, vidio cinematic, vidio iklan, dokumenter dan beragam perdesainan.',
        imageprofile: 'img/zay.png',
      },
      articles1: {
        title: 'Pre-Wedding yang Digemari',
        description: 'Ada beberapa konsep foto pre-wedding yang paling digemari para calon mempelai. Kami menyediakan konsultasi gratis untuk pemilihan konsep.',
        thumbnail: 'img/Projects/blog-1.png',
      },
      articles3: {
        title: 'Pre-Wedding yang Digemari',
        description: 'Ada beberapa konsep foto pre-wedding yang paling digemari para calon mempelai. Kami menyediakan konsultasi gratis untuk pemilihan konsep.',
        thumbnail: 'img/Projects/blog-2.png',
      },
      articles2: {
        title: 'Video Cinematic',
        description: 'Video Cinematic adalah sebuah video yang bercerita. Untuk itu, salah satu faktor yang harus kalian perhatikan adalah subjek. Pastikan subjek berada di tengah frame.',
        thumbnail: 'img/Projects/blog-3.jpg',
      },
    };
  },
}).mount('#app');
