import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import ActionSheet from '../views/ActionSheet'
import Alert from '../views/Alert.vue'
import Badge from '../views/Badge'
import Button from '../views/Button.vue'
import Carousel from '../views/Carousel'
import Checkbox from '../views/Checkbox'
import Confirm from '../views/Confirm.vue'
import DatePicker from '../views/DatePicker'
import Divider from '../views/Divider'
import Flex from '../views/Flex.vue'
import Footer from '../views/Footer'
import Form from '../views/Form'
import FormLayout from '../views/FormLayout'
import FormValidate from '../views/FormValidate'
import Grid from '../views/Grid.vue'
import HalfScreenDialog from '../views/HalfScreenDialog'
import ImageUploader from '../views/ImageUploader'
import Input from '../views/Input'
import Link from '../views/Link.vue'
import List from '../views/List.vue'
import Loading from '../views/Loading.vue'
import LoadMore from '../views/LoadMore.vue'
import NavigationView from '../views/NavigationView.vue'
import Panel from '../views/Panel.vue'
import Picker from '../views/Picker'
import Progress from '../views/Progress'
import Radio from '../views/Radio'
import Rate from '../views/Rate'
import ScrollView from '../views/ScrollView'
import ScrollViewSample from '../views/ScrollView-Sample'
import ScrollViewEvents from '../views/ScrollView-Events'
import ScrollViewProps from '../views/ScrollView-Props'
import SearchBar from '../views/SearchBar'
import Slider from '../views/Slider.vue'
import Switch from '../views/Switch'
import Tab from '../views/Tab'
import TabFixed from '../views/Tab-Fixed'
import Tabbar from '../views/Tabbar'
import Textarea from '../views/Textarea'
import TimePicker from '../views/TimePicker'
import Toast from '../views/Toast.vue'
import Tooltip from '../views/Tooltip.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/actionsheet',
    name: 'ActionSheet',
    component: ActionSheet
  },
  {
    path: '/alert',
    name: 'Alert',
    component: Alert
  },
  {
    path: '/badge',
    name: 'Badge',
    component: Badge
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/carousel',
    name: 'Carousel',
    component: Carousel
  },
  {
    path: '/checkbox',
    name: 'Checkbox',
    component: Checkbox
  },
  {
    path: '/confirm',
    name: 'Confirm',
    component: Confirm
  },
  {
    path: '/datepicker',
    name: 'DatePicker',
    component: DatePicker
  },
  {
    path: '/divider',
    name: 'Divider',
    component: Divider
  },
  {
    path: '/flex',
    name: 'Flex',
    component: Flex
  },
  {
    path: '/footer',
    name: 'Footer',
    component: Footer
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },
  {
    path: '/form/layout',
    name: 'FormLayout',
    component: FormLayout
  },
  {
    path: '/form/validate',
    name: 'FormValidate',
    component: FormValidate
  },
  {
    path: '/grid',
    name: 'Grid',
    component: Grid
  },
  {
    path: '/halfscreendialog',
    name: 'HalfScreenDialog',
    component: HalfScreenDialog
  },
  {
    path: '/imageuploader',
    name: 'ImageUploader',
    component: ImageUploader
  },
  {
    path: '/input',
    name: 'Input',
    component: Input
  },
  {
    path: '/link',
    name: 'Link',
    component: Link
  },
  {
    path: '/list',
    name: 'List',
    component: List
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/loadmore',
    name: 'LoadMore',
    component: LoadMore
  },
  {
    path: '/navigationview',
    name: 'NavigationView',
    component: NavigationView
  },
  {
    path: '/panel',
    name: 'Panel',
    component: Panel
  },
  {
    path: '/picker',
    name: 'Picker',
    component: Picker
  },
  {
    path: '/progress',
    name: 'Progress',
    component: Progress
  },
  {
    path: '/radio',
    name: 'Radio',
    component: Radio
  },
  {
    path: '/rate',
    name: 'Rate',
    component: Rate
  },
  {
    path: '/scrollview',
    name: 'ScrollView',
    component: ScrollView
  },
  {
    path: '/scrollview/sample',
    name: 'ScrollViewSample',
    component: ScrollViewSample
  },
  {
    path: '/scrollview/events',
    name: 'ScrollViewEvents',
    component: ScrollViewEvents
  },
  {
    path: '/scrollview/props',
    name: 'ScrollViewProps',
    component: ScrollViewProps
  },
  {
    path: '/searchbar',
    name: 'SearchBar',
    component: SearchBar
  },
  {
    path: '/slider',
    name: 'Slider',
    component: Slider
  },
  {
    path: '/switch',
    name: 'Switch',
    component: Switch
  },
  {
    path: '/tab',
    name: 'Tab',
    component: Tab
  },
  {
    path: '/tab/fixed',
    name: 'TabFixed',
    component: TabFixed
  },
  {
    path: '/tabbar',
    name: 'Tabbar',
    component: Tabbar
  },
  {
    path: '/textarea',
    name: 'Textarea',
    component: Textarea
  },
  {
    path: '/timepicker',
    name: 'TimePicker',
    component: TimePicker
  },
  {
    path: '/toast',
    name: 'Toast',
    component: Toast
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    component: Tooltip
  }
]

const router = new VueRouter({
  routes
})

export default router
