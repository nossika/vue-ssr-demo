<template>
  <div>
    <h1>page1</h1>
    <div>{{ asyncData }}</div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    asyncData({ store, route }) {
      return new Promise(resolve => {
        setTimeout(() => {
          store.commit('SET_ASYNC_DATA', 'asyncData in page1!');
          resolve();
        }, 200);
      });
    },
    computed: {
      ...mapGetters(['asyncData']),
    },
  }
</script>