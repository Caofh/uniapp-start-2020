
<template>
    <div class="card-1 c-flex-y-start" @click="jump">
        <div class="img">
            <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jnmnrd/128.jpg">
        </div>

        <div class="info">
            <div class="title">PEEKABOO ICONIC ESSENTIALLY手袋 Vichy…</div>
            <div class="info-1 c-ellipsis-single">
                <span>驼色</span>
                <span>18cmx22cm</span>
            </div>
            <div class="info-1 c-ellipsis-single">
                <span>货号</span>
                <span>MUS57143-3</span>
            </div>
        </div>
    </div>
</template>

<script>
/*
    注：上图下文卡片

    模版：
    <Card1 class="item" v-for="(item, index) in list" :key="index"></Card1>

    js：
    // 组件
    import Card1 from '@_seller/components/ui/card_1.vue'

    export default {
		data() {
			return {
				list: [1,2,3,4,5,6,7,8],
			}
		},
		components: {
			Card1,
        },
    }
*/

    export default {
        data() {
            return {

            }
        },
        props: {
            item: {
                type: Object,
                default: {}
            },
        },
        onLoad() {

        },
        methods: {
            jump () {
                this.$emit('jump', this.item)
            }
        }
    }
</script>

<style lang="scss">
    .card-1 {
        box-sizing: border-box;
        width: 348upx;
        height: 528upx;
        background: #ffffff;
        box-shadow: 0 16upx 20upx 0 rgba(194,208,218,0.40);
        border-radius: 26upx;
        padding: 20upx;

        .img {
            width: 308upx;
            height: 308upx;
            margin-bottom: 20upx;
            border-radius: 16upx;

            img {
                width: 100%;
                height: 100%;
                border-radius: 16upx;
            }
        }

        .info {
            .title {
                font-family: Futura-Medium;
                font-size: 24upx;
                color: #3A3A3A;
                letter-spacing: 0;

                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                margin-bottom: 13upx;
            }

            .info-1 {
                font-family: PingFangSC-Light;
                font-size: 24upx;
                color: #666666;
                margin-bottom: 6upx;
            }
            .info-2 {
                font-family: PingFangSC-Light;
                font-size: 24upx;
                color: #999999;
            }
        }
    }
</style>
