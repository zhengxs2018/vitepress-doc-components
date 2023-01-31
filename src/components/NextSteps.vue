<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { withBase } from 'vitepress'

export interface NextStep {
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

export default defineComponent({
  name: 'vdc-next-steps',
  props: {
    items: Array as PropType<NextStep[]>,
  },
  setup() {
    return {
      withBase,
    }
  },
})
</script>

<template>
  <div class="vdc-box-container vdc-next-steps">
    <a
      v-for="(step, i) in items"
      class="vdc-box"
      :href="step.link ? withBase(step.link) : 'javascript: void 0;'"
      :key="i"
    >
      <p class="vdc-next-steps-link">{{ step.text }}</p>
      <p class="vdc-next-steps-caption">{{ step.caption }}</p>
    </a>
  </div>
</template>

<style src="../style.css"></style>

<style>
.vdc-next-steps {
  margin-top: 3rem;
}

.vdc-next-steps .vdc-box {
  border: 1px solid var(--vp-c-bg-soft);
}

.vdc-next-steps .vdc-box:hover {
  border-color: var(--vp-c-brand-light);
  transition: border-color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.vdc-next-steps-link {
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: -0.02em;
  margin-bottom: 0.75em;
  display: block;
  color: var(--vp-c-brand);
}

.vdc-next-steps-caption {
  margin-bottom: 0;
  color: var(--vp-c-text-2);
  transition: color 0.5s;
}
</style>
