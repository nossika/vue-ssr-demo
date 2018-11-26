import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store(
    {
      state: {
        user: '?',
        asyncData: '',
      },
      actions: {
        SET_USER({ commit }, user) {
          commit('SET_USER', user);
        },
        SET_ASYNC_DATA({ commit }, data) {
          commit('SET_ASYNC_DATA', data);
        },
      },
      mutations: {
        SET_USER(state, user) {
          state.user = user;
        },
        SET_ASYNC_DATA(state, data) {
          state.asyncData = data;
        },
      },
      getters: {
        user: s => s.user,
        asyncData: s => s.asyncData,
      },
    }
  );
}