import { createStore } from "vuex";

export default createStore({
  state: {
    username: "zhangsan",
  },
  mutations: {
    changeName() {
      this.state.username = "张三";
    },
  },
  actions: {},
  modules: {},
});
