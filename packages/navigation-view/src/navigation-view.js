export default {
  name: 'WxNavigationView',
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
        this.historyMap[_from || '/'] = true
        this.transitionName = 'forward'
      }
    }
  },
  render(h) {
    return h('transition', { props: { name: this.transitionName } }, [h('router-view', { class: 'weui-page' })])
  }
}