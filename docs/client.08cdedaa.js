webpackJsonp([0],[function(e,a){e.exports=function(e,a,t,n){var i,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(i=e,s=e.default);var u="function"==typeof s?s.options:s;if(a&&(u.render=a.render,u.staticRenderFns=a.staticRenderFns),t&&(u._scopeId=t),n){var o=u.computed||(u.computed={});Object.keys(n).forEach(function(e){var a=n[e];o[e]=function(){return a}})}return{esModule:i,exports:s,options:u}}},,,,,,function(e,a,t){e.exports=t.p+"./static/media/facebook.a3c0d166.png"},function(e,a,t){e.exports=t.p+"./static/media/github.dd24e5cb.png"},function(e,a,t){e.exports=t.p+"./static/media/linkedin.46bca313.png"},function(e,a,t){e.exports=t.p+"./static/media/twitter.c79ea8ee.png"},,function(e,a,t){"use strict";var n=t(1),i=t.n(n),s=t(4),r=(t.n(s),t(36)),u=t.n(r),o=t(14),l=t(15);t.d(a,"a",function(){return v});var c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};t.i(s.sync)(l.a,o.a);var v=new i.a(c({router:o.a,store:l.a},u.a))},function(e,a,t){"use strict";var n=t(2),i=t.n(n);window.Promise=window.Promise||i.a},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(32),i=t.n(n);i.a.install({onUpdateReady:function(){console.log("update ready"),i.a.applyUpdate()},onUpdated:function(){console.log("updated"),location.reload()}})},function(e,a,t){"use strict";var n=t(1),i=t.n(n),s=t(3),r=t.n(s),u=t(44),o=t.n(u),l=t(42),c=t.n(l),v=t(43),m=t.n(v),d=t(41),p=t.n(d);i.a.use(r.a),a.a=new r.a({mode:"hash",routes:[{path:"/",component:o.a},{path:"/create",component:c.a},{path:"/about",component:p.a},{path:"/download",component:m.a}]})},function(e,a,t){"use strict";var n=t(1),i=t.n(n),s=t(5),r=t.n(s);i.a.use(r.a);var u={count:0},o={INCREMENT:function(e){e.count++},DECREMENT:function(e){e.count--}},l={incrementAsync:function(e){var a=e.commit;setTimeout(function(){a("INCREMENT")},200)}},c=new r.a.Store({state:u,mutations:o,actions:l});a.a=c},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(38),i=t.n(n),s=t(37),r=t.n(s);a.default={components:{"v-header":i.a,"v-footer":r.a}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"v-footer"}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"v-header",data:function(){return{showName:!1}}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(39),i=t.n(n);a.default={components:{required:i.a},name:"signature",data:function(){return{currentTab:"user",options:[{name:"user",value:"User"},{name:"company",value:"Company"},{name:"image",value:"Image"},{name:"links",value:"Social Media Links"},{name:"layout",value:"Layout"},{name:"font",value:"Fonts"}],signature:{divider:{value:!1,thickness:"2px",style:"solid",color:"#000000"},image:{value:null,width:64,height:64,required:!1},company:{name:{value:null,color:"#000000",required:!1},website:{value:null,color:"#000000",required:!1},position:{value:null,color:"#000000",required:!1}},user:{name:{first:{value:null,color:"#000000",required:!0},middle:{value:null,color:"#000000",required:!1},last:{value:null,color:"#000000",required:!1}},email:{value:null,color:"#000000",required:!0},phone:{mobile:{value:null,color:"#000000",required:!1},direct:{value:null,color:"#000000",required:!1}}},layout:{selection:"Simple",list:[{name:"Simple",enabled:!0},{name:"Image",enabled:!0}]},font:{family:"Arial",list:["Arial","Tahoma","Georgia","Verdana"]},links:{facebook:{required:!1,site:"Facebook",iconUrl:"../assets/img/facebook.png",value:null},linkedin:{required:!1,site:"Linkedin",iconUrl:"../assets/img/linkedin.png",value:null},twitter:{required:!1,site:"Twitter",iconUrl:"../assets/img/twitter.png",value:null},github:{required:!1,site:"Github",iconUrl:"../assets/img/github.png",value:null}}}}},computed:{filledOutRequired:function(){return null!==this.signatureData.user.name.first.value&&""!==this.signatureData.user.name.first.value&&this.valid("email",this.signatureData.user.email.value)},signatureData:function(){return this.signature},mailTo:function(){return"mailto:"+this.signatureData.user.email.value}},methods:{valid:function(e,a){switch(e){case"email":var t=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;return t.test(a);case"image":return null!=a.match(/\.(jpeg|jpg|gif|png)$/)}},leftTableStyle:function(){var e={};return e["vertical-align"]="middle",this.signatureData.divider.value&&(e["border-right"]=this.signatureData.divider.thickness+" "+this.signatureData.divider.style+" "+this.signatureData.divider.color),e}}}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=t(40),i=t.n(n);a.default={components:{signature:i.a}}},function(e,a){},function(e,a){},function(e,a){},function(e,a){},function(e,a){},function(e,a){},function(e,a){},function(e,a){},function(e,a){},function(e,a){},function(e,a){},function(e,a){function t(){return"serviceWorker"in navigator&&(window.fetch||"imageRendering"in document.documentElement.style)&&("https:"===window.location.protocol||"localhost"===window.location.hostname)}function n(e){if(e||(e={}),t()){var a=navigator.serviceWorker.register("\\sw.js"),n=function(e){function a(){switch(r.state){case"redundant":i("onUpdateFailed"),r.onstatechange=null;break;case"installing":n||i("onUpdating");break;case"installed":s||i("onUpdateReady");break;case"activated":i("onUpdated"),r.onstatechange=null}}function t(){switch(r.state){case"redundant":r.onstatechange=null;break;case"installing":break;case"installed":break;case"activated":i("onInstalled"),r.onstatechange=null}}var n,s,r=e.installing||e.waiting;if(r&&!r.onstatechange){var u;e.active?(a(),u=a):(t(),u=t),n=!0,e.waiting&&(s=!0),r.onstatechange=u}},i=function(a){"function"==typeof e[a]&&e[a]({source:"ServiceWorker"})};return void a.then(function(e){e&&(n(e),e.onupdatefound=function(){n(e)})}).catch(function(e){return i("onError"),Promise.reject(e)})}}function i(e,a){if(t())return void navigator.serviceWorker.getRegistration().then(function(t){return t&&t.waiting?(t.waiting.postMessage({action:"skipWaiting"}),void(e&&e())):void(a&&a())})}function s(){t()&&navigator.serviceWorker.getRegistration().then(function(e){if(e)return e.update()})}a.install=n,a.applyUpdate=i,a.update=s},,,,function(e,a,t){t(27);var n=t(0)(t(16),t(49),null,null);e.exports=n.exports},function(e,a,t){t(31);var n=t(0)(t(17),t(53),"data-v-e0a900bc",null);e.exports=n.exports},function(e,a,t){t(29);var n=t(0)(t(18),t(51),"data-v-9e4438d8",null);e.exports=n.exports},function(e,a,t){t(24);var n=t(0)(null,t(46),null,null);e.exports=n.exports},function(e,a,t){t(28);var n=t(0)(t(19),t(50),"data-v-92500ffe",null);e.exports=n.exports},function(e,a,t){t(30);var n=t(0)(null,t(52),"data-v-dfbf5c4c",null);e.exports=n.exports},function(e,a,t){t(26);var n=t(0)(t(20),t(48),"data-v-72e1b1ff",null);e.exports=n.exports},function(e,a,t){t(25);var n=t(0)(t(21),t(47),"data-v-66c2c4cb",null);e.exports=n.exports},function(e,a,t){t(23);var n=t(0)(t(22),t(45),"data-v-02f47b22",null);e.exports=n.exports},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"home"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1909.37 295.75"}},[t("title",[e._v("title")]),t("text",{staticStyle:{"font-size":"256px","font-family":"MVBoli, MV Boli, Ubuntu"},attrs:{transform:"translate(-10 219.5) scale(0.78 1)"}},[e._v("Signature Generator")])]),e._v(" "),t("router-link",{attrs:{to:"/create"}},[t("button",{staticStyle:{width:"25%"}},[e._v("Create")])])],1)},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("span",{staticClass:"required"},[e._v("*")])},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement;e._self._c||a;return e._m(0)},staticRenderFns:[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"download"},[t("h3",[e._v("Download Signature")])])}]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"create"},[t("svg",{attrs:{id:"Layer_1","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1909.37 295.75"}},[t("title",[e._v("title")]),t("text",{staticStyle:{"font-size":"256px","font-family":"MVBoli, MV Boli"},attrs:{transform:"translate(0 219.5) scale(0.85 1)"}},[e._v("Signature Creation")])]),e._v(" "),t("signature")],1)},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("v-header"),e._v(" "),t("transition",{attrs:{name:"page",mode:"out-in"}},[t("router-view")],1),e._v(" "),t("v-footer")],1)},staticRenderFns:[]}},function(e,a,t){e.exports={render:function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"signature"},[n("div",{attrs:{id:"left"}},[n("h2",[e._v("Input")]),e._v(" "),n("div",{staticClass:"optionbox"},e._l(e.options,function(a){return n("span",["image"===a.name?n("span",[n("button",{directives:[{name:"show",rawName:"v-show",value:"Image"===e.signature.layout.selection,expression:"signature.layout.selection === 'Image'"}],on:{click:function(t){e.currentTab=a.name}}},[e._v(e._s(a.value))])]):"user"===a.name?n("span",[n("button",{on:{click:function(t){e.currentTab=a.name}}},[e._v(e._s(a.value)),n("required",{directives:[{name:"show",rawName:"v-show",value:!e.filledOutRequired,expression:"!filledOutRequired"}]})],1)]):n("span",[n("button",{on:{click:function(t){e.currentTab=a.name}}},[e._v(e._s(a.value))])])])})),e._v(" "),n("transition",{attrs:{name:"fade",mode:"out-in"}},["company"===e.currentTab?n("div",{key:"company",staticClass:"optiondata"},[n("table",{staticStyle:{width:"100%"}},[n("tr",[n("td",{staticStyle:{width:"45%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.company.name.value,expression:"signature.company.name.value"}],staticStyle:{width:"85%"},attrs:{type:"text",placeholder:"Company Name"},domProps:{value:e._s(e.signature.company.name.value)},on:{input:function(a){a.target.composing||(e.signature.company.name.value=a.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.company.website.value,expression:"signature.company.website.value"}],staticStyle:{width:"85%"},attrs:{type:"text",placeholder:"Company Website URL"},domProps:{value:e._s(e.signature.company.website.value)},on:{input:function(a){a.target.composing||(e.signature.company.website.value=a.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.company.position.value,expression:"signature.company.position.value"}],staticStyle:{width:"85%"},attrs:{type:"text",placeholder:"Position Name"},domProps:{value:e._s(e.signature.company.position.value)},on:{input:function(a){a.target.composing||(e.signature.company.position.value=a.target.value)}}})]),e._v(" "),n("td",{staticStyle:{width:"45%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.company.name.color,expression:"signature.company.name.color"}],staticClass:"button",staticStyle:{width:"50%"},attrs:{id:"cp-company-name",type:"color"},domProps:{value:e._s(e.signature.company.name.color)},on:{input:function(a){a.target.composing||(e.signature.company.name.color=a.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.company.website.color,expression:"signature.company.website.color"}],staticClass:"button",staticStyle:{width:"50%"},attrs:{id:"cp-company-webiste",type:"color"},domProps:{value:e._s(e.signature.company.website.color)},on:{input:function(a){a.target.composing||(e.signature.company.website.color=a.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.company.position.color,expression:"signature.company.position.color"}],staticClass:"button",staticStyle:{width:"50%"},attrs:{id:"cp-name-title",type:"color"},domProps:{value:e._s(e.signature.company.position.color)},on:{input:function(a){a.target.composing||(e.signature.company.position.color=a.target.value)}}})])])])]):"user"===e.currentTab?n("div",{key:"user",staticClass:"optiondata"},[n("table",{staticStyle:{width:"100%"}},[n("tr",[n("td",{staticStyle:{width:"45%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.user.name.first.value,expression:"signature.user.name.first.value"}],staticStyle:{width:"85%"},attrs:{type:"text",placeholder:"First Name"},domProps:{value:e._s(e.signature.user.name.first.value)},on:{input:function(a){a.target.composing||(e.signature.user.name.first.value=a.target.value)}}}),n("required",{directives:[{name:"show",rawName:"v-show",value:null===e.signature.user.name.first.value||""===e.signature.user.name.first.value,expression:"signature.user.name.first.value === null || signature.user.name.first.value === ''"}]}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.user.name.middle.value,expression:"signature.user.name.middle.value"}],staticStyle:{width:"85%"},attrs:{type:"text",placeholder:"Middle Name"},domProps:{value:e._s(e.signature.user.name.middle.value)},on:{input:function(a){a.target.composing||(e.signature.user.name.middle.value=a.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.user.name.last.value,expression:"signature.user.name.last.value"}],staticStyle:{width:"85%"},attrs:{type:"text",placeholder:"Last Name"},domProps:{value:e._s(e.signature.user.name.last.value)},on:{input:function(a){a.target.composing||(e.signature.user.name.last.value=a.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.user.email.value,expression:"signature.user.email.value"}],staticStyle:{width:"85%"},attrs:{type:"text",placeholder:"Email Address"},domProps:{value:e._s(e.signature.user.email.value)},on:{input:function(a){a.target.composing||(e.signature.user.email.value=a.target.value)}}}),n("required",{directives:[{name:"show",rawName:"v-show",value:!e.valid("email",e.signature.user.email.value),expression:"!valid('email', signature.user.email.value)"}]}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.user.phone.mobile.value,expression:"signature.user.phone.mobile.value"}],staticStyle:{width:"85%"},attrs:{type:"text",placeholder:"Phone (Mobile)"},domProps:{value:e._s(e.signature.user.phone.mobile.value)},on:{input:function(a){a.target.composing||(e.signature.user.phone.mobile.value=a.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.user.phone.direct.value,expression:"signature.user.phone.direct.value"}],staticStyle:{width:"85%"},attrs:{type:"text",placeholder:"Phone (Direct)"},domProps:{value:e._s(e.signature.user.phone.direct.value)},on:{input:function(a){a.target.composing||(e.signature.user.phone.direct.value=a.target.value)}}})],1),e._v(" "),n("td",{staticStyle:{width:"45%"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.user.name.first.color,expression:"signature.user.name.first.color"}],staticStyle:{width:"50%"},attrs:{id:"cp-name-first",type:"color"},domProps:{value:e._s(e.signature.user.name.first.color)},on:{input:function(a){a.target.composing||(e.signature.user.name.first.color=a.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.user.name.middle.color,expression:"signature.user.name.middle.color"}],staticStyle:{width:"50%"},attrs:{id:"cp-name-last",type:"color"},domProps:{value:e._s(e.signature.user.name.middle.color)},on:{input:function(a){a.target.composing||(e.signature.user.name.middle.color=a.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.user.name.last.color,expression:"signature.user.name.last.color"}],staticStyle:{width:"50%"},attrs:{id:"cp-name-middle",type:"color"},domProps:{value:e._s(e.signature.user.name.last.color)},on:{input:function(a){a.target.composing||(e.signature.user.name.last.color=a.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.user.email.color,expression:"signature.user.email.color"}],staticStyle:{width:"50%"},attrs:{id:"cp-email",type:"color"},domProps:{value:e._s(e.signature.user.email.color)},on:{input:function(a){a.target.composing||(e.signature.user.email.color=a.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.user.phone.mobile.color,expression:"signature.user.phone.mobile.color"}],staticStyle:{width:"50%"},attrs:{id:"cp-phone-mobile",type:"color"},domProps:{value:e._s(e.signature.user.phone.mobile.color)},on:{input:function(a){a.target.composing||(e.signature.user.phone.mobile.color=a.target.value)}}}),n("br"),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.user.phone.direct.color,expression:"signature.user.phone.direct.color"}],staticStyle:{width:"50%"},attrs:{id:"cp-phone-direct",type:"color"},domProps:{value:e._s(e.signature.user.phone.direct.color)},on:{input:function(a){a.target.composing||(e.signature.user.phone.direct.color=a.target.value)}}})])])])]):"image"===e.currentTab&&"Image"===e.signature.layout.selection?n("div",{key:"image",staticClass:"optiondata"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.image.value,expression:"signature.image.value"}],staticStyle:{width:"85%"},attrs:{placeholder:"Image URL",type:"text"},domProps:{value:e._s(e.signature.image.value)},on:{input:function(a){a.target.composing||(e.signature.image.value=a.target.value)}}})]):"font"===e.currentTab?n("div",{key:"font",staticClass:"optiondata"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.signature.font.family,expression:"signature.font.family"}],staticClass:"button",staticStyle:{width:"85%"},on:{change:function(a){e.signature.font.family=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a})[0]}}},e._l(e.signature.font.list,function(a){return n("option",[e._v(e._s(a))])}))]):"links"===e.currentTab?n("div",{key:"links",staticClass:"optiondata"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.links.facebook.value,expression:"signature.links.facebook.value"}],staticStyle:{width:"85%"},attrs:{placeholder:"Facebook Link",type:"text"},domProps:{value:e._s(e.signature.links.facebook.value)},on:{input:function(a){a.target.composing||(e.signature.links.facebook.value=a.target.value)}}}),e._v(" \n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.links.linkedin.value,expression:"signature.links.linkedin.value"}],staticStyle:{width:"85%"},attrs:{placeholder:"Linkedin Link",type:"text"},domProps:{value:e._s(e.signature.links.linkedin.value)},on:{input:function(a){a.target.composing||(e.signature.links.linkedin.value=a.target.value)}}}),e._v(" \n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.links.twitter.value,expression:"signature.links.twitter.value"}],staticStyle:{width:"85%"},attrs:{placeholder:"Twitter Link",type:"text"},domProps:{value:e._s(e.signature.links.twitter.value)},on:{input:function(a){a.target.composing||(e.signature.links.twitter.value=a.target.value)}}}),e._v(" \n        "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.links.github.value,expression:"signature.links.github.value"}],staticStyle:{width:"85%"},attrs:{placeholder:"Github Link",type:"text"},domProps:{value:e._s(e.signature.links.github.value)},on:{input:function(a){a.target.composing||(e.signature.links.github.value=a.target.value)}}}),e._v(" \n      ")]):"layout"===e.currentTab?n("div",{key:"layout",staticClass:"optiondata"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.signature.layout.selection,expression:"signature.layout.selection"}],staticClass:"button",staticStyle:{width:"85%"},on:{change:function(a){e.signature.layout.selection=Array.prototype.filter.call(a.target.options,function(e){return e.selected}).map(function(e){var a="_value"in e?e._value:e.value;return a})[0]}}},e._l(e.signature.layout.list,function(a){return n("option",[e._v(e._s(a.name))])})),e._v(" "),"Image"===e.signature.layout.selection?n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.signature.divider.value,expression:"signature.divider.value"}],staticClass:"checkbox-custom",attrs:{id:"checkbox-1",type:"checkbox"},domProps:{checked:Array.isArray(e.signature.divider.value)?e._i(e.signature.divider.value,null)>-1:e.signature.divider.value},on:{click:function(a){var t=e.signature.divider.value,n=a.target,i=!!n.checked;if(Array.isArray(t)){var s=null,r=e._i(t,s);i?r<0&&(e.signature.divider.value=t.concat(s)):r>-1&&(e.signature.divider.value=t.slice(0,r).concat(t.slice(r+1)))}else e.signature.divider.value=i}}}),e._v(" "),n("label",{staticClass:"checkbox-custom-label",attrs:{for:"checkbox-1"}},[e._v("Use Divider")]),e._v(" "),n("input",{directives:[{name:"show",rawName:"v-show",value:e.signature.divider.value,expression:"signature.divider.value"},{name:"model",rawName:"v-model",value:e.signature.divider.color,expression:"signature.divider.color"}],staticClass:"button",staticStyle:{width:"20%"},attrs:{id:"cp-divider",type:"color"},domProps:{value:e._s(e.signature.divider.color)},on:{input:function(a){a.target.composing||(e.signature.divider.color=a.target.value)}}})]):e._e()]):e._e()])],1),e._v(" "),n("div",{attrs:{id:"right"}},[n("h2",[e._v("Preview")]),e._v(" "),e.filledOutRequired?n("div",{staticClass:"preview",staticStyle:{"text-align":"left !important"},attrs:{id:"preview"}},["Simple"===e.signatureData.layout.selection?n("div",{style:{"font-family":e.signatureData.font.family}},[n("div",{attrs:{id:"sig-name"}},[n("span",{style:{"font-size":"12px",color:e.signatureData.user.name.first.color,"font-weight":"bold"},attrs:{id:"sig-name-first"}},[e._v(e._s(e.signatureData.user.name.first.value))]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.user.name.middle.value&&null!==e.signatureData.user.name.middle.value&&""!==e.signatureData.user.name.middle.value,expression:"signatureData.user.name.middle.value !== undefined && signatureData.user.name.middle.value !== null && signatureData.user.name.middle.value !== ''"}],staticStyle:{"font-size":"12px"}},[n("span",{style:{color:e.signatureData.user.name.middle.color,"font-weight":"bold"},attrs:{id:"sig-name.middle"}},[e._v(e._s(e.signatureData.user.name.middle.value))])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.user.name.last.value&&null!==e.signatureData.user.name.last.value&&""!==e.signatureData.user.name.last.value,expression:"signatureData.user.name.last.value !== undefined && signatureData.user.name.last.value !== null && signatureData.user.name.last.value !== ''"}],staticStyle:{"font-size":"12px"}},[n("span",{style:{color:e.signatureData.user.name.last.color,"font-weight":"bold"},attrs:{id:"sig-name-last"}},[e._v(e._s(e.signatureData.user.name.last.value))])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.company.position.value&&null!==e.signatureData.company.position.value&&""!==e.signatureData.company.position.value,expression:"signatureData.company.position.value !== undefined && signatureData.company.position.value !== null && signatureData.company.position.value !== ''"}],staticStyle:{"font-size":"12px"}},[e._v("| "),n("span",{style:{color:e.signatureData.company.position.color,"font-weight":"bold"}},[e._v(e._s(e.signatureData.company.position.value))])]),e._v(" "),n("br")]),e._v(" "),n("div",{attrs:{id:"sig-phone"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.user.phone.mobile.value&&null!==e.signatureData.user.phone.mobile.value&&""!==e.signatureData.user.phone.mobile.value,expression:"signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== ''"}],staticStyle:{"font-size":"10px"}},[e._v("M: "),n("span",{style:{color:e.signatureData.user.phone.mobile.color}},[e._v(e._s(e.signatureData.user.phone.mobile.value))])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.user.phone.mobile.value&&null!==e.signatureData.user.phone.mobile.value&&""!==e.signatureData.user.phone.mobile.value&&void 0!==e.signatureData.user.phone.direct.value&&null!==e.signatureData.user.phone.direct.value&&""!==e.signatureData.user.phone.direct.value,expression:"signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== '' && signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== ''"}],staticStyle:{"font-size":"10px"}},[e._v("| ")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.user.phone.direct.value&&null!==e.signatureData.user.phone.direct.value&&""!==e.signatureData.user.phone.direct.value,expression:"signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== ''"}],staticStyle:{"font-size":"10px"}},[e._v("D: "),n("span",{style:{color:e.signatureData.user.phone.direct.color}},[e._v(e._s(e.signatureData.user.phone.direct.value))])])]),e._v(" "),n("div",{attrs:{id:"sig-email"}},[n("a",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.user.email.value&&null!==e.signatureData.user.email.value&&""!==e.signatureData.user.email.value,expression:"signatureData.user.email.value !== undefined && signatureData.user.email.value !== null && signatureData.user.email.value !== ''"}],style:{"font-size":"10px",color:e.signatureData.user.email.color},attrs:{href:e.mailTo}},[e._v(e._s(e.signatureData.user.email.value))]),e._v(" "),n("br")]),e._v(" "),n("div",{attrs:{id:"sig-company"}},[void 0!==e.signatureData.company.name.value&&null!==e.signatureData.company.name.value&&""!==e.signatureData.company.name.value&&void 0!==e.signatureData.company.website.value&&null!==e.signatureData.company.website.value&&""!==e.signatureData.company.website.value?n("a",{style:{"font-size":"10px",color:e.signatureData.company.name.color},attrs:{href:e.signatureData.company.website.value}},[e._v(e._s(e.signatureData.company.name.value))]):void 0!==e.signatureData.company.name.value&&null!==e.signatureData.company.name.value&&""!==e.signatureData.company.name.value?n("span",{style:{"font-size":"10px",color:e.signatureData.company.name.color}},[e._v(e._s(e.signatureData.company.name.value))]):void 0!==e.signatureData.company.website.value&&null!==e.signatureData.company.website.value&&""!==e.signatureData.company.website.value?n("a",{style:{"font-size":"10px",color:e.signatureData.company.website.color},attrs:{href:e.signatureData.company.website.value}},[e._v(e._s(e.signatureData.company.website.value))]):e._e(),e._v(" "),n("br",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.company.name.value&&null!==e.signatureData.company.name.value&&""!==e.signatureData.company.name.value||void 0!==e.signatureData.company.website.value&&null!==e.signatureData.company.website.value&&""!==e.signatureData.company.website.value,expression:"(signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== '') || (signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== '')"}]})]),e._v(" "),n("div",{attrs:{id:"sig-social"}},e._l(e.signatureData.links,function(a){return n("a",{directives:[{name:"show",rawName:"v-show",value:void 0!==a.value&&null!==a.value&&""!==a.value,expression:"link.value !== undefined && link.value !== null && link.value !== ''"}],attrs:{href:a.value}},["Facebook"===a.site?n("img",{staticStyle:{"padding-top":"5px",width:"32px","margin-right":"2px"},attrs:{src:t(6),alt:a.value}}):"Linkedin"===a.site?n("img",{staticStyle:{"padding-top":"5px",width:"32px","margin-right":"2px"},attrs:{src:t(8),alt:a.value}}):"Twitter"===a.site?n("img",{staticStyle:{"padding-top":"5px",width:"32px","margin-right":"2px"},attrs:{src:t(9),alt:a.value}}):"Github"===a.site?n("img",{staticStyle:{"padding-top":"5px",width:"32px","margin-right":"2px"},attrs:{src:t(7),alt:a.value}}):e._e()])}))]):n("table",{style:{"text-align":"left","font-family":e.signatureData.font.family}},[n("tr",[n("td",{style:e.leftTableStyle()},[n("span",{attrs:{id:"sig-image"}},[n("a",{attrs:{href:e.signatureData.company.website.value}},[n("img",{staticStyle:{padding:"0 15px"},attrs:{src:e.signatureData.image.value,alt:"Image",width:e.signatureData.image.width,height:e.signatureData.image.height}})])])]),e._v(" "),n("td",{staticStyle:{"vertical-align":"middle","text-align":"left","padding-left":"15px"}},[n("div",{attrs:{id:"sig-name"}},[n("span",{style:{"font-size":"12px",color:e.signatureData.user.name.first.color,"font-weight":"bold"},attrs:{id:"sig-name-first"}},[e._v(e._s(e.signatureData.user.name.first.value))]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.user.name.middle.value&&null!==e.signatureData.user.name.middle.value&&""!==e.signatureData.user.name.middle.value,expression:"signatureData.user.name.middle.value !== undefined && signatureData.user.name.middle.value !== null && signatureData.user.name.middle.value !== ''"}],staticStyle:{"font-size":"12px"}},[n("span",{style:{color:e.signatureData.user.name.middle.color,"font-weight":"bold"},attrs:{id:"sig-name.middle"}},[e._v(e._s(e.signatureData.user.name.middle.value))])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.user.name.last.value&&null!==e.signatureData.user.name.last.value&&""!==e.signatureData.user.name.last.value,expression:"signatureData.user.name.last.value !== undefined && signatureData.user.name.last.value !== null && signatureData.user.name.last.value !== ''"}],staticStyle:{"font-size":"12px"}},[n("span",{style:{color:e.signatureData.user.name.last.color,"font-weight":"bold"},attrs:{id:"sig-name-last"}},[e._v(e._s(e.signatureData.user.name.last.value))])]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.company.position.value&&null!==e.signatureData.company.position.value&&""!==e.signatureData.company.position.value,expression:"signatureData.company.position.value !== undefined && signatureData.company.position.value !== null && signatureData.company.position.value !== ''"}],staticStyle:{"font-size":"12px"}},[e._v("| "),n("span",{style:{color:e.signatureData.company.position.color,"font-weight":"bold"}},[e._v(e._s(e.signatureData.company.position.value))])]),e._v(" "),n("br")]),e._v(" "),n("div",{attrs:{id:"sig-phone"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.user.phone.mobile.value&&null!==e.signatureData.user.phone.mobile.value&&""!==e.signatureData.user.phone.mobile.value,expression:"signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== ''"}],staticStyle:{"font-size":"10px"}},[e._v("M: "),n("span",{style:{color:e.signatureData.user.phone.mobile.color}},[e._v(e._s(e.signatureData.user.phone.mobile.value))])]),e._v(" "),n("span",{
directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.user.phone.mobile.value&&null!==e.signatureData.user.phone.mobile.value&&""!==e.signatureData.user.phone.mobile.value&&void 0!==e.signatureData.user.phone.direct.value&&null!==e.signatureData.user.phone.direct.value&&""!==e.signatureData.user.phone.direct.value,expression:"signatureData.user.phone.mobile.value !== undefined && signatureData.user.phone.mobile.value !== null && signatureData.user.phone.mobile.value !== '' && signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== ''"}],staticStyle:{"font-size":"10px"}},[e._v("| ")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.user.phone.direct.value&&null!==e.signatureData.user.phone.direct.value&&""!==e.signatureData.user.phone.direct.value,expression:"signatureData.user.phone.direct.value !== undefined && signatureData.user.phone.direct.value !== null && signatureData.user.phone.direct.value !== ''"}],staticStyle:{"font-size":"10px"}},[e._v("D: "),n("span",{style:{color:e.signatureData.user.phone.direct.color}},[e._v(e._s(e.signatureData.user.phone.direct.value))])])]),e._v(" "),n("div",[n("a",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.user.email.value&&null!==e.signatureData.user.email.value&&""!==e.signatureData.user.email.value,expression:"signatureData.user.email.value !== undefined && signatureData.user.email.value !== null && signatureData.user.email.value !== ''"}],style:{"font-size":"10px",color:e.signatureData.user.email.color},attrs:{id:"sig-email",href:e.mailTo}},[e._v(e._s(e.signatureData.user.email.value))]),e._v(" "),n("br")]),e._v(" "),n("div",{attrs:{id:"sig-company"}},[void 0!==e.signatureData.company.name.value&&null!==e.signatureData.company.name.value&&""!==e.signatureData.company.name.value&&void 0!==e.signatureData.company.website.value&&null!==e.signatureData.company.website.value&&""!==e.signatureData.company.website.value?n("a",{style:{"font-size":"10px",color:e.signatureData.company.name.color},attrs:{href:e.signatureData.company.website.value}},[e._v(e._s(e.signatureData.company.name.value))]):void 0!==e.signatureData.company.name.value&&null!==e.signatureData.company.name.value&&""!==e.signatureData.company.name.value?n("span",{style:{"font-size":"10px",color:e.signatureData.company.name.color}},[e._v(e._s(e.signatureData.company.name.value))]):void 0!==e.signatureData.company.website.value&&null!==e.signatureData.company.website.value&&""!==e.signatureData.company.website.value?n("a",{style:{"font-size":"10px",color:e.signatureData.company.website.color},attrs:{href:e.signatureData.company.website.value}},[e._v(e._s(e.signatureData.company.website.value))]):e._e(),e._v(" "),n("br",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.signatureData.company.name.value&&null!==e.signatureData.company.name.value&&""!==e.signatureData.company.name.value||void 0!==e.signatureData.company.website.value&&null!==e.signatureData.company.website.value&&""!==e.signatureData.company.website.value,expression:"(signatureData.company.name.value !== undefined && signatureData.company.name.value !== null && signatureData.company.name.value !== '') || (signatureData.company.website.value !== undefined && signatureData.company.website.value !== null && signatureData.company.website.value !== '')"}]})]),e._v(" "),n("div",{attrs:{id:"sig-social"}},e._l(e.signatureData.links,function(a){return n("a",{directives:[{name:"show",rawName:"v-show",value:void 0!==a.value&&null!==a.value&&""!==a.value,expression:"link.value !== undefined && link.value !== null && link.value !== ''"}],attrs:{href:a.value}},["Facebook"===a.site?n("img",{staticStyle:{"padding-top":"5px",width:"32px","margin-right":"2px"},attrs:{src:t(6),alt:a.value}}):"Linkedin"===a.site?n("img",{staticStyle:{"padding-top":"5px",width:"32px","margin-right":"2px"},attrs:{src:t(8),alt:a.value}}):"Twitter"===a.site?n("img",{staticStyle:{"padding-top":"5px",width:"32px","margin-right":"2px"},attrs:{src:t(9),alt:a.value}}):"Github"===a.site?n("img",{staticStyle:{"padding-top":"5px",width:"32px","margin-right":"2px"},attrs:{src:t(7),alt:a.value}}):e._e()])}))])])])]):n("span",[e._m(0)])])])},staticRenderFns:[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",{staticStyle:{color:"#FFFFFF"}},[e._v("Please fill out required fields. "),t("span",{staticStyle:{"font-size":"32px",color:"black"}},[e._v("( * )")])])}]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"header"},[t("div",{attrs:{id:"homelink"}},[t("router-link",{attrs:{to:"/"}},[t("button",{staticStyle:{width:"25%"}},[e._v("Home")])])],1)])},staticRenderFns:[]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"about"},[t("svg",{attrs:{svg:"",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1909.37 295.75"}},[t("title",[e._v("title")]),t("text",{staticStyle:{"font-size":"256px","font-family":"MVBoli, MV Boli, Ubuntu"},attrs:{transform:"translate(666 219.5) scale(0.78 1)"}},[e._v("About")])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("h3",[e._v("Created by: "),t("a",{staticClass:"link",attrs:{href:"https://github.com/XeonPowder"}},[e._v("XeonPowder")])])}]}},function(e,a){e.exports={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"footer"},[t("router-link",{attrs:{to:"/about"}},[t("button",{staticStyle:{width:"25%"}},[e._v("About")])])],1)},staticRenderFns:[]}},function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=(t(12),t(11));t(13),n.a.$mount("#app")}],[54]);
//# sourceMappingURL=client.08cdedaa.js.map