import { defineConfig } from 'vitepress';
import {
  navbarZh,
  sidebarZh,
} from './configs/index.js'
export default defineConfig({
    lang: 'en-US',
    title: 'Tiny-ui',
    description: '麻雀团队荣誉出品',
    head:[
      //顶部logo  TODO
        [
          'link', {rel: 'icon', href:'/images/logo.png'}
        ],
        // 覆盖全局vitepress样式
        [
          'link', {rel: 'stylesheet', href:'/css/index.css'}
        ]
    ],
    
    themeConfig: {
        siteTitle: 'Tiny-ui',
        nav:navbarZh,
        carbonAds: {
            code: 'CEBDT27Y',
            placement: 'vuejsorg'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/nice-knight/tiny-ui' }
        ],
        footer: {
            message: '麻雀团队荣誉出品成员名单',
            copyright: 'Copyright © 2022-present 麻雀团队荣誉出品'
        },
        sidebar: sidebarZh
    },
    // ...
})
