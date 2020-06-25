<p align="center">
  <img src="https://alex8088.github.io/assets/wxvue-logo.png" width="180px" height="180px">
</p>

<h3 align="center" style="margin: 30px 0 35px;">一套基于Vue.js和WeUI的移动端UI组件库</h3>

<p align="center">
  <img src="https://img.shields.io/badge/npm-3.0.0-yellow.svg" alt="npm" />
  <img src="https://img.shields.io/badge/build-passing-blue.svg" alt="build" />
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="license" />
  <img src="https://img.shields.io/badge/gzip-45kb-orange.svg" alt="gzip" />
</p>

<p align="center">
  中文&nbsp;&nbsp;|&nbsp;&nbsp;<a href="./README.en-US.md">English</a>
</p>

---

## 介绍

wx-vue 是一套基于 [Vue.js](http://vuejs.org/) 和 [WeUI](https://weui.io/) 的移动端UI组件库，旨在帮助开发者提高产品体验和开发效率。

- 遵循WeUI的视觉设计规范，简洁美观，拥有良好的移动端交互体验
- 40+ 高质量组件，适用各种应用场景
- 组件简单易用，并保持灵活度和规范性
- 完善的文档和示例
- 支持按需加载
- 支持 TypeScript
- 支持主题定制
- 提供整套的移动应用开发框架

###### 浏览器兼容

> Android 4.0+, iOS 8.0+

## 手机预览

![Demo](https://alex8088.github.io/assets/wxvue-qrcode.png)

## 文档

[Documentation](https://alex8088.github.io/wxvue/docs)

## 安装

```bash
npm install wx-vue -S
```

## 快速上手

``` javascript
import Vue from 'vue'
import App from './App.vue'
import 'wx-vue/lib/styles/index.css'
import Wx from 'wx-vue'

Vue.use(Wx)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

请阅读[开发指南](https://alex8088.github.io/wxvue/docs/guide/quickstart.html)，了解更多。

## 链接

- [更新日志](./CHANGELOG.md)
- [意见反馈](https://github.com/alex8088/wx-vue/issues)
- [weui](https://weui.io/)

## License

[MIT](./LICENSE)
