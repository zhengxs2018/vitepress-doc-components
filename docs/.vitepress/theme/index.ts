import DefaultTheme from 'vitepress/theme'

import VDComponents from '@zhengxs/vitepress-doc-components'
import '@zhengxs/vitepress-doc-components/lib/index.css'

import './theme.css'

export default {
  ...DefaultTheme,
  enhanceApp(options) {
    DefaultTheme.enhanceApp(options)

    options.app.use(VDComponents)
  },
}
