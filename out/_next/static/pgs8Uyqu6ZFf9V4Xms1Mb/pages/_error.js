(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"/a9y":function(e,t,n){"use strict";var r=n("pbKT"),i=n("/HRN"),a=n("WaGi"),l=n("N9n2"),o=n("ZDA2"),u=n("/+P4");function s(e){var t=function(){if("undefined"===typeof Reflect||!r)return!1;if(r.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(r(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=u(e);if(t){var a=u(this).constructor;n=r(i,arguments,a)}else n=i.apply(this,arguments);return o(this,n)}}var d=n("KI45");t.__esModule=!0,t.default=void 0;var c=d(n("q1tI")),f=d(n("8Kt/")),p={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"},h=function(e){l(n,e);var t=s(n);function n(){return i(this,n),t.apply(this,arguments)}return a(n,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||p[e]||"An unexpected error has occurred";return c.default.createElement("div",{style:g.error},c.default.createElement(f.default,null,c.default.createElement("title",null,e,": ",t)),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?c.default.createElement("h1",{style:g.h1},e):null,c.default.createElement("div",{style:g.desc},c.default.createElement("h2",{style:g.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),n}(c.default.Component);t.default=h,h.displayName="ErrorPage";var g={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n("/a9y")}])}},[["04ac",0,1]]]);