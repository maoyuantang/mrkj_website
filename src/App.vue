<!--
 * @Author: tmy
 * @Date: 2019-12-26 11:16:17
 * @LastEditors  : tmy
 * @LastEditTime : 2019-12-30 09:22:10
 * @Description: Do not edit
 -->
<template>
  <div id="app">
    <Index />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Index from '@/views/Index.vue';

@Component({
  components: {
    Index,
  },
})
export default class App extends Vue {
    private created() {
        this.$store.state.nav_id = Number(sessionStorage.getItem('nav_id'));
    }
}
</script>

<style lang="scss" scoped>
#app {
    width: 100%;
    height: 100%;
}
</style>
