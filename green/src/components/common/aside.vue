<template>
  <div>
    <el-menu :default-active="currentMenu" :default-openeds="['0']" class="el-menu-vertical-demo">
      <div v-for="(item, index) in menu" :key="index">
        <div v-if="item.children">
          <el-submenu :index="index+''">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="(childrenItem, childrenIndex) in item.children"
              :key="childrenItem.path"
              :index="childrenIndex+''"
              @click="toPath(childrenItem.path,childrenIndex)"
              :class="{'is-active':childrenIndex==currentMenu}"
            >{{ childrenItem.name }}</el-menu-item>
          </el-submenu>
        </div>
        <el-menu-item
          :index="index+''"
          v-else
          @click="toPath(item.path,index)"
          :class="{'is-active':index==currentMenu}"
        >{{ item.name }}</el-menu-item>
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    menu: Array
  },
  data() {
    return {
      active: "0",
      currentMenu: "0"
    };
  },
  mounted() {},
  methods: {
    toPath(path, index) {
      this.currentMenu = index.toString();
      this.$router.push(path);
    }
  }
};
</script>
