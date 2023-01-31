<script lang="ts" setup>
const data = [
  {
    text: '类型',
    items: [
      {
        text: 'NextSteps',
        items: [
          {
            text: 'NextStep',
            link: '/components/next-steps#nextstep',
          },
        ],
      },
      {
        text: 'ReferencePage',
        items: [
          {
            text: 'ReferenceGroup',
            link: '/components/reference-page#referencegroup',
          },
        ],
      },
    ],
  },
]
</script>

<template>
  <vdc-reference-page :items="data" />
</template>
