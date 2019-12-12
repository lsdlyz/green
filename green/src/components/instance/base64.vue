<template>
  <div class="base64">
    <div class="base">
      <div>base64加密：{{ arr1 }}</div>
      <div>base64解密：{{ arr2 }}</div>
    </div>
  </div>
</template>
<script>
let Base64 = require("js-base64").Base64;
export default {
  data() {
    return {
      arr1: Base64.encode("小飼弾"),
      arr2: Base64.decode("5bCP6aO85by-")
    };
  },
  mounted() {},
  methods: {}
};
</script>
