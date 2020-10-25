<template>
    <view class="camera-container_foot_button">
        <view class="camera-container_foot_light" @click="emit_changeFlash">
            <img v-if="flash === 'off'" src="@/assets/img/camera/icon-light-close.png">
            <img v-else src="@/assets/img/camera/icon-light-open.png">
        </view>
        <view
            :class="['camera-container_foot_shutter', theme]"
            @click="emit_takePhoto">
        </view>
        <view
            class="camera-container_foot_photo"
            @click="emit_chooseImage"
        >
            <img src="@/assets/img/camera/icon-photo.png">
        </view>
    </view>
</template>

<script>
export default {
    data () {
        return {
            flash: 'off'
        }
    },
    props: {
        // 设置拍照主题颜色，可选值为：white、black
        theme: {
            type: String,
            default: 'white'
        }
    },
    methods: {
        // 是否打开闪光灯
        emit_changeFlash () {
            this.flash = this.flash === 'off' ? 'torch' : 'off'
            this.$emit('onChangeFlash', this.flash)
        },

        // 拍照
        emit_takePhoto() {
            const ctx = wx.createCameraContext()
            ctx.takePhoto({
                quality: 'high',
                success: res => {
                    this.$emit('onTakePhoto', res)
                }
            })
        },

        // 从相册选取图片
        emit_chooseImage () {
            wx.chooseImage({
                count: 1,
                sizeType: ['compressed'],
                sourceType: ['album'],
                success: res => {
                    this.$emit('onChooseImage', res)
                }
            })
        }
    }
}
</script>

<style lang="scss">
.camera {
    &-container_foot_button {
        height: 140rpx;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
        }
    }

    &-container_foot_light,
    &-container_foot_photo {
        width: 98rpx;
        height: 98rpx;
    }

    &-container_foot_shutter {
        width: 140rpx;
        height: 140rpx;
        margin: 0 119rpx;
        border-radius: 50%;
        overflow: hidden;
        box-sizing: border-box;
        border: 4px solid #fff;
        display: flex;
        justify-content: center;
        align-items: center;

        // 默认为白色主题的按钮
        &::before {
            content: '';
            width: 114rpx;
            height: 114rpx;
            border-radius: 50%;
            background: #fff;
        }

        &:active {
            border-color: rgba(0, 0, 0, 0.7);

            &:before {
                background: rgba(0, 0, 0, 0.7);
            }
        }

        // 深色主题的按钮，按下状态为白色
        &.black {
            border-color: #1C1717;

            &::before {
                background: #1C1717;
            }

            &:active {
                border-color: rgba(0, 0, 0, 0.2);

                &:before {
                    background: rgba(0, 0, 0, 0.2);
                }
            }
        }
    }
}
</style>
