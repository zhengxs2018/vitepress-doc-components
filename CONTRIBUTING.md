# 贡献指南

## 介绍

在提交 issue 或者 PR 之前，请先花几分钟时间阅读以下文字。

## Issue 规范

遇到问题时，请先确认这个问题是否已经在 issue 中有记录或者已被修复。
提 issue 时，请用简短的语言描述遇到的问题，并添加出现问题时的环境和复现步骤。

## 参与开发

在进行本地开发前，请先确保你的开发环境中安装了 [`Node.js >= 12 && < 16`](https://nodejs.org/zh-cn/).

按照下面的步骤操作，即可在启动应用。

```sh
# 克隆仓库
$ git clone https://github.com/zhengxs2018/vitepress-doc-components.git

# 安装依赖
$ pnpm install
```

## 代码规范

在编写代码时，请注意：

- 确保代码可以通过仓库的 ESLint 校验。
- 确保代码格式是规范的，使用 prettier 进行代码格式化。

## Pull Request 规范

在提交 Pull Request 时，请注意：

- 如果遇到问题，建议保持你的 PR 足够小。保证一个 PR 只解决单个问题、添加单个功能。
- 在 PR 中请添加合适的描述，并关联相关的 Issue。

## Pull Request 流程

- fork 主仓库，如果已经 fork 过，请同步主仓库的最新代码。
- 基于 fork 后仓库的 dev 分支新建一个分支，比如 feature/new_component。
- 在新分支上进行开发，开发完成后，提 Pull Request 到主仓库的 dev 分支。
- Pull Request 会在 Review 通过后被合并到主仓库。

## 同步最新代码

```sh
# 添加主仓库到 remote，作为 fork 后仓库的上游仓库
$ git remote add upstream https://github.com/zhengxs2018/vitepress-doc-components.git

# 拉取主仓库最新代码
$ git fetch upstream

# 切换至 dev 分支
$ git checkout dev

# 合并主仓库代码
$ git merge upstream/dev
```
