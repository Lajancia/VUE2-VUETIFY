(function(t){function e(e){for(var i,s,n=e[0],c=e[1],l=e[2],u=0,h=[];u<n.length;u++)s=n[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&h.push(r[s][0]),r[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);v&&v(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,s=1;s<a.length;s++){var n=a[s];0!==r[n]&&(i=!1)}i&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var i={},s={app:0},r={app:0},o=[];function n(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"756c75a5"}[t]+".js"}function c(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var i="css/"+({about:"about"}[t]||t)+"."+{about:"683ba04d"}[t]+".css",r=c.p+i,o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var l=o[n],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===r))return e()}var h=document.getElementsByTagName("style");for(n=0;n<h.length;n++){l=h[n],u=l.getAttribute("data-href");if(u===i||u===r)return e()}var v=document.createElement("link");v.rel="stylesheet",v.type="text/css",v.onload=e,v.onerror=function(e){var i=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete s[t],v.parentNode.removeChild(v),a(o)},v.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(v)})).then((function(){s[t]=0})));var i=r[t];if(0!==i)if(i)e.push(i[2]);else{var o=new Promise((function(e,a){i=r[t]=[e,a]}));e.push(i[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=n(t);var h=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(v);var a=r[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;h.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",h.name="ChunkLoadError",h.type=i,h.request=s,a[1](h)}r[t]=void 0}};var v=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=i,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(a,i,function(e){return t[e]}.bind(null,i));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var h=0;h<l.length;h++)e(l[h]);var v=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("ecfe")},"0ece":function(t,e,a){"use strict";a("a8e5")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{staticClass:"accent",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",{staticClass:"primary"},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"text--text",attrs:{id:"menu-font"}},[a("v-row",[a("v-col",[t._v("Guest")]),a("v-col",[a("v-icon",{staticClass:"text-right text--text ml-15"},[t._v("mdi-login")])],1)],1)],1)],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-home")])],1),a("v-list-item-content",[a("v-list-item-title",{attrs:{color:"primary"}},[a("a",{attrs:{href:"/"}},[t._v("Home")])])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-post-outline")])],1),a("v-list-item-content",[a("v-list-item-title",{attrs:{color:"text"}},[a("a",{attrs:{href:"https://lajancia.github.io/"}},[t._v("Gitblog")])])],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-picture-in-picture-bottom-right")])],1),a("v-list-item-content",[a("v-list-item-title",{attrs:{color:"text"}},[a("router-link",{attrs:{to:"/gallery"}},[t._v("Gallery")])],1)],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-file-account")])],1),a("v-list-item-content",[a("v-list-item-title",{attrs:{color:"text"}},[a("router-link",{attrs:{to:"/resume"}},[t._v("Resume")])],1)],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-forum")])],1),a("v-list-item-content",[a("v-list-item-title",{attrs:{color:"text"}},[a("router-link",{attrs:{to:"/projects"}},[t._v("Projects")])],1)],1)],1),a("v-list-item",{attrs:{link:""}},[a("v-list-item-icon",[a("v-icon",{attrs:{color:"primary"}},[t._v("mdi-forum")])],1),a("v-list-item-content",[a("v-list-item-title",{attrs:{color:"text"}},[a("router-link",{attrs:{to:"/resume"}},[t._v("Achievement")])],1)],1)],1)],1)],1),a("v-app-bar",{staticClass:"primary elevation-0",attrs:{app:""}},[a("v-app-bar-nav-icon",{staticClass:"black--text",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-spacer"),a("v-toolbar-title",{staticClass:"mr-10"},[a("a",{staticClass:"text--text",attrs:{href:"/"}},[t._v("Lajancia")])]),a("v-spacer")],1),a("v-main",[a("router-view")],1)],1)},r=[],o={data:function(){return{drawer:!1,items:[{title:"Home",icon:"mdi-home",url:"/"},{title:"GitBlog",icon:"mdi-post-outline",url:"https://lajancia.github.io/"},{title:"Gallery",icon:"mdi-picture-in-picture-bottom-right",url:"/about"},{title:"Resume",icon:"mdi-file-account",url:"/resume"},{title:"Projects",icon:"mdi-forum",url:"/projects"}]}}},n=o,c=(a("034f"),a("0c7c")),l=a("6544"),u=a.n(l),h=a("7496"),v=a("40dc"),m=a("5bc1"),d=a("62ad"),p=a("ce7e"),f=a("132d"),g=a("8860"),b=a("da13"),x=a("5d23"),y=a("34c3"),w=a("f6c4"),C=a("f774"),_=a("0fd9"),k=a("2fa4"),j=a("2a7f"),V=Object(c["a"])(n,s,r,!1,null,null,null),S=V.exports;u()(V,{VApp:h["a"],VAppBar:v["a"],VAppBarNavIcon:m["a"],VCol:d["a"],VDivider:p["a"],VIcon:f["a"],VList:g["a"],VListItem:b["a"],VListItemContent:x["a"],VListItemIcon:y["a"],VListItemTitle:x["b"],VMain:w["a"],VNavigationDrawer:C["a"],VRow:_["a"],VSpacer:k["a"],VToolbarTitle:j["a"]});var T=a("f309");i["a"].use(T["a"]);var O=new T["a"]({theme:{themes:{light:{primary:"white",secondary:"black",accent:"#2978b5",text:"#444"}}}}),L=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"main"},[a("v-row",{staticClass:"text-center"},[a("v-col",{staticClass:"text--text",attrs:{cols:"12"}},[a("h1",{staticClass:"mx-4",attrs:{id:"main1"}},[t._v(" Hello! "),a("span",[t._v(" My name is ")]),a("span",{staticClass:"accent--text"},[t._v("Soomin Hwang")])]),a("div",{attrs:{id:"main1"}},[a("p",{staticClass:"secondary--text text-left"})])]),a("v-col",{attrs:{cols:"12"}},[a("div",[a("h1",[t._v(" I'M "),a("span",{staticClass:"txt-rotate",attrs:{"data-period":"2000","data-rotate":'[ " Lajancia", " Developer", " Writer", " Illustrator"]'}})])])]),a("v-col",{attrs:{cols:"12"}},[a("div",{staticClass:"sentence text--text"},[t._v(" This Webpage is for various private front end test and back end test. Have displayed 3D modeling and illustrations, js aninations, project summaries and so on. You can freely check out the projects and arts that I made. Please understand that some categories are not ready. ")])]),a("v-col",{staticClass:"text-center"},[a("a",{staticClass:"mx-3",attrs:{href:"https://www.instagram.com/lajancia/"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"#2978b5"}},[a("path",{attrs:{d:"M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"}})])]),a("a",{staticClass:"mx-3",attrs:{href:"https://github.com/Lajancia"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"#2978b5"}},[a("path",{attrs:{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"}})])]),a("a",{staticClass:"mx-3",attrs:{href:"https://grafolio.naver.com/kie6974"}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"#2978b5"}},[a("path",{attrs:{d:"M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z"}})])])]),a("v-col",{staticClass:"text--text",attrs:{cols:"12",id:"main1"}},[t._v("Projects")]),a("v-row",{staticClass:"p-5",attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pa-2",attrs:{id:"card",cols:"12",sm:"4"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4","max-width":"600"}},[a("v-img",{attrs:{"aspect-ratio":16/9,src:"https://cdn.vuetifyjs.com/images/cards/kitchen.png"}},[a("v-expand-transition",[i?a("div",{staticClass:"d-flex transition-fast-in-fast-out accent darken-2 v-card--reveal text-h2 white--text",staticStyle:{height:"100%"}},[t._v(" $14.99 ")]):t._e()])],1),a("v-card-text",{staticClass:"pt-6",staticStyle:{position:"relative"}},[a("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"#2978b5",fab:"",large:"",right:"",top:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-post-outline")])],1),a("div",{staticClass:"font-weight-light grey--text text-h6 mb-2"},[t._v(" For the perfect meal ")]),a("h3",{staticClass:"text-h4 font-weight-light accent--text mb-2"},[t._v(" QW cooking utensils ")]),a("div",{staticClass:"font-weight-light text-h6 mb-2"},[t._v(" Our Vintage kitchen utensils delight any chef."),a("br"),t._v(" Made of bamboo by hand ")])],1)],1)]}}])})],1),a("v-col",{staticClass:"pa-2",attrs:{id:"card",cols:"12",sm:"4"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4","max-width":"600"}},[a("v-img",{attrs:{"aspect-ratio":16/9,src:"https://cdn.vuetifyjs.com/images/cards/kitchen.png"}},[a("v-expand-transition",[i?a("div",{staticClass:"d-flex transition-fast-in-fast-out accent darken-2 v-card--reveal text-h2 white--text",staticStyle:{height:"100%"}},[t._v(" $14.99 ")]):t._e()])],1),a("v-card-text",{staticClass:"pt-6",staticStyle:{position:"relative"}},[a("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"#2978b5",fab:"",large:"",right:"",top:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-post-outline")])],1),a("div",{staticClass:"font-weight-light grey--text text-h6 mb-2"},[t._v(" For the perfect meal ")]),a("h3",{staticClass:"text-h4 font-weight-light accent--text mb-2"},[t._v(" QW cooking utensils ")]),a("div",{staticClass:"font-weight-light text-h6 mb-2"},[t._v(" Our Vintage kitchen utensils delight any chef."),a("br"),t._v(" Made of bamboo by hand ")])],1)],1)]}}])})],1),a("v-col",{staticClass:"pa-2",attrs:{id:"card",cols:"12",sm:"4"}},[a("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.hover;return[a("v-card",{staticClass:"mx-auto",attrs:{color:"grey lighten-4","max-width":"600"}},[a("v-img",{attrs:{"aspect-ratio":16/9,src:"https://cdn.vuetifyjs.com/images/cards/kitchen.png"}},[a("v-expand-transition",[i?a("div",{staticClass:"d-flex transition-fast-in-fast-out accent darken-2 v-card--reveal text-h2 white--text",staticStyle:{height:"100%"}},[t._v(" $14.99 ")]):t._e()])],1),a("v-card-text",{staticClass:"pt-6",staticStyle:{position:"relative"}},[a("v-btn",{staticClass:"white--text",attrs:{absolute:"",color:"#2978b5",fab:"",large:"",right:"",top:""}},[a("v-icon",{attrs:{color:"white"}},[t._v("mdi-post-outline")])],1),a("div",{staticClass:"font-weight-light grey--text text-h6 mb-2"},[t._v(" For the perfect meal ")]),a("h3",{staticClass:"text-h4 font-weight-light accent--text mb-2"},[t._v(" QW cooking utensils ")]),a("div",{staticClass:"font-weight-light text-h6 mb-2"},[t._v(" Our Vintage kitchen utensils delight any chef."),a("br"),t._v(" Made of bamboo by hand ")])],1)],1)]}}])})],1)],1),a("v-col",{staticClass:"text--text",attrs:{id:"main1",cols:"12"}},[t._v("SKILLS")]),a("v-col",{staticClass:"text--text",attrs:{id:"main1",col:"12"}},[t._v("CONTACT")])],1),a("a",{attrs:{href:"https://lajancia.github.io/"}},[a("v-btn",{attrs:{fab:"",dark:"",large:"",color:"text",fixed:"",right:"",bottom:""}},[a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"white"}},[a("path",{attrs:{d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"}})])])],1)],1)},A=[],E={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},P=function(t,e,a){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(a,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};P.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var a=this,i=300-100*Math.random();this.isDeleting&&(i/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),setTimeout((function(){a.tick()}),i)},window.onload=function(){for(var t=document.getElementsByClassName("txt-rotate"),e=0;e<t.length;e++){var a=t[e].getAttribute("data-rotate"),i=t[e].getAttribute("data-period");a&&new P(t[e],JSON.parse(a),i)}var s=document.createElement("style");s.type="text/css",s.innerHTML=".txt-rotate > .wrap { border-right: 0.08em solid #666 }",document.body.appendChild(s)};var I=E,D=(a("0ece"),a("8336")),N=a("b0af"),z=a("99d9"),B=a("a523"),H=a("0789"),R=a("ce87"),G=a("adda"),W=Object(c["a"])(I,M,A,!1,null,"bc6aeffa",null),$=W.exports;u()(W,{VBtn:D["a"],VCard:N["a"],VCardText:z["a"],VCol:d["a"],VContainer:B["a"],VExpandTransition:H["a"],VHover:R["a"],VIcon:f["a"],VImg:G["a"],VRow:_["a"]}),i["a"].use(L["a"]);var q=[{path:"/",name:"Home",component:$,meta:{title:"Home"}},{path:"/about",name:"About",meta:{title:"About"},component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/resume",name:"Resume",meta:{title:"Resume"},component:function(){return a.e("about").then(a.bind(null,"1ba2"))}},{path:"/gallery",name:"Gallery",meta:{title:"Gallery"},component:function(){return a.e("about").then(a.bind(null,"0d77"))}},{path:"/projects",name:"Projects",meta:{title:"Projects"},component:function(){return a.e("about").then(a.bind(null,"acca"))}}],F=new L["a"]({mode:"history",base:"/",routes:q});F.beforeEach((function(t,e,a){document.title="".concat(t.meta.title),a()}));var Q=F,J=a("835b"),K=a("94ed"),U=a("a2d5");a("d6ea");i["a"].use(U["a"]),i["a"].config.productionTip=!1,i["a"].use(J["a"],{icons:K}),new i["a"]({vuetify:O,router:Q,render:function(t){return t(S)}}).$mount("#app")},a8e5:function(t,e,a){},ecfe:function(t,e,a){}});
//# sourceMappingURL=app.263ee62b.js.map