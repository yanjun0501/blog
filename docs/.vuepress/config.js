/*
 * @Descripttion: 
 * @version: 
 * @Author: yanjun
 * @Date: 2019-08-01 19:56:11
 * @LastEditors: yanjun
 * @LastEditTime: 2019-08-19 09:58:23
 */
module.exports = {
  plugins: [
    '@vuepress/back-to-top',
    [
      "vuepress-plugin-live2d",
      {
        modelName: '',
        mobileShow: ''
      }
    ]
  ],
  title: '聆歌',
  description: '快乐生活，认真生活',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/icon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    footer: '锁窗前月明色, 雕阑外夜气清', // 会显示在博客的 footer 中
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'https://github.com/yanjun0501/blog',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    // repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    // docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！',
    sidebarDepth: 0, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav:[
      { text: '关于我', link: '/about' },
      { text: '生活', link: '/life/' },
      { 
        text: '乐趣', 
        items: [
          { text: '音乐', link: '/my/music/' },
          { text: '道文化', link: '/my/dao/' },
          { text: '二次元', link: '/my/acg/' },
        ],
      },
      { 
        text: '技术',
        items: [
          { text: '前端', link: '/technology/fe/' },
          { text: 'Node', link: '/technology/node/' },
          { text: '后端(No)', link: '/technology/be/' },
        ],
      }, 
      { text: '联系我', link: '/contact' },    
    ],
    // sidebar: 'auto',
    displayAllHeaders: true,
    sidebar: {
      '/life/': [
        '',     /* /foo/ */
        '由晕倒产生的反思'
      ],
      '/my/music/': [
        '',
      ],
      '/my/dao/': [
        '',
        {
          title: '道经',
          collapsable: false,
          children: [
            '道经/',
            '道经/一'
          ]
        },
        {
          title: '德经',
          collapsable: false,
          children: [
            '德经/',
            '德经/一'
          ]
        },
      ],
      '/my/dao/道经/': [
        '',
        '一'
      ],
      '/my/acg/': [
        '',
      ],
      '/technology/fe/': [
        '',
        {
          title: '冷门坑',
          collapsable: false,
          children: [
            'problems/Github 因更换邮箱或账号丢失 commit 解决办法',
            'problems/Chrome v72+ 出现Provisional headers are shown解决办法'
          ]
        },
        {
          title: '玩具',
          collapsable: false,
          children: [
            'tools/2Home —— 提醒下班小猪手',
            'tools/2Alive —— 小巧视频站',
            'tools/VuePress插件 —— 让你的博客也拥有Live2D~'
          ]
        },
      ],
      '/technology/be/': [
        '',
      ],
      '/technology/node/': [
        '',
        'Node.js 开发环境搭建'
      ],
      // fallback
      '/': [
        // '',        /* / */
        'about'    /* /about.html */
      ]
    }
  }
};