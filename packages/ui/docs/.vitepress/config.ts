import { defineConfig } from 'vitepress';

const sidebar = {
    '/guide/': [
        {
            text: '指南',
            items: [
                { text: '简介', link: '/guide/' },
            ]
        }
    ],
};

export default defineConfig({
    lang: 'en-US',
    title: 'Tiny-ui',
    description: '麻雀团队荣誉出品',
    themeConfig: {
        siteTitle: 'Tiny-ui',
        sidebar: sidebar
    },
    // ...
})
