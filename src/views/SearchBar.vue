<template>
  <div class="searchbar">
    <page-header title="Search Bar" desc="搜索栏"></page-header>
    <div class="page__bd page__bd_spacing">
      <wx-search-bar></wx-search-bar>
      <wx-divider>显示取消操作</wx-divider>
      <wx-search-bar show-cancel-action placeholder="搜索商品"></wx-search-bar>
    </div>
    <page-footer></page-footer>
  </div>
</template>