module.exports = {
  title: '伶歌丨生而为人',
  description: '认真生活，快乐生活',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
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
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav:[
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
      { text: 'About', link: '/about/' },     
    ],
    // sidebar: 'auto'
    sidebar:{
      // docs文件夹下面的accumulate文件夹 文档中md文件 书写的位置(命名随意)
      '/accumulate/': [
          '/accumulate/', // accumulate文件夹的README.md 不是下拉框形式
          {
            title: '标题1',
            children: [
              '/accumulate/test', // 以docs为根目录来查找文件 
              // 上面地址查找的是：docs>accumulate>JS>test.md 文件
              // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
            ]
          }
        ],
        // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
        '/algorithm/': [
          // '/algorithm1233/', 
          {
            title: '标题1',
            children: [
              '/algorithm/test' 
            ]
          }
        ]
    }
  }
};