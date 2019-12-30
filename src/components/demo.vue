<!--
 * @Author: tmy
 * @Date: 2019-12-04 16:17:54
 * @LastEditors  : tmy
 * @LastEditTime : 2019-12-30 11:30:11
 * @Description: Do not edit
 -->
<template>
    <div>
        demo
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Demo extends Vue {
    private created() {
        console.log('demo');
    }
}
</script>

<style lang="scss" scoped>
</style>
