<!-- 加载 demo 组件 start -->
<script setup>
import demo from './demo.vue'
</script>
<!-- 加载 demo 组件 end -->

<!-- 正文开始 -->

# 按钮

简单的按钮展示

## 基础用法
<PreView comp-name="Calendar" demo-name="demo">
  <demo />
</PreView>

## 属性
参数 | 说明 | 类型 | 可选值 | 默认值 | 是否必填
:-: | :-: | :-: | :-: | :-: | :-:
`showDay` | 能被dayjs接收的参数 | string | - | `当前时间` | 否

## 事件
事件名 | 说明 | 参数列表 | 参数说明
:-: | :-: | :-: | :-:
`click` | 点击事件 | item | item:

## slot
插槽名称 | 说明  | 参数说明
:-: | :-: | :-:
`header` | 头部的插槽 |   无
`item` | 日期下方的作用域插槽 | item:
