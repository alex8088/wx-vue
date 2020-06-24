<template>
  <div class="page__hd">
    <h1 class="page__title">{{title}}</h1>
    <p class="page__desc">{{desc}}</p>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: ["title", "desc"]
};
</script>