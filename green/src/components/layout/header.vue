<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item
      v-for="item in menu"
      :index="item.name"
      :key="item.title"
      @click="handleSelect(item.path, item.name)"
    >
      {{ item.title }}
    </el-menu-item>
  </el-menu>
</template>
<script>
export default {
  data() {
    const menu = [
      { title: "处理中心", name: "0", path: "/admin/number" },
      { title: "我的工作台", name: "1", path: "/element/table" },
      { title: "消息中心", name: "2", path: "/instance/base64" },
      { title: "订单管理", name: "3", path: "/list/order" }
    ];
    const maptype = {
      "/admin/number": "0",
      "/element/table": "1",
      "/instance/base64": "2",
      "/list/order": "3"
    };
    return {
      activeIndex: "0",
      menu,
      maptype
    };
  },

  mounted() {
    this.activeIndex = this.maptype[this.$route.path];
    this.init(this.activeIndex);
  },
  methods: {
    init(index) {
      this.$store.dispatch("currentIndex", index);
    },
    handleSelect(path, name) {
      this.activeIndex = name;
      this.init(name);
      this.$router.push(path);
    }
  }
};
</script>
