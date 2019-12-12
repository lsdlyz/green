import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    selectIndex: 0
  },
  actions: {
    currentIndex: (context, value) => {
      context.commit("UPDATE_INDEX", value);
    }
  },
  mutations: {
    UPDATE_INDEX: (state, value) => {
      state.selectIndex = value;
    }
  }
});
export default store;
