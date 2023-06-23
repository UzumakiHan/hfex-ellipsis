<template>
    <div
        ref="textOverflow"
        class="text-overflow"
        :style="boxStyle"
    >
        <span ref="overEllipsis">{{ realText }}</span>
        <span
            v-if="showSlotNode"
            ref="slotRef"
            class="slot-box"
        >
            <slot
                :click-toggle="toggle"
                :expanded="expanded"
            />
        </span>
    </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, ref, nextTick} from 'vue';

export default defineComponent({
    name: 'HfexEllipsis',
    props: {
        text: {
            type: String,
            required: true
        },
        maxLines: {
            type: Number,
            default: 3
        },
        width: {
            type: Number,
            default: 100
        }
    },
    setup(props) {
        const expanded = ref(false);
        const slotBoxWidth = ref(0);
        const showSlotNode = ref(false);
        const textOverflow = ref();
        const overEllipsis = ref();
        const slotRef = ref();
        const offset = ref(props.text.length);
        const textBoxWidth = ref(props.width);

        const boxStyle = computed(() => {
            if (props.width) {
                return {
                    width: `${props.width}%`
                };
            } else {
                return '';
            }
        });
        const realText = computed(() => {
            // 是否被截取
            const isCutOut = offset.value !== props.text.length;
            let realTextDesc = props.text;
            if (isCutOut && !expanded.value) {
                realTextDesc = `${props.text.slice(0, offset.value)}...`;
            }
            return realTextDesc;
        });
        const getLines = () => {
            const clientRects = overEllipsis.value.getClientRects();
            return {
                len: clientRects.length,
                lastWidth: clientRects[clientRects.length - 1].width
            };
        };
        const isOverflow = () => {
            const {len, lastWidth} = getLines();

            if (len < props.maxLines) {
                return false;
            }
            if (props.maxLines) {
                // 超出部分 行数 > 最大行数 或则  已经是最大行数但最后一行宽度 + 后面内容超出正常宽度
                const lastLineOver = Boolean(
                    len === props.maxLines && lastWidth + slotBoxWidth.value > textBoxWidth.value
                );
                if (len > props.maxLines || lastLineOver) {
                    return true;
                }
            }
            return false;
        };

        const calculateOffset = (from, to) => {
            nextTick(() => {
                if (Math.abs(from - to) <= 1) {
                    return;
                }
                if (isOverflow()) {
                    to = offset.value;
                } else {
                    from = offset.value;
                }
                offset.value = Math.floor((from + to) / 2);
                calculateOffset(from, to);
            });
        };

        const toggle = () => {
            expanded.value = !expanded.value;
        };

        onMounted(() => {
            const {len} = getLines();
            if (len > props.maxLines) {
                showSlotNode.value = true;
                nextTick(() => {
                    slotBoxWidth.value = slotRef.value.clientWidth;
                    textBoxWidth.value = textOverflow.value.clientWidth;
                    calculateOffset(0, props.text.length);
                });
            }
        });
        return {
            // text,
            //   maxLines,
            //   width,
            textOverflow,
            slotRef,
            showSlotNode,
            offset,
            expanded,
            slotBoxWidth,
            textBoxWidth,
            boxStyle,
            realText,
            overEllipsis,
            calculateOffset,
            isOverflow,
            getLines,
            toggle
        };
    }
});
</script>
<style scoped lang="scss">
.slot-box {
    display: inline-block;
}
</style>
