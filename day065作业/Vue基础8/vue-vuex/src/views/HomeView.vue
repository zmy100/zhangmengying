<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>
      欢迎使用Vue, <span @click="handleClick">{{ username }}</span> !
    </h1>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {
    username() {
      return this.$store.state.username;
    },
  },
  methods: {
    handleClick() {
      // 第一步:派发一个action
      this.$store.dispatch("changeName");
    },
  },
};
</script>
