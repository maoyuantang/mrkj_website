<!--
 * @Author: tmy
 * @Date: 2019-12-04 09:24:02 
 * @LastEditors  : tmy
 * @LastEditTime : 2019-12-30 14:21:29
 * @Description: Do not edit
 -->
<template>
    <div class="home">
        <div class="home_head">
            <div class="head_content">
                <div class="content_title div">
                    <img
                        class="logo"
                        src="../assets/img/logo.png"
                        alt=""
                    >
                    <span class="logoTitle">微聚集</span>
                </div>
                <div class="content_section div">
                    <div
                        @click="selectItem(v, i)"
                        :class="['item', currentIndex === i ? 'active' : '']"
                        v-for="(v,i) in navList"
                        :key="i"
                    >{{v.name}}</div>
                </div>
                <div class="content_login div">
                    <div class="login btn">登陆</div>
                    <div class="registered btn">注册</div>
                </div>
            </div>
        </div>
        <div class="content">
            <router-view></router-view>
        </div>

        <!-- 定位元素 -->
        <a
            class="home_top"
            @click="goTop"
        >
            <img
                src="../assets/img/top.png"
                alt="回到顶部"
            >
        </a>
        <div
            class="home_kefu"
            @mouseover="custOver()"
            @mouseout="custOut()"
        >
            <img
                src="../assets/img/kefu.png"
                alt=""
            >
        </div>
        <div
            v-if="isCust"
            class="custom"
        >
            <div
                class="custom_div"
                v-for="(item,index) in 6"
            >QQ联系</div>
        </div>
        <div class="home_zaixianzixun">
            <img
                src="../assets/img/zaixianzixun.png"
                alt=""
            >
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Index extends Vue {
    // 客服弹窗
    private isCust: boolean = false;

    // 当前路由
    private currentIndex: number = 0;

    // 路由菜单
    private navList: object[] =
        [
            {
                name: '首页',
                path: '/',
            },
            {
                name: '解决方案',
                path: '/solution',
            },
            {
                name: '关于我们',
                path: '/aboutUs',
            },
            {
                name: '合作案例',
                path: '/cooperationCase',
            },
            {
                name: '渠道合作',
                path: '/channelCooperation',
            },
            {
                name: '淘宝旗舰店',
                path: '/taoBaoStore',
            },
            // {
            //     name: 'demo',
            //     path: '/demo',
            // },
            // {
            //     name: 'demo2',
            //     path: '/demo2',
            // },
        ];

    get navId() {
        return this.$store.state.nav_id;
    }

    // 回到顶部
    private goTop() {
        window.scrollTo(0, 0);
    }


    // 打开客服
    private custOver() {
        this.isCust = true;
    }

    // 关闭客服
    private custOut() {
        this.isCust = false;
    }

    // 路由跳转
    private selectItem(item: any, index: any) {
        // console.log('历史index=' + this.$store.state.nav_id);
        this.currentIndex = index;
        sessionStorage.setItem('nav_id', index);
        // console.log('存入index=' + this.currentIndex);
        if (item.path === '/taoBaoStore') {
            window.open('https://www.taobao.com');
        } else {
            // console.log('push：' + item.path);
            this.$router.push(item.path).catch((err: any) => { return; });
        }
    }

    private created() {
        // console.log('历史index=' + this.$store.state.nav_id);
        this.currentIndex = this.$store.state.nav_id;
    }
}
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    .home_head {
        width: 100%;
        height: 100px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        background-color: rgba(255, 255, 255, 1);
        .head_content {
            width: 1200px;
            height: 100%;
            margin: auto;
            display: flex;
            .div {
                height: 100%;
                display: flex;
                align-items: center;
            }
            .content_title {
                .logo {
                    width: 60px;
                    height: 60px;
                    cursor: pointer;
                    border-radius: 50%;
                }
                .logoTitle {
                    font-family: "Arial-BoldMT", "Arial Bold", "Arial";
                    font-weight: 700;
                    font-size: 28px;
                    color: #1890ff;
                    white-space: nowrap;
                    cursor: pointer;
                    margin: 0 0 0 5px;
                }
            }
            .content_section {
                margin: 0 0 0 120px;
                .active {
                    color: rgb(90, 192, 255) !important;
                }
                .item {
                    margin: 0 50px 0 0;
                    // color: rgb(90, 192, 255);
                    color: #696b69;
                    font-family: "ArialMT", "Arial";
                    font-weight: 400;
                    font-size: 20px;
                    cursor: pointer;
                    white-space: nowrap;
                }
            }
            .content_login {
                .btn {
                    width: 70px;
                    line-height: 30px;
                    font-family: "Microsoft Tai Le";
                    font-weight: 400;
                    font-size: 14px;
                    color: #1890ff;
                    border-color: rgba(24, 144, 255, 1);
                    border-radius: 4px;
                    border: 1px solid rgba(24, 144, 255, 1);
                    cursor: pointer;
                    text-align: center;
                    &:hover {
                        background-color: rgba(24, 144, 255, 1);
                        color: #fff;
                    }
                }
                .login {
                }
                .registered {
                    margin: 0 0 0 10px;
                }
            }
        }
    }
    .content {
        width: 100%;
        height: 100%;
        margin: 100px 0 0 0;
    }
    .home_top {
        width: 72px;
        height: 72px;
        position: fixed;
        bottom: 10px;
        right: 10px;
        cursor: pointer;
        z-index: 2;
    }
    .home_kefu {
        position: fixed;
        bottom: 140px;
        right: 10px;
        cursor: pointer;
        z-index: 2;
    }
    .home_zaixianzixun {
        position: fixed;
        bottom: 10px;
        left: 0px;
        cursor: pointer;
        z-index: 2;
    }
    .custom {
        width: 140px;
        height: 310px;
        position: fixed;
        bottom: 10px;
        right: 82px;
        cursor: pointer;
        z-index: 2;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        .custom_div {
            width: 100%;
            text-align: center;
        }
    }
}
</style>
