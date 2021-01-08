var app = new Vue({
  el: "#app",
  data() {
    return {
      data: {
        social_media: {},
        
      },
      loading: false,
    };
  },

  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      const baseUrl = "https://hirng-x2021.glitch.me/api";
      axios
        .get(baseUrl)
        .then((response) => {
          this.data = response.data;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
        });
    },
  },
});
