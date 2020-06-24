<p align="center">
  <img src="https://alex8088.github.io/assets/wxvue-logo.png" width="180px" height="180px">
</p>

<h3 align="center" style="margin: 30px 0 35px;">Mobile UI Components based on Vue.js and WeUI</h3>

<p align="center">
  <img src="https://img.shields.io/badge/npm-3.0.0-yellow.svg" alt="npm" />
  <img src="https://img.shields.io/badge/build-passing-blue.svg" alt="build" />
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="license" />
  <img src="https://img.shields.io/badge/gzip-45kb-orange.svg" alt="gzip" />
</p>

<p align="center">
  <a href="./README.md">中文</a>&nbsp;&nbsp;|&nbsp;&nbsp;English
</p>

---

## Introduction

wx-vue is a mobile UI library based on [Vue.js](http://vuejs.org/) and [WeUI](https://weui.io/). Features:

- Base on WeUI design
- 40+ Reusable components
- Easy to use and remain flexible and standardized
- Extensive documentation and demos
- Support on-demand loading
- Support TypeScript
- Support custom themes
- Provide a complete mobile ui development framework

###### Browser Support

> Android 4.0+, iOS 8.0+

## Preview

![Demo](https://alex8088.github.io/assets/wxvue-qrcode.png)

## Documentation

Get started with the [documentation](https://alex8088.github.io/wxvue/docs)

## Installation

```bash
npm install wx-vue -S
```

## Quick Start

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

See more in [Guide](https://alex8088.github.io/wxvue/docs/guide/quickstart.html).

## Links

- [change logs](./CHANGELOG.md)
- [issues](https://github.com/alex8088/wx-vue/issues)
- [weui](https://weui.io/)

## License

[MIT](./LICENSE)
