// docs/.vitepress/config.mts
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'StarOrange小站',
  description: '使用VitePress强力驱动',
  base: '/My/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ],
    sidebar: [
      { text: '快速开始', link: '/guide' }
    ]
  }
})
