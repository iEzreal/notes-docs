module.exports = {
  base: '/notes-docs/',
  title: 'Ming Notes',
  description: 'notes',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: 'Last Updated', // string | boolean
    nav: [
      { text: '首页', link: '/' },
      { text: '手记', link: '/javascript/javascript' },
      {
        text: 'Api',
        ariaLabel: 'Language Menu',
        items: [
          { text: '网站前端', link: '/api/' },
          { text: '网站后端', link: '/api/admin/' }
        ]
      },
      { text: '代码片段', link: '/javascript/javascript' },
      { text: 'GitHub', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '网站前端',   // 必要的
        path: '/api/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
      }
    ]
  },
  markdown: {
    lineNumbers: true
  }
}