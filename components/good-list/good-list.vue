<template>
	<view class="goods_list">
		<view class="goods_item" v-for="(item,index) in goods" :key="item.id" @click="navigator(item.id)">
			<image :src="item.img_url"></image>
			<view class="price">
				<text class="nowPrice">¥{{item.sell_price}}</text>
				<text>¥{{item.market_price}}</text>
			</view>
			<view class="goods_name">
				{{item.title}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['goods'],
		methods:{
			navigator(id){
				this.$emit('goodsItemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
		padding: 0 15rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	
		.goods_item {
			width: 355rpx;
			background-color: #fff;
			margin: 10rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
	
			image {
				width: 80%;
				height: 150px;
				display: block;
				margin: 0 auto;
			}
	
			.price {
				color: $shop-color;
				font-size: 36rpx;
				margin: 20rpx 0 5rpx 0;
				text:nth-child(2) {
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
					color: #ccc;
				}
			}
	
			.goods_name {
				font-size: 28rpx;
				line-height: 50rpx;
				padding-bottom: 15rpx;
				padding-top: 10rpx;
			}
		}
	}
</style>
