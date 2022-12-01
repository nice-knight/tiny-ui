---
layout: doc
---
# 快速开始

 本节将介绍如何在项目中使用 Tiny UI。

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。


```ts
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'Tiny UI'
import 'Tiny UI/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

### 按需导入

您需要使用额外的插件来导入要使用的组件。

```ts
<template>
  <el-button>I am ElButton</el-button>
</template>
<script>
  import { ElButton } from 'element-plus'
  export default {
    components: { ElButton },
  }
</script>
```