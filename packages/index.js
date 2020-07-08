import Vue from 'vue'
import { ActionSheet, ActionSheetItem } from './action-sheet'
import Alert from './alert'
import Badge from './badge'
import Button from './button'
import { Carousel, CarouselItem } from './carousel'
import Checkbox from './checkbox'
import Confirm from './confirm'
import DatePicker from './date-picker'
import Divider from './divider'
import { Flex, FlexItem } from './flex'
import Footer from './footer'
import { Form, FormHeader, FormBody, FormGroup, FormCell, FormAction, FormTips, FormFooter } from './form'
import { Grid, GridItem } from './grid'
import HalfScreenDialog from './half-screen-dialog'
import ImageUploader from './image-uploader'
import Input from './input'
import { Link, LinkGroup } from './link'
import { List, ListItem } from './list'
import LoadMore from './load-more'
import NavigationView from './navigation-view'
import { Panel, PanelItem } from './panel'
import Picker from './picker'
import Plugins from './plugins'
import Progress from './progress'
import Radio from './radio'
import Rate from './rate'
import ScrollView from './scroll-view'
import SearchBar from './search-bar'
import { Sidebar, SidebarItem } from './sidebar'
import Slider from './slider'
import Switch from './switch'
import { Tab, TabItem } from './tab'
import { Tabbar, TabbarItem } from './tabbar'
import Textarea from './textarea'
import TimePicker from './time-picker'

const components = [
  ActionSheet,
  ActionSheetItem,
  Alert,
  Badge,
  Button,
  Carousel,
  CarouselItem,
  Checkbox,
  Confirm,
  DatePicker,
  Divider,
  Flex,
  FlexItem,
  Footer,
  Form,
  FormHeader,
  FormBody,
  FormGroup,
  FormCell,
  FormAction,
  FormTips,
  FormFooter,
  Grid,
  GridItem,
  HalfScreenDialog,
  ImageUploader,
  Input,
  Link,
  LinkGroup,
  List,
  ListItem,
  LoadMore,
  NavigationView,
  Panel,
  PanelItem,
  Picker,
  Progress,
  Radio,
  Rate,
  ScrollView,
  SearchBar,
  Sidebar,
  SidebarItem,
  Slider,
  Switch,
  Tab,
  TabItem,
  Tabbar,
  TabbarItem,
  Textarea,
  TimePicker
]

const install = function (vue) {
  if (install.installed) return

  components.map(component => {
    vue.component(component.name, component)
  })

  Vue.prototype.$alert = Plugins.Alert
  Vue.prototype.$confirm = Plugins.Confirm
  Vue.prototype.$toast = Plugins.Toast
  Vue.prototype.$loading = Plugins.Loading
  Vue.prototype.$tooltip = Plugins.Tooltip
}

/* auto install */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  install,
  ActionSheet,
  // ActionSheetItem,
  Alert,
  Badge,
  Button,
  Carousel,
  // CarouselItem,
  Checkbox,
  Confirm,
  DatePicker,
  Divider,
  Flex,
  // FlexItem,
  Footer,
  Form,
  // FormHeader,
  // FormBody,
  // FormGroup,
  // FormCell,
  // FormAction,
  // FormTips,
  // FormFooter,
  Grid,
  // GridItem,
  HalfScreenDialog,
  ImageUploader,
  Input,
  Link,
  // LinkGroup,
  List,
  // ListItem,
  LoadMore,
  NavigationView,
  Panel,
  PanelItem,
  Picker,
  Plugins,
  Progress,
  Radio,
  Rate,
  ScrollView,
  SearchBar,
  Sidebar,
  Slider,
  Switch,
  Tab,
  // TabItem,
  Tabbar,
  // TabbarItem,
  Textarea,
  TimePicker
}