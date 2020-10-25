<template>
    <view :class="['camera-container_body', showCameraContainer && 'showCameraBody']">
        <view class="camera-container_body_arrow" v-if="showBorder">
            <view class="item camera-container_body_arrow_top_left"></view>
            <view class="item camera-container_body_arrow_bottom_left"></view>
            <view class="item camera-container_body_arrow_top_right"></view>
            <view class="item camera-container_body_arrow_bottom_right"></view>
        </view>
        <view class="camera-container_body_line" v-if="showLine">
            <view class="item camera-container_body_line_top"></view>
            <view class="item camera-container_body_line_bottom"></view>
            <view class="item camera-container_body_line_left"></view>
            <view class="item camera-container_body_line_right"></view>
        </view>
        <view class="camera-container_body_demo_image" v-if="demoImage">
            <view class="camera-container_body_demo_desc">示例图</view>
            <img :src="demoImage">
        </view>
        <view
            v-if="description"
            :class="[
                'camera-container_body_desc',
                'c-ellipsis-single',
                isErrorDesc && 'isErrorDesc'
            ]"
        >{{description}}</view>
    </view>
</template>

<script>
export default {
    props: {
        // 是否展示相机取景框
        showCameraContainer: {
            type: Boolean,
            default: false
        },

        // 是否展示选取框的边框
        showBorder: {
            type: Boolean,
            default: true
        },

        // 是否展示相机标尺
        showLine: {
            type: Boolean,
            default: true
        },

        // 右上角示例图
        demoImage: {
            type: String,
            default: ''
        },

        // 相机底部描述
        description: {
            type: String,
            default: ''
        },

        // 相机底部描述是否为错误信息，错误的情况相机底部描述背景会变成红色
        isErrorDesc: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
.camera {
    &-container_body {
        height: 750rpx;
        position: relative;
        z-index: 2;
        opacity: 0;
        transition: all 0.3s ease;

        &.showCameraBody {
            opacity: 1;
        }

        .item {
            position: absolute;
        }
    }

    &-container_body_line .item {
        border-color: #CCCCCC;
        opacity: 0.4;
    }

    &-container_body_arrow,
    &-container_body_line {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
    }

    &-container_body_arrow_top_left,
    &-container_body_arrow_bottom_left,
    &-container_body_arrow_top_right,
    &-container_body_arrow_bottom_right {
        width: 40rpx;
        height: 40rpx;
        border: 1px solid transparent;
    }

    &-container_body_arrow_top_left,
    &-container_body_arrow_top_right {
        border-top-color: #ccc;
        top: 0;
    }

    &-container_body_arrow_bottom_left,
    &-container_body_arrow_bottom_right {
        border-bottom-color: #ccc;
        bottom: 0;
    }

    &-container_body_arrow_top_left,
    &-container_body_arrow_bottom_left {
        border-left-color: #ccc;
        left: 0;
    }

    &-container_body_arrow_top_right,
    &-container_body_arrow_bottom_right {
        border-right-color: #ccc;
        right: 0;
    }

    &-container_body_line_top,
    &-container_body_line_bottom {
        width: 100%;
        left: 0;
        border-bottom: 1px solid;
        transform: scaleY(-50%);
    }

    &-container_body_line_top {
        top: 250rpx;
    }

    &-container_body_line_bottom {
        top: 500rpx;
    }

    &-container_body_line_left,
    &-container_body_line_right {
        height: 100%;
        top: 0;
        border-left: 1px solid;
        transform: scaleX(-50%);
    }

    &-container_body_line_left {
        left: 250rpx;
    }

    &-container_body_line_right {
        left: 500rpx;
    }

    &-container_body_desc {
        position: absolute;
        left: 50%;
        bottom: 30rpx;
        transform: translateX(-50%);
        max-width: 90%;
        height: 42rpx;
        padding: 0 10rpx;
        line-height: 42rpx;
        background: rgba(28, 23, 23, 0.60);
        border-radius: 2rpx;
        font-family: PingFangSC-Light;
        font-size: 24rpx;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;

        &.isErrorDesc {
            background: rgba(214, 37, 18, 0.8);
        }
    }

    &-container_body_demo_image {
        width: 140rpx;
        height: 185rpx;
        position: absolute;
        top: 20rpx;
        right: 20rpx;
        background: #FFFFFF;
        border-radius: 16rpx;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    &-container_body_demo_desc {
        padding-top: 12rpx;
        height: 33rpx;
        line-height: 33rpx;
        font-family: PingFangSC-Light;
        font-size: 24rpx;
        color: #000000;
        letter-spacing: 0;
        text-align: center;
    }
}
</style>
