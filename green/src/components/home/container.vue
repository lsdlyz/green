<template>
  <div class="home">
    <pageContainer :menu="menu"></pageContainer>
  </div>
</template>
<script>
import pageContainer from "@/components/common/pageContainer";
import Home from "@/components/home/container";
import Admin from "@/components/admin";
export default {
  components: { pageContainer },
  data() {
    const menu = [
      {
        path: "/home",
        name: "home",
        component: Home,
        redirect: "/admin/number",
        children: [
          {
            path: "/admin/number",
            name: "number",
            component: Admin.Number,
            meta: { role: 0, text: "数字" }
          }
        ]
      }
    ];
    return {
      menu
    };
  }
};
</script>
<style lang="scss" scoped></style>
