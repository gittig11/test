!function(t){function e(e){for(var r,i,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);for(h&&h(e);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(r=!1)}r&&(a.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},i={app:0},o={app:0},a=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[];i[t]?e.push(i[t]):0!==i[t]&&{manifest:1}[t]&&e.push(i[t]=new Promise((function(e,n){for(var r="css/"+({manifest:"manifest"}[t]||t)+"."+{manifest:"d7657188"}[t]+".css",o=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var u=(h=a[c]).getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(u===r||u===o))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){var h;if((u=(h=l[c]).getAttribute("data-href"))===r||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete i[t],f.parentNode.removeChild(f),n(a)},f.href=o,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){i[t]=0})));var n,r=o[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=a);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=s.p+"js/"+({manifest:"manifest"}[n=t]||n)+"."+{manifest:"12d85d23"}[n]+".js";var l=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(h);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,n[1](l)}o[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw t};var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var h=u;a.push([0,"vendor"]),n()}({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec");n.n(r).a},2877:function(t,e,n){"use strict";function r(t,e,n,r,i,o,a,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),r&&(u.functional=!0),o&&(u._scopeId="data-v-"+o),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):i&&(c=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(t,e){return c.call(e),l(t,e)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:t,options:u}}n.d(e,"a",(function(){return r}))},"2c81":function(t,e,n){t.exports=n.p+"img/404.09c33da9.jpg"},"483d":function(t,e){for(var n="-_",r=36;r--;)n+=r.toString(36);for(r=36;r---10;)n+=r.toString(36).toUpperCase();t.exports=function(t){var e="";for(r=t||21;r--;)e+=n[64*Math.random()|0];return e}},"56d7":function(t,e,n){"use strict";n.r(e),n("b0c0"),n("144a");var r=n("c0bf"),i=n.n(r),o=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("8bbf")),a=n.n(o),s=(n("034f"),n("2877")),c=Object(s.a)({name:"App",components:{},metaInfo:{title:"知乎日报",titleTemplate:"%s | 书友",meta:[{name:"referrer",content:"no-referrer"}]}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",[t.$route.meta.keepAlive?n("router-view"):t._e()],1),t.$route.meta.keepAlive?t._e():n("router-view")],1)}),[],!1,null,null,null).exports,u=n("d9b7"),l=n.n(u),h=n("cebe"),f=n.n(h),p=n("a7fe"),A=n.n(p),d=n("9236"),m=n.n(d);function v(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n("99af"),n("4160"),n("d81d"),n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("159b"),n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");var g=n("483d"),w=n.n(g),b={};function y(t,e){e&&e.constructor.super.util.warn(t,e)}var C={name:"fa-icon",props:{name:{type:String,validator:function(t){return!t||t in b||(y('Invalid prop: prop "name" is referring to an unregistered icon "'.concat(t,'".\n')+"Please make sure you have imported this icon before using it.",this),!1)}},title:String,scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t||"both"===t}},label:String,tabindex:[Number,String]},data:function(){return{id:E("va-"),x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(y('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){var t=this,e={"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-flip-both":"both"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse};return this.classes&&Object.keys(this.classes).forEach((function(n){t.classes[n]&&(e[n]=!0)})),e},icon:function(){return this.name?b[this.name]:null},box:function(){return this.icon?"0 0 ".concat(this.icon.width," ").concat(this.icon.height):"0 0 ".concat(this.width," ").concat(this.height)},ratio:function(){if(!this.icon)return 1;var t=this.icon,e=t.width,n=t.height;return Math.max(e,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,e={};return t=(t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,(function(t,n,r){var i=E("vat-");return e[r]=i,' id="'.concat(i,'"')}))).replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,(function(t,n,r,i){var o=n||i;return o&&e[o]?"#".concat(e[o]):t}))},focusable:function(){var t=this.tabindex;return null!=t&&0<=("string"==typeof t?parseInt(t,10):t)?null:"false"}},mounted:function(){this.updateStack()},updated:function(){this.updateStack()},methods:{updateStack:function(){var t=this;if(this.name||null===this.name||0!==this.$children.length){if(!this.icon){var e=0,n=0;this.$children.forEach((function(r){r.outerScale=t.normalizedScale,e=Math.max(e,r.width),n=Math.max(n,r.height)})),this.childrenWidth=e,this.childrenHeight=n,this.$children.forEach((function(t){t.x=(e-t.width)/2,t.y=(n-t.height)/2}))}}else y('Invalid prop: prop "name" is required.',this)}},render:function(t){if(null===this.name)return t();var e={class:this.klass,style:this.style,attrs:{role:this.$attrs.role||(this.label||this.title?"img":null),"aria-label":this.label||null,"aria-hidden":!(this.label||this.title),tabindex:this.tabindex,x:this.x,y:this.y,width:this.width,height:this.height,viewBox:this.box,focusable:this.focusable},on:this.$listeners},n=this.id;if(this.title&&(e.attrs["aria-labelledby"]=n),this.raw){var r="<g>".concat(this.raw,"</g>");this.title&&(r='<title id="'.concat(n,'">').concat(this.title.replace(/[<>"&]/g,(function(t){return q[t]||t})),"</title>").concat(r)),e.domProps={innerHTML:r}}var i=this.title?[t("title",{attrs:{id:n}},this.title)]:[];return t("svg",e,this.raw?null:i.concat([t("g",this.$slots.default||(this.icon?[].concat(v(this.icon.paths.map((function(e,n){return t("path",{attrs:e,key:"path-".concat(n)})}))),v(this.icon.polygons.map((function(e,n){return t("polygon",{attrs:e,key:"polygon-".concat(n)})})))):[]))]))},register:function(t){for(var e in t){var n=t[e],r=n.paths,i=void 0===r?[]:r,o=n.d,a=n.polygons,s=void 0===a?[]:a,c=n.points;o&&i.push({d:o}),c&&s.push({points:c}),b[e]=S({},n,{paths:i,polygons:s})}},icons:b};function S(t){for(var e=arguments.length,n=new Array(1<e?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return n.forEach((function(e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})),t}function E(t){return(0<arguments.length&&void 0!==t?t:"")+w()(7)}var q={"<":"&lt;",">":"&gt;",'"':"&quot;","&":"&amp;"},x=C,j=(n("bb5a"),Object(s.a)(x,void 0,void 0,!1,null,null,null).exports);j.register({"user-circle":{width:496,height:512,paths:[{d:"M248 8c137 0 248 111 248 248s-111 248-248 248-248-111-248-248 111-248 248-248zM248 104c-48.6 0-88 39.4-88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zM248 448c58.7 0 111.3-26.6 146.5-68.2-18.8-35.4-55.6-59.8-98.5-59.8-2.4 0-4.8 0.4-7.1 1.1-12.9 4.2-26.6 6.9-40.9 6.9s-27.9-2.7-40.9-6.9c-2.3-0.7-4.7-1.1-7.1-1.1-42.9 0-79.7 24.4-98.5 59.8 35.2 41.6 87.8 68.2 146.5 68.2z"}]}}),j.register({share:{width:512,height:512,paths:[{d:"M503.7 189.8c11.1 9.6 11.1 26.8 0 36.3l-176 152c-15.4 13.3-39.7 2.5-39.7-18.2v-87.9c-155.1 2.2-221.9 40.7-176.6 185.7 5 16.1-14.4 28.6-28.1 18.6-43.8-31.8-83.3-92.7-83.3-154.1 0-152.2 127.4-184.4 288-186.3v-80.1c0-20.7 24.3-31.5 39.7-18.2z"}]}}),j.register({"chevron-left":{width:320,height:512,paths:[{d:"M34.5 239l194.4-194.3c9.4-9.4 24.6-9.4 33.9 0l22.7 22.7c9.4 9.4 9.4 24.5 0 33.9l-154 154.7 154 154.8c9.3 9.4 9.3 24.5 0 33.9l-22.7 22.7c-9.4 9.4-24.6 9.4-33.9 0l-194.3-194.4c-9.4-9.4-9.4-24.6 0-33.9z"}]}});var L=n("6389"),K=n.n(L);window.VueRouter||a.a.use(K.a);var I=new K.a({routes:[{path:"/",name:"Home",component:function(t){return Promise.all([n.e("vendor"),n.e("manifest")]).then(function(){var e=[n("57da")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{keepAlive:!0}},{path:"/Swiper",name:"Swiper",component:function(t){return n.e("manifest").then(function(){var e=[n("902e")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{keepAlive:!0}},{path:"/news/:id",name:"news",component:function(t){return Promise.all([n.e("vendor"),n.e("manifest")]).then(function(){var e=[n("93d8")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{keepAlive:!1}}]}),O=n("58ca"),B=n("d867"),k=n.n(B);a.a.use(l.a),a.a.use(A.a,f.a),a.a.component(i.a.name,i.a),a.a.use(m.a,{preLoad:1.3,error:n("2c81"),loading:n("cf1c"),attempt:1}),a.a.component("v-icon",j),a.a.use(O.a,{}),window.VueScroller||a.a.use(k.a),a.a.config.productionTip=!1,new a.a({router:I,data:{baseURL:"https://cors-anywhere.herokuapp.com/http://news-at.zhihu.com"},render:function(t){return t(c)}}).$mount("#app")},6389:function(t,e){t.exports=VueRouter},"85ec":function(t,e,n){},"8bbf":function(t,e){t.exports=Vue},9236:function(t,e){t.exports=VueLazyload},bb5a:function(t,e,n){"use strict";var r=n("d284");n.n(r).a},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},cebe:function(t,e){t.exports=axios},cf1c:function(t,e){t.exports="data:image/gif;base64,R0lGODlhuQC5APQAAP///wAAACEhIQcHB6enpw8PD/j4+KioqDc3N/r6+m5ubgsLC0ZGRnNzc9TU1CcnJ9/f37m5ue7u7oKCgigoKHJycsbGxoaGhjw8PAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQACgD/ACwAAAAAuQC5AAAC/4SPqcvtD6OctNqLs968+w+G4kiW5omm6sq27gvH8kzX9o3n+s73/g8MCofEovGITCqXzKbzCY1Kp9Sq9YrNarfcrvcLDovH5LL5jE6r1+y2+w2Py+f0uv2Oz+v3fFHgDxgYkDAQMFB4aFjYlyLomOAoyIgSGQhZ+Td5gpmJwDmoWfJ5iRkqyklaaUoy6om66vd60AoLQmtwW9uRm6u7wSvrywFcKrwbDNBrfEGsmiAAHS0tsLzQHKmgvHz9mIpd7d09i5xMXs0tGZ4OPl7c7uzqzl4uTw///j1vn49Lrm2MzpI6gfoCAspmbhuyXv+EGewU7x67h6Ai8pu40F9CgP8Z6+0TN48iQo/nOkr8uC6kyYsoCaqsx3Cjw5Ug+5FUCFPjTY45PTb0JXLgQX0th+KrWRTiS4kxd87sefKnrqAWkZaEylJqLapHU2LEilQrLK42T15lqtMsTrQ+ZQKl6TVpxaUXm6rlyTaq26lwXZZlebZuWsBrBbd1+hZsXLGryMol+rjq4r1b+xrt6hecY8amNlMea1npX6uFa9oljNewXsR8FWfmHMoz68quL4+OG9j0YNKpdR+++zRv1s+NQ8+FHMExcgfKlzNo7nykcN7RJfuFDRl69e3cu3v/Dj68+PHky5s/jz69+vXs27t/Dz++/Pn069u/jz+//v38+/sw/w9ggAIOSGCBBh6IYIIKLshggw4+CGGEEk5IYYUWXohhhhpuyGGHHn4IYogiwlEAACH5BAEKAAIALEsAJQAsAE0AAAOIKLrcUjDK4qq9K+jNA65AKI5A42kCin4O6bKw5ZJxzcyjreOibnYdXsjHAHYIyKSSQMwYN03YExr9TFfVy9WT1V673inYsh1Xyua0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWMWhsmWubaltCJVGfQm6gfp0sCQAh+QQBCgAAACxLACUALABNAAAEjhDISSswOGtjkf8gYo3TZlpBqq4BSZobyrLuCGvyrNbWneW6Fm/oCu6IyKRyOfRhmEknB0qUUqvOazOrrVm7ri/Yxh33ymaKOD05uN/wA3tOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnTxrc6BsommkZqaedEYpSqKrQkiuqxEAIfkEAQoAAAAsSwAlACwATQAABHIQyEmrvTXpzRP+oKWMZKmEaKqubGt1sLvCnazSnJ3im47yGl8I6BF+iMYjMIlBMl/Lp3RKrVpn0apTm6Vur+CweEwum8/otHrNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhEo8V1+FfIlSjE+OTJBJkoo7QBEAIfkEAQoAAQAsSwAmACwASwAABHwwyEmrvRXozQH+oNWNYQmOnamK6La+UuvCq6zRtY2rtreXvV9pQSwaF8KkcnnSMVmyJ7QlzTirsSs2iM1GuwFu7jthmM9oBnjNbrvf8Lh8Tq/b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY6PfGJbWlWSlZSQiZZSm0+dTD0RACH5BAEKAAEALEsALwAsAD4AAARjMMhJq70V6M0B/qDVjWEJjp2piui2vlLrwqus0bWNq7a3l71fqUEsGhtCoWPJbDoyuqR0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/C4fE6v2+/4vH7P71OCWoBZgliEVz0RACH5BAEKAAIALEsANwAsADIAAAJIjI8hy+0PXZqxOoCzBjPZL2xih4CWuJnqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qs6SDDKXpGnoFACH5BAEKAAAALEsALAAbAEIAAARaULwn6ZQg681B+GAYdKQmnmV5iim5hm33gjE3f/V2j3m2974b0CMcGo9IoGDJbAqGv6R0Sq1ar9isdsvter/gsHhMLpvP6LR6zW673/A4MGql5+w1fEzf4qciACH5BAEKAAAALEsAJgAsAEwAAAV9YCCOZACcaKqurFq+bSyvbznfck3iPK2LveDpBxT2iCajcslsOp/QaDRCrVojUt8v6yJyU8gvKiwGkMXnb5q7LuMg8Lgc4q7b7/i8fs/v+/+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmXptUpxRnlCgmqFeZaJOp02pTCEAIfkEAQoAAAAsWwAnABwASgAABWugJI6kBJxoqp5B677BKqdwPd81fM/5u8s9128VbA1VxdgRlVwyi04WNEqtWq/Y1WTL7U6ozWjYOV6Wj+eses1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiH9pP4s7jYOPPFNkk2aVaJdDIQAh+QQBCgACACxLACUALABNAAAFkKAgjmQpBGiqBmZLAnAsA+Vqu/is17aKu7rZb0gMyohIoBGWbL6WNKeTQq1aKdJSZcvtVrLNng+MFKfIZTMLPVSv2Tg3/Cefu+p2Ez5P2vP/gIGCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqquLfn+ufLB5blBRgrWEuIO6I7I4IQAh+QQBCgACACxLACUALABNAAAFlKAgjmQpAGiqAmbrvuMqm0Ft3wFsyiuN47qSZUgsWnw/W3DpSt6YUJJTGY1OazxVtXQNZFNb6BcVZo5Z5eA5rR6zdev3Ky5v0eulO3506fv/F3uCg4SFhoeIiYqLjI2Oj5CRkpOUlZaXmJmam5ydnp+goaKjpKWmp6ipqqusrYJ6r26GsHu0eLagXYe6YrJSV1GwXSEAIfkEAQoAAQAsSwAoABsASAAABWNgII5kGQBoqgJmO66w68Kr3NKqbeKpXvIoHwnIEoqIxiMwGcA4n1AMc0qtWqnIZNa4FXZ9jrB47Liaz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEdF86h4WKiTKMM0taQCEAOw=="},d284:function(t,e,n){},d867:function(t,e){t.exports=VueScroller},d9b7:function(t,e){t.exports=VueAwesomeSwiper}});