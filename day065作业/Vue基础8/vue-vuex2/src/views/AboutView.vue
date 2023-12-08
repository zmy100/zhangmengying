<template>
  <div class="about">
    <h1>
      <span @click="handleClick">{{ username }}</span> 你好! 这是介绍页面
    </h1>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { toRefs } from "vue";
export default {
  name: "AboutView",
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
