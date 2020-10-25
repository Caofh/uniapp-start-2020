<template>
	<view class="content">
		<img class="logo" :src="logo">
		我是卖家端

		<div class="logo" :style="{ background: 'url(' + logo_bg + ') no-repeat center / cover'}"></div>
		<view>
			<text class="title">{{title}}</text>
			<div @click="jump">123</div>

			<AD></AD>

			<div class="content-list">
				<div class="item c-flex-x-start" v-for="(item, index) in arr" :key="index" @click="jump(index)">
					
					<div class="left">
						<img src="https://s3.amazonaws.com/uifaces/faces/twitter/psaikali/128.jpg">
						1</div>
					<div class="right">
						<img src="https://s3.amazonaws.com/uifaces/faces/twitter/psaikali/128.jpg">
						2</div>
				</div>

			</div>


		</view>

		<div class="btn" @click="jump">跳转</div>

		<div>
				<!-- <Card1 class="item" v-for="(item, index) in list" :key="index" @jump="jump"></Card1> -->
				<!-- <Card2 class="item" v-for="(item, index) in list" :key="index"  @jump="jump"></Card2> -->

				<!-- <Screen></Screen> -->

			<div class="clearfix"></div>
    </div>

		<!-- 极速发布及一键转卖弹层 -->
    <PopUp v-model.lazy="show">

			<div class="content123">
				<div>哈哈哈</div>
			</div>

    </PopUp>

	</view>
</template>

<script>

	// 接口
	import { listPage } from '@_seller/api/pages/home/home.js'

	// 工具函数
	import { getImgUrl } from '@_seller/utils/platform'

	// 组件
	import AD from '@_seller/components/ad/ad.vue'
	// import AD from '../../../components/ad/ad.vue'
	// import AD from 'common/components/ad/ad.vue'
	import Card1 from '@_seller/components/ui/card_1.vue'
	import Card2 from '@_seller/components/ui/card_2.vue'
	import Refresh from '@_seller/components/ui/refresh.vue'
	import Screen from '@_seller/components/ui/screen.vue'
	import PopUp from '@_seller/components/popup/index.vue'

	// 图片资源
	const logo = getImgUrl('cut_093350_4021.png')
	const logo_bg = getImgUrl('cut_093350_4021.png', 'bg')

	export default {
		data() {
			return {
				title: 'Hello',
				logo: logo,
				logo_bg: logo_bg,

				arr: [],

				show: false,
			}
		},
		components: {
			AD,
			Card1,
			Card2,
			Refresh,
			Screen,
			PopUp,
		},
		onLoad() {

			console.log(this.isLogin())

			let url = '/pages/home/index?a=1'
			this.login(url)

			let arr = []
			for (let i = 0; i < 10; i++) {
				arr.push(i)
			}
			this.arr = arr

			listPage().then((data) => {
				console.log(data)

			})

			setTimeout(() => {
				this.show = true
			}, 1500)


		},
		methods: {
			jump (index) {

				let url = ''
				if (index == 0) {
					url = '/pages/sub/index/index'
				} else {
					url = '/pages/sub/index2/index'
				}

				console.log(index)
				console.log(url)
				
				uni.navigateTo({
					url: url
				})
			}

		}
	}
</script>

<style lang="scss">

	.content {
		text-align: center;
		height: 400upx;

		.logo {
			height: 200upx;
			width: 200upx;
			margin-top: 200upx;
		}

		.title {
			font-size: 36upx;
			color: #8f8f94;
		}

		.content-list {
			width: 100%;
			height: auto;

			.item {
				width: 100%;

				img {
					width: 100%;
					height: 180upx;
				}

				.left {
					width: 50%;
					height: 300upx;
					background: #f0f0f0;
				}
				.right {
					width: 50%;
					height: 300upx;
					background: #f0f0f0;
				}
			}
		}

		.content123 {
			height: 500upx;
			background: #fff;
		}

	}

	
</style>
