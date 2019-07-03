/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.0.10 (2019-07-02)
 */
!function(){"use strict";var o=function(e){var n=e,t=function(){return n};return{get:t,set:function(e){n=e},clone:function(){return o(t())}}},e=tinymce.util.Tools.resolve("tinymce.PluginManager"),i=function(e,n){e.addCommand("mceHelp",n)},c=function(e,n){e.ui.registry.addButton("help",{icon:"help",tooltip:"Help",onAction:n}),e.ui.registry.addMenuItem("help",{text:"Help",icon:"help",shortcut:"Alt+0",onAction:n})},u=function(){return(u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},n=function(e){return function(){return e}};function p(r){for(var a=[],e=1;e<arguments.length;e++)a[e-1]=arguments[e];return function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var t=a.concat(e);return r.apply(null,t)}}var t,r,a,s,l,m,f=n(!1),d=n(!0),y=f,h=d,k=function(){return g},g=(s={fold:function(e,n){return e()},is:y,isSome:y,isNone:h,getOr:a=function(e){return e},getOrThunk:r=function(e){return e()},getOrDie:function(e){throw new Error(e||"error: getOrDie called on none.")},getOrNull:function(){return null},getOrUndefined:function(){return undefined},or:a,orThunk:r,map:k,ap:k,each:function(){},bind:k,flatten:k,exists:y,forall:h,filter:k,equals:t=function(e){return e.isNone()},equals_:t,toArray:function(){return[]},toString:n("none()")},Object.freeze&&Object.freeze(s),s),v=function(t){var e=function(){return t},n=function(){return a},r=function(e){return e(t)},a={fold:function(e,n){return n(t)},is:function(e){return t===e},isSome:h,isNone:y,getOr:e,getOrThunk:e,getOrDie:e,getOrNull:e,getOrUndefined:e,or:n,orThunk:n,map:function(e){return v(e(t))},ap:function(e){return e.fold(k,function(e){return v(e(t))})},each:function(e){e(t)},bind:r,flatten:e,exists:r,forall:r,filter:function(e){return e(t)?a:g},equals:function(e){return e.is(t)},equals_:function(e,n){return e.fold(y,function(e){return n(t,e)})},toArray:function(){return[t]},toString:function(){return"some("+t+")"}};return a},b={some:v,none:k,from:function(e){return null===e||e===undefined?g:v(e)}},A=(l="function",function(e){return function(e){if(null===e)return"null";var n=typeof e;return"object"===n&&(Array.prototype.isPrototypeOf(e)||e.constructor&&"Array"===e.constructor.name)?"array":"object"===n&&(String.prototype.isPrototypeOf(e)||e.constructor&&"String"===e.constructor.name)?"string":n}(e)===l}),C=Array.prototype.slice,P=(m=Array.prototype.indexOf)===undefined?function(e,n){return M(e,n)}:function(e,n){return m.call(e,n)},O=function(e,n){return-1<P(e,n)},S=function(e,n){for(var t=e.length,r=new Array(t),a=0;a<t;a++){var o=e[a];r[a]=n(o,a,e)}return r},M=function(e,n){for(var t=0,r=e.length;t<r;++t)if(e[t]===n)return t;return-1},w=(A(Array.from)&&Array.from,Object.keys),T=Object.hasOwnProperty,x=function(e,n){return T.call(e,n)},_=[{shortcuts:["Meta + B"],action:"Bold"},{shortcuts:["Meta + I"],action:"Italic"},{shortcuts:["Meta + U"],action:"Underline"},{shortcuts:["Meta + A"],action:"Select all"},{shortcuts:["Meta + Y","Meta + Shift + Z"],action:"Redo"},{shortcuts:["Meta + Z"],action:"Undo"},{shortcuts:["Access + 1"],action:"Header 1"},{shortcuts:["Access + 2"],action:"Header 2"},{shortcuts:["Access + 3"],action:"Header 3"},{shortcuts:["Access + 4"],action:"Header 4"},{shortcuts:["Access + 5"],action:"Header 5"},{shortcuts:["Access + 6"],action:"Header 6"},{shortcuts:["Access + 7"],action:"Paragraph"},{shortcuts:["Access + 8"],action:"Div"},{shortcuts:["Access + 9"],action:"Address"},{shortcuts:["Alt + 0"],action:"Open help dialog"},{shortcuts:["Alt + F9"],action:"Focus to menubar"},{shortcuts:["Alt + F10"],action:"Focus to toolbar"},{shortcuts:["Alt + F11"],action:"Focus to element path"},{shortcuts:["Ctrl + F9"],action:"Focus to contextual toolbar"},{shortcuts:["Shift + Enter"],action:"Open popup menu for split buttons"},{shortcuts:["Meta + K"],action:"Insert link (if link plugin activated)"},{shortcuts:["Meta + S"],action:"Save (if save plugin activated)"},{shortcuts:["Meta + F"],action:"Find (if searchreplace plugin activated)"},{shortcuts:["Meta + Shift + F"],action:"Switch to or from fullscreen mode"}],F=tinymce.util.Tools.resolve("tinymce.Env"),j=function(e){var t=F.mac?{alt:"&#x2325;",ctrl:"&#x2303;",shift:"&#x21E7;",meta:"&#x2318;",access:"&#x2303;&#x2325;"}:{meta:"Ctrl ",access:"Shift + Alt "},n=e.split("+"),r=S(n,function(e){var n=e.toLowerCase().trim();return x(t,n)?t[n]:e});return F.mac?r.join("").replace(/\s/,""):r.join("+")},E=function(){return{name:"shortcuts",title:"Handy Shortcuts",items:[{type:"table",header:["Action","Shortcut"],cells:S(_,function(e){var n=S(e.shortcuts,j).join(" or ");return[e.action,n]})}]}},H=function(e,a){return e.replace(/\$\{([^{}]*)\}/g,function(e,n){var t,r=a[n];return"string"===(t=typeof r)||"number"===t?r.toString():e})},D=tinymce.util.Tools.resolve("tinymce.util.I18n"),I=[{key:"advlist",name:"Advanced List"},{key:"anchor",name:"Anchor"},{key:"autolink",name:"Autolink"},{key:"autoresize",name:"Autoresize"},{key:"autosave",name:"Autosave"},{key:"bbcode",name:"BBCode"},{key:"charmap",name:"Character Map"},{key:"code",name:"Code"},{key:"codesample",name:"Code Sample"},{key:"colorpicker",name:"Color Picker"},{key:"directionality",name:"Directionality"},{key:"emoticons",name:"Emoticons"},{key:"fullpage",name:"Full Page"},{key:"fullscreen",name:"Full Screen"},{key:"help",name:"Help"},{key:"hr",name:"Horizontal Rule"},{key:"image",name:"Image"},{key:"imagetools",name:"Image Tools"},{key:"importcss",name:"Import CSS"},{key:"insertdatetime",name:"Insert Date/Time"},{key:"legacyoutput",name:"Legacy Output"},{key:"link",name:"Link"},{key:"lists",name:"Lists"},{key:"media",name:"Media"},{key:"nonbreaking",name:"Nonbreaking"},{key:"noneditable",name:"Noneditable"},{key:"pagebreak",name:"Page Break"},{key:"paste",name:"Paste"},{key:"preview",name:"Preview"},{key:"print",name:"Print"},{key:"save",name:"Save"},{key:"searchreplace",name:"Search and Replace"},{key:"spellchecker",name:"Spell Checker"},{key:"tabfocus",name:"Tab Focus"},{key:"table",name:"Table"},{key:"template",name:"Template"},{key:"textcolor",name:"Text Color"},{key:"textpattern",name:"Text Pattern"},{key:"toc",name:"Table of Contents"},{key:"visualblocks",name:"Visual Blocks"},{key:"visualchars",name:"Visual Characters"},{key:"wordcount",name:"Word Count"},{key:"advcode",name:"Advanced Code Editor*"},{key:"formatpainter",name:"Format Painter*"},{key:"powerpaste",name:"PowerPaste*"},{key:"tinydrive",name:"Tiny Drive*"},{key:"tinymcespellchecker",name:"Spell Checker Pro*"},{key:"a11ychecker",name:"Accessibility Checker*"},{key:"linkchecker",name:"Link Checker*"},{key:"mentions",name:"Mentions*"},{key:"mediaembed",name:"Enhanced Media Embed*"},{key:"checklist",name:"Checklist*"},{key:"casechange",name:"Case Change*"},{key:"permanentpen",name:"Permanent Pen*"},{key:"pageembed",name:"Page Embed*"},{key:"tinycomments",name:"Tiny Comments*"}],L=function(e){var n,t,r=p(H,'<a href="${url}" target="_blank" rel="noopener">${name}</a>'),a=function(n,t){return function(e,n){for(var t=0,r=e.length;t<r;t++){var a=e[t];if(n(a,t,e))return b.some(a)}return b.none()}(I,function(e){return e.key===t}).fold(function(){var e=n.plugins[t].getMetadata;return"function"==typeof e?r(e()):t},function(e){return r({name:e.name,url:"https://www.tiny.cloud/docs/plugins/"+e.key})})};return{name:"plugins",title:"Plugins",items:[{type:"htmlpanel",presets:"document",html:[(t=e,null==t?"":'<div data-mce-tabstop="1" tabindex="-1">'+(o=t,u=w((i=o).plugins),s=i.settings.forced_plugins===undefined?u:function(e,n){for(var t=[],r=0,a=e.length;r<a;r++){var o=e[r];n(o,r,e)&&t.push(o)}return t}(u,(c=p(O,i.settings.forced_plugins),function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return!c.apply(null,e)})),l=S(s,function(e){return"<li>"+a(o,e)+"</li>"}),m=l.length,f=l.join(""),"<p><b>"+D.translate(["Plugins installed ({0}):",m])+"</b></p><ul>"+f+"</ul>")+"</div>"),(n=S(["Accessibility Checker","Advanced Code Editor","Case Change","Checklist","Tiny Comments","Tiny Drive","Enhanced Media Embed","Format Painter","Link Checker","Mentions","MoxieManager","Page Embed","Permanent Pen","PowerPaste","Spell Checker Pro"],function(e){return"<li>"+D.translate(e)+"</li>"}).join(""),'<div data-mce-tabstop="1" tabindex="-1"><p><b>'+D.translate("Premium plugins:")+"</b></p><ul>"+n+'<li style="list-style: none; margin-top: 1em;"><a href="https://www.tiny.cloud/pricing/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">'+D.translate("Learn more...")+"</a></li></ul></div>")].join("")}]};var o,i,c,u,s,l,m,f},B=tinymce.util.Tools.resolve("tinymce.EditorManager"),N=function(){var e,n,t='<a href="https://www.tinymce.com/docs/changelog/?utm_campaign=editor_referral&utm_medium=help_dialog&utm_source=tinymce" target="_blank">TinyMCE '+(e=B.majorVersion,n=B.minorVersion,0===e.indexOf("@")?"X.X.X":e+"."+n)+"</a>";return{name:"versions",title:"Version",items:[{type:"htmlpanel",html:"<p>"+D.translate(["You are using {0}",t])+"</p>",presets:"document"}]}},z=function(e){var n,t=w(e);return(-1===(n=P(t,"versions"))?b.none():b.some(n)).each(function(e){t.splice(e,1),t.push("versions")}),{tabs:e,names:t}},U=function(e,n){var t,r,a=E(),o=L(e),i=N(),c=u(((t={})[a.name]=a,t[o.name]=o,t[i.name]=i,t),n.get());return(r=e,b.from(r.getParam("help_tabs"))).fold(function(){return z(c)},function(e){return n=c,t={},r=S(e,function(e){return"string"==typeof e?(x(n,e)&&(t[e]=n[e]),e):(t[e.name]=e).name}),{tabs:t,names:r};var n,t,r})},V=function(a,o){return function(){var e=U(a,o),r=e.tabs,n=e.names,t={type:"tabpanel",tabs:function(e){for(var n=[],t=function(e){n.push(e)},r=0;r<e.length;r++)e[r].each(t);return n}(S(n,function(e){return x(n=r,t=e)?b.from(n[t]):b.none();var n,t}))};a.windowManager.open({title:"Help",size:"medium",body:t,buttons:[{type:"cancel",name:"close",text:"Close",primary:!0}],initialData:{}})}};!function q(){e.add("help",function(e){var t,n=o({}),r=(t=n,{addTab:function(e){var n=t.get();n[e.name]=e,t.set(n)}}),a=V(e,n);return c(e,a),i(e,a),e.shortcuts.add("Alt+0","Open help dialog","mceHelp"),r})}()}();