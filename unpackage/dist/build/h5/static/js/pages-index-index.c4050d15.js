(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"08e3":function(t,e,n){"use strict";var i={goodList:n("6c0f").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"home"},[n("v-uni-swiper",{attrs:{"indicator-dots":!0,circular:!0,autoplay:!0,interval:3e3,duration:1e3}},t._l(t.swipers,(function(t,e){return n("v-uni-swiper-item",{key:t.id},[n("v-uni-image",{attrs:{src:t.img}})],1)})),1),n("v-uni-view",{staticClass:"nav"},t._l(t.navs,(function(e,i){return n("v-uni-view",{key:i,staticClass:"nav_item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.navItemClick(e.path)}}},[n("v-uni-view",{class:e.icon}),n("v-uni-text",[t._v(t._s(e.title))])],1)})),1),n("v-uni-view",{staticClass:"hot_shoop"},[n("v-uni-view",{staticClass:"hot_shoopTxt"},[t._v("推荐商品")]),n("good-list",{attrs:{goods:t.goods},on:{goodsItemClick:function(e){arguments[0]=e=t.$handleEvent(e),t.goGoodsDetail.apply(void 0,arguments)}}})],1)],1)},o=[];n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}))},3317:function(t,e,n){"use strict";var i=n("37f6"),a=n.n(i);a.a},"37f6":function(t,e,n){var i=n("7d8b");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("65ef6de9",i,!0,{sourceMap:!1,shadowMode:!1})},4488:function(t,e,n){"use strict";n.r(e);var i=n("08e3"),a=n("f65a");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("3317");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"5e7aad2c",null,!1,i["a"],r);e["default"]=c.exports},"7d8b":function(t,e,n){var i=n("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.home uni-swiper[data-v-5e7aad2c]{width:%?750?%;height:%?380?%}.home uni-swiper uni-image[data-v-5e7aad2c]{width:100%;height:100%}.home .nav[data-v-5e7aad2c]{display:-webkit-box;display:-webkit-flex;display:flex}.home .nav .nav_item[data-v-5e7aad2c]{width:25%;text-align:center;font-size:%?30?%}.home .nav .nav_item uni-view[data-v-5e7aad2c]{width:%?120?%;height:%?120?%;background-color:#b50e03;border-radius:%?60?%;line-height:%?120?%;margin:10px auto;color:#fff;font-size:%?50?%}.home .nav .nav_item uni-view .icon-tupian[data-v-5e7aad2c]{font-size:%?45?%}.home .hot_shoop[data-v-5e7aad2c]{background-color:#eee;overflow:hidden;margin-top:10px}.home .hot_shoop .hot_shoopTxt[data-v-5e7aad2c]{height:50px;line-height:50px;color:#b50e03;text-align:center;letter-spacing:20px;background-color:#fff;margin:%?7?% 0}',""]),t.exports=e},dce8:function(t,e,n){"use strict";var i=n("ee27");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("fc11"));n("96cf");var o=i(n("c964")),r=i(n("6c0f")),s=(0,a.default)({data:function(){return{swipers:[],goods:[],navs:[{icon:"iconfont icon-ziyuan",title:"万物超市",path:"/pages/goods/goods"},{icon:"iconfont icon-guanyuwomen",title:"联系我们",path:"/pages/contact/contact"},{icon:"iconfont icon-tupian",title:"社区图片",path:"/pages/pics/pics"},{icon:"iconfont icon-shipin",title:"超市风采",path:"/pages/views/views"}]}},onLoad:function(){},components:{"good-list":r.default},methods:{getSwiper:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/getlunbo"});case 2:n=e.sent,t.swipers=n.data.message;case 4:case"end":return e.stop()}}),e)})))()},getHotShoop:function(){var t=this;return(0,o.default)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$myRequest({url:"/api/getgoods?pageindex=1"});case 2:n=e.sent,t.goods=n.data.message;case 4:case"end":return e.stop()}}),e)})))()},navItemClick:function(t){uni.navigateTo({url:t})},goGoodsDetail:function(t){uni.navigateTo({url:"../good-detail/good-detail?id="+t})}}},"onLoad",(function(){this.getSwiper(),this.getHotShoop()}));e.default=s},f65a:function(t,e,n){"use strict";n.r(e);var i=n("dce8"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a}}]);