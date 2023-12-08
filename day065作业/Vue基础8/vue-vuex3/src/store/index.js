import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    txt: "这是一碗毒鸡汤",
  },
  getters: {},
  mutations: {
    changeData(state, data) {
      state.txt = data;
    },
  },
  actions: {
    getData(store) {
      axios
        .get(
          " https://www.fastmock.site/mock/94a22227d1eef9fb0ac0d468a93c8e27/api/txt"
        )
        .then(function (response) {
          store.commit("changeData", response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
  modules: {},
});
