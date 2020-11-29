const app = Vue.createApp({
  data() {
    return {
      text: "",
      textTwo: ""
    };
  },
  methods: {
    showAlert() {
      alert("Boo!");
    },
    output(e) {
      this.text = e.target.value;
    },
    outputEnter(e) {
      this.textTwo = e.target.value;
    }
  }
});

app.mount("#assignment");
