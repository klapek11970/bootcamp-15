parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gZU7":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,e=arguments[3];!function(e,r){"object"==typeof exports&&exports&&"string"!=typeof exports.nodeName?r(exports):"function"==typeof t&&t.amd?t(["exports"],r):(e.Mustache={},r(e.Mustache))}(this,function(t){var e=Object.prototype.toString,r=Array.isArray||function(t){return"[object Array]"===e.call(t)};function n(t){return"function"==typeof t}function o(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function i(t,e){return null!=t&&"object"==typeof t&&e in t}var s=RegExp.prototype.test;var a=/\S/;function u(t){return!function(t,e){return s.call(t,e)}(a,t)}var p={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};var c=/\s*/,l=/\s+/,h=/\s*=/,f=/\s*\}/,g=/#|\^|\/|>|\{|&|=|!/;function v(t){this.string=t,this.tail=t,this.pos=0}function d(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function w(){this.cache={}}v.prototype.eos=function(){return""===this.tail},v.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var r=e[0];return this.tail=this.tail.substring(r.length),this.pos+=r.length,r},v.prototype.scanUntil=function(t){var e,r=this.tail.search(t);switch(r){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,r),this.tail=this.tail.substring(r)}return this.pos+=e.length,e},d.prototype.push=function(t){return new d(t,this)},d.prototype.lookup=function(t){var e,r,o,s=this.cache;if(s.hasOwnProperty(t))e=s[t];else{for(var a,u,p,c=this,l=!1;c;){if(t.indexOf(".")>0)for(a=c.view,u=t.split("."),p=0;null!=a&&p<u.length;)p===u.length-1&&(l=i(a,u[p])||(r=a,o=u[p],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(o))),a=a[u[p++]];else a=c.view[t],l=i(c.view,t);if(l){e=a;break}c=c.parent}s[t]=e}return n(e)&&(e=e.call(this.view)),e},w.prototype.clearCache=function(){this.cache={}},w.prototype.parse=function(e,n){var i=this.cache,s=e+":"+(n||t.tags).join(":"),a=i[s];return null==a&&(a=i[s]=function(e,n){if(!e)return[];var i,s,a,p=[],d=[],w=[],y=!1,x=!1;function b(){if(y&&!x)for(;w.length;)delete d[w.pop()];else w=[];y=!1,x=!1}function k(t){if("string"==typeof t&&(t=t.split(l,2)),!r(t)||2!==t.length)throw new Error("Invalid tags: "+t);i=new RegExp(o(t[0])+"\\s*"),s=new RegExp("\\s*"+o(t[1])),a=new RegExp("\\s*"+o("}"+t[1]))}k(n||t.tags);for(var m,E,U,T,j,S,V=new v(e);!V.eos();){if(m=V.pos,U=V.scanUntil(i))for(var C=0,O=U.length;C<O;++C)u(T=U.charAt(C))?w.push(d.length):x=!0,d.push(["text",T,m,m+1]),m+=1,"\n"===T&&b();if(!V.scan(i))break;if(y=!0,E=V.scan(g)||"name",V.scan(c),"="===E?(U=V.scanUntil(h),V.scan(h),V.scanUntil(s)):"{"===E?(U=V.scanUntil(a),V.scan(f),V.scanUntil(s),E="&"):U=V.scanUntil(s),!V.scan(s))throw new Error("Unclosed tag at "+V.pos);if(j=[E,U,m,V.pos],d.push(j),"#"===E||"^"===E)p.push(j);else if("/"===E){if(!(S=p.pop()))throw new Error('Unopened section "'+U+'" at '+m);if(S[1]!==U)throw new Error('Unclosed section "'+S[1]+'" at '+m)}else"name"===E||"{"===E||"&"===E?x=!0:"="===E&&k(U)}if(S=p.pop())throw new Error('Unclosed section "'+S[1]+'" at '+V.pos);return function(t){for(var e,r=[],n=r,o=[],i=0,s=t.length;i<s;++i)switch((e=t[i])[0]){case"#":case"^":n.push(e),o.push(e),n=e[4]=[];break;case"/":o.pop()[5]=e[2],n=o.length>0?o[o.length-1][4]:r;break;default:n.push(e)}return r}(function(t){for(var e,r,n=[],o=0,i=t.length;o<i;++o)(e=t[o])&&("text"===e[0]&&r&&"text"===r[0]?(r[1]+=e[1],r[3]=e[3]):(n.push(e),r=e));return n}(d))}(e,n)),a},w.prototype.render=function(t,e,r,n){var o=this.parse(t,n),i=e instanceof d?e:new d(e);return this.renderTokens(o,i,r,t,n)},w.prototype.renderTokens=function(t,e,r,n,o){for(var i,s,a,u="",p=0,c=t.length;p<c;++p)a=void 0,"#"===(s=(i=t[p])[0])?a=this.renderSection(i,e,r,n):"^"===s?a=this.renderInverted(i,e,r,n):">"===s?a=this.renderPartial(i,e,r,o):"&"===s?a=this.unescapedValue(i,e):"name"===s?a=this.escapedValue(i,e):"text"===s&&(a=this.rawValue(i)),void 0!==a&&(u+=a);return u},w.prototype.renderSection=function(t,e,o,i){var s=this,a="",u=e.lookup(t[1]);if(u){if(r(u))for(var p=0,c=u.length;p<c;++p)a+=this.renderTokens(t[4],e.push(u[p]),o,i);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)a+=this.renderTokens(t[4],e.push(u),o,i);else if(n(u)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(u=u.call(e.view,i.slice(t[3],t[5]),function(t){return s.render(t,e,o)}))&&(a+=u)}else a+=this.renderTokens(t[4],e,o,i);return a}},w.prototype.renderInverted=function(t,e,n,o){var i=e.lookup(t[1]);if(!i||r(i)&&0===i.length)return this.renderTokens(t[4],e,n,o)},w.prototype.renderPartial=function(t,e,r,o){if(r){var i=n(r)?r(t[1]):r[t[1]];return null!=i?this.renderTokens(this.parse(i,o),e,r,i):void 0}},w.prototype.unescapedValue=function(t,e){var r=e.lookup(t[1]);if(null!=r)return r},w.prototype.escapedValue=function(e,r){var n=r.lookup(e[1]);if(null!=n)return t.escape(n)},w.prototype.rawValue=function(t){return t[1]},t.name="mustache.js",t.version="3.0.1",t.tags=["{{","}}"];var y=new w;return t.clearCache=function(){return y.clearCache()},t.parse=function(t,e){return y.parse(t,e)},t.render=function(t,e,n,o){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+(r(i=t)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return y.render(t,e,n,o)},t.to_html=function(e,r,o,i){var s=t.render(e,r,o);if(!n(i))return s;i(s)},t.escape=function(t){return String(t).replace(/[&<>"'`=\/]/g,function(t){return p[t]})},t.Scanner=v,t.Context=d,t.Writer=w,t});
},{}],"L4bL":[function(require,module,exports) {
"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=require("mustache"),r=console.log,n=[];window.dom=n,n.overlay=document.getElementById("overlay"),n.overlay.list=function(){var t=[],e=!0,r=!1,n=void 0;try{for(var o,a=document.getElementById("overlay").children[Symbol.iterator]();!(e=(o=a.next()).done);e=!0){var l=o.value,i=!0,d=!1,c=void 0;try{for(var u,s=l.attributes[Symbol.iterator]();!(i=(u=s.next()).done);i=!0){var y=u.value;y.value.startsWith("o-")&&t.push(y.value)}}catch(v){d=!0,c=v}finally{try{i||null==s.return||s.return()}finally{if(d)throw c}}}}catch(v){r=!0,n=v}finally{try{e||null==a.return||a.return()}finally{if(r)throw n}}return t}(),n.overlay.openOverlay=function(t){var e=!0,r=!1,o=void 0;try{for(var a,l=n.overlay.list[Symbol.iterator]();!(e=(a=l.next()).done);e=!0){if(a.value===t){var i=n.overlay.querySelector("."+t);if(i)return n.overlay.classList.add("show"),i.classList.add("show"),i}}}catch(d){r=!0,o=d}finally{try{e||null==l.return||l.return()}finally{if(r)throw o}}},n.overlay.closeOverlay=function(){if(!event)return!1;event.stopPropagation(),n.overlay.classList.remove("show");var t=!0,e=!1,r=void 0;try{for(var o,a=n.overlay.children[Symbol.iterator]();!(t=(o=a.next()).done);t=!0){o.value.classList.remove("show")}}catch(l){e=!0,r=l}finally{try{t||null==a.return||a.return()}finally{if(e)throw r}}return!0};var o=!0,a=!1,l=void 0;try{for(var i,d=n.overlay.children[Symbol.iterator]();!(o=(i=d.next()).done);o=!0){var c=i.value;c.addEventListener("click",function(t){t.stopPropagation()})}}catch(y){a=!0,l=y}finally{try{o||null==d.return||d.return()}finally{if(a)throw l}}function u(t){this.init(t),this.title=null,this.board=null,this.cards={},this.columns={}}n.overlay.addEventListener("click",function(t){n.overlay.closeOverlay()}),u.prototype.init=function(e){r(arguments,e),e="object"===t(e)?e:{},r(e),this.title=e.title||"Kanban board",this.color=e.color||"#eee",this.board=e.boardnode||document.children[0].children[1];var n=this.generateTemplate("board-template",this);return document.children[0].children[1].appendChild(n),n},u.prototype.newcard=function(t){var e=this,r=this.newid(),o=this.cards[r]={id:r,title:this.getdata(".o-add-card","title")||"title",color:this.getdata(".o-add-card","color"),content:this.getdata(".o-add-card","content")||"meh",column:(t.column||this.columns[Object.keys(this.columns)[0]]).node,node:null};o.node=this.generateTemplate("card-template",o);var a=o.column.children[1].appendChild(o.node);a.querySelector(".btn-del").addEventListener("click",function(t){var r=t.target.closest("[card-id]");delete e.cards[r.attributes["card-id"].value],r.remove()}),a.querySelector(".btn-edit").addEventListener("click",function(t){var r=t.target.closest("[card-id]"),o=n.overlay.openOverlay("o-edit-card");e.setdata(o,"title",r.querySelector(".card-title").textContent),e.setdata(o,"content",r.querySelector(".card-text").textContent),e.setdata(o,"color",e.dectohex(window.getComputedStyle(r.querySelector(".card-nav"))["background-color"]))})},u.prototype.newcolumn=function(){var t=this.newid(),e=this.columns[t]={id:t,title:this.getdata(".o-add-column","title")||"null",color:this.getdata(".o-add-column","color")||"#000",node:null};e.node=this.generateTemplate("column-template",e);var o=this.board.querySelector(".columns-container").appendChild(e.node);return o.querySelector(".btn-add").addEventListener("click",function(t){var e=n.overlay.openOverlay("o-add-card");r(e)}),o},u.prototype.newid=function(){for(var t="0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ",e="",r=0;r<10;r++)e+=t[Math.floor(Math.random()*t.length)];return e},u.prototype.getdata=function(t,e){return"string"==typeof t?n.overlay.querySelector("".concat(t," [data=").concat(e,"]")).value||null:t.querySelector("[data=".concat(e,"]")).value||null},u.prototype.setdata=function(t,e,r){return t.querySelector("[data=".concat(e,"]")).value=r},u.prototype.dectohex=function(t){if(-1===t.search("rgb"))return t;var e=function(t){return("0"+parseInt(t).toString(16)).slice(-2)};return"#"+e((t=t.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/))[1])+e(t[2])+e(t[3])},u.prototype.generateTemplate=function(t,r){var n=document.getElementById(t).innerHTML;return e.parse(n),(new DOMParser).parseFromString(e.render(n,r),"text/html").body.childNodes[0]},window.k=u,window.kanban=new u({title:"board name"}),c=window.kanban.newcolumn(),window.kanban.newcard({e:c});var s=[];window.boards=s,document.getElementById("app_newkanban").addEventListener("click",function(t){var e=new u({title:prompt("board name")});s.push(e)}),s.push(window.kanban);
},{"mustache":"gZU7"}]},{},["L4bL"], null)
//# sourceMappingURL=%27./docs%27/script.91c968ca.js.map