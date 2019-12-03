import Vue from 'vue';
import Vuex from 'vuex';
import axiosDemoMod from '@/store/modules/AxiosDemoMod'

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    axiosDemoMod
  },
});
