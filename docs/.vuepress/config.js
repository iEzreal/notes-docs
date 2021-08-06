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
      { text: '手记', link: '/interview/' },
      { text: 'CSS', link: '/css/css-float/' },
      { text: 'javascript', link: '/javascript/' },
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
    sidebar: {
      '/css/css-float/' : [
        'css-float'
      ]
    }
  },
  // markdown: {
  //   lineNumbers: true
  // }
}
