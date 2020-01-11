const {
  fs,
  path
} = require('@vuepress/shared-utils')
function getMenusChildren(address, site) {
  const menusList = []
   fs.readdirSync(path.resolve(__dirname, address)) // 获取指定目录下的所有文件和文件夹名称列表
    .filter(filename => {
      if(filename.indexOf('.')>0){
        let filesName = filename.slice(0, -3).replace('README','')
        menusList.push(site + filesName)
      }
    })
  menusList.sort()
  return menusList
}
module.exports = {
  getWebNoteSidebar(titleName) {
    return [
      ['', titleName],
      {
        title: 'Html',
        collapsable: true,
        children: getMenusChildren('../../webNote/web', 'web/')
      },
      {
        title: 'Css',
        collapsable: true,
        children: getMenusChildren('../../webNote/css', 'css/')
      },
      {
        title: 'JavaScript',
        collapsable: true,
        children: getMenusChildren('../../webNote/js', 'js/')
      },
      {
        title: 'ESMAScript 6',
        collapsable: true,
        children: getMenusChildren('../../webNote/es', 'es/')
      },
      {
        title: 'Vue',
        collapsable: true,
        children: getMenusChildren('../../webNote/vue', 'vue/')
      },
      {
        title: 'React',
        collapsable: true,
        children: getMenusChildren('../../webNote/react', 'react/')
      },
      {
        title: '移动端',
        collapsable: true,
        children: getMenusChildren('../../webNote/mobile', 'mobile/')
      }
    ]
  },
  getDevToolsSidebar() {
    return [
      'vuepress/',
      'gitbook/',
      {
        title: 'github相关知识',
        collapsable: true,
        children: getMenusChildren('../../devTools/github', 'github/')
      }
    ]
  },
  getBackEndSidebar() {
    return [{
      title: 'Python',
      collapsable: true,
      children: getMenusChildren('../../backEnd/python', 'python/')
    },{
      title: 'MySQL',
      collapsable: true,
      children: getMenusChildren('../../backEnd/MySQL', 'MySQL/')
    },{
      title: 'Java',
      collapsable: true,
      children: getMenusChildren('../../backEnd/Java', 'Java/')
    }]
  },
  getDiarysSidebar() {
    return [
      {
        title: '日记',
        collapsable: true,
        children: getMenusChildren('../../diarys/diary', 'diary/')
      },
      {
        title: '随笔',
        collapsable: true,
        children: getMenusChildren('../../diarys/essays', 'essays/')
      },
      {
        title: '奇特想法',
        collapsable: true,
        children: getMenusChildren('../../diarys/creative', 'creative/')
      },
      {
        title: '小说',
        collapsable: true,
        children: getMenusChildren('../../diarys/novel', 'novel/')
      }
    ]
  },
  getPhotographSidebar() {
    return [
      'dailyLife/',
      'scenery/'
    ]
  },
  getHobbySidebar() {
    return [
      {
        title: '绘画',
        collapsable: true,
        children: getMenusChildren('../../hobby/painting', 'painting/')
      },
      {
        title: '音乐',
        collapsable: true,
        children: getMenusChildren('../../hobby/music', 'music/')
      },
      {
        title: '电影',
        collapsable: true,
        children: getMenusChildren('../../hobby/movie', 'movie/')
      }
    ]
  },
  getAboutSidebar(titleName) {
    return [
      ['',titleName],{
        collapsable: false,
        children: getMenusChildren('../../about/aboutMe', 'aboutMe/')
      },{
        collapsable: false,
        children: getMenusChildren('../../about/contact', 'contact/')
      }
    ]
  }
}