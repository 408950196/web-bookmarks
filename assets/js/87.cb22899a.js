(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{325:function(e,r,t){"use strict";t.r(r);var s=t(0),i=Object(s.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"content"},[e._m(0),e._v(" "),t("p",[e._v("在这个网站："),t("a",{attrs:{href:"https://lavas.baidu.com/pwa/offline-and-cache-loading/service-worker/service-worker-introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://lavas.baidu.com/pwa/offline-and-cache-loading/service-worker/service-worker-introduction"),t("OutboundLink")],1),e._v("的 Service Worker 简介中，下面这一段真的写的挺好的。")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),t("p",[e._v("所以在 Service Worker 的 js 逻辑中全局变量需要慎用。")]),e._v(" "),e._m(3),e._v(" "),t("p",[e._v("我们还可以通过 chrome://serviceworker-internals 来查看服务工作线程详情。 如果只是想了解服务工作线程的生命周期，这仍很有用，但是日后其很有可能被 chrome://inspect/#service-workers 完全取代。")])])},[function(){var e=this.$createElement,r=this._self._c||e;return r("h1",{attrs:{id:"service-worker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#service-worker","aria-hidden":"true"}},[this._v("#")]),this._v(" Service Worker")])},function(){var e=this.$createElement,r=this._self._c||e;return r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),r("p",[this._v("【前端工程师有很多性能优化的手段，包括 CDN、CSS Sprite、文件的合并压缩、异步加载、资源缓存等等。其实我们绝大部分情况是在干一件事情，那就是尽量降低一个页面的网络请求成本从而缩短页面加载资源的时间并降低用户可感知的延时。当然减少用户可感知的延时也不仅仅是在网络请求成本层面，还有浏览器渲染效率，代码质量等等。】")])])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[this._v("关于 register 方法的 scope 参数，需要说明一下：Service Worker 线程将接收 scope 指定网域目录上所有事项的 fetch 事件。"),r("br"),this._v("\n（接受scope上所有事项的fetch事件？不错哦，可以验证一下）")])},function(){var e=this.$createElement,r=this._self._c||e;return r("p",[this._v("如果你很困惑，我的 Service Worker 到底注册成功没有呢？注册成功是什么样子呢？"),r("br"),this._v("\n可以在 PC 上打开我们的好伙伴 chrome 浏览器, 输入 chrome://inspect/#service-workers")])}],!1,null,null,null);i.options.__file="sw.md";r.default=i.exports}}]);