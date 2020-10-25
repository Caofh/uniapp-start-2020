const systemInfo = uni.getSystemInfoSync()

export default {
    data () {
        return {
            systemInfo,
            isIphoneX: systemInfo.model.indexOf('iPhone X') >= 0,
            winW: systemInfo.windowWidth,
            winH: systemInfo.windowHeight
        }
    },
    methods: {
        // 单位转换：rpx转px
        rpxToPx (rpx) {
            return rpx / 750 * this.winW
        },

        // 单位转换：px转rpx
        pxToRpx (px) {
            return px * 750 / this.winW
        },

        // 判断是否已登录
        isLogin () {
            // localStorage中存储的登陆信息
            let account_details = uni.getStorageSync('account_details');

            return account_details ? true : false
        },

        // 登录方法，传入回调地址(如登陆了，返回登陆信息；未登录，跳转登陆页)
        /*  调用示例：
            一、
            let url = '/pages/home/index?a=1'
            this.login(url)
            二、
            this.login()
        */
        login (url) {
            let target = encodeURIComponent(url)

            let isLogin = this.isLogin()
            if (isLogin) {
                let account_details = uni.getStorageSync('account_details');

                return account_details
            } else {
                console.log(url)
                console.log(target)
                let loginUrl = `/pages/account/login?targetUrl=${target}`
				
				uni.navigateTo({
					url: loginUrl
				})
            }

        }
    }
}