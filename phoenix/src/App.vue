<template>
  <div id="app">
      <div :style="{height:' 75px !important'}"><my-header></my-header></div>
    <router-view/>
    <my-out-info></my-out-info>
  </div>
</template>
<style lang="less">
</style>
<script>
import myHeader from './views/component/header'
import myOutInfo from './views/component/ourInfo'
export default {
  components: {
    myHeader,
    myOutInfo
  }
}
</script>
