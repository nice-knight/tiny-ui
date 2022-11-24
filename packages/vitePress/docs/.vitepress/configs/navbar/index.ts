import { version } from '../../../../package.json'
export const navbarZh = [
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
]