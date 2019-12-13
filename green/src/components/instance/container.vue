<template>
  <div>
    <pageContainer :menu="menu"></pageContainer>
  </div>
</template>
<script>
import pageContainer from "@/components/common/pageContainer";
import Instance from "@/components/instance";
export default {
  components: { pageContainer },
  data() {
    const menu = [
      {
        path: "/instance/base64",
        name: "base64",
        component: Instance.Container,
        redirect: "/instance/base64",
        meta: { role: 2, text: "事例" },
        children: [
          {
            path: "/instance/base64",
            name: "base64",
            component: Instance.Base
          },
          {
            path: "/instance/compiler",
            name: "compiler",
            component: Instance.Compiler
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
