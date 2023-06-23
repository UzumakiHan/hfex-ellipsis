import{defineComponent as e,ref as t,computed as n,onMounted as r,nextTick as s}from"vue";var o=e({name:"hfex-ellipsis",props:{text:{type:String,required:!0},maxLines:{type:Number,default:3},width:{type:Number,default:100}},setup(e){const o=t(!1),l=t(0),i=t(!1),a=t(),d=t(),c=t(),f=t(e.text.length),u=t(e.width),p=n((()=>e.width?{width:`${e.width}%`}:"")),x=n((()=>{const t=f.value!==e.text.length;let n=e.text;return t&&!o.value&&(n=`${e.text.slice(0,f.value)}...`),n})),v=()=>{const e=d.value.getClientRects();return{len:e.length,lastWidth:e[e.length-1].width}},h=()=>{const{len:t,lastWidth:n}=v();if(t<e.maxLines)return!1;if(e.maxLines){const r=Boolean(t===e.maxLines&&n+l.value>u.value);if(t>e.maxLines||r)return!0}return!1},m=(e,t)=>{s((()=>{Math.abs(e-t)<=1||(h()?t=f.value:e=f.value,f.value=Math.floor((e+t)/2),m(e,t))}))};return r((()=>{const{len:t}=v();t>e.maxLines&&(i.value=!0,s((()=>{l.value=c.value.clientWidth,u.value=a.value.clientWidth,m(0,e.text.length)})))})),{textOverflow:a,slotRef:c,showSlotNode:i,offset:f,expanded:o,slotBoxWidth:l,textBoxWidth:u,boxStyle:p,realText:x,overEllipsis:d,calculateOffset:m,isOverflow:h,getLines:v,toggle:()=>{o.value=!o.value}}}});function l(e,t,n,r,s,o,l,i,a,d){"boolean"!=typeof l&&(a=i,i=l,l=!1);const c="function"==typeof n?n.options:n;let f;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),r&&(c._scopeId=r),o?(f=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,a(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=f):t&&(f=l?function(e){t.call(this,d(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,i(e))}),f)if(c.functional){const e=c.render;c.render=function(t,n){return f.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,f):[f]}return n}const i="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function a(e){return(e,t)=>function(e,t){const n=i?t.media||"default":e,r=c[n]||(c[n]={ids:new Set,styles:[]});if(!r.ids.has(e)){r.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),r.element||(r.element=document.createElement("style"),r.element.type="text/css",t.media&&r.element.setAttribute("media",t.media),void 0===d&&(d=document.head||document.getElementsByTagName("head")[0]),d.appendChild(r.element)),"styleSheet"in r.element)r.styles.push(n),r.element.styleSheet.cssText=r.styles.filter(Boolean).join("\n");else{const e=r.ids.size-1,t=document.createTextNode(n),s=r.element.childNodes;s[e]&&r.element.removeChild(s[e]),s.length?r.element.insertBefore(t,s[e]):r.element.appendChild(t)}}}(e,t)}let d;const c={};const f=o;var u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"textOverflow",staticClass:"text-overflow",style:e.boxStyle},[n("span",{ref:"overEllipsis"},[e._v(e._s(e.realText))]),e._v(" "),e.showSlotNode?n("span",{ref:"slotRef",staticClass:"slot-box"},[e._t("default",null,{clickToggle:e.toggle,expanded:e.expanded})],2):e._e()])};u._withStripped=!0;const p=l({render:u,staticRenderFns:[]},(function(e){e&&e("data-v-0b8a4c4b_0",{source:".slot-box[data-v-0b8a4c4b] {\n  display: inline-block;\n}\n\n/*# sourceMappingURL=index.vue.map */",map:{version:3,sources:["E:\\MyWebProject\\HHJNPM\\hfex-ellipsis\\src\\vue\\index.vue","index.vue"],names:[],mappings:"AAiJA;EACA,qBAAA;AChJA;;AAEA,oCAAoC",file:"index.vue",sourcesContent:['<template>\r\n    <div\r\n        ref="textOverflow"\r\n        class="text-overflow"\r\n        :style="boxStyle"\r\n    >\r\n        <span ref="overEllipsis">{{ realText }}</span>\r\n        <span\r\n            v-if="showSlotNode"\r\n            ref="slotRef"\r\n            class="slot-box"\r\n        >\r\n            <slot\r\n                :click-toggle="toggle"\r\n                :expanded="expanded"\r\n            />\r\n        </span>\r\n    </div>\r\n</template>\r\n\r\n<script lang="ts">\r\nimport {computed, defineComponent, onMounted, ref, nextTick} from \'vue\';\r\n\r\nexport default defineComponent({\r\n    name: \'hfex-ellipsis\',\r\n    props: {\r\n        text: {\r\n            type: String,\r\n            required: true\r\n        },\r\n        maxLines: {\r\n            type: Number,\r\n            default: 3\r\n        },\r\n        width: {\r\n            type: Number,\r\n            default: 100\r\n        }\r\n    },\r\n    setup(props) {\r\n        const expanded = ref(false);\r\n        const slotBoxWidth = ref(0);\r\n        const showSlotNode = ref(false);\r\n        const textOverflow = ref();\r\n        const overEllipsis = ref();\r\n        const slotRef = ref();\r\n        const offset = ref(props.text.length);\r\n        const textBoxWidth = ref(props.width);\r\n\r\n        const boxStyle = computed(() => {\r\n            if (props.width) {\r\n                return {\r\n                    width: `${props.width}%`\r\n                };\r\n            } else {\r\n                return \'\';\r\n            }\r\n        });\r\n        const realText = computed(() => {\r\n            // 是否被截取\r\n            const isCutOut = offset.value !== props.text.length;\r\n            let realTextDesc = props.text;\r\n            if (isCutOut && !expanded.value) {\r\n                realTextDesc = `${props.text.slice(0, offset.value)}...`;\r\n            }\r\n            return realTextDesc;\r\n        });\r\n        const getLines = () => {\r\n            const clientRects = overEllipsis.value.getClientRects();\r\n            return {\r\n                len: clientRects.length,\r\n                lastWidth: clientRects[clientRects.length - 1].width\r\n            };\r\n        };\r\n        const isOverflow = () => {\r\n            const {len, lastWidth} = getLines();\r\n\r\n            if (len < props.maxLines) {\r\n                return false;\r\n            }\r\n            if (props.maxLines) {\r\n                // 超出部分 行数 > 最大行数 或则  已经是最大行数但最后一行宽度 + 后面内容超出正常宽度\r\n                const lastLineOver = Boolean(\r\n                    len === props.maxLines && lastWidth + slotBoxWidth.value > textBoxWidth.value\r\n                );\r\n                if (len > props.maxLines || lastLineOver) {\r\n                    return true;\r\n                }\r\n            }\r\n            return false;\r\n        };\r\n\r\n        const calculateOffset = (from, to) => {\r\n            nextTick(() => {\r\n                if (Math.abs(from - to) <= 1) {\r\n                    return;\r\n                }\r\n                if (isOverflow()) {\r\n                    to = offset.value;\r\n                } else {\r\n                    from = offset.value;\r\n                }\r\n                offset.value = Math.floor((from + to) / 2);\r\n                calculateOffset(from, to);\r\n            });\r\n        };\r\n\r\n        const toggle = () => {\r\n            expanded.value = !expanded.value;\r\n        };\r\n\r\n        onMounted(() => {\r\n            const {len} = getLines();\r\n            if (len > props.maxLines) {\r\n                showSlotNode.value = true;\r\n                nextTick(() => {\r\n                    slotBoxWidth.value = slotRef.value.clientWidth;\r\n                    textBoxWidth.value = textOverflow.value.clientWidth;\r\n                    calculateOffset(0, props.text.length);\r\n                });\r\n            }\r\n        });\r\n        return {\r\n            // text,\r\n            //   maxLines,\r\n            //   width,\r\n            textOverflow,\r\n            slotRef,\r\n            showSlotNode,\r\n            offset,\r\n            expanded,\r\n            slotBoxWidth,\r\n            textBoxWidth,\r\n            boxStyle,\r\n            realText,\r\n            overEllipsis,\r\n            calculateOffset,\r\n            isOverflow,\r\n            getLines,\r\n            toggle\r\n        };\r\n    }\r\n});\r\n<\/script>\r\n<style scoped lang="scss">\r\n.slot-box {\r\n    display: inline-block;\r\n}\r\n</style>\r\n',".slot-box {\n  display: inline-block;\n}\n\n/*# sourceMappingURL=index.vue.map */"]},media:void 0})}),f,"data-v-0b8a4c4b",false,undefined,!1,a,void 0,void 0);p.install=e=>{e.component(p.name,p)};export{p as default};