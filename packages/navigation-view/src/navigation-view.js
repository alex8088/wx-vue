export default {
  name: 'WxNavigationView',
  props: {
    keepAlive: [String, RegExp]
  },
  data() {
    return {
      historyMap: {},
      transitionName: 'forward',
    }
  },
  watch: {
    '$route'(to, from) {
      const _to = to.path
      const _from = from.path

      let has = this.historyMap[_to]
      if (has) {
        this.historyMap[_to] = false
        this.transitionName = 'back'
      } else {
        this.historyMap[_from || '/'] = _to !== '/'
        this.transitionName = 'forward'
      }
    }
  },
  render(h) {
    if (this.keepAlive) {
      return (
        <transition name={this.transitionName}>
          <keep-alive include={this.keepAlive}>
            <router-view class="weui-page"></router-view>
          </keep-alive>
        </transition>
      )
    } else {
      return h('transition', { props: { name: this.transitionName } }, [h('router-view', { class: 'weui-page' })])
    }
  }
}