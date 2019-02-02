<template>
<div class="condition">
  <ul>
    <li v-for="(item,index) in list" :key="index" @click="changIndx(index)" :class="listIndx==index+1?'act':''">{{item}}</li>
  </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      listIndx: 0,
      list: ['立即确认', '可做饭', '超赞房东', '近地铁', '有停车位', '适合情侣', '近外滩', '性价比高', '房东开发票', '一室一厅', '适合亲子', '榛果保洁',
        '自助入住', 'Loft', '景观房', '朋友结伴', '别墅轰趴', '可带宠物', '网红民宿', 'INS风', 'TOP美宿', '花园房', '洋房', '青旅', '两室一厅']
    }
  },
  methods: {
    changIndx (idx) {
      console.log(idx)
      this.listIndx = idx + 1
    }
  }
}
</script>

<style lang="less" scoped>
.condition {
  background: #f8f8f8;
  border-color: #eeeff3;
  border-style: solid;
  border-width: 1px 0;
  // position: absolute
  left: 0;
  right: 0;
  ul {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
    padding-bottom: 10px;
    li {
      float: left;
      // display: inline-block;
      margin-bottom: 0;
      // position: relative;
      margin-top: 10px;
      margin-left: 9px;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 30px;
      line-height: 30px;
      font-size: 12px;
      text-align: center;
      white-space: nowrap;
      outline: none;
      display: block;
      padding: 0 10px;
      color: #333;
      cursor: pointer;
      margin-bottom: 0;
      &.act {
        background: #fecd0f;
        background: -webkit-gradient(
          linear,
          right top,
          left top,
          from(#fecd0f),
          to(#ffdf62)
        );
        background: linear-gradient(270deg, #fecd0f, #ffdf62);
        border-color: transparent;
      }
    }
  }
}
</style>
