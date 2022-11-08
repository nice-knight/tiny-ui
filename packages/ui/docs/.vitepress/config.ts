import { defineConfig } from 'vitepress';
import { version } from '../../package.json'
// const sidebar = {
//     '/guide/': [
//         {
//             text: '指南',
//             items: [
//                 { text: '简介', link: '/guide/' },
//             ]
//         }
//     ],
// };

export default defineConfig({
    lang: 'en-US',
    title: 'Tiny-ui',
    description: '麻雀团队荣誉出品',
    themeConfig: {
        siteTitle: 'Tiny-ui',
        nav:[
            { text: '指南', link: '/guide/what-is-Tiny-ui', activeMatch: '/guide/' },
            { text: '组件', link: '/components/introduction', activeMatch: '/components/' },
            {
                text: version,
                items: [
                  {
                    text: '更新日志',
                    link: 'https://github.com/nice-knight/tiny-ui/CHANGELOG.md'
                  },
                  {
                    text: '贡献者',
                    link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
                  }
                ]
              }
        ],
        // logo: '/logo.svg',
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
        sidebar: {
            '/guide/':[
                {
                    text: '基础',
                    collapsible: true,
                    items: [
                      { text: '设计', link: '/guide/what-is-vitepress' },
                      { text: '导航', link: '/guide/configuration' },
                      { text: '安装', link: '/guide/deploying' },
                      { text: '快速开始', link: '/guide/getting-started' },
                    ]
                  },
                  {
                    text: '进阶',
                    collapsible: true,
                    items: [
                      { text: '国际化', link: '/guide/markdown' },
                      { text: '主题', link: '/guide/asset-handling' },
                      { text: '暗黑模式', link: '/guide/frontmatter' },
                      { text: '过度动画', link: '/guide/using-vue' },
                      { text: '更新日志', link: '/guide/api' }
                    ]
                  },
                  {
                    text: '开发',
                    collapsible: true,
                    items: [
                      { text: '开发指南', link: '/guide/markdown' },
                      { text: '开发常见问题', link: '/guide/asset-handling' },
                      { text: '提交示例', link: '/guide/frontmatter' },
                    ]
                  },
            ],
            '/components/':[
                {
                    text: 'Basic 基础组件',
                    collapsible: true,
                    items: [
                      { text: 'Button按钮', link: '/components/markdown' },
                      { text: 'border边框', link: '/components/asset-handling' },
                      { text: 'Color色彩', link: '/components/frontmatter' },
                      { text: 'Container 布局容器', link: '/components/frontmatter' },
                      { text: 'Icon 图标', link: '/components/frontmatter' },
                      { text: 'Layout 布局', link: '/components/frontmatter' },
                      { text: 'Link 链接', link: '/components/frontmatter' },
                      { text: 'Scrollbar 滚动条', link: '/components/frontmatter' },
                      { text: 'Space 间距', link: '/components/frontmatter' },
                      { text: 'Typography 排版', link: '/components/frontmatter' },
                    ]
                  },
                  {
                    text: 'Form 表单组件',
                    collapsible: true,
                    items: [
                        { text: ' Form 表单', link: '/components/markdown' },
                      { text: 'Input 输入框', link: '/components/asset-handling' },
                      { text: 'Input Number 数字输入框', link: '/components/frontmatter' },
                      { text: 'Radio 单选框', link: '/components/markdown' },
                      { text: 'Rate 评分', link: '/components/asset-handling' },
                      { text: 'Select 选择器', link: '/components/frontmatter' },
                      { text: 'Upload 上传', link: '/components/frontmatter' },
                      { text: 'Autocomplete 自动补全输入框', link: '/components/markdown' },
                      { text: 'Cascader 级联选择器', link: '/components/asset-handling' },
                      { text: 'Checkbox 多选框', link: '/components/frontmatter' },
                      { text: 'Color Picker 取色器', link: '/components/markdown' },
                      { text: 'Date Picker 日期选择器', link: '/components/asset-handling' },
                      { text: 'DateTime Picker 日期时间选择器', link: '/components/frontmatter' },
                     
                    ]
                  },
                  {
                    text: 'Data 数据展示',
                    collapsible: true,
                    items: [
                      { text: 'Pagination 分页', link: '/components/markdown' },
                      { text: 'Table 表格', link: '/components/asset-handling' },
                      { text: 'Tag 标签', link: '/components/frontmatter' },
                    ]
                  },
                  {
                    text: 'Navigation 导航',
                    collapsible: true,
                    items: [
                      { text: 'Menu 菜单', link: '/components/markdown' },
                      { text: 'Page Header 页头', link: '/components/asset-handling' },
                      { text: 'Steps 步骤条', link: '/components/frontmatter' },
                    ]
                  },
                  {
                    text: 'Feedback 反馈组件',
                    collapsible: true,
                    items: [
                      { text: 'Drawer 抽屉', link: '/components/markdown' },
                      { text: 'Alert 提示', link: '/components/asset-handling' },
                      { text: 'Dialog 对话框', link: '/components/frontmatter' },
                    ]
                  },
                  {
                    text: 'Others 其他',
                    collapsible: true,
                    items: [
                      { text: 'Divider 分割线', link: '/components/markdown' },
                      
                    ]
                  },
            ]
        }
    },
    // ...
})
