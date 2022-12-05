<template>
  <div>
    <div>
      <slot name="default" />
    </div>
    <div>
      <div class="switchBtn" @click="changeCodeVisible">{{!codeVisibleFlag ? "</>" : "<>"}}</div>
    </div>
     <pre v-if="codeVisibleFlag" ><code :class="'language-'+ type" v-html="Prism.highlight(html, Prism.languages[type], type)"></code></pre>
    <!-- <pre v-if="codeVisibleFlag"> <code>{{html}}</code></pre> -->
  </div>
</template>
  
<script setup lang="ts">
import Prism from 'prismjs';
  // comp-name 是组件的名字
import { ref, nextTick, onMounted, computed } from 'vue';
//import 'prismjs/themes/prism.css'
  // demo-name 是demo的名字
  const props = defineProps({
  code: {
    type: String,
    default: "",
 },
 type: {
    type: String,
    default: "markup",
  },
  isShowlineNumbers: {
    type: Boolean,
    default: false,
  },
  compName:{
    type: String,
    default: "",
  },
   demoName:{
    type: String,
    default: "",
  }
});

const type = ref('js')

  // 控制代码可见性
  const codeVisibleFlag = ref(false);
  const changeCodeVisible = ()=>{
    codeVisibleFlag.value = !codeVisibleFlag.value;
  }
  // 获取html
  const html = ref("");
  fetch(`/demo/${props['compName']}/${props['demoName']}.vue`).then(i=>i.text()).then(
    (res)=>{
      html.value = res;
      nextTick(() => {
        Prism.highlightAll();
      });
      console.log("html",html.value);
    }
  )


</script>
<style lang="scss">
.switchBtn{
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  border-bottom: 1px solid var(--vp-c-divider-light);
}
</style>
