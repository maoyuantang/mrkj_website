<!--
 * @Author: tmy
 * @Date: 2019-12-04 14:08:48
 * @LastEditors  : tmy
 * @LastEditTime : 2019-12-30 13:58:29
 * @Description: Do not edit
 -->
<template>
    <div class="home_video">
        <el-dialog
            :lock-scroll='false'
            :before-close='closeVideo'
            title=""
            :visible.sync="isDailog"
            center
        >
            <video
                controls="controls"
                name="media"
                src="http://pm.mrkjvip.cn/www/v.mp4"
                autoplay="autoplay"
                preload="load"
                loop="loop"
                muted="muted"
                width="100%"
            ></video>
        </el-dialog>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
    name: 'HomeVideo',
    components: {
    },
})
export default class HomeVideo extends Vue {
    @Prop() private isDailog!: boolean;

    // 关闭video
    private closeVideo() {
        this.$emit('par');
    }
}
</script>
<style lang="scss">
.home_video {
    .el-dialog__wrapper {
        .el-dialog {
            width: 80%;
            max-width: 1200px;
            height: 0;
            text-align: center;
            .el-dialog__header {
                padding: 0 !important;
                .el-dialog__headerbtn {
                    z-index: 1;
                }
            }
            .el-dialog__body {
                padding: 0 !important;
            }
        }
    }
}
</style>