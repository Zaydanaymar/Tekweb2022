Vue.createApp({
  data() {
    return {
      header: {},
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get('https://raw.githubusercontent.com/Zaydanaymar/tekweb2022/latihan3/contents/header.json')
        .then((res) => {
          console.log(res.data);
          this.header = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getArticles() {
      axios
        .get('https://raw.githubusercontent.com/Zaydanaymar/tekweb2022/latihan3/contents/articles.json')
        .then((res) => {
          console.log(res.data);
          this.header = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getArticles();
  },
}).mount('#app');
