function TechsController(e,t){function n(){e.get("https://www.newscombinator.com/api/search?q=(_val_%3A%22recip(ms(NOW%2FHOUR%2Ccreated_at)%2C3.16e-11%2C2700%2C1)%22^15%20)%20%2B("+encodeURI(o.keywords)+")%20%2Blanguage%3Aen%20&rows=10").then(function(e){for(var i=0;i<e.data.response.docs.length;i++)if(r.indexOf(e.data.response.docs[i].id)===-1){r.push(e.data.response.docs[i].id),o.news.response.docs.unshift(e.data.response.docs[i]);var a=[];if(a.push(e.data.response.docs[i]),o.adapterContainer.adapter.isBOF()&&o.adapterContainer.adapter.prepend(a),"granted"===Notification.permission){new Notification(a.length+" items in "+o.topic)}}t(n,2e4)})}var o=this,r=[];o.news={response:{docs:[]}},e.get("https://www.newscombinator.com/api/search?q=(_val_%3A%22recip(ms(NOW%2FHOUR%2Ccreated_at)%2C3.16e-11%2C2700%2C1)%22^15%20)%20%2B("+encodeURI(o.keywords)+")%20%2Blanguage%3Aen%20&rows=25").then(function(e){o.news=e.data;for(var i=0;i<e.data.response.docs.length;i++)r.push(e.data.response.docs[i].id);o.adapterContainer.adapter.reload(),t(n,2500)}),o.newselements={},o.newselements.get=function(e,t,n){var r,i,a=[];for(r=e;r<e+t;r++)r<0||r>=o.news.response.docs.length||(i=o.news.response.docs[r],a.push(i));n(a)},o.adapterContainer={adapter:{remain:!0}}}function routesConfig(e,t,n){n.html5Mode(!0).hashPrefix("!"),t.otherwise("/"),e.state("app",{url:"/",component:"app"})}TechsController.$inject=["$http","$timeout"],routesConfig.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],angular.module("app",["ui.router","ui.scroll","ui.scroll.jqlite","angularMoment"]).constant("angularMomentConfig",{timezone:"UTC"}),angular.module("app").component("fountainTechs",{templateUrl:"app/techs/techs.html",controller:TechsController,bindings:{topic:"<",keywords:"<"}}),angular.module("app").component("fountainTech",{templateUrl:"app/techs/tech.html",bindings:{tech:"<"}}),angular.module("app").component("fountainTitle",{templateUrl:"app/title.html"}),angular.module("app").component("app",{templateUrl:"app/main.html",controller:function(){"denied"!==Notification.permission&&"granted"!==Notification.permission&&Notification.requestPermission(function(e){if("granted"===e){new Notification("You will see a notification if new news arrives!")}})}}),angular.module("app").component("fountainHeader",{templateUrl:"app/header.html"}),angular.module("app").component("fountainFooter",{templateUrl:"app/footer.html"}),/*!
 * angular-ui-scroll
 * https://github.com/angular-ui/ui-scroll.git
 * Version: 1.5.1 -- 2016-06-27T18:18:39.277Z
 * License: MIT
 */
function(){"use strict";var e=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(o=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(l){r=!0,i=l}finally{try{!o&&s["return"]&&s["return"]()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();angular.module("ui.scroll.jqlite",["ui.scroll"]).service("jqLiteExtras",["$log","$window",function(t,n){return{registerFor:function(t){function o(t,n,o){var r=t[0],i=e({top:["scrollTop","pageYOffset","scrollLeft"],left:["scrollLeft","pageXOffset","scrollTop"]}[n],3),a=i[0],s=i[1],l=i[2];return c(r)?angular.isDefined(o)?r.scrollTo(t[l].call(t),o):s in r?r[s]:r.document.documentElement[a]:(angular.isDefined(o)&&(r[a]=o),r[a])}function r(t,n){var o=void 0,r=void 0,i=void 0,s=void 0,d=void 0,u=void 0,p=void 0,f=void 0,h=void 0,m=void 0,g=void 0,v=void 0;if(c(t))return o=document.documentElement[{height:"clientHeight",width:"clientWidth"}[n]],{base:o,padding:0,border:0,margin:0};var w=e({width:[t.offsetWidth,"Left","Right"],height:[t.offsetHeight,"Top","Bottom"]}[n],3);return o=w[0],p=w[1],f=w[2],u=l(t),g=a(t,u["padding"+p])||0,v=a(t,u["padding"+f])||0,r=a(t,u["border"+p+"Width"])||0,i=a(t,u["border"+f+"Width"])||0,s=u["margin"+p],d=u["margin"+f],h=a(t,s)||0,m=a(t,d)||0,{base:o,padding:g+v,border:r+i,margin:h+m}}function i(e,t,n){var o=void 0,i=void 0,a=r(e,t);return a.base>0?{base:a.base-a.padding-a.border,outer:a.base,outerfull:a.base+a.margin}[n]:(o=l(e),i=o[t],(i<0||null===i)&&(i=e.style[t]||0),i=parseFloat(i)||0,{base:i-a.padding-a.border,outer:i,outerfull:i+a.padding+a.border+a.margin}[n])}var a,s,l,c;return s=angular.element.prototype.css,t.prototype.css=function(e,t){var n=this,o=n[0];if(o&&3!==o.nodeType&&8!==o.nodeType&&o.style)return s.call(n,e,t)},c=function(e){return e&&e.document&&e.location&&e.alert&&e.setInterval},n.getComputedStyle?(l=function(e){return n.getComputedStyle(e,null)},a=function(e,t){return parseFloat(t)}):(l=function(e){return e.currentStyle},a=function(e,t){var n=void 0,o=void 0,r=void 0,i=void 0,a=void 0,s=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,l=new RegExp("^("+s+")(?!px)[a-z%]+$","i");return l.test(t)?(a=e.style,n=a.left,r=e.runtimeStyle,i=r&&r.left,r&&(r.left=a.left),a.left=t,o=a.pixelLeft,a.left=n,i&&(r.left=i),o):parseFloat(t)}),angular.forEach({before:function(e){var t,n,o,r,i,a,s;if(s=this,n=s[0],i=s.parent(),t=i.contents(),t[0]===n)return i.prepend(e);for(o=r=1,a=t.length-1;1<=a?r<=a:r>=a;o=1<=a?++r:--r)if(t[o]===n)return void angular.element(t[o-1]).after(e);throw new Error("invalid DOM structure "+n.outerHTML)},height:function(e){var t;return t=this,angular.isDefined(e)?(angular.isNumber(e)&&(e+="px"),s.call(t,"height",e)):i(this[0],"height","base")},outerHeight:function(e){return i(this[0],"height",e?"outerfull":"outer")},outerWidth:function(e){return i(this[0],"width",e?"outerfull":"outer")},offset:function(e){var t=void 0,n=void 0,o=this,r={top:0,left:0},i=o[0],a=i&&i.ownerDocument;if(arguments.length){if(void 0===e)return o;throw new Error("offset setter method is not implemented")}if(a)return t=a.documentElement,null!=i.getBoundingClientRect&&(r=i.getBoundingClientRect()),n=a.defaultView||a.parentWindow,{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}},scrollTop:function(e){return o(this,"top",e)},scrollLeft:function(e){return o(this,"left",e)}},function(e,n){if(!t.prototype[n])return t.prototype[n]=e})}}}]).run(["$log","$window","jqLiteExtras",function(e,t,n){if(!t.jQuery)return n.registerFor(angular.element)}])}(),angular.module("app").run(["$templateCache",function(e){e.put("app/footer.html",'<footer class="footer">\n  Build with ♥ by the&nbsp;\n  <a href="http://www.newscombinator.com">\n    Newscombinator\n  </a>\n</footer>\n'),e.put("app/header.html",'<header class="header">\n  <p class="header-title">\n    <a href="/#/" target="_blank">\n      Crypto FOMO Buster\n    </a>\n  </p>\n  <p class="header-date">\n    Control your FOMO, trade fundamentals with research!\n  </p>\n</header>\n'),e.put("app/main.html",'<fountain-header></fountain-header>\n<div class="container-fluid">\n    <div class="row">\n        <div class="col-lg-12 text-center">\n            <br>This tool aggregates news about different crypto-currencies.<br>\n            <b>You don\'t have to refresh.</b> It\'ll auto-prepend news.<br>\n            You get desktop notifications if there is something new. Happy trading!\n        </div>\n    </div>\n    <div class="row">\n        <div class="col-lg-4">\n            <fountain-techs topic="\'Bitcoin\'" keywords="\'Bitcoin BTC\'"></fountain-techs>\n        </div>\n        <div class="col-lg-4">\n            <fountain-techs topic="\'Ethereum\'" keywords="\'Ethereum ETH\'"></fountain-techs>\n        </div>\n        <div class="col-lg-4">\n            <fountain-techs topic="\'Ethereum Classic\'" keywords="\'Ethereum +Classic ETC\'"></fountain-techs>\n        </div>\n        <div class="col-lg-4">\n            <fountain-techs topic="\'Monero\'" keywords="\'Monero XMR\'"></fountain-techs>\n        </div>\n        <div class="col-lg-4">\n            <fountain-techs topic="\'Shadow\'" keywords="\'Shadowcoin SDC\'"></fountain-techs>\n        </div>\n        <div class="col-lg-4">\n            <fountain-techs topic="\'Ripple\'" keywords="\'Ripple XRP\'"></fountain-techs>\n        </div>\n        <div class="col-lg-4">\n            <fountain-techs topic="\'Factom\'" keywords="\'Factom FCT\'"></fountain-techs>\n        </div>\n        <div class="col-lg-4">\n            <fountain-techs topic="\'Stellar\'" keywords="\'Stellar STR\'"></fountain-techs>\n        </div>\n        <div class="col-lg-4">\n            <fountain-techs topic="\'STEEM\'" keywords="\'STEEM Steemit\'"></fountain-techs>\n        </div>\n        <div class="col-lg-4">\n            <fountain-techs topic="\'Litecoin\'" keywords="\'Litecoin LTC\'"></fountain-techs>\n        </div>\n    </div>\n</div>\n<fountain-footer></fountain-footer>\n'),e.put("app/title.html",'<div class="title">\n  <h1 class="title-h1">Hold your emotions!</h1>\n</div>\n'),e.put("app/techs/techs.html",'<h2>\n    {{$ctrl.topic}}\n</h2>\n<div ui-scroll-viewport style="height: 350px">\n    <div ui-scroll="news in $ctrl.newselements" adapter="$ctrl.adapterContainer.adapter">\n        <a class="small" href="{{news.url}}">{{news.title_link}}</a> <span class="small" am-time-ago="news.created_at"></span>\n    </div>\n</div>\n')}]),angular.module("app").config(routesConfig);
//# sourceMappingURL=../maps/scripts/app-91b333a992.js.map
