<template>
  <div>
    <pageContainer :menu="menu"></pageContainer>
  </div>
</template>
<script>
import pageContainer from "@/components/common/pageContainer";
import List from "@/components/list";
export default {
  components: { pageContainer },
  data() {
    const menu = [
      {
        path: "/list/order",
        name: "order",
        component: List.Container,
        redirect: "/list/order",
        meta: { role: 3, text: "订单" },
        children: [
          {
            path: "/list/order",
            name: "order",
            component: List.Order
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
