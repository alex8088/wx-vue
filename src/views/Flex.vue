<template>
  <div class="flex">
    <page-header title="Flex" desc="Flex布局"></page-header>
    <div class="page__bd page__bd_spacing" style="padding-top:10px;">
      <wx-flex v-for="i in 4" :key="i">
        <wx-flex-item v-for="j in i" :key="i+j">
          <div class="placeholder">wx</div>
        </wx-flex-item>
      </wx-flex>
      <wx-flex>
        <div class="placeholder">wx</div>
        <wx-flex-item>
          <div class="placeholder">wx</div>
        </wx-flex-item>
        <div class="placeholder">wx</div>
      </wx-flex>
    </div>
    <page-footer></page-footer>
  </div>
</template>
