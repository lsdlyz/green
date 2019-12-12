<template>
  <div>
    <el-menu
      :default-active="currentMenu"
      :default-openeds="['0']"
      class="el-menu-vertical-demo"
    >
      <div v-for="(item, index) in menu" :key="index">
        <div v-if="item.children">
          <el-submenu :index="index + ''">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="(children, indexs) in item.children"
              :key="children.path"
              :index="indexs + '-1'"
              @click="toPath(children.path)"
              :class="getClass(children.path)"
              >{{ children.name }}</el-menu-item
            >
          </el-submenu>
        </div>
        <el-menu-item
          :index="index + ''"
          v-else
          @click="toPath(item.path)"
          :class="getClass(item.path)"
          >{{ item.name }}</el-menu-item
        >
      </div>
    </el-menu>
  </div>
</template>
<script>
import routes from "@/router/index";
export default {
  data() {
    return {
      active: "0",
      currentMenu: "",
      menu: [],
      routes,
      newRouter: [],
      selectIndex: 0
    };
  },

  watch: {
    $route(to, from) {
      this.getCurrentMenu();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      let router = this.routes.options.routes;
      let newRoutes = router.slice(1, router.length - 2);
      this.selectIndex = this.$store.state.selectIndex;
      this.menu = newRoutes[0].children.filter(
        item => item.meta.role == this.selectIndex
      );
    },
    toPath(path) {
      console.log(path);
      this.$router.push(path);
    },
    getClass(path) {
      return path == this.$route.path ? "is-active" : "";
    },
    getCurrentMenu() {
      // 获取当前页面 菜单刷新后能自动选中

      this.init();
    }
  }
};
</script>
