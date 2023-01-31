# NextSteps 下一步

用于在当前文档内容底部添加引导链接。

## 示例

推荐在文档底部使用。

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

<vdc-next-steps :items="data" />
````

</details>

## API

### Props

| 名称  | 描述 | 类型                      | 可选值 | 默认值 |
| ----- | ---- | ------------------------- | ------ | ------ |
| items | 数据 | [`NextStep[]`](#nextstep) |

## TypeScript

### NextStep

```ts
interface NextStep {
  /**
   * 文字
   */
  text: string
  /**
   * 辅助说明
   */
  caption: string
  /**
   * 跳转地址
   */
  link: string
}
```
