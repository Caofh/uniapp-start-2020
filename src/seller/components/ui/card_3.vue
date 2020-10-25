<template>
    <view class="product3-container">
        <view
            class="product3-item"
            v-for="(item, i) in productList"
            :key="i"
            @click="emit_clickProduct(item)"
        >
            <view class="product3-image">
                <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jnmnrd/128.jpg">
            </view>
            <view class="product3-info">
                <view class="product3-info_title c-ellipsis-more">PEEKABOO ICONIC ESSENTIALLY手袋 Vichy交织手袋Vichy交织手袋</view>
                <view class="product3-info_desc c-ellipsis-single">货号MUS57143-3 驼色 L码</view>
                <view class="product3-info_price_container">
                    <view
                        :class="[
                            'product3-info_price_left',
                            canSell && 'canSell',
                            !hasButton && 'noHasButton'
                        ]">
                        <view class="product3-info_price1 c-ellipsis-single">平均回收价￥24,500</view>
                        <view class="product3-info_price2 c-ellipsis-single">
                            最高回收价
                            <span>￥</span>
                            <span :class="['product3-info_price2_main', hasButton && 'hasButton']">34,500</span>
                        </view>
                    </view>
                    <template v-if="hasButton">
                        <view v-if="canSell" class="product3-info_price_right product3-info_price_sell">出售</view>
                        <view v-else class="product3-info_price_right product3-info_price_no_sell">暂不可出售</view>
                    </template>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
export default {
    props: {
        // 商品列表数据
        productList: {
            type: Array,
            default: []
        },

        // 是否展示”出售、不可出售“按钮
        hasButton: {
            type: Boolean,
            default: true
        }
    },
    data () {
        return {
            canSell: true
        }
    },
    methods: {
        emit_clickProduct (item) {
            this.$emit('clickProduct', item)
        }
    }
}
</script>

<style lang="scss">
.noHasButton {
    .product3-info_price1,
    .product3-info_price2 {
        max-width: 410rpx !important;
    }
}
.product3 {
    &-container {
        width: 710rpx;
        margin: 0 auto;
    }

    &-image {
        width: 230rpx;
        height: 230rpx;
        margin-right: 20rpx;
        overflow: hidden;
        border-radius: 16rpx;

        img {
            width: 100%;
            height: 100%;
            border-radius: 16rpx;
            object-fit: cover;
        }
    }

    &-item {
        height: 230rpx;
        padding: 20rpx;
        box-sizing: content-box;
        margin-bottom: 20rpx;
        display: flex;
        box-shadow: 0 16rpx 20rpx 0 rgba(194,208,218,0.40);
        border-radius: 26rpx;
        background: #fff;

        &:last-child {
            margin-bottom: 0;
        }
    }

    &-info {
        width: 410rpx;
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    &-info_title {
        margin: 10rpx 10rpx 6rpx 0;
        font-family: Futura-Medium;
        font-size: 26rpx;
        line-height: 35rpx;
        max-height: 70rpx;
        color: #3A3A3A;
        letter-spacing: 0;
    }

    &-info_desc {
        width: 100%;
        font-family: PingFangSC-Light;
        height: 33rpx;
        line-height: 33rpx;
        font-size: 24rpx;
        color: #9e8b8b;
        letter-spacing: 0;
    }

    &-info_price_container {
        margin-bottom: 10rpx;
        display: flex;
        align-items: flex-end;
        flex: 1;
    }

    &-info_price_left {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        font-family: PingFangSC-Light;
        line-height: 33rpx;
        font-size: 24rpx;
        color: #1C1717;
        letter-spacing: 0;

        &.canSell {
            .product3-info_price1,
            .product3-info_price2 {
                max-width: 310rpx;
            }
        }
    }

    &-info_price1,
    &-info_price2 {
        max-width: 250rpx;
    }

    &-info_price2 {
        line-height: 40rpx;

        span {
            color: #D62512;
        }
    }

    &-info_price2_main {
        font-size: 32rpx;

        &.hasButton {
            font-size: 26rpx;
        }
    }

    &-info_price_right {
        height: 60rpx;
        margin-bottom: 8rpx;
        border-radius: 30rpx;
        font-family: PingFangSC-Medium;
        font-size: 24rpx;
        line-height: 60rpx;
        letter-spacing: 0;
        text-align: center;
        box-sizing: border-box;
    }

    &-info_price_sell {
        color: #000000;
        border: 1rpx solid #000000;
        padding: 0 25rpx;
    }

    &-info_price_no_sell {
        padding: 0 20rpx;
        background: #CCCCCC;
        color: #FFFFFF;
    }
}
</style>
