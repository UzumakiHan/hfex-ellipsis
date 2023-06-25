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

<script>
export default {
    name: 'HfexEllipsis',
    props: {
        text: {
            type: String,
            default: '',
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
    data() {
        return {
            expanded: false,
            slotBoxWidth: 0,
            showSlotNode: false,

            offset: this.text.length,
            textBoxWidth: this.width
        };
    },
    computed: {
        boxStyle() {
            if (this.width) {
                return {
                    width: `${this.width}%`
                };
            } else {
                return '';
            }
        },
        realText() {
            // 是否被截取
            const isCutOut = this.offset !== this.text.length;
            let realTextDesc = this.text;
            if (isCutOut && !this.expanded) {
                realTextDesc = `${this.text.slice(0, this.offset)}...`;
            }
            return realTextDesc;
        }
    },
    mounted() {
        const {len} = this.getLines();
        if (len > this.maxLines) {
            this.showSlotNode = true;
            this.$nextTick(() => {
                this.slotBoxWidth = this.$refs.slotRef.clientWidth;
                this.textBoxWidth = this.$refs.textOverflow.clientWidth;
                this.calculateOffset(0, this.text.length);
            });
        }
    },
    methods: {
        getLines() {
            const clientRects = this.$refs.overEllipsis.getClientRects();
            return {
                len: clientRects.length,
                lastWidth: clientRects[clientRects.length - 1].width
            };
        },
        isOverflow() {
            const {len, lastWidth} = this.getLines();

            if (len < this.maxLines) {
                return false;
            }
            if (this.maxLines) {
                // 超出部分 行数 > 最大行数 或则  已经是最大行数但最后一行宽度 + 后面内容超出正常宽度
                const lastLineOver = Boolean(
                    len === this.maxLines && lastWidth + this.slotBoxWidth > this.textBoxWidth
                );
                if (len > this.maxLines || lastLineOver) {
                    return true;
                }
            }
            return false;
        },
        calculateOffset(from, to) {
            this.$nextTick(() => {
                if (Math.abs(from - to) <= 1) {
                    return;
                }
                if (this.isOverflow()) {
                    to = this.offset;
                } else {
                    from = this.offset;
                }
                this.offset = Math.floor((from + to) / 2);
                this.calculateOffset(from, to);
            });
        },
        toggle() {
            this.expanded = !this.expanded;
        }
    }
};
</script>
<style scoped lang="scss">
.slot-box {
    display: inline-block;
}
</style>
