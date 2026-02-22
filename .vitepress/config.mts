import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "StarOrange的小网站",
  description: "使用Vitepress强力驱动",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide' }
    ],

    sidebar: [
      {
        text: '导航栏',
        items: [
          { text: '首页', link: '/' },
          { text: '指南', link: '/guide' }
        ]
      }
    ],

    socialLinks: [
      
    ]
  }
})
export default {
  base: '/My/'
}