<template>
  <div class="button">
    <page-header title="Button" desc="按钮"></page-header>
    <div class="page__bd">
      <div class="button-sp-area">
        <wx-button>默认操作</wx-button>
        <wx-button loading>默认操作</wx-button>
        <wx-button disabled>默认操作</wx-button>
        <wx-button type="light">次要操作</wx-button>
        <wx-button type="light" loading>次要操作</wx-button>
        <wx-button type="light" disabled>次要操作</wx-button>
        <wx-button type="warn">警告操作</wx-button>
        <wx-button type="warn" loading>警告操作</wx-button>
        <wx-button type="warn" disabled>警告操作</wx-button>
      </div>
      <div class="button-sp-area">
        <wx-divider>mini</wx-divider>
        <wx-button mini>按钮</wx-button>
        <wx-button type="light" mini>按钮</wx-button>
        <wx-button type="warn" mini>按钮</wx-button>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>