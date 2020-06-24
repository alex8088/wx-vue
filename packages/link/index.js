import Link from './src/link'
import LinkGroup from './src/link-group'

Link.install = function (Vue) {
  Vue.component(Link.name, Link)
  Vue.component(LinkGroup.name, LinkGroup)
}

export {
  Link,
  LinkGroup
}

export default Link