(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{17:function(n,t,e){},23:function(n,t,e){},24:function(n,t,e){"use strict";e.r(t);var i,o,a=e(0),c=e.n(a),r=e(8),s=e.n(r),u=(e(17),e(12)),f=e(3),l=e(4),b=l.a.div(i||(i=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(#000000, #000000b2);\n  height: 100vh;\n  width: 100vw;\n"]))),d=l.a.span(o||(o=Object(f.a)(["\n  position: relative;\n  z-index: 1;\n  font-size: 120px;\n  font-weight: 900;\n  font-family: 'Roboto', sans-serif;\n  background: linear-gradient(#fba7ff, #98ecff);\n  -webkit-background-clip: text;\n  color: transparent;\n\n  &::before {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    content: '","';\n    background-image: linear-gradient(#f201ff, #09d2ff);\n    transition: opacity 0.2s ease, transform 0.2s ease;\n    opacity: 0;\n    -webkit-background-clip: text;\n  }\n\n  &.transitionOn::before {\n    opacity: 1;\n  }\n"])),(function(n){return n.myText})),p=e(1),g=function(){var n=Object(a.useState)("Hello Web Fonts!"),t=Object(u.a)(n,1)[0],e=new Map;t.split("").forEach((function(n,t){e.set("".concat(n,"-").concat(t),null)}));return Object(p.jsx)(b,{children:t.split("").map((function(n,t){var i="".concat(n,"-").concat(t);return Object(p.jsx)(d,{ref:function(n){return e.set(i,n)},className:"no-drag",myText:n,onMouseOver:function(){return function(n){var t;null===(t=e.get(n))||void 0===t||t.classList.add("transitionOn")}(i)},onMouseLeave:function(){return function(n){var t;null===(t=e.get(n))||void 0===t||t.classList.remove("transitionOn")}(i)},children:" "!==n?n:Object(p.jsx)("span",{style:{marginRight:40}})},i)}))})},j=(e(23),function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(g,{})})}),h=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,25)).then((function(t){var e=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,c=t.getTTFB;e(n),i(n),o(n),a(n),c(n)}))};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(j,{})}),document.getElementById("root")),h()}},[[24,1,2]]]);