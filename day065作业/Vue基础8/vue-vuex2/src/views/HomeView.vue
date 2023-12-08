<template>
  <!-- src\views\Home.vue -->
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>
      欢迎使用VUE, <span @click="handleClick">{{ username }}</span
      >!
    </h1>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { toRefs } from "vue";
export default {
  name: "HomeView",
  setup() {
    const store = useStore();
    const { username } = toRefs(store.state);
    const handleClick = () => {
      store.commit("changeName");
    };
    return { username, handleClick };
  },
};
</script>
