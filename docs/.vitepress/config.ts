import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  lang: 'zh-CN',
  title: 'Vitepress 文档组件',
  description: '日常使用的 Vitepress 文档组件',
  themeConfig: {
    siteTitle: 'VDComponents',
    nav: [
      {
        text: '文档',
        link: '/guide/getting-started'
      },
      {
        text: '参考',
        link: '/reference/'
      }
    ],
    sidebar: [
      {
        text: '开始',
        items: [
          {
            text: '快速上手',
            link: '/guide/getting-started'
          }
        ]
      },
      {
        text: '组件',
        items: [
          {
            text: 'NextSteps',
            link: '/components/next-steps'
          },
          {
            text: 'ReferencePage',
            link: '/components/reference-page'
          }
        ]
      }
    ],
    outlineTitle: '目录',
    lastUpdatedText: '上次更新',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhengxs2018/vitepress-doc-components' },
    ],
    editLink: {
      pattern:
        'https://github.com/zhengxs2018/vitepress-doc-components/-/blob/main/docs/:path',
      text: '在 Gitlab 上编辑此页',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright:
        'Copyright © 2023-present <a href="https://github.com/zhengxs2018">zhengxs2018</a>',
    },
  },
  vite: {
    server: {
      host: true,
    },
    json: {
      stringify: true,
    },
  },
})
