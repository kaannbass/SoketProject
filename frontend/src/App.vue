<template>
  <component :is="$route.meta.layout ||'div'">
    <router-view></router-view>
  </component>
</template>


<style lang="scss">
@import './assets/scss/style.scss';
</style>
