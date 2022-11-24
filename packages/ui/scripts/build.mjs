import { defineConfig, build } from 'vite';
import {resolve,dirname} from "path";
// 引入Unocss
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import vueJsx from "@vitejs/plugin-vue-jsx";
import vue  from '@vitejs/plugin-vue';
import { fileURLToPath } from 'url';
import dts from 'vite-plugin-dts';


const __filename = fileURLToPath(import.meta.url);

const __dirname = dirname(__filename);


// 入口文件
const entryFile = resolve(__dirname, '../src/index.ts');

// 输出目录
const outputDir = resolve(__dirname, '../dist');

// 基础配置
const baseConfig = defineConfig({
    configFile: false,
    publicDir: false,
    plugins: [
        vue(),
        vueJsx(),
        // 使用Unocss
        Unocss({
            presets: [
                presetUno(),
                presetAttributify(),
                presetIcons(),
            ],
            // rules可以新增规则, 先放置为以后需要准备
            rules: []
        }),
        dts(),
    ],
    build: {
        sourcemap: true
    },
});

// rollup配置
const rollupOptions = {
    // 外置
    external: ['vue', 'vue-router'],
    output: {
        globals: {
            vue: 'Vue'
        }
    }
};
// 执行创建
// 全量构建
const buildAll = async () => {
    await build(
        defineConfig({
            ...baseConfig,
            build: {
                cssCodeSplit:true,
                rollupOptions,
                lib: {
                    entry: entryFile,
                    name: 'tiny-ui',
                    fileName: 'tiny-ui',
                    formats: ['es', 'umd']
                },
                outDir: outputDir
            }
        })
    );
};


buildAll();
