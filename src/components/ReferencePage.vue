<script lang="ts">
import { withBase } from 'vitepress'
import { defineComponent, computed, ref, PropType } from 'vue'

export interface ReferenceItem {
  text: string
  link: string
}

export interface ReferenceGroupItem extends ReferenceItem {
  items: ReferenceItem[]
}

export interface ReferenceGroup {
  text: string
  items: ReferenceGroupItem[]
}

const normalize = (s: string) => s.toLowerCase().replace(/-/g, ' ')

export default defineComponent({
  name: 'vdc-reference-page',
  props: {
    items: {
      type: Array as PropType<ReferenceGroup[]>,
      default: () => [],
    },
  },
  setup(props) {
    const query = ref('')

    const filtered = computed(() => {
      const q = normalize(query.value)
      const matches = (text: string) => normalize(text).includes(q)

      const filterItem = (
        item: ReferenceGroupItem,
      ): ReferenceGroupItem | null => {
        // group title match
        if (matches(item.text)) return item

        // filter headers
        const matchedHeaders = item.items.filter(
          ({ text, link }) => matches(text) || matches(link),
        )
        return matchedHeaders.length
          ? { text: item.text, link: item.link, items: matchedHeaders }
          : null
      }

      return props.items
        .map(section => {
          // section title match
          if (matches(section.text)) return section

          // filter groups
          const matchedGroups = section.items.map(filterItem).filter(Boolean)

          return matchedGroups.length
            ? { text: section.text, items: matchedGroups }
            : null
        })
        .filter(Boolean) as ReferenceGroup[]
    })

    return {
      query,
      filtered,
      withBase,
    }
  },
})
</script>

<template>
  <div class="vdc-reference-page">
    <div class="vdc-reference-page__header">
      <h1 class="vdc-reference-page__title">API 参考</h1>
      <div class="vdc-reference-filter">
        <label for="vdc-reference-filter">Filter</label>
        <input
          v-model="query"
          id="vdc-reference-filter"
          type="search"
          placeholder="Enter keyword"
        />
      </div>
    </div>

    <div
      v-for="section of filtered"
      :key="section.text"
      class="vdc-reference-section"
    >
      <h2 class="vdc-reference-section__title">{{ section.text }}</h2>
      <div class="vdc-reference-groups">
        <div
          v-for="item of section.items"
          :key="item.text"
          class="vdc-reference-group"
        >
          <h3 class="vdc-reference-group__title">{{ item.text }}</h3>
          <ul class="vdc-reference-indexes">
            <li v-for="h of item.items" :key="h.link">
              <a :href="withBase(h.link)">{{ h.text }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div v-if="!filtered.length" class="vdc-reference-no-match">
      No API matching "{{ query }}" found.
    </div>
  </div>
</template>

<style scoped>
.vdc-reference-page {
  max-width: 1024px;
  margin: 0px auto;
  padding: 64px 32px;
}

.vdc-reference-page__title,
.vdc-reference-section__title,
.vdc-reference-group__title {
  font-weight: 600;
  line-height: 1;
}

.vdc-reference-page__title,
.vdc-reference-section__title {
  letter-spacing: -0.02em;
}

.vdc-reference-page__title {
  font-size: 38px;
}

.vdc-reference-section__title {
  font-size: 24px;
  color: var(--vp-c-text-1);
  margin: 36px 0;
  transition: color 0.5s;
  padding-top: 36px;
  border-top: 1px solid var(--vp-c-divider-light);
}

.vdc-reference-group__title {
  letter-spacing: -0.01em;
  color: var(--vp-c-brand);
  font-size: 18px;
  margin-bottom: 1em;
  transition: color 0.5s;
}

.vdc-reference-indexes {
  list-style: none;
  margin: 0;
  padding: 0;
}

.vdc-reference-section {
  margin-bottom: 64px;
}

.vdc-reference-groups a {
  font-size: 15px;
  font-weight: 500;
  line-height: 2;
  color: var(--vp-c-text-code);
  transition: color 0.5s;
}

.dark .vdc-reference-groups a {
  font-weight: 400;
}

.vdc-reference-groups a:hover {
  color: var(--vp-c-brand);
  transition: none;
}

.vdc-reference-group {
  break-inside: avoid;
  overflow: auto;
  margin-bottom: 20px;
  background-color: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 28px 32px;
  transition: background-color 0.5s;
}

.vdc-reference-page__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.vdc-reference-filter {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
}

.vdc-reference-filter input {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 6px 12px;
}

.vdc-reference-filter:focus {
  border-color: var(--vp-c-brand-light);
}

.vdc-reference-no-match {
  font-size: 1.2em;
  color: var(--vt-c-text-3);
  text-align: center;
  margin-top: 36px;
  padding-top: 36px;
  border-top: 1px solid var(--vp-c-divider-light);
}

@media (max-width: 768px) {
  .vdc-reference-page {
    padding: 42px 24px;
  }
  .vdc-reference-page__title {
    font-size: 32px;
    margin-bottom: 24px;
  }
  .vdc-reference-section__title {
    font-size: 22px;
    margin: 42px 0 32px;
    padding-top: 32px;
  }
  .vdc-reference-page__header {
    display: block;
  }
  .vdc-reference-groups a {
    font-size: 14px;
  }
}
@media (min-width: 1024px) {
  .vdc-reference-groups {
    columns: 2;
  }
}

@media (min-width: 1440px) {
  .vdc-reference-groups {
    columns: 3;
  }
}
</style>
