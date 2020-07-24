<template>
	<view class="pics">
		<!-- 左侧可滚动区域 -->
		<scroll-view scroll-y="true" class="left">
			<view :class="artive===index?'arctive':''" v-for="(item,index) in picsDate" :key="item.id" @click="leftClickHandle(index,item.id)">
				{{item.title}}
			</view>
		</scroll-view>
		<!-- 右侧滚动区域 -->
		<scroll-view scroll-y="true" class="right">
			<view class="rightItem" v-for="(item,index) in selectDate" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url" mode=""></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="this.selectDate.length===0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				picsDate: [],
				artive: 0,
				selectDate: []
			}
		},
		methods: {
			async getPicsCate() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				this.picsDate = res.data.message
				// 根据一级分类获取二级分类数据
				this.leftClickHandle(0,this.picsDate[0].id)
			},
			async leftClickHandle(index, id) {
				this.artive = index
				// 获取右侧商品数据
				const res = await this.$myRequest({
					url: '/api/getimages/' + id
				})
				console.log(res)
				this.selectDate = res.data.message
			},
			previewImg(current){
				// 获取点击的urls
				const urls = this.selectDate.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					// 当前点击的url 必填
					current,
					// 预览图片链接地址
					urls
				})
			}
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.pics {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			margin-right: 10rpx;
			view {
				height: 120rpx;
				line-height: 120rpx;
				color: #333333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}

			.arctive {
				background-color: $shop-color;
				color: #FFFFFF;
			}
		}
		.right{
			height: 100%;
			width: 520rpx;
			margin: 10 auto;
			.rightItem{
				image{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5px;
				}
				text{
					font-size: 30rpx;
					line-height: 30rpx;
				}
			}
		}
	}
</style>
