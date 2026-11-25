import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  //add github projece name
  //use domain delete base
  //base:'/MY_DOCS/',

  //开启简洁URL 
  cleanUrls:true,
  //配置页面最后更新时间
  lastUpdated:true,
  title: "StoneKernel技术笔记",
  description: "嵌入式系统开发记录",
  lang: 'zh-CN', // 将默认界面提示语（如“上一页/下一页”、“本页目录”）切换为中文
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //1.顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '嵌入式与底层系统', link: '/embedded/embedded' },
      { text: '系统架构与中间件', link: '/architecture/architecture' },
      { text: '跨平台与工具链', link: '/tooling/tooling' },
      { text: '阅读与随笔', link: '/notes/notes' },
      { text: '越野与山野', link: '/outdoors/outdoors' }
    ],
    //2.左侧边栏（支持多专栏独立分组，以后文章多了可按照目录拆分）
    sidebar: [
      {
        text: '核心专栏',
        items: [
          { text: '嵌入式与底层系统', link: '/embedded/embedded' },
          { text: '系统架构与中间件', link: '/architecture/architecture' },
          { text: '跨平台与工具链', link: '/tooling/tooling' },
          { text: '阅读与随笔', link: '/notes/notes' },
          { text: '越野与山野', link: '/outdoors/outdoors' },
          { text: '跨平台与工具链', link: '/tooling/vitepress博客搭建/vitepress博客搭建' }
        ]
      }
    ],

    //3.右侧页内大纲显示级别
    outline:{
      level:[2,3],
      label:'本页目录'
    },

    //4.底部翻页按钮文字汉化
    docFooter:{
      prev:'上一篇',
      next:'下一篇'
    },

//    socialLinks: [
//      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
//    ]

    //开启全文本地搜索
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索笔记', buttonAriaLabel: '搜索笔记' },
          modal: {
            noResultsText: '无法找到相关内容',
            resetButtonTitle: '清除查询条件',
            footer: { selectText: '选择', navigateText: '切换' }
          }
        }
      }
    },

    //配置页面最后更新时间
    lastUpdated:{
      text:'最后更新于',
      formatOptions:{dateStyle:'short',timeStyle:'short'}
    }


  }
})
