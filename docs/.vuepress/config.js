const { fs, path } = require('@vuepress/shared-utils')

module.exports = {
  title: '小石头的前端学习笔记 ', // 设置网站标题
  description: 'xing.org1^',
  base: '/xingorg1Note/',
  cache: false,
  head: [
    ['link', {
      rel: 'icon', // 这个是标签页 logo
      href: `/favicon.ico`
    }]
  ],
  // 主题
  theme: 'vuepress-theme-yilia-plus',
  // 主题配置
  themeConfig: {
    // 顶部导航
    // navbar: false, // 禁用导航栏
    nav: [{
        text: '主页',
        link: '/'
      }, {
        text: '技术笔记',
        items: [{
          text: '前端',
          items: [{
            text: 'html',
            link: '/webNote/web/'
          }, {
            text: 'css',
            link: '/webNote/css/'
          }, {
            text: 'js',
            link: '/webNote/js/'
          }, {
            text: 'es',
            link: '/webNote/es/'
          }, {
            text: 'vue',
            link: '/webNote/vue/'
          }, {
            text: 'react',
            link: '/webNote/react/'
          }]
        }, {
          text: '开发工具',
          items: [{
              text: 'gitbook',
              link: '/webNote/gitbook/'
            },
            {
              text: 'vuepress',
              link: '/webNote/vuepress/'
            }
          ]
        }, {
          text: '后端',
          items: [{
            text: 'python',
            link: '/webNote/python/'
          }]
        }]
      },
      {
        text: '文集',
        items: [{
          text: '日记',
          link: '/diarys/diary/'
        }, {
          text: '感悟随笔',
          link: '/diarys/essays/'
        }, {
          text: '创意想法',
          link: '/diarys/creative/'
        }, {
          text: '小说',
          link: '/diarys/novel/'
        }]
      },
      {
        text: '摄影',
        items: [{
          text: '风景',
          link: '/photograph/scenery/'
        }, {
          text: '生活',
          link: '/photograph/dailyLife/'
        }]
      },
      {
        text: '爱好',
        items: [{
          text: '绘画',
          link: '/hobby/painting/'
        }, {
          text: '音乐',
          link: '/hobby/music/'
        }, {
          text: '电影',
          link: '/hobby/movie/'
        }]
      },
      {
        text: '关于',
        items: [{
          text: '关于我',
          link: '/about/aboutMe/'
        }, {
          text: '我的博客',
          link: 'http://www.cnblogs.com/padding1015/'
        }, {
          text: '与我联系',
          link: '/about/contact/'
        }]
      }
    ],
    // 侧边栏
    sidebar: 'auto',
    // sidebar: {
    //   '/api/': getApiSidebar(),
    //   '/guide/': getGuideSidebar('Guide', 'Advanced'),
    // },
    sidebarDepth: 5, // 默认 1 提取到 h2，0 为禁用，2 为 h2，3 为 h3...
    displayAllHeaders: false, // 默认值：false 侧边栏只会显示由当前活动页面的标题组成的链接
    activeHeaderLinks: true, // 默认值：true 滚动时通过 hash 高亮侧边栏标题

    // Git 仓库和编辑链接
    repo: 'xingorg1/xingorg1Note', // 你的仓库
    repoLabel: 'GitHub', // 导航栏上的文本

    editLinks: true,
    editLinkText: '编辑此页面', // 默认为 "Edit this page"
    docsDir: 'docs', // 编辑文档的所在目录
    docsBranch: 'develop', // 编辑文档的所在分支

    /* vuepress-theme-yilia-plus 配置 */
    yilia_plus: {
      github: { // github-corner(关闭请设置为false)
        url: "https://github.com/JoeyBling/vuepress-theme-yilia-plus"
      },
      footer: {
        since: 2019, // 网站成立年份(若填入年份小于当前年份，则显示为 2018-2019 类似的格式)
        author: '<a href="https://github.com/xingorg1" target="_blank">xing.org1^ 小石头</a>', // 网站作者(关闭请设置为false)
        busuanzi: { // 访问量统计功能(不蒜子)
          enable: true // 是否启用(关闭请设置为false)
        }
      }
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  plugins: [
    ['@vuepress/last-updated'], // 最后更新时间
    ['@vuepress/nprogress'], // 进度条
    /* 两个插件只能选一个 */
    ['@vuepress/plugin-back-to-top', false],
    [
      'vuepress-plugin-gotop-plus', { // 是否在移动设备上显示(default: true)
        mobileShow: false,
        threshold: 50 // 回到页首元素显示触发的高度阈值(default: 50)
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  }
}

function getApiSidebar () {
  return [
    'cli',
    'node'
  ]
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'directory-structure',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'i18n',
        'deploy'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'frontmatter',
        'permalinks',
        'markdown-slot',
        'global-computed'
      ]
    }
  ]
}
function getApiSidebar () {
  return [
    'cli',
    'node'
  ]
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'directory-structure',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'i18n',
        'deploy'
      ]
    },
    {
      title: groupB,
      collapsable: false,
      children: [
        'frontmatter',
        'permalinks',
        'markdown-slot',
        'global-computed'
      ]
    }
  ]
}