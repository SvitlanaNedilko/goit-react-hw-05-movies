(this["webpackJsonpgoit-react-hw-05-movies"]=this["webpackJsonpgoit-react-hw-05-movies"]||[]).push([[5],{31:function(t,e,r){"use strict";r.d(e,"e",(function(){return i})),r.d(e,"c",(function(){return u})),r.d(e,"b",(function(){return a})),r.d(e,"a",(function(){return s})),r.d(e,"d",(function(){return f}));var n=r(9),c=r.n(n),o="88170d9b1d48a35ab3cdc8e6a3c5a816";function i(){return fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"))}))}function u(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(o)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"))}))}function a(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(o)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"))}))}function s(t){return fetch("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(o)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"))}))}function f(t){return fetch("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&query=").concat(t)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u043f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"))}))}u.propTypes={filmId:c.a.string},a.propTypes={filmId:c.a.string},s.propTypes={filmId:c.a.string},f.propTypes={query:c.a.string}},32:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,c=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(a){c=!0,o=a}finally{try{n||null==u.return||u.return()}finally{if(c)throw o}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return c}))},33:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r(8),c=(r(34),r(1));function o(t){var e=t.films;return Object(c.jsx)("ul",{className:"FilmsList",children:!!e.length&&e.map((function(t){return Object(c.jsx)("li",{className:"FilmsList_Item",children:Object(c.jsx)(n.b,{to:"/films/".concat(t.id),children:t.title})},t.id)}))})}},34:function(t,e,r){},36:function(t,e,r){},45:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.r(e),r.d(e,"default",(function(){return p}));var i=r(32),u=r(2),a=r(31),s=r(0),f=r(33),l=(r(36),r(1));function p(){var t=Object(u.f)(),e=Object(u.g)(),r=Object(s.useState)(""),n=Object(i.a)(r,2),c=n[0],p=n[1],b=Object(s.useState)([]),h=Object(i.a)(b,2),j=h[0],m=h[1];Object(s.useEffect)((function(){var t=new URLSearchParams(e.search).get("query");t&&Object(a.d)(t).then((function(t){m(t.results)}))}),[e.search]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("form",{onSubmit:function(r){if(r.preventDefault(),""===c.trim())return alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),void p("");t.push(o(o({},e),{},{search:"query=".concat(c)}))},className:"SearchForm",children:[Object(l.jsx)("input",{onChange:function(t){p(t.currentTarget.value.toLowerCase())},type:"text",placeholder:"Search films"}),Object(l.jsx)("button",{type:"submit",children:Object(l.jsx)("span",{children:"Search"})})]}),Object(l.jsx)("div",{children:Object(l.jsx)(f.a,{films:j})})]})}}}]);
//# sourceMappingURL=SearchMovies.20a6bb53.chunk.js.map