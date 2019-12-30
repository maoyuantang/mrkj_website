<!--
 * @Author: tmy
 * @Date: 2019-12-04 16:17:54
 * @LastEditors  : tmy
 * @LastEditTime : 2019-12-30 11:30:19
 * @Description: Do not edit
 -->
<template>
    <div>
        demo2
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Demo2 extends Vue {
private created() {
        console.log('demo2');
    }
}
</script>

<style lang="scss" scoped>
</style>
