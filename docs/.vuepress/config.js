module.exports = {
    title: 'hyt \'s blog',
    description: 'ctrl c + ctrl v',
    base: '/blog/',
    head: [
        ['link', {
            rel: 'apple-touch-icon',
            href: '/imges/logo.ico'
        }],
        ['link', {
            rel: 'manifest',
            href: '/manifest.json'
        }],
    ],
    themeConfig: {
        nav: [{
                text: '主页',
                link: '/'
            },
            {
                text: '博文',
                items: [{
                        text: 'HTML',
                        link: '/html/'
                    },
                    {
                        text: 'CSS',
                        link: '/css/'
                    },
                    {
                        text: 'JavaScript',
                        link: '/js/'
                    }
                ]
            },
            {
                text: '关于',
                link: '/about/'
            },
            {
                text: 'Github',
                link: 'https://github.com/hytStart'
            },
        ],
        sidebar: {
            '/html/': [
                "",
                "one",
                "two",
            ],
            "/css/": [
                "",
            ],
            "/js/": [
                "",
            ],
            '/': [
                '', /* / */
                'about' /* /about.html */
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
    },
    serviceWorker: true,
}