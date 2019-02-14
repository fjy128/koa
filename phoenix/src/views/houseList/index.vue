<template>
<div>
<condition-list @getIdxArr="getIdxArr"></condition-list>
<product-grid :parentIdxArr="indexArr"></product-grid>
</div>
</template>
<script>
import conditionList from './component/condition_list'
import productGrid from './component/model-product-grid'
export default {
  components: { conditionList, productGrid },
  data () {
    return {
      indexArr: []
    }
  },
  methods: {
    getIdxArr (arr) {
      this.indexArr = arr
      // console.log(11111144, arr)
    }
  }
}
</script>
<style lang="less" scoped>
</style>
