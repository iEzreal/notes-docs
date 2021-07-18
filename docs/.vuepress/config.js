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
            { text: 'Home', link: '/' },
            { text: '手记', link: '/javascript/javascript' },
            { text: 'External', link: 'https://google.com' },
        ]
    }
}