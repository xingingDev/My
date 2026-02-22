import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '我的技术文档',
  description: '使用VitePress构建的文档站点',
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
      { text: '快速开始', link: '/guide' }
    ]
  }
})
