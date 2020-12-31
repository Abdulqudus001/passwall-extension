import Vue from "vue";
import './config'
import App from "./App.vue";
import "../styles/app.scss";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: (h) => h(App),
});
