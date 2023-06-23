"use strict";var e=require("vue"),t=e.defineComponent({name:"hfex-ellipsis",props:{text:{type:String,required:!0},maxLines:{type:Number,default:3},width:{type:Number,default:100}},setup(t){const l=e.ref(!1),n=e.ref(0),o=e.ref(!1),a=e.ref(),s=e.ref(),i=e.ref(),r=e.ref(t.text.length),d=e.ref(t.width),u=e.computed((()=>t.width?{width:`${t.width}%`}:"")),c=e.computed((()=>{const e=r.value!==t.text.length;let n=t.text;return e&&!l.value&&(n=`${t.text.slice(0,r.value)}...`),n})),f=()=>{const e=s.value.getClientRects();return{len:e.length,lastWidth:e[e.length-1].width}},x=()=>{const{len:e,lastWidth:l}=f();if(e<t.maxLines)return!1;if(t.maxLines){const o=Boolean(e===t.maxLines&&l+n.value>d.value);if(e>t.maxLines||o)return!0}return!1},v=(t,l)=>{e.nextTick((()=>{Math.abs(t-l)<=1||(x()?l=r.value:t=r.value,r.value=Math.floor((t+l)/2),v(t,l))}))};return e.onMounted((()=>{const{len:l}=f();l>t.maxLines&&(o.value=!0,e.nextTick((()=>{n.value=i.value.clientWidth,d.value=a.value.clientWidth,v(0,t.text.length)})))})),{textOverflow:a,slotRef:i,showSlotNode:o,offset:r,expanded:l,slotBoxWidth:n,textBoxWidth:d,boxStyle:u,realText:c,overEllipsis:s,calculateOffset:v,isOverflow:x,getLines:f,toggle:()=>{l.value=!l.value}}}});const l={key:0,ref:"slotRef",class:"slot-box"};!function(e,t){void 0===t&&(t={});var l=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===l&&n.firstChild?n.insertBefore(o,n.firstChild):n.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".slot-box[data-v-21fec300] {\n  display: inline-block;\n}"),t.render=function(t,n,o,a,s,i){return e.openBlock(),e.createElementBlock("div",{ref:"textOverflow",class:"text-overflow",style:e.normalizeStyle(t.boxStyle)},[e.createElementVNode("span",{ref:"overEllipsis"},e.toDisplayString(t.realText),513),t.showSlotNode?(e.openBlock(),e.createElementBlock("span",l,[e.renderSlot(t.$slots,"default",{clickToggle:t.toggle,expanded:t.expanded})],512)):e.createCommentVNode("v-if",!0)],4)},t.__scopeId="data-v-21fec300",t.__file="src/vue/index.vue",t.install=e=>{e.component(t.name,t)},module.exports=t;
