## HfexEllipsis
### 多行文本展开与收起

### 安装使用

### `npm`安装


```bash
npm i hfex-ellipsis
```
### vue组件引入(Vue3)

```html
<HfexEllipsis
    :text="text"
    :max-lines="5"
>
    <template v-slot:default="{clickToggle, expanded}">
        <span
            class="expand-text"
            @click="clickToggle"
        >{{ expanded ? '收起' : '阅读全文' }}
        </span>
    </template>
</HfexEllipsis>
```
```js
<script setup lang="ts">
import HfexEllipsis from 'hfex-ellipsis'

const text = 'HfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsis';

<script/>
```

### vue组件引入(Vue2)

```html
<HfexEllipsis
    :text="text"
    :max-lines="5"
>
    <template v-slot:default="{clickToggle, expanded}">
        <span
            class="expand-text"
            @click="clickToggle"
        >{{ expanded ? '收起' : '阅读全文' }}
        </span>
    </template>
</HfexEllipsis>
```js
import HfexEllipsis from 'hfex-ellipsis/dist/vue2/esm'
export default {
    data(){
        return{
            text:'HfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsisHfexEllipsis'
        }
    },
    components:{
        HfexEllipsis
    }
}
```
### props

|   Prop    |   Type    |   Default  |   description    |   required    |
|  ----  | ----  |  ----  | ----  |  ----  | 
|   text |   string  |   ' '   |   文本   |   true   |
|   maxLines   |   number  |   3  |  超过多少行隐藏   | false|
|   width   |   number  |   组件容器占父容器宽度比例  |  100   | false|
|   clickToggle   |   function  |  clickToggle   |  展开收起方法   | true|
|   expanded   |   boolean  |  expanded   |  显示文本展开或者收起   | true|





### 截图示例
![截图示例](https://raw.githubusercontent.com/UzumakiHan/static-files/master/images/hide.png)

![截图示例](https://raw.githubusercontent.com/UzumakiHan/static-files/master/images/show.png)
