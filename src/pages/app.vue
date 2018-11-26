<template>
  <section id="app">
    <section>
      <router-link :to="{ path: '/'}">home</router-link>
      <router-link :to="{ path: '/page1'}">page1</router-link>
      <router-link :to="{ path: '/page2'}">page2</router-link>
    </section>
    <h1>welcome, {{ user }}</h1>
    <section>
      <router-view></router-view>
    </section>
  </section>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    computed: {
      ...mapGetters(['user']),
    },
  }
</script>

