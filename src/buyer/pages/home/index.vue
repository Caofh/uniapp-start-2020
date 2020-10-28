<template>
	<view class="home">
		我是买家端首页

	</view>
</template>

<script>

	export default {
		data() {
			return {

			}
		},
		components: {

		},
		onLoad() {
			console.log(123)
			uni.getNetworkType({
				success (res) {
						// console.log(`${res.networkType}`);
						console.log(res);
				},
				fail (res) {
						console.log(`getNetworkType 调用失败`);
				}
		});

		},
		methods: {

		}
	}
</script>

<style lang="scss">

	.home {
		
	}
	
</style>
