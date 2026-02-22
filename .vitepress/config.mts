import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'StarOrange小网站',
  description: '使用VitePress强力驱动',
  base: '/My/',
  // 明确指定输出目录（可选）
  build: {
    outDir: './docs/.vitepress/dist'
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ],
    sidebar: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ]
  }
})
