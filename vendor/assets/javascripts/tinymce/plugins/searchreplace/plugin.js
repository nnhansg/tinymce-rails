/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.10 (2019-07-02)
 */
!function(){"use strict";var r=function(e){var t=e,n=function(){return t};return{get:n,set:function(e){t=e},clone:function(){return r(n())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),m=function(){return(m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},p=tinymce.util.Tools.resolve("tinymce.util.Tools");function x(e){return e&&1===e.nodeType&&"false"===e.contentEditable}var t,n,a,o,i,f={findAndReplaceDOMText:function F(e,t,n,r,a){var o,i,h,f,g,m,c=[],d=0;function l(e,t){if(t=t||0,!e[0])throw new Error("findAndReplaceDOMText cannot handle zero-length matches");var n=e.index;if(0<t){var r=e[t];if(!r)throw new Error("Invalid capture group");n+=e[0].indexOf(r),e[0]=r}return[n,n+e[0].length,[e[0]]]}if(h=t.ownerDocument,f=a.getBlockElements(),g=a.getWhiteSpaceElements(),m=a.getShortEndedElements(),i=function u(e){var t;if(3===e.nodeType)return e.data;if(g[e.nodeName]&&!f[e.nodeName])return"";if(t="",x(e))return"\n";if((f[e.nodeName]||m[e.nodeName])&&(t+="\n"),e=e.firstChild)for(;t+=u(e),e=e.nextSibling;);return t}(t)){if(e.global)for(;o=e.exec(i);)c.push(l(o,r));else o=i.match(e),c.push(l(o,r));return c.length&&(d=c.length,function p(e,t,n){var r,a,o,i,c=[],d=0,l=e,u=t.shift(),s=0;e:for(;;){if((f[l.nodeName]||m[l.nodeName]||x(l))&&d++,3===l.nodeType&&(!a&&l.length+d>=u[1]?(a=l,i=u[1]-d):r&&c.push(l),!r&&l.length+d>u[0]&&(r=l,o=u[0]-d),d+=l.length),r&&a){if(l=n({startNode:r,startNodeIndex:o,endNode:a,endNodeIndex:i,innerNodes:c,match:u[2],matchIndex:s}),d-=a.length-i,a=r=null,c=[],s++,!(u=t.shift()))break}else if(g[l.nodeName]&&!f[l.nodeName]||!l.firstChild){if(l.nextSibling){l=l.nextSibling;continue}}else if(!x(l)){l=l.firstChild;continue}for(;;){if(l.nextSibling){l=l.nextSibling;break}if(l.parentNode===e)break e;l=l.parentNode}}}(t,c,function s(e){var p;if("function"!=typeof e){var r=e.nodeType?e:h.createElement(e);p=function(e,t){var n=r.cloneNode(!1);return n.setAttribute("data-mce-index",t),e&&n.appendChild(h.createTextNode(e)),n}}else p=e;return function(e){var t,n,r,a=e.startNode,o=e.endNode,i=e.matchIndex;if(a===o){var c=a;r=c.parentNode,0<e.startNodeIndex&&(t=h.createTextNode(c.data.substring(0,e.startNodeIndex)),r.insertBefore(t,c));var d=p(e.match[0],i);return r.insertBefore(d,c),e.endNodeIndex<c.length&&(n=h.createTextNode(c.data.substring(e.endNodeIndex)),r.insertBefore(n,c)),c.parentNode.removeChild(c),d}t=h.createTextNode(a.data.substring(0,e.startNodeIndex)),n=h.createTextNode(o.data.substring(e.endNodeIndex));for(var l=p(a.data.substring(e.startNodeIndex),i),u=0,s=e.innerNodes.length;u<s;++u){var f=e.innerNodes[u],g=p(f.data,i);f.parentNode.replaceChild(g,f)}var m=p(o.data.substring(0,e.endNodeIndex),i);return(r=a.parentNode).insertBefore(t,a),r.insertBefore(l,a),r.removeChild(a),(r=o.parentNode).insertBefore(m,o),r.insertBefore(n,o),r.removeChild(o),m}}(n))),d}}},h=function(e){var t=e.getAttribute("data-mce-index");return"number"==typeof t?""+t:t},v=function(e){var t=e.parentNode;e.firstChild&&t.insertBefore(e.firstChild,e),e.parentNode.removeChild(e)},c=function(e,t){var n,r=[];if((n=p.toArray(e.getBody().getElementsByTagName("span"))).length)for(var a=0;a<n.length;a++){var o=h(n[a]);null!==o&&o.length&&(o===t.toString()&&r.push(n[a]))}return r},g=function(e,t,n){var r=t.get(),a=r.index,o=e.dom;(n=!1!==n)?a+1===r.count?a=0:a++:a-1==-1?a=r.count-1:a--,o.removeClass(c(e,r.index),"mce-match-marker-selected");var i=c(e,a);return i.length?(o.addClass(c(e,a),"mce-match-marker-selected"),e.selection.scrollIntoView(i[0]),a):-1},y=function(e,t){var n=t.parentNode;e.remove(t),e.isEmpty(n)&&e.remove(n)},u=function(e,t,n,r,a){n=(n=n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")).replace(/\s/g,"[^\\S\\r\\n]"),n=a?"\\b"+n+"\\b":n;var o,i,c,d,l,u=(o=e,i=t,c=new RegExp(n,r?"g":"gi"),(l=o.dom.create("span",{"data-mce-bogus":1})).className="mce-match-marker",d=o.getBody(),C(o,i,!1),f.findAndReplaceDOMText(c,d,l,!1,o.schema));if(u){var s=g(e,t,!0);t.set({index:s,count:u,text:n,matchCase:r,wholeWord:a})}return u},b=function(e,t){var n=g(e,t,!0);t.set(m({},t.get(),{index:n}))},N=function(e,t){var n=g(e,t,!1);t.set(m({},t.get(),{index:n}))},w=function(e){var t=h(e);return null!==t&&0<t.length},s=function(e,t,n,r,a){var o,i,c,d,l,u=t.get(),s=u.index,f=s;for(r=!1!==r,c=e.getBody(),i=p.grep(p.toArray(c.getElementsByTagName("span")),w),o=0;o<i.length;o++){var g=h(i[o]);if(d=l=parseInt(g,10),a||d===u.index){for(n.length?(i[o].firstChild.nodeValue=n,v(i[o])):y(e.dom,i[o]);i[++o];){if((d=parseInt(h(i[o]),10))!==l){o--;break}y(e.dom,i[o])}r&&f--}else s<l&&i[o].setAttribute("data-mce-index",String(l-1))}return t.set(m({},u,{count:a?0:u.count-1,index:f})),r?b(e,t):N(e,t),!a&&0<t.get().count},C=function(e,t,n){var r,a,o,i,c=t.get();for(a=p.toArray(e.getBody().getElementsByTagName("span")),r=0;r<a.length;r++){var d=h(a[r]);null!==d&&d.length&&(d===c.index.toString()&&(o||(o=a[r].firstChild),i=a[r].firstChild),v(a[r]))}if(o&&i){var l=e.dom.createRng();return l.setStart(o,0),l.setEnd(i,i.data.length),!1!==n&&e.selection.setRng(l),l}t.set({index:-1,count:0,text:"",matchCase:!1,wholeWord:!1})},d=function(r,a){return{done:function(e){return C(r,a,e)},find:function(e,t,n){return u(r,a,e,t,n)},next:function(){return b(r,a)},prev:function(){return N(r,a)},replace:function(e,t,n){return s(r,a,e,t,n)}}},l=function(e){return function(){return e}},T=l(!1),A=l(!0),I=function(){return S},S=(o={fold:function(e,t){return e()},is:T,isSome:T,isNone:A,getOr:a=function(e){return e},getOrThunk:n=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:a,orThunk:n,map:I,ap:I,each:function(){},bind:I,flatten:I,exists:T,forall:A,filter:I,equals:t=function(e){return e.isNone()},equals_:t,toArray:function(){return[]},toString:l("none()")},Object.freeze&&Object.freeze(o),o),B=(i="function",function(e){return function(e){if(null===e)return"null";var t=typeof e;return"object"===t&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===t&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":t}(e)===i}),O=Array.prototype.slice,k=(B(Array.from)&&Array.from,tinymce.util.Tools.resolve("tinymce.util.I18n")),E=function(o,i){o.undoManager.add();var e=p.trim(o.selection.getContent({format:"text"}));function c(e){(1<i.get().count?e.enable:e.disable)("next"),(1<i.get().count?e.enable:e.disable)("prev")}var d=function(e,t){!function(e,t){for(var n=0,r=e.length;n<r;n++)t(e[n],n,e)}(["replace","replaceall","prev","next"],t?e.disable:e.enable)};var l=function(e){C(o,i,!1),d(e,!0),c(e)},r=function(e){var t=e.getData(),n=i.get();if(t.findtext.length){if(n.text===t.findtext&&n.matchCase===t.matchcase&&n.wholeWord===t.wholewords)b(o,i);else{var r=u(o,i,t.findtext,t.matchcase,t.wholewords);r<=0&&function a(e){o.windowManager.alert("Could not find the specified string.",function(){e.focus("findtext")})}(e),d(e,0===r)}c(e)}else l(e)},t={findtext:e,replacetext:"",matchcase:!1,wholewords:!1};o.windowManager.open({title:"Find and Replace",size:"normal",body:{type:"panel",items:[{type:"input",name:"findtext",label:"Find"},{type:"input",name:"replacetext",label:"Replace with"},{type:"grid",columns:2,items:[{type:"checkbox",name:"matchcase",label:"Match case"},{type:"checkbox",name:"wholewords",label:"Find whole words only"}]}]},buttons:[{type:"custom",name:"find",text:"Find",align:"start",primary:!0},{type:"custom",name:"replace",text:"Replace",align:"start",disabled:!0},{type:"custom",name:"replaceall",text:"Replace All",align:"start",disabled:!0},{type:"custom",name:"prev",text:"Previous",align:"end",icon:k.isRtl()?"arrow-right":"arrow-left",disabled:!0},{type:"custom",name:"next",text:"Next",align:"end",icon:k.isRtl()?"arrow-left":"arrow-right",disabled:!0}],initialData:t,onChange:function(e,t){"findtext"===t.name&&0<i.get().count&&l(e)},onAction:function(e,t){var n=e.getData();switch(t.name){case"find":r(e);break;case"replace":s(o,i,n.replacetext)?c(e):l(e);break;case"replaceall":s(o,i,n.replacetext,!0,!0),l(e);break;case"prev":N(o,i),c(e);break;case"next":b(o,i),c(e)}},onSubmit:r,onClose:function(){o.focus(),C(o,i),o.undoManager.add()}})},R=function(e,t){e.addCommand("SearchReplace",function(){E(e,t)})},M=function(e,t){return function(){E(e,t)}},D=function(e,t){e.ui.registry.addMenuItem("searchreplace",{text:"Find and replace...",shortcut:"Meta+F",onAction:M(e,t),icon:"search"}),e.ui.registry.addButton("searchreplace",{tooltip:"Find and replace",onAction:M(e,t),icon:"search"}),e.shortcuts.add("Meta+F","",M(e,t))};!function j(){e.add("searchreplace",function(e){var t=r({index:-1,count:0,text:"",matchCase:!1,wholeWord:!1});return R(e,t),D(e,t),d(e,t)})}()}();