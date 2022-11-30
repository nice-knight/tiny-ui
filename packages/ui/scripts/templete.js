/**
 * 组件导出模版
 * @param {*} name 
 * @returns 
 */
const creatPluginTemplete = (name) => {
    return `import type { App, Plugin } from "vue";
    import ${name} from "./src/${name}.vue";
    
    export const ${name}Plugin: Plugin = {
        install(app: App) {
            app.component("Tiny${name}", ${name} as any);
        },
    };
    
    export { ${name} };
    `;
};
/**
 * 组件编写模版
 * @param {*} name 
 * @returns 
 */
const creatTemplete = (name) => {
    return `<script setup lang="ts">
    </script>
    <template>
      <div class="${name}">
       ${name}组件
      </div>
    </template>
    <style lang="scss" scoped>
    </style>`;
};
/**
 * doc/README.md文件模版
 * @param {*} name 
 * @returns 
 */
const creatMdTemplete = (name) => {
    return `<script setup>
            import demo from './demo.vue'
            </script>
           
            ## 基础用法

            <PreView compName="${name}" demoName="demo">
              <demo />
            </PreView>
 `;
};
/***
  * doc/demo.vue文件模版
 * @param {*} name 
 * @returns 
 */
const creatDemoTemplete = (name)=>{
    return `<script setup lang="ts">
    </script>
    <template>
      <div class="demo">
        <Tiny${name}>23333</Tiny${name}>
      </div>
    </template>`;
};
/**
 * 组件注册初始化
 * @returns 
 */
const insetComponentInstallTemplete =(name)=>{
    return `import type { App, Plugin } from 'vue';
   {{importPlugins}}
    const Plugins: Plugin = {
        install(app: App, options):void {
            {{installPlugins}}
        },
    };
    export default Plugins;
    {{ exportPlugins }}`;
};

export {insetComponentInstallTemplete, creatDemoTemplete, creatMdTemplete, creatTemplete, creatPluginTemplete};
