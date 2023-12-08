<template>
  <div class="home">
    <p>
      <img
        @click="handleClick"
        src="https://markdown-1253389072.cos.ap-nanjing.myqcloud.com/202309232319891.png"
        alt=""
      />
    </p>
    <h1>{{ txt }}</h1>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { toRefs } from "vue";
export default {
  name: "HomeView",
  setup() {
    const store = useStore();
    const { txt } = toRefs(store.state);
    const handleClick = () => {
      store.dispatch("getData");
    };
    return {
      txt,
      handleClick,
    };
  },
};
</script>
