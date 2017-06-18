import Vue from 'vue'
import Router from 'vue-router'
import Profile from '@/components/Profile'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Skill from '@/components/Skill'
import Education from '@/components/Education'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/experience',
      name: 'Experience',
      component: Experience
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    }
  ]
})
