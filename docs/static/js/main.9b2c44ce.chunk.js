(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(n,t,e){},23:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var i,a,c,o,r=e(0),s=e.n(r),f=e(8),l=e.n(f),u=(e(17),e(12)),d=e(2),p=e(3),b=p.a.div(i||(i=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background: linear-gradient(#000000, #000000b2);\n  height: 100vh;\n  width: 100vw;\n"]))),g=p.a.div(a||(a=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  gap: 30px;\n  flex-wrap: wrap;\n  height: 500px;\n  width: 100%;\n"]))),j=p.a.div(c||(c=Object(d.a)(["\n  display: flex;\n"]))),h=p.a.span(o||(o=Object(d.a)(["\n  position: relative;\n  z-index: 1;\n  font-size: 120px;\n  font-weight: 900;\n  font-family: 'Roboto', sans-serif;\n  background: linear-gradient(#98ecff, #fba7ff);\n  -webkit-background-clip: text;\n  color: transparent;\n\n  &::before {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    content: '","';\n    background-image: linear-gradient(#25d7ff, #f201ff);\n    transition: opacity 0.2s ease, transform 0.2s ease;\n    opacity: 0;\n    -webkit-background-clip: text;\n  }\n\n  &.transitionOn::before {\n    opacity: 1;\n  }\n"])),(function(n){return n.myText})),x=e(1),v=function(){var n=Object(r.useState)("Hello Web Fonts!"),t=Object(u.a)(n,1)[0],e=new Map;t.split("").forEach((function(n,t){e.set("".concat(n,"-").concat(t),null)}));return Object(x.jsx)(b,{children:Object(x.jsx)(g,{children:t.split(" ").map((function(n,t){var i=[];return n.split("").forEach((function(n,t){var a="".concat(n,"-").concat(t);i.push(Object(x.jsx)(h,{ref:function(n){return e.set(a,n)},className:"no-drag",myText:n,onMouseOver:function(){return function(n){var t;null===(t=e.get(n))||void 0===t||t.classList.add("transitionOn")}(a)},onMouseLeave:function(){return function(n){var t;null===(t=e.get(n))||void 0===t||t.classList.remove("transitionOn")}(a)},children:n},a))})),Object(x.jsx)(j,{children:i},n)}))})})},O=(e(23),function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(v,{})})}),m=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(t){var e=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;e(n),i(n),a(n),c(n),o(n)}))};l.a.render(Object(x.jsx)(s.a.StrictMode,{children:Object(x.jsx)(O,{})}),document.getElementById("root")),m()}},[[24,1,2]]]);