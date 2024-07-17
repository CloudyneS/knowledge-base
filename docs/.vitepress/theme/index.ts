// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'home-hero-image': () => h('img', { 
        src: '/logo-dark.svg', 
        alt: 'Cloudyne systems', 
        style: "max-width: 50%; z-index: 1;"
      })
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
