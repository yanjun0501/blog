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
    ],
    [
      '@vuepress/register-components',
      {
        componentsDir: './components'
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
        {
          title: '视唱练耳',
          collapsable: false,
          children: [
            '视唱练耳/',
          ]
        },
        {
          title: '基础',
          collapsable: false,
          children: [
            '基础/',
          ]
        },
        {
          title: '进阶',
          collapsable: false,
          children: [
            '进阶/',
          ]
        },
      ],
      '/my/dao/': [
        '',
        {
          title: '道经',
          collapsable: false,
          children: [
            '道经/',
            '道经/一',
            '道经/二',
            '道经/三',
            '道经/四',
            '道经/五',
            '道经/六',
            '道经/七',
            '道经/八',
            '道经/九',
            '道经/十',
            '道经/十一',
            '道经/十二',
            '道经/十三',
            '道经/十四',
            '道经/十五',
            '道经/十六',
            '道经/十七',
            '道经/十八',
            '道经/十九',
            '道经/二十',
            '道经/二十一',
            '道经/二十二',
            '道经/二十三',
            '道经/二十四',
            '道经/二十五',
            '道经/二十六',
            '道经/二十七',
            '道经/二十八',
            '道经/二十九',
            '道经/三十',
            '道经/三十一',
            '道经/三十二',
            '道经/三十三',
            '道经/三十四',
            '道经/三十五',
            '道经/三十六',
            '道经/三十七',
          ]
        },
        {
          title: '德经',
          collapsable: false,
          children: [
            '德经/',
            '德经/三十八',
            '德经/三十九',
            '德经/四十',
            '德经/四十一',
            '德经/四十二',
            '德经/四十三',
            '德经/四十四',
            '德经/四十五',
            '德经/四十六',
            '德经/四十七',
            '德经/四十八',
            '德经/四十九',
            '德经/五十',
            '德经/五十一',
            '德经/五十二',
            '德经/五十三',
            '德经/五十四',
            '德经/五十五',
            '德经/五十六',
            '德经/五十七',
            '德经/五十八',
            '德经/五十九',
            '德经/六十',
            '德经/六十一',
            '德经/六十二',
            '德经/六十三',
            '德经/六十四',
            '德经/六十五',
            '德经/六十六',
            '德经/六十七',
            '德经/六十八',
            '德经/六十九',
            '德经/七十',
            '德经/七十一',
            '德经/七十二',
            '德经/七十三',
            '德经/七十四',
            '德经/七十五',
            '德经/七十六',
            '德经/七十七',
            '德经/七十八',
            '德经/七十九',
            '德经/八十',
            '德经/八十一',
          ]
        },
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