<template>
	<view class="home">
		<!-- 小点:indicator-dots -->
		<swiper :indicator-dots="true" circular :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon">
				</view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_shoop">
			<view class="hot_shoopTxt">
				推荐商品
			</view>
			<good-list @goodsItemClick="goGoodsDetail" :goods="goods"></good-list>
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/good-list/good-list.vue'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [{
						icon: 'iconfont icon-ziyuan',
						title: '万物超市',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '超市风采',
						path: '/pages/views/views'
					}
				]
			}
		},
		onLoad() {

		},
		components: {
			"good-list": goodsList
		},
		methods: {
			// 获取;轮播图数据
			async getSwiper() {
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				this.swipers = res.data.message
			},
			// 获取热门商品列表
			async getHotShoop() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1'
				})
				this.goods = res.data.message
			},
			// 点击导航跳转
			navItemClick(url) {
				uni.navigateTo({
					url
				})
			},
			// 跳转到商品详情
			goGoodsDetail(id) {
				uni.navigateTo({
					url:'../good-detail/good-detail?id='+id
				})
			}
		},
		onLoad() {
			this.getSwiper()
			this.getHotShoop()
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;
				font-size: 30rpx;

				view {
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					line-height: 120rpx;
					margin: 10px auto;
					color: #FFFFFF;
					font-size: 50rpx;

					.icon-tupian {
						font-size: 45rpx;
					}
				}
			}
		}

		.hot_shoop {
			background-color: #eee;
			overflow: hidden;
			margin-top: 10px;

			.hot_shoopTxt {
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				background-color: #FFFFFF;
				margin: 7rpx 0;
			}
		}
	}
</style>
