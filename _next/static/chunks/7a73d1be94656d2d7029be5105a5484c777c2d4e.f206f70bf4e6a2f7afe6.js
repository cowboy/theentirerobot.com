(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=a,t.useAmp=function(){return a(i.default.useContext(o.AmpStateContext))};var r,i=(r=n("q1tI"))&&r.__esModule?r:{default:r},o=n("lwAK");function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,a=void 0!==o&&o;return n||i&&a}},"20a2":function(e,t,n){e.exports=n("nOHt")},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),s=n("FYa8"),c=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function h(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(h,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0,a=!1;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){a=!0;var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var c=0,l=d.length;c<l;c++){var u=d[c];if(i.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var h=i.props[u],p=r[u]||new Set;"name"===u&&a||!p.has(h)?(p.add(h),r[u]=p):o=!1}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function f(e){var t=e.children,n=(0,i.useContext)(a.AmpStateContext),r=(0,i.useContext)(s.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}f.rewind=function(){};var y=f;t.default=y},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},"Q/kn":function(e,t,n){e.exports={layout:"index_layout__3IIPK",headerInner:"index_headerInner__SQt-w",header:"index_header__1p3mc",footer:"index_footer__1wyQj",content:"index_content__LvyVo",footerInner:"index_footerInner__1A9xs",title:"index_title__27Lr-",footerLeft:"index_footerLeft__2_ZMt",onlineFooter:"index_onlineFooter__1ym3o",offlineFooter:"index_offlineFooter__3AYpn",isOffline:"index_isOffline__1Q5Dx",isOnline:"index_isOnline__2R6IX",offlineSubtitle:"index_offlineSubtitle__E_EYR",onlineSubtitle:"index_onlineSubtitle__3PScT",liveTwitchLink:"index_liveTwitchLink__2dvav",socialIcons:"index_socialIcons__3h-nI",logoIconText:"index_logoIconText__1LUMe",logoIcon:"index_logoIcon__2PM_9",logoIconTextInner:"index_logoIconTextInner__BOh1q",twitchIcon:"index_twitchIcon__276UI",twitch:"index_twitch__2tOR5",twitchInner:"index_twitchInner__1nlkm",twitchInner2:"index_twitchInner2__3GI8T"}},RIqP:function(e,t,n){var r=n("Ijbi"),i=n("EbDI"),o=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||i(e)||o(e)||a()}},RNiq:function(e,t,n){"use strict";n.r(t);var r=n("nKUr");function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(c){i=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(i)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"===typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n("q1tI"),s=n.n(a),c=n("g4pe"),l=n.n(c),u=n("20a2"),h=n("17x9"),d=n.n(h),p=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},b=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t},w=function(e){return"&parent="+[window.location.hostname].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e)).join("&parent=")},v=function(e,t){return Object.keys(e).reduce((function(n,r){return t.hasOwnProperty(r)||(n[r]=e[r]),n}),{})},_=null,g={id:d.a.string,allowFullscreen:d.a.bool,channel:d.a.string.isRequired,fontSize:d.a.oneOf(["small","medium","large"]),height:d.a.oneOfType([d.a.string,d.a.number]),withChat:d.a.bool,theme:d.a.oneOf(["light","dark"]),width:d.a.oneOfType([d.a.string,d.a.number]),onAuthenticate:d.a.func,onVideoPlay:d.a.func,onVideoPause:d.a.func,onVideoReady:d.a.func,autoplay:d.a.bool,muted:d.a.bool,parent:d.a.arrayOf(d.a.string)},j={id:"twitch-embed",allowFullscreen:!0,fontSize:"small",height:480,withChat:!0,theme:"light",width:940,onAuthenticate:function(){return null},onVideoPlay:function(){return null},onVideoPause:function(){return null},onVideoReady:function(){return null},autoplay:!0,muted:!1,parent:[]},O=function(e){function t(){return p(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this;if(this._validateProps(),window.Twitch&&window.Twitch.Embed)return this._createEmbed();_||((_=document.createElement("script")).setAttribute("type","text/javascript"),_.setAttribute("src","https://embed.twitch.tv/embed/v1.js"),document.body.appendChild(_)),_.addEventListener("load",(function(){e._createEmbed()}))}},{key:"componentDidUpdate",value:function(e,t,n){var r=this;return this._validateProps(),e.withChat||Object.keys(e).reduce((function(t,n){return"channel"===n||e[n]!==r.props[n]&&t.push(n),t}),[]).length>0?(this.embed=null,this.player=null,document.getElementById(e.id).innerHTML="",this._createEmbed()):void(e.channel!==this.props.channel&&this.player.setChannel(this.props.channel))}},{key:"_createEmbed",value:function(){this.embed=new window.Twitch.Embed(this.props.id,{allowfullscreen:this.props.allowFullscreen,channel:this.props.channel,"font-size":this.props.fontSize,height:"100%",layout:this.props.withChat?"video-with-chat":"video",theme:this.props.theme,width:"100%",parent:this.props.parent}),this._addEventListeners()}},{key:"_addEventListeners",value:function(){var e=this;this.embed.addEventListener(window.Twitch.Embed.AUTHENTICATE,this.props.onAuthenticate),this.embed.addEventListener(window.Twitch.Embed.VIDEO_PLAY,this.props.onVideoPlay),this.embed.addEventListener(window.Twitch.Embed.VIDEO_PAUSE,this.props.onVideoPause),this.embed.addEventListener(window.Twitch.Embed.VIDEO_READY,(function(){var t=e.props,n=t.autoplay,r=t.muted;e.player=e.embed.getPlayer(),r&&e.player.setVolume(0),n||e.player.pause(),e.props.onVideoReady(e.player)}))}},{key:"_validateProps",value:function(){if(!this.props.channel)throw new Error("A channel prop must be supplied to TwitchEmbed!")}},{key:"render",value:function(){var e=v(this.props,g);return s.a.createElement("div",y({style:{width:this.props.width,height:this.props.height},id:this.props.id},e))}}]),t}(a.Component);O.propTypes=g,O.defaultProps=j;var x={channel:d.a.string.isRequired,id:d.a.string,height:d.a.oneOfType([d.a.string,d.a.number]),width:d.a.oneOfType([d.a.string,d.a.number]),theme:d.a.oneOf(["light","dark"]),parent:d.a.arrayOf(d.a.string),migration:d.a.bool},E={id:"twitch-chat-embed",height:500,width:350,theme:"light",migration:!0,parent:[]},P=function(e){function t(){return p(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),f(t,[{key:"componentDidMount",value:function(){this._validateProps()}},{key:"componentDidUpdate",value:function(e,t,n){this._validateProps()}},{key:"_validateProps",value:function(){if(!this.props.channel)throw new Error("A channel prop must be supplied to TwitchChat!")}},{key:"_createEmbedURL",value:function(){var e=this.props,t=e.channel,n=e.theme,r=e.parent;return"https://www.twitch.tv/embed/"+t+"/chat"+("dark"===n?"?darkpopout":"")+("dark"!==n?"?":"&")+"migration="+e.migration.toString()+w(r)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.id,r=e.width,i=v(this.props,x);return s.a.createElement("iframe",y({title:"Twitch Chat - "+n,id:n,src:this._createEmbedURL(),height:t,width:r,frameBorder:0},i))}}]),t}(a.Component);P.propTypes=x,P.defaultProps=E;var I={clip:d.a.string.isRequired,id:d.a.string,autoplay:d.a.bool,muted:d.a.bool,height:d.a.oneOfType([d.a.string,d.a.number]),width:d.a.oneOfType([d.a.string,d.a.number]),allowFullscreen:d.a.bool,parent:d.a.arrayOf(d.a.string),migration:d.a.bool},T={id:"twitch-clip-embed",autoplay:!0,muted:!1,height:480,width:940,allowFullscreen:!0,migration:!0,parent:[]},k=function(e){function t(){return p(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),f(t,[{key:"componentDidMount",value:function(){this._validateProps()}},{key:"componentDidUpdate",value:function(e,t,n){this._validateProps()}},{key:"_validateProps",value:function(){if(!this.props.clip)throw new Error("A clip prop must be supplied to TwitchClip!")}},{key:"_createEmbedURL",value:function(){var e=this.props,t=e.clip,n=e.autoplay,r=e.muted,i=e.parent;return"https://clips.twitch.tv/embed?clip="+t+"&autoplay="+n+"&muted="+r+"&migration="+e.migration.toString()+w(i)}},{key:"render",value:function(){var e=this.props,t=e.id,n=e.height,r=e.width,i=e.allowFullscreen,o=v(this.props,I);return s.a.createElement("iframe",y({title:"Twitch Clip Embed - "+t,src:this._createEmbedURL(),id:t,height:n,width:r,allowFullScreen:i,frameBorder:0},o))}}]),t}(a.Component);k.propTypes=I,k.defaultProps=T;var A=["channel","collection","video"],C=null,S={id:d.a.string,channel:d.a.string,collection:d.a.string,video:d.a.string,height:d.a.oneOfType([d.a.string,d.a.number]),width:d.a.oneOfType([d.a.string,d.a.number]),playsInline:d.a.bool,autoplay:d.a.bool,muted:d.a.bool,allowFullscreen:d.a.bool,time:d.a.string,hideControls:d.a.bool,onEnded:d.a.func,onPause:d.a.func,onPlay:d.a.func,onPlaybackBlocked:d.a.func,onPlaying:d.a.func,onOffline:d.a.func,onOnline:d.a.func,onReady:d.a.func,parent:d.a.arrayOf(d.a.string)},M={id:"twitch-player-embed",channel:null,collection:null,video:null,height:480,width:940,playsInline:!0,autoplay:!0,muted:!1,allowFullscreen:!0,time:"0h0m0s",hideControls:!1,onEnded:function(){return null},onPause:function(){return null},onPlay:function(){return null},onPlaybackBlocked:function(){return null},onPlaying:function(){return null},onOffline:function(){return null},onOnline:function(){return null},onReady:function(){return null},parent:[]},L=function(e){function t(){return p(this,t),b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return m(t,e),f(t,[{key:"componentDidMount",value:function(){var e=this;if(this._validateProps(),window.Twitch&&window.Twitch.Player)return this._createPlayer();C||((C=document.createElement("script")).setAttribute("type","text/javascript"),C.setAttribute("src","https://player.twitch.tv/js/embed/v1.js"),document.body.appendChild(C)),C.addEventListener("load",(function(){e._createPlayer()}))}},{key:"componentDidUpdate",value:function(e,t,n){var r=this;return this._validateProps(),Object.keys(e).reduce((function(t,n){return A.includes(n)||e[n]!==r.props[n]&&t.push(n),t}),[]).length>0?(this.player=null,document.getElementById(e.id).innerHTML="",this._createPlayer()):e.channel!==this.props.channel&&this.props.channel?this.player.setChannel(this.props.channel):(e.collection!==this.props.collection&&this.props.collection&&this.player.setCollection(this.props.collection),void(e.video!==this.props.video&&this.props.video&&this.player.setVideo("v"+this.props.video)))}},{key:"_createPlayer",value:function(){var e={height:"100%",width:"100%",playsinline:this.props.playsInline,allowfullscreen:this.props.allowFullscreen,autoplay:this.props.autoplay,muted:this.props.muted,time:this.props.time,controls:!this.props.hideControls,parent:this.props.parent};this.props.channel&&(e.channel=this.props.channel),this.props.video&&(e.video=this.props.video),this.props.collection&&(e.collection=this.props.collection),this.player=new window.Twitch.Player(this.props.id,e),this._addEventListeners()}},{key:"_addEventListeners",value:function(){var e=this;this.player.addEventListener(window.Twitch.Player.ENDED,this.props.onEnded),this.player.addEventListener(window.Twitch.Player.PAUSE,this.props.onPause),this.player.addEventListener(window.Twitch.Player.PLAY,this.props.onPlay),this.player.addEventListener(window.Twitch.Player.PLAYBACK_BLOCKED,this.props.onPlaybackBlocked),this.player.addEventListener(window.Twitch.Player.PLAYING,this.props.onPlaying),this.player.addEventListener(window.Twitch.Player.OFFLINE,this.props.onOffline),this.player.addEventListener(window.Twitch.Player.ONLINE,this.props.onOnline),this.player.addEventListener(window.Twitch.Player.READY,(function(){e.props.onReady(e.player)}))}},{key:"_validateProps",value:function(){var e=this.props,t=e.channel,n=e.collection,r=e.video;if(!t&&!n&&!r)throw new Error("A channel, collection or video prop must be supplied to TwitchPlayer!")}},{key:"render",value:function(){var e=v(this.props,S);return s.a.createElement("div",y({id:this.props.id,style:{width:this.props.width,height:this.props.height}},e))}}]),t}(a.Component);L.propTypes=S,L.defaultProps=M;var N=n("TSYQ"),R=n.n(N),F=n("Q/kn"),D=n.n(F),q="/static/hypno-".concat(Math.floor(Math.random()*Math.floor(4))+1,".gif"),U=function(e){var t=e.name,n=e.className,i=e.children;return Object(r.jsxs)("span",{className:R()(D.a.logoIcon,n),children:[Object(r.jsx)("span",{className:D.a.logoIconText,children:Object(r.jsx)("span",{className:D.a.logoIconTextInner,children:i})}),Object(r.jsx)("i",{className:R()("fab",t)}),Object(r.jsx)("i",{className:R()("fab",t)})]})};t.default=function(){var e=Object(u.useRouter)(),t=e.asPath,n=e.query.channel,i=void 0===n?"theentirerobot":n,s="/[channel]"!==t,c=o(a.useState(!1),2),h=c[0],d=c[1],p=a.createRef();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(l.a,{children:[Object(r.jsx)("title",{children:"The Entire Robot :: Electronic Jazz Funk Whatever"}),Object(r.jsx)("meta",{charSet:"utf-8"}),Object(r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),Object(r.jsx)("link",{rel:"icon",href:"/static/favicon.png"}),Object(r.jsx)("style",{children:"\n        :root {\n          --hypnoAnimation: url(".concat(q,");\n        }\n      ")})]}),Object(r.jsxs)("div",{className:R()(D.a.layout,h?D.a.isOnline:D.a.isOffline),children:[Object(r.jsx)("header",{className:D.a.header,children:Object(r.jsx)("div",{className:D.a.headerInner,children:Object(r.jsx)("h1",{className:D.a.title,"data-title":"The Entire Robot",children:"The Entire Robot"})})}),Object(r.jsx)("section",{className:D.a.content,children:Object(r.jsx)("div",{className:D.a.twitch,children:Object(r.jsx)("div",{className:D.a.twitchInner,children:Object(r.jsx)("div",{className:D.a.twitchInner2,children:s&&Object(r.jsx)(L,{channel:i,width:"100%",height:"100%",onOnline:function(){return d(!0)},onOffline:function(){return d(!1)},onReady:function(e){p.current=e}})})})})}),Object(r.jsx)("footer",{className:D.a.footer,children:Object(r.jsxs)("div",{className:D.a.footerInner,children:[Object(r.jsxs)("div",{className:D.a.footerLeft,children:[Object(r.jsx)("div",{className:D.a.offlineFooter,children:Object(r.jsxs)("h2",{className:D.a.offlineSubtitle,children:["Electronic Jazz Funk Whatever by"," ",Object(r.jsx)("span",{className:"nowrap",children:"\u201cCowboy\u201d Ben Alman"})]})}),Object(r.jsxs)("div",{className:D.a.onlineFooter,children:[Object(r.jsxs)("h2",{className:D.a.onlineSubtitle,children:["Electronic Jazz Funk Whatever by"," ",Object(r.jsx)("span",{className:"nowrap",children:"\u201cCowboy\u201d Ben Alman"})]}),Object(r.jsx)("a",{className:D.a.liveTwitchLink,href:"https://www.twitch.tv/theentirerobot",onClick:function(){var e;return null===(e=p.current)||void 0===e?void 0:e.pause()},children:"The Entire Robot is currently streaming! Click here to watch and chat live on Twitch!"})]})]}),Object(r.jsx)("div",{className:D.a.socialIcons,children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.twitch.tv/theentirerobot",children:Object(r.jsx)(U,{name:"fa-twitch",className:D.a.twitchIcon,children:"Twitch"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.youtube.com/c/TheEntireRobot",children:Object(r.jsx)(U,{name:"fa-youtube-square",children:"YouTube"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.instagram.com/theentirerobot/",children:Object(r.jsx)(U,{name:"fa-instagram",children:"Instagram"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://twitter.com/TheEntireRobot",children:Object(r.jsx)(U,{name:"fa-twitter-square",children:"Twitter"})})}),Object(r.jsx)("li",{children:Object(r.jsx)("a",{href:"https://www.facebook.com/TheEntireRobot/",children:Object(r.jsx)(U,{name:"fa-facebook-square",children:"Facebook"})})})]})})]})})]})]})}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var a=i.apply(null,r);a&&e.push(a)}else if("object"===o)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),i=n("lwsE"),o=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),s=n("a1gu"),c=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),h=function(e){a(n,e);var t=l(n);function n(e){var o;return i(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=h},g4pe:function(e,t,n){e.exports=n("8Kt/")},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i}}]);