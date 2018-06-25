import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import news from '@/components/news/news'
import person from '@/components/person/person'
import sports from '@/components/sports/sports'
import weather from '@/components/home/weather'
import story from '@/components/home/story'
import goodphoto from '@/components/home/goodphoto'
import video from '@/components/home/video'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/person',
      name: 'person',
      component: person
    },
    {
      path: '/sports',
      name: 'sports',
      component: sports
    },
    {
      path: '/weather',
      name: 'weather',
      component: weather
    },
    {
      path: '/story',
      name: 'story',
      component:story
    },
    {
      path: '/goodphoto',
      name: 'goodphoto',
      component:goodphoto
    },
    {
      path: '/video',
      name: 'video',
      component:video
    }
  ]
})
