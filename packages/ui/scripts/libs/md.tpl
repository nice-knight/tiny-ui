# 组件名

### 介绍

组件用途的简单介绍

### 基本用法

```html
<script setup>
import demo from './demo.vue'
import { ref } from 'vue'

const value = ref(3)
</script>

<template>
  
</template>
```

<PreView compName="{{componentName}}" demoName="demo">
    <demo />
</PreView>

## API

### 属性

| 参数                | 说明                                 | 类型      | 默认值         |
|--------------------|------------------------------------- | ----------|---------------|
| `v-model`          | 当前进度值                            | _number   | [number] | `0`|
| `disabled`         | 是否禁用                              | _boolean_ | `false`       |
| `readonly`         | 是否只读                              | _boolean_ | `false`       |
| `rules`            | 校验规则                              | _array_   | `-`           |


### 事件

| 事件名 | 说明 | 回调参数 |
| ----- | -------- | -------- |
| `change` | 	值改变时触发| value: 当前进度|
| `start` | 开始拖动时触发 | `-` |
| `end` | 结束拖动时触发 | value: 当前进度 |

### 插槽

| 名称 | 说明 | 参数 |
| ----- | -------------- | -------- |
| `button` | 自定义滑动按钮 | `currentValue`: 当前进度 |

### 样式变量

以下为组件使用的 css 变量，可以使用 [StyleProvider 组件](#/zh-CN/style-provider) 进行样式定制

| 变量名 | 默认值 |
| --- | --- |
| `--slider-error-color` | `var(--color-danger)` |
| `--slider-track-background` | `#bdbdbd` |
| `--slider-track-fill-background` | `var(--color-primary)` |
| `--slider-thumb-block-background` | `var(--color-primary)` |
| `--slider-thumb-ripple-background` | `var(--color-primary)` |
| `--slider-thumb-label-background` | `var(--color-primary)` |
| `--slider-thumb-label-font-size` | `var(--font-size-sm)` |
| `--slider-disabled-opacity` | `var(--opacity-disabled)` |
