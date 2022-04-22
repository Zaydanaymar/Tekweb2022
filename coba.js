Vue.createApp({
  data() {
    return {
      markdownArticle: null,
      jsondata: {},
      link: {},
    };
  },
  methods: {
    getHeaderData() {
      axios
        .get('https://raw.githubusercontent.com/Zaydanaymar/tekweb2022/main/contents/header.json')
        .then((res) => {
          console.log(res.data);
          this.header = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getJsonData() {
      axios
        .get('https://raw.githubusercontent.com/Zaydanaymar/tekweb2022/main/contents/articles.json')
        .then((res) => {
          // console.log(res.data);
          this.jsondata = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getMarkdownLink() {
      var converter = new showdown.Converter();
      axios
        .get('https://raw.githubusercontent.com/Zaydanaymar/tekweb2022/latihan3/contents/articles.json')
        .then((res) => {
          for (var i of Object.keys(res.data)) {
            this.link = res.data[i].markdown;
            console.log(this.link);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  beforeMount() {
    this.getHeaderData();
    this.getJsonData();
    this.getMarkdownLink();
  },
}).mount('#app');
