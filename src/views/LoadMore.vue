<template>
  <div class="loadmore">
    <page-header title="Load More" desc="加载更多"></page-header>
    <div class="page__bd">
      <wx-load-more></wx-load-more>
      <wx-load-more>正在加载</wx-load-more>
      <wx-load-more :loading="false">暂无数据</wx-load-more>
      <wx-load-more :loading="false"></wx-load-more>
    </div>
    <page-footer></page-footer>
  </div>
</template>