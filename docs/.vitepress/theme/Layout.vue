<script lang="ts" setup>
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import CommentsAuthGuard from './components/CommentsAuthGuard.vue'
import Comments from './components/Comments.vue'

const ParentLayout = DefaultTheme.Layout

const { frontmatter } = useData()
</script>

<template>
  <ParentLayout>
    <template #doc-footer-before>
      <ClientOnly>
        <CommentsAuthGuard>
          <Comments
            v-if="frontmatter.issueId"
            :issueId="frontmatter.issueId"
            :key="frontmatter.issueId"
          />
        </CommentsAuthGuard>
      </ClientOnly>
    </template>
  </ParentLayout>
</template>
