import { createStore } from "vuex";

export default createStore({
  state: {
    username: "zhangsan",
  },
  getters: {},
  mutations: {
    // 第四步:对应的mutation会执行
    change() {
      // 第五步：在mutation中修改数据
      this.state.username = "张三";
    },
  },
  actions: {
    // 第二步:store感知到触发了一个changeName的action
    changeName() {
      // 第三步:提交一个commit,触发一个mutation,名称叫做change
      this.commit("change");
    },
  },
  modules: {},
});
