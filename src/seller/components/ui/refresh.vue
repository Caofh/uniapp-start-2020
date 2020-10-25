
<template>
    <div class="refresh c-flex-y-center" :style="{height: winH + 'px'}">
        <div class="text">当前网络异常</div>

        <div class="btn c-flex-x-center">刷新</div>
    </div>
</template>

<script>
/*
    注：左图右文卡片

    模版：
    <Card2 class="item" v-for="(item, index) in list" :key="index"></Card2>

    js：
    // 组件
    import Card2 from '@_seller/components/ui/card_2.vue'

    export default {
		data() {
			return {
				list: [1,2,3,4,5,6,7,8],
			}
		},
		components: {
			Card2,
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
            item: {
                type: Object,
                default: {}
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
    .refresh {
        .text {
            font-size: 30upx;
            margin-bottom: 20upx;
            color: #666666;
        }

        .btn {
            width: 180upx;
            height: 60upx;
            font-family: PingFangSC-Light;
            font-size: 26upx;
            color: #666666;
            border: 1upx solid #666666;
        }

    }
</style>
