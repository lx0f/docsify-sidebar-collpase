(()=>{"use strict";var e={99:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(81),r=t.n(n),i=t(645),o=t.n(i)()(r());o.push([e.id,':root{--sidebar-nav-pagelink-background: no-repeat 2px calc(50% - 2.5px) / 6px 5px linear-gradient(45deg, transparent 2.75px, var(--mono-tint1) 2.75px 4.25px, transparent 4px), no-repeat 2px calc(50% + 2.5px) / 6px 5px linear-gradient(135deg, transparent 2.75px, var(--mono-tint1) 2.75px 4.25px, transparent 4px);--sidebar-nav-pagelink-background--active: no-repeat 0px center / 5px 6px linear-gradient(225deg, transparent 2.75px, var(--theme-color) 2.75px 4.25px, transparent 4.25px), no-repeat 5px center / 5px 6px linear-gradient(135deg, transparent 2.75px, var(--theme-color) 2.75px 4.25px, transparent 4.25px);--sidebar-nav-pagelink-background--collapse: no-repeat 2px calc(50% - 2.5px) / 6px 5px linear-gradient(45deg, transparent 2.75px, var(--theme-color) 2.75px 4.25px, transparent 4px), no-repeat 2px calc(50% + 2.5px) / 6px 5px linear-gradient(135deg, transparent 2.75px, var(--theme-color) 2.75px 4.25px, transparent 4px);--sidebar-nav-pagelink-background--loaded: no-repeat 0px center / 5px 6px linear-gradient(225deg, transparent 2.75px, var(--mono-tint1) 2.75px 4.25px, transparent 4.25px), no-repeat 5px center / 5px 6px linear-gradient(135deg, transparent 2.75px, var(--mono-tint1) 2.75px 4.25px, transparent 4.25px);--sidebar-nav-pagelink-padding: 0.25em 0 0.25em 20px}.sidebar-nav li>a[href^="/"]:not([href*="?id="]):only-child,.sidebar-nav li>a[href^="#/"]:not([href*="?id="]):only-child{background:none}.sidebar>.sidebar-nav>ul li p{margin-top:0;margin-bottom:0}.sidebar>.sidebar-nav>ul li:has(p){cursor:pointer}.sidebar>.sidebar-nav>ul ul{display:none}.sidebar>.sidebar-nav>ul li:has(>ul)>a{background:var(--sidebar-nav-pagelink-background)}.sidebar>.sidebar-nav>ul li:has(>ul)>p{background:var(--sidebar-nav-pagelink-background);padding:var(--sidebar-nav-pagelink-padding)}.sidebar>.sidebar-nav>ul li:has(>ul).loaded>p,.sidebar>.sidebar-nav>ul li:has(>ul).loaded>a{background:var(--sidebar-nav-pagelink-background--loaded) !important}.sidebar>.sidebar-nav>ul li:has(>ul).loaded>ul{display:block}.sidebar>.sidebar-nav>ul li:has(>ul):not(.active):not(.loaded)>a{background:var(--sidebar-nav-pagelink-background) !important}.sidebar>.sidebar-nav>ul li:has(>ul).active:not(.collapse)>a{background:var(--sidebar-nav-pagelink-background--active)}.sidebar>.sidebar-nav>ul li:has(>ul).active:not(.collapse)>ul{display:block}\n',""]);const s=o},645:e=>{e.exports=function(e){var a=[];return a.toString=function(){return this.map((function(a){var t="",n=void 0!==a[5];return a[4]&&(t+="@supports (".concat(a[4],") {")),a[2]&&(t+="@media ".concat(a[2]," {")),n&&(t+="@layer".concat(a[5].length>0?" ".concat(a[5]):""," {")),t+=e(a),n&&(t+="}"),a[2]&&(t+="}"),a[4]&&(t+="}"),t})).join("")},a.i=function(e,t,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(o[l]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);n&&o[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),a.push(p))}},a}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var a=[];function t(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function n(e,n){for(var i={},o=[],s=0;s<e.length;s++){var l=e[s],c=n.base?l[0]+n.base:l[0],p=i[c]||0,d="".concat(c," ").concat(p);i[c]=p+1;var u=t(d),v={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)a[u].references++,a[u].updater(v);else{var f=r(v,n);n.byIndex=s,a.splice(s,0,{identifier:d,updater:f,references:1})}o.push(d)}return o}function r(e,a){var t=a.domAPI(a);return t.update(e),function(a){if(a){if(a.css===e.css&&a.media===e.media&&a.sourceMap===e.sourceMap&&a.supports===e.supports&&a.layer===e.layer)return;t.update(e=a)}else t.remove()}}e.exports=function(e,r){var i=n(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var s=t(i[o]);a[s].references--}for(var l=n(e,r),c=0;c<i.length;c++){var p=t(i[c]);0===a[p].references&&(a[p].updater(),a.splice(p,1))}i=l}}},569:e=>{var a={};e.exports=function(e,t){var n=function(e){if(void 0===a[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}a[e]=t}return a[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{e.exports=function(e){var a=document.createElement("style");return e.setAttributes(a,e.attributes),e.insert(a,e.options),a}},565:(e,a,t)=>{e.exports=function(e){var a=t.nc;a&&e.setAttribute("nonce",a)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var a=e.insertStyleElement(e);return{update:function(t){!function(e,a,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,r&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),a.styleTagTransform(n,e,a.options)}(a,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(a)}}}},589:e=>{e.exports=function(e,a){if(a.styleSheet)a.styleSheet.cssText=e;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(e))}}}},a={};function t(n){var r=a[n];if(void 0!==r)return r.exports;var i=a[n]={id:n,exports:{}};return e[n](i,i.exports,t),i.exports}t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.nc=void 0,(()=>{var e=t(379),a=t.n(e),n=t(795),r=t.n(n),i=t(569),o=t.n(i),s=t(565),l=t.n(s),c=t(216),p=t.n(c),d=t(589),u=t.n(d),v=t(99),f={};function g(e){e.stopPropagation(),e.currentTarget.classList.toggle("collapse")}function h(e){e.stopPropagation(),e.currentTarget.classList.toggle("loaded")}function b(e){const a=e.target;e.clientX-a.getBoundingClientRect().left<=parseInt(getComputedStyle(a).paddingLeft)&&(e.preventDefault(),e.stopPropagation(),a.parentElement.classList.toggle("loaded"))}f.styleTagTransform=u(),f.setAttributes=l(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=p(),a()(v.Z,f),v.Z&&v.Z.locals&&v.Z.locals,window.$docsify.plugins=[].concat((function(e,a){a.config.enableSidebarCollapse&&(a.config.subMaxLevel=0,e.doneEach((function(){!function(e){const a=document.querySelector(".sidebar > .sidebar-nav > ul");a.querySelectorAll("li:has(> p > a)").forEach((e=>{const a=e.firstElementChild,t=e.firstElementChild.firstElementChild,n=a.classList.contains("active");a.remove(),e.prepend(t),n&&e.classList.add("active")})),a.querySelectorAll("li:has(> ul):not(:has(> a, > p))").forEach((e=>{const a=document.createElement("p");if(e.matches("li:has(> strong)")){const t=e.firstElementChild;t.remove(),a.appendChild(t)}else{const t=e.firstChild.textContent;e.firstChild.textContent="",a.textContent=t}e.prepend(a)})),a.querySelectorAll("li:has(p + ul, strong + ul)").forEach((e=>{e.addEventListener("click",h)})),a.querySelectorAll("li:has(> a + ul)").forEach((e=>{const a=e.firstElementChild;e.classList.contains("active")?e.addEventListener("click",g):a.addEventListener("click",b)}));const t=e.route.path,n=a.querySelector(`*:has(> a[href='#${t}'])`);n.classList.add("active"),a.querySelectorAll("li:has(li.active)").forEach((e=>{(e.matches("li:has(> a)")&&!e.classList.contains("active")||e.matches("li:has(> p)"))&&e.classList.toggle("loaded")})),new MutationObserver((e=>{e.forEach((e=>{"attributes"!==e.type||n.classList.contains("active")||n.classList.toggle("active")}))})).observe(n,{attributes:!0,attributeFilter:["class"]})}(a)})))}),window.$docsify.plugins)})()})();