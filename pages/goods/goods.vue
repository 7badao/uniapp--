<template>
	<view class="goodList">
		<good-list @goodsItemClick="goGoodsDetail" :goods="goods"></good-list>
		<view class="isOver" v-if="flag">
			...我是有底线的...
		</view>
	</view>
</template>

<script>
	import goodsList from "../../components/good-list/good-list.vue"
	export default {
		data() {
			return {
				pageindex: 1,
				goods: [],
				flag: false
			}
		},
		components: {
			"good-list": goodsList
		},
		methods: {
			async getGoodsList(callBack) {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.pageindex
				})
				console.log(res)
				this.goods = [...this.goods, ...res.data.message]
				callBack && callBack()
			},
			// 跳转到商品详情
			goGoodsDetail(id) {
				uni.navigateTo({
					url:'../good-detail/good-detail?id='+id
				})
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		// 监听触底
		onReachBottom() {
			if (this.goods.length < this.pageindex * 10) {
				return
			}
			this.flag = true
			this.pageindex++
			this.getGoodsList()
		},
		// 监听下拉刷新
		onPullDownRefresh() {
			// 刷新获取第一页数据
			this.pageindex = 1
			// 重置数据列表
			this.goods = []
			// 文字隐藏
			this.flag = false
			setTimeout(() => {
				this.getGoodsList(() => {
					// 在下拉刷新回调函数内取消
					uni.stopPullDownRefresh()
				})
			}, 1000)
		}
	}
</script>

<style lang="scss">
	.goodList {
		background-color: #eee;
	}

	.isOver {
		width: 100%;
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 28rpx;
	}
</style>
