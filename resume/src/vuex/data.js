/**
 * All data of the website
 * In order to support multi-languages
 * (Now support Chinese and English)
 */
// import route map
import routeMap from '../router'

const base = {
  title: '简历',
  name: '黄美秀',
  shortDescription: '郑州大学2018应届毕业生',
  description: '高中接触 Web 开发和设计，上了大学正式学习前端、PHP、Node.js，大一开始在校不间断负责多个公众号、小程序的开发。',
  infomations: [{
    icon: 'https://github.com/deraqoan/text/blob/master/birth.png',
    key: '生日',
    value: '1996.04.06'
  }, {
    icon: 'https://github.com/deraqoan/text/blob/master/birth.png',
    key: '教育经历',
    value: '郑州大学'
  }, {
    icon: 'https://github.com/deraqoan/text/blob/master/birth.png',
    key: '院系',
    value: '信息管理'
  }, {
    icon: 'https://github.com/deraqoan/text/blob/master/birth.png',
    key: '居住地',
    value: '河南*郑州'
  }, {
    icon: 'https://github.com/deraqoan/text/blob/master/birth.png',
    key: '户籍',
    value: '江西'
  }, {
    icon: 'https://github.com/deraqoan/text/blob/master/birth.png',
    key: '邮箱',
    value: 'gugehuang@163.com'
  }, {
    icon: 'https://github.com/deraqoan/text/blob/master/birth.png',
    key: '手机号',
    value: '18037793812'
  }],
  skills: [{
    value: 'HTML',
    logo: '1,1'
  }, {
    value: 'CSS',
    logo: '1,1'
  }, {
    value: 'JavaScript',
    logo: '1,1'
  }, {
    value: 'jquery',
    logo: '1,1'
  }, {
    value: 'boostrap',
    logo: '1,1'
  }, {
    value: 'vue',
    logo: '1,1'
  }, {
    value: 'Photoshop',
    logo: '1,1'
  }],
  projects: [{
    desc: '家长慕课是一个面对幼儿园到高中的学生的一个教育网站，分为教学课程，直播教学，素质教学，用户四个主页面，教学课程针对不同年级智能推荐课程，播放视频，搜索资源，直播采用倒计时，可以回放直播，可以通过视频播放列表进入其他视频播放页，用户中心实现资料更改，用户课程完成等等',
    url: 'https://github.com/deraqoan/vue-muke'
  }, {
    desc: '仿网易云音乐，实现搜索音乐，歌手清单，音乐分类，播放音乐，智能推荐音乐，智能推荐歌手主题，实现用户评价，收藏音乐，记录搜索历史',
    url: 'https://github.com/deraqoan/vue-music'
  }, {
    desc: '为郑大学子提供查询空教室，方便学子自习考研而不受打扰，自动同步教务处网站的信息，查询上课教室的课程安排',
    url: 'https://github.com/deraqoan/task'
  }],
  projectRefer: '在我的 Github 查看更多项目',
  articles: [{
    title: 'vue-router的运用相关',
    thumb: 'outer.push()在组件中的method中调用this.$router.push()相当于在调用method的对象添加<router-link :to="/home"></router-link>router.replace(location)跟push差不多，但是不会向history添加新纪录this.$router.replace()router.go(n)',
    url: 'http://www.cnblogs.com/janis/articles/7282015.html',
    time: '2017-08-14'
  }, {
    title: 'vuex中mapstate mapActions mapgetters的运用',
    thumb: 'vuex用于所有组件的状态，vuex映射直接映射到当前的this对象，例如mapstate是将Vuex中的state数据映射到当前组件中如：getters相当于state的计算属性，先在index.js中注册，然后在组件中调用',
    url: 'http://www.cnblogs.com/janis/articles/7275894.html',
    time: '2017-08-09'
  }, {
    title: 'npm install 和npm run dev 报错的解决方法',
    thumb: 'npm install报错　　原因：node版本低，npm install -g n 可以更新node。或者你的电脑是Mac，在前面加sudo即可npm run dev报错　原因：port被占用，解决：在vuedemo/config/index.js中作出更改。',
    url: 'http://www.cnblogs.com/janis/articles/7281019.html',
    time: '2017-08-04'
  }, {
    title: 'Mac git的运用',
    thumb: 'git安装前要安装xcode,不建议从APP store中安装，时间长，版本低，使用sudo xcode-select --install安装。',
    url: 'http://www.cnblogs.com/janis/articles/7425671.html',
    time: '2017-08-25'
  }, {
    title: 'vue 中ref使用方法',
    thumb: 'ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素; 如果用在子组件上，引用就指向组件实例:',
    url: 'http://www.cnblogs.com/janis/articles/7390175.html',
    time: '2017-08-25'
  }, {
    title: 'vue-router基础',
    thumb: '在组件中的method中调用this.$router.push()相当于在调用method的对象添加<router-link :to="/home"></router-link>',
    url: 'http://www.cnblogs.com/janis/articles/7283730.html',
    time: '2017-08-27'
  }]
}

export default {
  cn: {
    website: base,
    route: routeMap.map(v => v.cn)
  }
}
