# ReferencePage 参考页

用于显示 API 列表。

此组件为页面级组件，建议独立一个文档页，并且配置如下 [Frontmatter](https://vitepress.vuejs.org/config/frontmatter-configs)

````
---
layout: page
sidebar: false
---
````

## 示例

点击 [这里](../reference/index.md) 查看效果。

<details>

<summary>查看代码</summary>

````html
<!--@include: @/reference/ReferenceIndex.vue-->
````

</details>

## API

### Props

| 名称  | 描述 | 类型                      | 可选值 | 默认值 |
| ----- | ---- | ------------------------- | ------ | ------ |
| items | 数据 | [`ReferenceGroup[]`](#referencegroup) |

## TypeScript

### ReferenceGroup

```ts
interface ReferenceItem {
  text: string
  link: string
}

interface ReferenceGroupItem extends ReferenceItem {
  items: ReferenceItem[]
}

interface ReferenceGroup {
  text: string
  items: ReferenceGroupItem[]
}
```
