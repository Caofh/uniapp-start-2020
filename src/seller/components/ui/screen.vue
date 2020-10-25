
<template>
    <div class="screen c-flex-y-center">
        <div class="screen-item item-1"></div>
        <div class="screen-item item-2"></div>
        <div class="screen-item item-3 c-flex-x-between">
            <div></div>
            <div></div>
        </div>
        <div class="screen-item-style-2" v-for="(item, index) in count" :key="index"></div>

    </div>
</template>

<script>
/*
    注：左图右文卡片

    模版：
    <Screen></Screen>
    // <Screen :count="12"></Screen>

    js：
    // 组件
    import Screen from '@_seller/components/ui/screen.vue'

    export default {
		data() {
		},
		components: {
			Screen,
        },
    }

*/

    export default {
        data() {
            return {
                winW: '',
                winH: '',

            }
        },
        props: {
            count: {
                type: Number,
                default: 6
            },
        },
        mounted() {
            let that = this

            wx.getSystemInfo({
                success (res) {
                    const winWidth = res.windowWidth // 屏幕宽度
                    const winHeight = res.windowHeight // 屏幕高度

                    that.winW = winWidth
                    that.winH = winHeight

                }
            })

        },
        methods: {
            
        }
    }
</script>

<style lang="scss">
    .screen {
        @keyframes van-skeleton-blink {
            0% {
                background: #f2f3f5;
            }
            50% {
                background: #e8e9eb;
            }
            100% {
                background: #f2f3f5;
            }
        }

        .screen-item {

            &.item-1 {
                width: 95%;
                height: 280upx;
                border-radius: 10upx;
                background: #f2f3f5;

                animation: van-skeleton-blink 1.2s ease-in-out infinite;
            }
            &.item-2 {
                width: 20%;
                height: 50upx;
                border-radius: 10upx;
                margin: 30upx 0 20upx 0;
                background: #f2f3f5;

                animation: van-skeleton-blink 1.2s ease-in-out infinite;
            }
            &.item-3 {
                width: 95%;
                margin-bottom: 20upx;

                div {
                    width: 49%;
                    height: 50upx;
                    border-radius: 5upx;
                    background: #f2f3f5;

                    animation: van-skeleton-blink 1.2s ease-in-out infinite;
                }
            }
        }

        .screen-item-style-2 {
            width: 95%;
            height: 280upx;
            border-radius: 5upx;
            background: #f2f3f5;
            margin-bottom: 20upx;

            animation: van-skeleton-blink 1.2s ease-in-out infinite;
        }

    }
</style>
