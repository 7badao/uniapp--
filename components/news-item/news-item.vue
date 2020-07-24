<template>
	<view class="news-item">
		<view class="news_item" @click="navigator(item.id)" v-for="item in list" :key="item.id">
			<image :src="item.img_url" mode=""></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间:{{item.add_time | formatDate}}</text>
					<text>浏览:{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		// 过滤器
		filters: {
			// 方法
			formatDate(date) {
				// 获取时间
				const nDate = new Date(date)
				// 获取年  
				const year = nDate.getFullYear()
				// 获取月 转成字符串 再判断是否满足两位
				const month = nDate.getMonth().toString().padStart(2, 0)
				// 获取天
				const day = nDate.getDay().toString().padStart(2, 0)
				return year + '-' + month + '-' + day
			}
		},
		methods:{
			navigator(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;

		image {
			height: 150rpx;
			min-width: 200rpx;
			max-width: 200rpx;
		}

		.right {
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.tit {
				font-size: 30rpx;
			}

			.info {
				font-size: 24rpx;

				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
