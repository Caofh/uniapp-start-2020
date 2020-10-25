<template>
	<div class="content">
		我是买家端

	</div>
		

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

		},
		methods: {

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

	}

	
</style>
