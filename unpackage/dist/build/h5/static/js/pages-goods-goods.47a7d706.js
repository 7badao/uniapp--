(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-goods"],{"0f10":function(t,n,e){var r=e("bb0b");"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=e("4f06").default;o("4adee0b9",r,!0,{sourceMap:!1,shadowMode:!1})},"319d":function(t,n,e){"use strict";var r={goodList:e("6c0f").default},o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"goodList"},[e("good-list",{attrs:{goods:t.goods},on:{goodsItemClick:function(n){arguments[0]=n=t.$handleEvent(n),t.goGoodsDetail.apply(void 0,arguments)}}}),t.flag?e("v-uni-view",{staticClass:"isOver"},[t._v("...我是有底线的...")]):t._e()],1)},a=[];e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return r}))},8602:function(t,n,e){"use strict";var r=e("ee27");e("99af"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=r(e("d0ff"));e("96cf");var a=r(e("c964")),i=r(e("6c0f")),s={data:function(){return{pageindex:1,goods:[],flag:!1}},components:{"good-list":i.default},methods:{getGoodsList:function(t){var n=this;return(0,a.default)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.$myRequest({url:"/api/getgoods?pageindex="+n.pageindex});case 2:r=e.sent,console.log(r),n.goods=[].concat((0,o.default)(n.goods),(0,o.default)(r.data.message)),t&&t();case 6:case"end":return e.stop()}}),e)})))()},goGoodsDetail:function(t){uni.navigateTo({url:"../good-detail/good-detail?id="+t})}},onLoad:function(){this.getGoodsList()},onReachBottom:function(){this.goods.length<10*this.pageindex||(this.flag=!0,this.pageindex++,this.getGoodsList())},onPullDownRefresh:function(){var t=this;this.pageindex=1,this.goods=[],this.flag=!1,setTimeout((function(){t.getGoodsList((function(){uni.stopPullDownRefresh()}))}),1e3)}};n.default=s},ae32:function(t,n,e){"use strict";e.r(n);var r=e("8602"),o=e.n(r);for(var a in r)"default"!==a&&function(t){e.d(n,t,(function(){return r[t]}))}(a);n["default"]=o.a},ae7b:function(t,n,e){"use strict";var r=e("0f10"),o=e.n(r);o.a},bb0b:function(t,n,e){var r=e("24fb");n=r(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.goodList[data-v-3a04539c]{background-color:#eee}.isOver[data-v-3a04539c]{width:100%;height:50px;line-height:50px;text-align:center;font-size:%?28?%}',""]),t.exports=n},d0ff:function(t,n,e){"use strict";function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function o(t){if(Array.isArray(t))return r(t)}e.r(n);e("a4d3"),e("e01a"),e("d28b"),e("a630"),e("e260"),e("d3b7"),e("3ca3"),e("ddb0");function a(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}e("fb6a"),e("25f0");function i(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return o(t)||a(t)||i(t)||s()}e.d(n,"default",(function(){return u}))},e8f1:function(t,n,e){"use strict";e.r(n);var r=e("319d"),o=e("ae32");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("ae7b");var i,s=e("f0c5"),u=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,"3a04539c",null,!1,r["a"],i);n["default"]=u.exports}}]);