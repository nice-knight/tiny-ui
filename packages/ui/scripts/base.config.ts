import { resolve } from "path";
import { defineConfig, PluginOption, type UserConfigExport } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";


export const withoutPlugins: PluginOption[] = [
    vueJsx(),
];

export const AllPlugins: PluginOption[] = [
    vue({
        include: [/\.vue$/, /\.md$/, /\.tsx$/],
    }),
    ...withoutPlugins
];

// 文档: https://vitejs.dev/config/
export const baseConfig: UserConfigExport = defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "../src"),
        },
    },
    plugins: [
        ...AllPlugins
    ],
});
