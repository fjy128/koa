<template>
<div>
<condition-list></condition-list>
<product-grid></product-grid>
</div>
</template>
<script>
import conditionList from './component/condition_list'
import productGrid from './component/model-product-grid'
export default {
  components: { conditionList, productGrid },
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
</style>
