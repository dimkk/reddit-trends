(function(t){function e(e){for(var a,c,o=e[0],i=e[1],u=e[2],l=0,f=[];l<o.length;l++)c=o[l],r[c]&&f.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},s=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/reddit-trends/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var d=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},4678:function(t,e,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=s(t);return n(e)}function s(t){var e=a[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id="4678"},5660:function(t,e,n){"use strict";var a=n("f16c"),r=n.n(a);r.a},7700:function(t,e,n){},8341:function(t,e,n){t.exports=n.p+"img/reddit-icon.b90ba466.svg"},a0d8:function(t,e,n){},ac68:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII="},cd49:function(t,e,n){"use strict";n.r(e);var a,r,s,c=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[t._m(0),n("section",{staticClass:"ph2"},[n("div",{staticClass:"pa2 f5 br2 ba mv2 b--silver moon-gray"},[t._v("Type in a subreddit name and press start")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.startFetch(e)}}},[n("div",{staticClass:"f6 pb1 silver"},[t._v("Subreddit name")]),n("div",{staticClass:"flex"},[n("div",{staticClass:"f4 br2 br--left bg-moon-gray silver pa3 ph2"},[t._v("/r/")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.subreddit,expression:"subreddit"}],staticClass:"w-100 f4 pv3 pl2 outline-0 bn bg-moon-gray",attrs:{type:"text",placeholder:"r/",required:""},domProps:{value:t.subreddit},on:{input:function(e){e.target.composing||(t.subreddit=e.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.sortType,expression:"sortType"}],staticClass:"w3 bg-moon-gray outline-0 bn",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.sortType=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"new"}},[t._v("/new")]),n("option",{attrs:{value:"hot"}},[t._v("/hot")]),n("option",{attrs:{value:"top"}},[t._v("/top")]),n("option",{attrs:{value:"controversial"}},[t._v("/controversial")]),n("option",{attrs:{value:"rising"}},[t._v("/rising  ")])]),n("button",{staticClass:"f5 pa3 outline-0 bn ttu pointer white o-80 glow",class:t.buttonStyleSubmit,attrs:{type:"submit",disabled:t.started}},[t._v("Start")]),n("button",{staticClass:"f5 pa3 outline-0 bn br2 ttu br--right pointer white o-80 glow",class:t.buttonStyleClear,attrs:{type:"button"},on:{click:t.buttonAction}},[t._v(t._s(t.buttonLabel))])]),n("div",{staticClass:"f6 pb1 silver mt2 pb1"},[t._v("Limit of posts")]),n("div",{staticClass:"flex pb2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.maxPosts,expression:"maxPosts"}],staticClass:"w4 f4 pa3 outline-0 br2 bn bg-moon-gray",attrs:{type:"number",placeholder:"Max posts",required:""},domProps:{value:t.maxPosts},on:{input:function(e){e.target.composing||(t.maxPosts=e.target.value)}}}),n("div",{staticClass:"ml2 w-100 pa3 ba b--silver moon-gray br2 flex justify-start"},[n("div",[n("span",{staticClass:"f6 pb1 silver ma2"},[t._v("Total posts")]),n("span",{staticClass:"bg-silver black-70 br1 f5 pv1 ph2"},[t._v(" "+t._s(t.totalCount))])]),n("div",[n("span",{staticClass:"f6 pb1 silver ma2"},[t._v("Oldest post")]),n("span",{staticClass:"bg-silver black-70 br1 f5 pv1 ph2"},[t._v(t._s(t.oldestPost))])])])])]),n("div",{staticClass:"ph2 flex flex-column flex-row-ns"},[n("chart-score-counts"),n("chart-post-count")],1),n("div",{staticClass:"ph2 flex flex-column flex-row-ns"},[n("chart-comment-counts"),n("chart-gild-counts")],1)])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"bg-dark-gray flex items-center justify-between"},[a("div",{staticClass:"ff-m f3 pa3 flex items-center"},[a("img",{staticClass:"logo--icon",attrs:{src:n("8341")}}),a("span",{staticClass:"pl2"},[t._v("Reddit Trends")])]),a("a",{attrs:{href:"https://github.com/butttons/reddit-trends",target:"_blank"}},[a("img",{staticClass:"logo--icon mr3",attrs:{src:n("ac68")}})])])}],u=(n("96cf"),n("3b8d")),d=n("cebc"),l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 w-50-l"},[n("canvas",{attrs:{id:"chartPostCount",width:"600",height:"400"}})])}],b=n("bd86"),h=n("5b20"),p=n.n(h),m=(n("55dd"),n("6c7b"),n("75fc")),j=n("774e"),v=n.n(j),O=function(t){return v()({length:t},function(t,e){return e+1})},g=function(){var t=O(11).map(function(t){return"".concat(t," AM")}),e=O(11).map(function(t){return"".concat(t," PM")});return["12 AM"].concat(Object(m["a"])(t),["12 PM"],Object(m["a"])(e))},T=function(){return v()({length:24}).fill(0)},A={scales:{yAxes:[{ticks:{beginAtZero:!0}}]}},C=function(t){return void 0===t?0:t.length},S=function(t){return void 0===t?0:t.reduce(function(t,e){return t+e},0)},_=function(t){if(void 0===t)return 0;t.sort(function(t,e){return t-e});var e=t.length;return e%2?t[(e-1)/2]:(t[e/2-1]+t[e/2])/2},E=function(t){if(void 0===t)return 0;var e=Math.min.apply(Math,Object(m["a"])(t)),n=Math.max.apply(Math,Object(m["a"])(t));return n-e},w=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(e?1:.2,")")},M=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[[204,0,153],[51,102,204],[0,255,153],[245,124,0]],n=[[155,155,155],[247,228,56],[0,188,248]];return(t?n:e).map(function(t){return{background:w(t,!1),border:w(t)}})},k=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=M(e),a=t.map(function(t,e){return{label:t,data:[],backgroundColor:n[e].background,borderColor:n[e].border,borderWidth:1}});return{labels:g(),datasets:a}},y=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:"line",data:k(t,e),options:A}},R=n("2f62");(function(t){t["ADD_POSTS"]="ADD_POSTS",t["CLEAR_DATA"]="CLEAR_DATA",t["SET_STATUS"]="SET_STATUS"})(a||(a={})),function(t){t["ADD_POSTS"]="addPosts",t["CLEAR_DATA"]="clearData",t["SET_STATUS"]="setStatus"}(r||(r={})),function(t){t["TOTAL_COUNT"]="totalCount",t["KEY_HOUR_GRID"]="keyHourGrid",t["POST_COUNT"]="postCount",t["SCORE_TOTAL"]="scoreTotal",t["SCORE_MEDIAN"]="scoreMedian",t["SCORE_MEAN"]="scoreMean",t["SCORE_RANGE"]="scoreRange",t["GILD_COUNTS"]="gildCounts",t["COMMENT_TOTAL"]="commentTotal",t["COMMENT_MEAN"]="commentMean",t["COMMENT_SCORE_RATIO"]="commentScoreRatio",t["OLDEST_POST"]="oldestPost"}(s||(s={}));var D,N,x,I,G,P=c["a"].extend({name:"chart-post-count",data:function(){return{chart:{}}},computed:Object(d["a"])({},Object(R["c"])("reddit",[s.POST_COUNT])),watch:Object(b["a"])({},s.POST_COUNT,function(t){this.chart.data.datasets[0].data=t,this.chart.update()}),mounted:function(){this.chart=new p.a("chartPostCount",y(["Post count"]))}}),L=P,U=n("2877"),B=Object(U["a"])(L,l,f,!1,null,null,null),z=B.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 w-50-l"},[n("canvas",{attrs:{id:"chartScoreCounts",width:"600",height:"400"}})])}],Q=c["a"].extend({name:"chart-score-counts",data:function(){return{chart:{}}},computed:Object(d["a"])({},Object(R["c"])("reddit",[s.SCORE_TOTAL,s.SCORE_MEAN,s.SCORE_MEDIAN,s.SCORE_RANGE])),watch:(D={},Object(b["a"])(D,s.SCORE_TOTAL,function(t){this.chart.data.datasets[0].data=t,this.chart.update()}),Object(b["a"])(D,s.SCORE_MEAN,function(t){this.chart.data.datasets[1].data=t,this.chart.update()}),Object(b["a"])(D,s.SCORE_MEDIAN,function(t){this.chart.data.datasets[2].data=t,this.chart.update()}),Object(b["a"])(D,s.SCORE_RANGE,function(t){this.chart.data.datasets[3].data=t,this.chart.update()}),D),mounted:function(){this.chart=new p.a("chartScoreCounts",y(["Score total","Score mean","Score median","Score range"]))}}),F=Q,H=Object(U["a"])(F,J,Y,!1,null,null,null),Z=H.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 w-50-l"},[n("canvas",{attrs:{id:"chartGildCounts",width:"600",height:"400"}})])}],K=c["a"].extend({name:"chart-gild-counts",data:function(){return{chart:{}}},computed:Object(d["a"])({},Object(R["c"])("reddit",[s.GILD_COUNTS])),watch:Object(b["a"])({},s.GILD_COUNTS,function(t){this.chart.data.datasets[0].data=t.silver,this.chart.data.datasets[1].data=t.gold,this.chart.data.datasets[2].data=t.platinum,this.chart.update()}),mounted:function(){this.chart=new p.a("chartGildCounts",y(["Silver","Gold","Platinum"],!0))}}),X=K,q=Object(U["a"])(X,W,V,!1,null,null,null),$=q.exports,tt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},et=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-100 w-50-l"},[n("canvas",{attrs:{id:"chartCommentCounts",width:"600",height:"400"}})])}],nt=c["a"].extend({name:"chart-score-counts",data:function(){return{chart:{}}},computed:Object(d["a"])({},Object(R["c"])("reddit",[s.COMMENT_TOTAL,s.COMMENT_MEAN,s.COMMENT_SCORE_RATIO])),watch:(N={},Object(b["a"])(N,s.COMMENT_TOTAL,function(t){this.chart.data.datasets[0].data=t,this.chart.update()}),Object(b["a"])(N,s.COMMENT_MEAN,function(t){this.chart.data.datasets[1].data=t,this.chart.update()}),Object(b["a"])(N,s.COMMENT_SCORE_RATIO,function(t){this.chart.data.datasets[2].data=t,this.chart.update()}),N),mounted:function(){this.chart=new p.a("chartCommentCounts",y(["Comments total","Comments mean","Score:comments ratio"]))}}),at=nt,rt=Object(U["a"])(at,tt,et,!1,null,null,null),st=rt.exports,ct=(n("6b54"),{posts:[],started:!1}),ot=(n("ac6a"),x={},Object(b["a"])(x,s.OLDEST_POST,function(t){if(!t.posts.length)return"none";var e=t.posts.map(function(t){return t.created_utc.time}),n=Math.min.apply(Math,Object(m["a"])(e));return new Date(1e3*n).toUTCString()}),Object(b["a"])(x,s.TOTAL_COUNT,function(t){return t.posts.length}),Object(b["a"])(x,s.GILD_COUNTS,function(t){var e={silver:T(),gold:T(),platinum:T()};return t.posts.forEach(function(t){var n=t.created_utc.hour;e.silver[n]+=t.gildings.silver,e.gold[n]+=t.gildings.gold,e.platinum[n]+=t.gildings.platinum}),e}),Object(b["a"])(x,s.KEY_HOUR_GRID,function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"score";return t.posts.reduce(function(t,n){var a=n.created_utc.hour;return void 0===t[a]&&(t[a]=[]),t[a].push(n[e]),t},v()({length:24}))}}),Object(b["a"])(x,s.POST_COUNT,function(t,e){return e[s.KEY_HOUR_GRID]("score").map(C)}),Object(b["a"])(x,s.SCORE_TOTAL,function(t,e){return e[s.KEY_HOUR_GRID]("score").map(S)}),Object(b["a"])(x,s.SCORE_MEAN,function(t,e){var n=T(),a=e[s.SCORE_TOTAL],r=e[s.POST_COUNT];return n.map(function(t,e){return r[e]>0?Math.ceil(a[e]/r[e]):0})}),Object(b["a"])(x,s.SCORE_MEDIAN,function(t,e){return e[s.KEY_HOUR_GRID]("score").map(_)}),Object(b["a"])(x,s.SCORE_RANGE,function(t,e){return e[s.KEY_HOUR_GRID]("score").map(E)}),Object(b["a"])(x,s.COMMENT_TOTAL,function(t,e){return e[s.KEY_HOUR_GRID]("num_comments").map(S)}),Object(b["a"])(x,s.COMMENT_MEAN,function(t,e){var n=T(),a=e[s.COMMENT_TOTAL],r=e[s.POST_COUNT];return n.map(function(t,e){return r[e]>0?Math.ceil(a[e]/r[e]):0})}),Object(b["a"])(x,s.COMMENT_SCORE_RATIO,function(t,e){var n=T(),a=e[s.COMMENT_TOTAL],r=e[s.SCORE_TOTAL];return n.map(function(t,e){return a[e]>0?Math.ceil(r[e]/a[e]):0})}),x),it=(I={},Object(b["a"])(I,r.ADD_POSTS,function(t,e){var n=t.commit,r=e.posts;n(a.ADD_POSTS,r)}),Object(b["a"])(I,r.CLEAR_DATA,function(t){var e=t.commit;e(a.CLEAR_DATA)}),Object(b["a"])(I,r.SET_STATUS,function(t,e){var n=t.commit,r=e.status;n(a.SET_STATUS,r)}),I),ut=(G={},Object(b["a"])(G,a.ADD_POSTS,function(t,e){return t.posts=t.posts.concat(e)}),Object(b["a"])(G,a.CLEAR_DATA,function(t){return t.posts=[]}),Object(b["a"])(G,a.SET_STATUS,function(t,e){return t.started=e}),G),dt=!0,lt={namespaced:dt,state:ct,getters:ot,actions:it,mutations:ut};c["a"].use(R["a"]);var ft,bt=new R["a"].Store({modules:{reddit:lt}});(function(t){t["HOT"]="hot",t["NEW"]="new",t["CONTROVERSIAL"]="controversial",t["TOP"]="top",t["RISING"]="rising"})(ft||(ft={}));var ht=function(t){var e=t.subreddit,n=t.type,a=void 0===n?ft.NEW:n,r=t.after,s=void 0!==r&&r,c=new URL("https://www.reddit.com");c.pathname="/r/".concat(e,"/").concat(a,"/.json");var o=new URLSearchParams("limit=100");return!1!==s&&o.set("after",s),c.search=o.toString(),c.toString()},pt=function(t){return{hour:new Date(1e3*t).getUTCHours(),time:t}},mt=function(t){return{silver:t.gid_1,gold:t.gid_2,platinum:t.gid_3}},jt=function(t){var e=[{key:"name",transform:!1},{key:"created_utc",transform:pt},{key:"gildings",transform:mt},{key:"score",transform:!1},{key:"num_comments",transform:!1},{key:"num_crossposts",transform:!1}],n=t.data.children;return n.map(function(t){var n=t.data;return e.reduce(function(t,e){return t[e.key]=!1===e.transform?n[e.key]:e.transform(n[e.key]),t},{})})},vt=function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e){var n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=ht(e),t.next=3,fetch(n).then(function(t){return t.json()}).catch(function(t){return!1});case 3:if(a=t.sent,!1===a){t.next=8;break}return r=jt(a),bt.dispatch("reddit/addPosts",{posts:r}),t.abrupt("return",{nodes:r,after:null!==a.data.after&&a.data.after});case 8:return t.abrupt("return",!1);case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),Ot=function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e,n){var a,r,s,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=!bt.state.reddit.started,!a){t.next=4;break}return bt.dispatch("reddit/setStatus",{status:!1}),t.abrupt("return",!1);case 4:return t.next=6,vt(e);case 6:if(r=t.sent,s=bt.getters["reddit/totalCount"],!(s<n&&!1!==r&&!1!==r.after)){t.next=14;break}return c=Object(d["a"])({},e,{after:r.after}),t.next=12,Ot(c,n);case 12:t.next=15;break;case 14:bt.dispatch("reddit/setStatus",{status:!1});case 15:return t.abrupt("return",r);case 16:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}(),gt=c["a"].extend({name:"app",data:function(){return{subreddit:"videos",sortType:"new",maxPosts:100}},computed:Object(d["a"])({},Object(R["d"])("reddit",["started"]),Object(R["c"])("reddit",[s.TOTAL_COUNT,s.OLDEST_POST]),{buttonStyleSubmit:function(){return{"bg-gray moon-gray":this.started,"bg-reddit-color white":!this.started}},buttonStyleClear:function(){return{"bg-gray moon-gray":!this.started,"bg-reddit-color white":this.started}},buttonLabel:function(){return this.started?"Stop":"Clear"}}),methods:Object(d["a"])({},Object(R["b"])("reddit",["clearData","setStatus"]),{buttonAction:function(){var t=this.started;t?this.setStatus({status:!1}):this.clearData()},startFetch:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.subreddit,n={subreddit:e,type:this.sortType},this.setStatus({status:!0}),t.next=5,Ot(n,this.maxPosts);case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}),components:{ChartGildCounts:$,ChartPostCount:z,ChartScoreCounts:Z,ChartCommentCounts:st}}),Tt=gt,At=(n("5660"),Object(U["a"])(Tt,o,i,!1,null,"29eddeb0",null)),Ct=At.exports,St=n("9483");Object(St["a"])("".concat("/reddit-trends/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("7700"),n("a0d8");c["a"].config.productionTip=!1,new c["a"]({store:bt,render:function(t){return t(Ct)}}).$mount("#app")},f16c:function(t,e,n){}});
//# sourceMappingURL=app.d6c06366.js.map