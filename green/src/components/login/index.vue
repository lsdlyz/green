<template>
  <div name="login">
    <div>登录页</div>
    <div @click="toLogin">去登陆</div>
  </div>
</template>
<script>
export default {
  methods: {
    toLogin() {
      this.$router.push("/home");
    }
  }
};
</script>
