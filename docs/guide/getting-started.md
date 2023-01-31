# 开始

Vitepress 目前提供的组件较少，所以从 Vuepress 和官网等渠道抽取一些组件，用于解决文档内容展示的需求。

## 第一步：安装依赖

添加 @zhengxs/vitepress-doc-components 作为项目的开发依赖。

```sh
$ yarn add --dev @zhengxs/vitepress-doc-components
```

## 第二步：使用组件库

在 `.vitepress` 目录中创建一个 `theme/index.ts` 文件

```ts
import DefaultTheme from 'vitepress/theme'

import VDComponents from '@zhengxs/vitepress-doc-components'
import '@zhengxs/vitepress-doc-components/lib/index.css'

export default {
  ...DefaultTheme,
  enhanceApp(options) {
    DefaultTheme.enhanceApp(options)

    // 全局注册
    options.app.use(VDComponents)
  },
}
```

## 第三步：在文档中使用

现在可以直接在你的文档中使用组件了。


<script setup>
const data = [
  {
    text: '尝试互动教程',
    caption: '适合喜欢边动手边学的读者。',
    link: '/',
  },
  {
    text: '继续阅读该指南',
    caption: '该指南会带你深入了解框架所有方面的细节。',
    link: '/',
  },
  {
    text: '查看示例',
    caption: '浏览核心功能和常见用户界面的示例。',
    link: '/',
  },
]
</script>

<vdc-next-steps :items="data" />

<details>

<summary>查看代码</summary>

````html
<script setup>
const data = [
  {
    text: '尝试互动教程',
    caption: '适合喜欢边动手边学的读者。',
    link: '/',
  },
  {
    text: '继续阅读该指南',
    caption: '该指南会带你深入了解框架所有方面的细节。',
    link: '/',
  },
  {
    text: '查看示例',
    caption: '浏览核心功能和常见用户界面的示例。',
    link: '/',
  },
]
</script>

<vdc-next-steps :steps="data" />
````

</details>
