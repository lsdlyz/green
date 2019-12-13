<template>
  <div class="home">
    <pageContainer :menu="menu"></pageContainer>
  </div>
</template>
<script>
import pageContainer from "@/components/common/pageContainer";
import Element from "@/components/element";
export default {
  components: { pageContainer },
  data() {
    const menu = [
      {
        path: "/element/table",
        name: "table",
        component: Element.Container,
        meta: { role: 1, text: "表格" },
        redirect: "/element/table",
        children: [
          {
            path: "/element/table",
            name: "table",
            component: Element.Table,
            meta: { role: 1, text: "表格" }
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
