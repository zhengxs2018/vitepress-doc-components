import type { Plugin } from 'vue'

import NextSteps, { NextStep } from './components/NextSteps.vue'

import ReferencePage, {
  ReferenceItem,
  ReferenceGroup,
} from './components/ReferencePage.vue'

export { NextSteps, ReferencePage }
export type { NextStep, ReferenceItem, ReferenceGroup }

const plugin: Plugin = {
  install(app) {
    app.component(NextSteps.name, NextSteps)
    app.component(ReferencePage.name, ReferencePage)
  },
}

export default plugin
