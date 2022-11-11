import { defineConfig } from "vite";
// 引入Unocss
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';
import vueJsx from "@vitejs/plugin-vue-jsx";
// import fs from 'node:fs';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';
// const getSubDirectories = (dir: string): string[] =>
//     fs.readdirSync(dir).filter((item) => fs.statSync(path.join(dir, item)).isDirectory());
// const root = path.dirname(fileURLToPath(import.meta.url));
// const nonScopedPackages = ['vuepress', 'vuepress-vite', 'vuepress-webpack'];
// const corePackages = getSubDirectories(path.resolve(root, 'packages'));
// const ecosystemPackages = getSubDirectories(
//     path.resolve(root, 'ecosystem')
// ).filter((item) => !nonScopedPackages.includes(item));
export default defineConfig({
    // resolve: {
    //     alias: [
    //         {
    //             find: new RegExp(`^@vuepress/(${corePackages.join('|')})$`),
    //             replacement: path.resolve(root, './packages/$1/src/index.ts'),
    //         },
    //         {
    //             find: new RegExp(`^@vuepress/(${ecosystemPackages.join('|')})$`),
    //             replacement: path.resolve(root, './ecosystem/$1/src/index.ts'),
    //         },
    //     ],
    // },
    plugins: [
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
        })
    ],
    server: {
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['../../../']
        }
    }
});

