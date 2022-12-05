<template>
  <div>
    <div>
      <slot name="default" />
    </div>
    <div>
      <div @click="changeCodeVisible">
        {{ !codeVisibleFlag ? "显示" : "隐藏" }}
      </div>
    </div>
    <code v-if="codeVisibleFlag">{{ html }}</code>
  </div>
</template>

<script setup lang="ts">
// comp-name 是组件的名字

import { ref, onMounted } from "vue";
// demo-name 是demo的名字
const props = defineProps(["compName", "demoName"]);

// 控制代码可见性
const codeVisibleFlag = ref(false);
const changeCodeVisible = () => {
  codeVisibleFlag.value = !codeVisibleFlag.value;
};

// 获取html
const html = ref("");
onMounted(() => {
  fetch(`/demo/${props["compName"]}/${props["demoName"]}.vue`)
    .then((i) => i.text())
    .then((res) => {
      html.value = res;
      console.log("html", html.value);
    });
});
</script>
