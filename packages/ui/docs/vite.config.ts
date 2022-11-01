import { defineConfig } from "vite";
// 引入Unocss
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';

import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
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

