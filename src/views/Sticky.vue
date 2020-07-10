<template>
  <div class="sticky">
    <page-header title="Sticky" desc="粘性布局"></page-header>
    <wx-sticky>
      <div class="sticky-bar">基本用法</div>
    </wx-sticky>
    <div class="sticky-sp sticky-sp-200">Placeholder</div>
    <wx-sticky :offset-top="28">
      <div class="sticky-bar">吸顶距离</div>
    </wx-sticky>
    <div class="sticky-sp sticky-sp-200">Placeholder</div>
    <div style="height: 300px; border-bottom: 1px solid #aaa;" id="container">
      <wx-sticky :offset-top="56" observed-container="container">
        <div class="sticky-bar">观察容器</div>
      </wx-sticky>
      <div style="text-align: center; margin-top: 120px;">请继续滚动</div>
    </div>
    <div class="sticky-sp sticky-sp-500">Placeholder</div>
    <page-footer></page-footer>
  </div>
</template>