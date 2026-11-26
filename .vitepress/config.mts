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
  title: "StoneKernel技术博客",
  description: "嵌入式系统开发记录",
  lang: 'zh-CN', // 将默认界面提示语（如“上一页/下一页”、“本页目录”）切换为中文

  //配置游览器标签页网页图标（对应public/favicon.svg）
  head:[
    ['link',{rel:'icon',type:'image/svg+xml',href:'/favicon.svg'}]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //1.顶部导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '嵌入式与底层系统', link: '/embedded/embedded',activeMatch: '/embedded/' },
      { text: '系统架构与中间件', link: '/architecture/architecture',activeMatch: '/architecture/' },
      { text: '跨平台与工具链', link: '/tooling/tooling',activeMatch: '/tooling/' },
      { text: '阅读与随笔', link: '/notes/notes',activeMatch: '/notes/' },
      { text: '越野与山野', link: '/outdoors/outdoors',activeMatch: '/outdoors/'  },
      {
        text:'项目专题',
        activeMatch:'/projects/',
        items:[
          {text:'项目总揽', link:'/projects/projects'},
          {text:'OmniLink全场景工业互联', link:'/projects/omnilink/omnilink'},
          {text:'视频监控系统', link:'/projects/video-surveillance/video-surveillance'}
        ]
      }
    ],
    //2.左侧边栏（支持多专栏独立分组，以后文章多了可按照目录拆分）
    // sidebar:[],使用数组表示全局共享
    sidebar: {
      // 当URL以/embedded/开头时，只显示这一组
      '/embedded/': [
        {
          text: '嵌入式与底层系统',
          items: [
            {text: '专栏导读', link: '/embedded/embedded'},
            {text: 'threadx移植实战', link:'/embedded/ThreadX移植实战1/threadx移植实战1'}
          ]
        }
      ],

      '/architecture/': [
        {
          text: '系统架构与中间件',
          items: [
            { text: '专栏导读', link: '/architecture/architecture' }
          ]
        }
      ],      

      //当URL以/tooling/开头时，只显示这一组
      '/tooling/': [
        {
          text: '跨平台与工具链',
          items: [
            { text: '专栏导读', link: '/tooling/tooling' },
            { text: 'vitepress博客搭建', link: '/tooling/vitepress博客搭建/vitepress博客搭建' }
          ]
        }
      ],

      '/notes/': [
        {
          text: '阅读与随笔',
          items: [
            { text: '专栏导读', link: '/notes/notes' }
          ]
        }
      ],
      
      '/outdoors/': [
        {
          text: '越野与山野',
          items: [
            { text: '专栏导读', link: '/outdoors/outdoors' }
          ]
        }
      ],
      
      //add projects
      //情况 A：处于项目专题总览页 (/projects/projects) 时，显示所有项目的快速导航
      '/projects/projects': [
        {
          text: '实战项目矩阵',
          items: [
            { text: '项目专题总览', link: '/projects/projects' },
            {text:'项目一:OmniLink工业互联体系',link:'/projects/omnilink/omnilink'},
            {text:'项目二:视频监控系统',link:'/projects/video-surveillance/video-surveillance'}
          ]
        }
      ],

      // 情况 B：只要进入 /projects/omnilink/ 下的任何文章，左侧只显示 OmniLink 系列
      '/projects/omnilink/': [
        {
          text: 'OmniLink 全场景工业互联',
          items: [
            { text: '体系架构与选型总览', link: '/projects/omnilink/omnilink' }
          ]
        },
        {
          text: '子系统一：OmniLink-Edge',
          collapsed: false,
          items: [
            { text: '00. 系统架构与总线拓扑', link: '/projects/omnilink/omnilink-edge/omnilink-edge' },
            { text: '01. 多传感器采集与中控固件', link: '/projects/omnilink/omnilink-edge/01-中控与传感器' },
            { text: '02. PC 上位机通信协议与界面', link: '/projects/omnilink/omnilink-edge/02-PC上位机' }
          ]
        },
        {
          text: '子系统二：OmniLink-Cloud',
          collapsed: false,
          items: [
            { text: '00. 云边协同网络架构设计', link: '/projects/omnilink/omnilink-cloud/omnilink-cloud' },
            { text: '01. 服务端接入与状态同步', link: '/projects/omnilink/omnilink-cloud/01-网络与云服务' },
            { text: '02. 跨平台 GUI 监控终端', link: '/projects/omnilink/omnilink-cloud/02-GUI设计' }
          ]
        },
        {
          text: '子系统三：OmniLink-Core',
          collapsed: false,
          items: [
            { text: '00. 嵌入式 Linux 平台架构', link: '/projects/omnilink/omnilink-core/omnilink-core' },
            { text: '01. 驱动适配与多进程通信', link: '/projects/omnilink/omnilink-core/01-系统底层' },
            { text: '02. 远程运维与 OTA 升级机制', link: '/projects/omnilink/omnilink-core/02-运维与升级' }
          ]
        }
      ],

      // 情况 C：只要进入 /projects/video-surveillance/ 下的任何文章，左侧只显示视频监控项目
      '/projects/video-surveillance/': [
        {
          text: '视频监控系统实战',
          items: [
            { text: '00. 系统架构与流媒体选型', link: '/projects/video-surveillance/video-surveillance' },
          ]
        }
      ]
        

    },  //end sidebar


    //3.右侧页内大纲显示级别
    outline:{
      level:'deep',
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
    },

    //右上角社交/联系图标，内置邮件信封图标
    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/></svg>'
        },
        link: 'mailto:me@stonekernel.com',
        ariaLabel: '发送邮件至 me@stonekernel.com'
      }
    ],

    //首页底部显示邮箱联系方式
    footer: {
      message: '欢迎技术交流与探讨：<a href="mailto:me@stonekernel.com">me@stonekernel.com</a>',
      copyright: 'Copyright © 2026 StoneKernel'
    }    


  }
})
