import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../packages/styles/src/weui.less'
import './styles/example.less'

import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'

import wx from '../packages'

Vue.config.productionTip = false

Vue.component(PageHeader.name, PageHeader)
Vue.component(PageFooter.name, PageFooter)

Vue.use(wx)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')