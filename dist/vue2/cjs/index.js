"use strict";var e=require("vue"),t=e.defineComponent({name:"hfex-ellipsis",props:{text:{type:String,required:!0},maxLines:{type:Number,default:3},width:{type:Number,default:100}},setup(t){const n=e.ref(!1),r=e.ref(0),s=e.ref(!1),o=e.ref(),l=e.ref(),i=e.ref(),a=e.ref(t.text.length),d=e.ref(t.width),c=e.computed((()=>t.width?{width:`${t.width}%`}:"")),f=e.computed((()=>{const e=a.value!==t.text.length;let r=t.text;return e&&!n.value&&(r=`${t.text.slice(0,a.value)}...`),r})),u=()=>{const e=l.value.getClientRects();return{len:e.length,lastWidth:e[e.length-1].width}},p=()=>{const{len:e,lastWidth:n}=u();if(e<t.maxLines)return!1;if(t.maxLines){const s=Boolean(e===t.maxLines&&n+r.value>d.value);if(e>t.maxLines||s)return!0}return!1},x=(t,n)=>{e.nextTick((()=>{Math.abs(t-n)<=1||(p()?n=a.value:t=a.value,a.value=Math.floor((t+n)/2),x(t,n))}))};return e.onMounted((()=>{const{len:n}=u();n>t.maxLines&&(s.value=!0,e.nextTick((()=>{r.value=i.value.clientWidth,d.value=o.value.clientWidth,x(0,t.text.length)})))})),{textOverflow:o,slotRef:i,showSlotNode:s,offset:a,expanded:n,slotBoxWidth:r,textBoxWidth:d,boxStyle:c,realText:f,overEllipsis:l,calculateOffset:x,isOverflow:p,getLines:u,toggle:()=>{n.value=!n.value}}}});function n(e,t,n,r,s,o,l,i,a,d){"boolean"!=typeof l&&(a=i,i=l,l=!1);const c="function"==typeof n?n.options:n;let f;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),r&&(c._scopeId=r),o?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=f):t&&(f=l?function(e){t.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,i(e))}),f)if(c.functional){const e=c.render;c.render=function(t,n){return f.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,f):[f]}return n}const r="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function s(e){return(e,t)=>function(e,t){const n=r?t.media||"default":e,s=l[n]||(l[n]={ids:new Set,styles:[]});if(!s.ids.has(e)){s.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),s.element||(s.element=document.createElement("style"),s.element.type="text/css",t.media&&s.element.setAttribute("media",t.media),void 0===o&&(o=document.head||document.getElementsByTagName("head")[0]),o.appendChild(s.element)),"styleSheet"in s.element)s.styles.push(n),s.element.styleSheet.cssText=s.styles.filter(Boolean).join("\n");else{const e=s.ids.size-1,t=document.createTextNode(n),r=s.element.childNodes;r[e]&&s.element.removeChild(r[e]),r.length?s.element.insertBefore(t,r[e]):s.element.appendChild(t)}}}(e,t)}let o;const l={};const i=t;var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"textOverflow",staticClass:"text-overflow",style:e.boxStyle},[n("span",{ref:"overEllipsis"},[e._v(e._s(e.realText))]),e._v(" "),e.showSlotNode?n("span",{ref:"slotRef",staticClass:"slot-box"},[e._t("default",null,{clickToggle:e.toggle,expanded:e.expanded})],2):e._e()])};a._withStripped=!0;const d=n({render:a,staticRenderFns:[]},(function(e){e&&e("data-v-0b8a4c4b_0",{source:".slot-box[data-v-0b8a4c4b] {\n  display: inline-block;\n}\n\n/*# sourceMappingURL=index.vue.map */",map:{version:3,sources:["E:\\MyWebProject\\HHJNPM\\hfex-ellipsis\\src\\vue\\index.vue","index.vue"],names:[],mappings:"AAiJA;EACA,qBAAA;AChJA;;AAEA,oCAAoC",file:"index.vue",sourcesContent:['<template>\r\n    <div\r\n        ref="textOverflow"\r\n        class="text-overflow"\r\n        :style="boxStyle"\r\n    >\r\n        <span ref="overEllipsis">{{ realText }}</span>\r\n        <span\r\n            v-if="showSlotNode"\r\n            ref="slotRef"\r\n            class="slot-box"\r\n        >\r\n            <slot\r\n                :click-toggle="toggle"\r\n                :expanded="expanded"\r\n            />\r\n        </span>\r\n    </div>\r\n</template>\r\n\r\n<script lang="ts">\r\nimport {computed, defineComponent, onMounted, ref, nextTick} from \'vue\';\r\n\r\nexport default defineComponent({\r\n    name: \'hfex-ellipsis\',\r\n    props: {\r\n        text: {\r\n            type: String,\r\n            required: true\r\n        },\r\n        maxLines: {\r\n            type: Number,\r\n            default: 3\r\n        },\r\n        width: {\r\n            type: Number,\r\n            default: 100\r\n        }\r\n    },\r\n    setup(props) {\r\n        const expanded = ref(false);\r\n        const slotBoxWidth = ref(0);\r\n        const showSlotNode = ref(false);\r\n        const textOverflow = ref();\r\n        const overEllipsis = ref();\r\n        const slotRef = ref();\r\n        const offset = ref(props.text.length);\r\n        const textBoxWidth = ref(props.width);\r\n\r\n        const boxStyle = computed(() => {\r\n            if (props.width) {\r\n                return {\r\n                    width: `${props.width}%`\r\n                };\r\n            } else {\r\n                return \'\';\r\n            }\r\n        });\r\n        const realText = computed(() => {\r\n            // 是否被截取\r\n            const isCutOut = offset.value !== props.text.length;\r\n            let realTextDesc = props.text;\r\n            if (isCutOut && !expanded.value) {\r\n                realTextDesc = `${props.text.slice(0, offset.value)}...`;\r\n            }\r\n            return realTextDesc;\r\n        });\r\n        const getLines = () => {\r\n            const clientRects = overEllipsis.value.getClientRects();\r\n            return {\r\n                len: clientRects.length,\r\n                lastWidth: clientRects[clientRects.length - 1].width\r\n            };\r\n        };\r\n        const isOverflow = () => {\r\n            const {len, lastWidth} = getLines();\r\n\r\n            if (len < props.maxLines) {\r\n                return false;\r\n            }\r\n            if (props.maxLines) {\r\n                // 超出部分 行数 > 最大行数 或则  已经是最大行数但最后一行宽度 + 后面内容超出正常宽度\r\n                const lastLineOver = Boolean(\r\n                    len === props.maxLines && lastWidth + slotBoxWidth.value > textBoxWidth.value\r\n                );\r\n                if (len > props.maxLines || lastLineOver) {\r\n                    return true;\r\n                }\r\n            }\r\n            return false;\r\n        };\r\n\r\n        const calculateOffset = (from, to) => {\r\n            nextTick(() => {\r\n                if (Math.abs(from - to) <= 1) {\r\n                    return;\r\n                }\r\n                if (isOverflow()) {\r\n                    to = offset.value;\r\n                } else {\r\n                    from = offset.value;\r\n                }\r\n                offset.value = Math.floor((from + to) / 2);\r\n                calculateOffset(from, to);\r\n            });\r\n        };\r\n\r\n        const toggle = () => {\r\n            expanded.value = !expanded.value;\r\n        };\r\n\r\n        onMounted(() => {\r\n            const {len} = getLines();\r\n            if (len > props.maxLines) {\r\n                showSlotNode.value = true;\r\n                nextTick(() => {\r\n                    slotBoxWidth.value = slotRef.value.clientWidth;\r\n                    textBoxWidth.value = textOverflow.value.clientWidth;\r\n                    calculateOffset(0, props.text.length);\r\n                });\r\n            }\r\n        });\r\n        return {\r\n            // text,\r\n            //   maxLines,\r\n            //   width,\r\n            textOverflow,\r\n            slotRef,\r\n            showSlotNode,\r\n            offset,\r\n            expanded,\r\n            slotBoxWidth,\r\n            textBoxWidth,\r\n            boxStyle,\r\n            realText,\r\n            overEllipsis,\r\n            calculateOffset,\r\n            isOverflow,\r\n            getLines,\r\n            toggle\r\n        };\r\n    }\r\n});\r\n<\/script>\r\n<style scoped lang="scss">\r\n.slot-box {\r\n    display: inline-block;\r\n}\r\n</style>\r\n',".slot-box {\n  display: inline-block;\n}\n\n/*# sourceMappingURL=index.vue.map */"]},media:void 0})}),i,"data-v-0b8a4c4b",false,undefined,!1,s,void 0,void 0);d.install=e=>{e.component(d.name,d)},module.exports=d;