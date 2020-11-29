const app = Vue.createApp({
  data() {
    return {};
  },
  methods: {
    showAlert() {
      alert("Boo!");
    }
  }
});

app.mount("#assignment");
