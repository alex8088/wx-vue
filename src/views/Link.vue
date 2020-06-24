<template>
  <div class="link">
    <page-header title="Link" desc="文本链接"></page-header>
    <div class="page__bd page__bd_spacing">
      <div class="link-sp-area">
        <wx-link>文本链接</wx-link>
      </div>
      <wx-divider>link group</wx-divider>
      <wx-link-group>
        <wx-link>朋友圈</wx-link>
        <wx-link>文章</wx-link>
        <wx-link>公众号</wx-link>
      </wx-link-group>
      <wx-link-group>
        <wx-link>小程序</wx-link>
        <wx-link>音乐</wx-link>
        <wx-link>表情</wx-link>
      </wx-link-group>
      <wx-divider>props.mimi</wx-divider>
      <div class="link-sp-panel">
        <wx-link-group>
          <wx-link mini>图片视频</wx-link>
          <wx-link mini>链接</wx-link>
          <wx-link mini>文件</wx-link>
          <wx-link mini>音乐</wx-link>
        </wx-link-group>
        <wx-link-group>
          <wx-link mini>聊天记录</wx-link>
          <wx-link mini>语音</wx-link>
          <wx-link mini>笔记</wx-link>
          <wx-link mini>位置</wx-link>
        </wx-link-group>
      </div>
      <wx-divider>props.to</wx-divider>
      <div class="link-sp-area">
        <wx-link :to="{path: '/'}">返回主页</wx-link>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>