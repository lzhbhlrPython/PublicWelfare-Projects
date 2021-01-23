module.exports = {
    title: 'Doing Public Welfare in Coding',
    description: 'Make the world Beautiful in code.',
    head: [
        ["link", { rel: "icon", href: "https://storage.pyliubaolin.top/ArchiveImage/2021-01-22_lzhbhlrPython/2021-01-22_15-49-33[gui].jpg" }]
    ],
    plugin: [
        "@vuepress/active-header-links", "@vuepress/back-to-top"
    ],
    themeConfig: {
        logo: "https://storage.pyliubaolin.top/ArchiveImage/2021-01-22_lzhbhlrPython/2021-01-22_15-49-33[gui].jpg",
        nav: [{
            text: "关于我",
            link: "/About"
        }, {
            text: "项目清单",
            link: "/projects/"
        }],
        sidebar: {
            "/projects/": [
                ["", "项目清单"],
                ["PublicWelfare_lzhbhlrpython.html", "编码公益网站_Lzhbhlrpython"]
            ]
        }
    },
    markdown: {
        toc: {
            "includeLevel": [1, 2, 3, 4, 5, 6]
        }
    }
}