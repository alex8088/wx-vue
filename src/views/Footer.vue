<template>
  <div class="footer">
    <page-header title="Footer" desc="页脚"></page-header>
    <div class="page__bd">
      <wx-footer>Copyright © 2018~2020 alex</wx-footer>
      <wx-divider>带链接</wx-divider>
      <wx-footer :links="[{to: {path: '/'}, text: '底部链接'}, {to: {path: '/'}, text: '底部链接'}]">Copyright © 2018~2020 alex</wx-footer>
      <wx-footer fixed>Copyright © 2018~2020 alex</wx-footer>
    </div>
  </div>
</template>