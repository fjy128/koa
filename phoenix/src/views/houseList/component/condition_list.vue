<template>
<div class="condition">
  <ul>
    <li v-for="(item,index) in list" :key="index" @click="changIndx(item.id)" :class="indexArr.indexOf(item.id)!==-1?'act':''">{{item.value}}</li>
  </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      indexArr: [],
      list: []

    }
  },
  mounted () {
    this.getTag()
  },
  methods: {
    getTag () {
      this.list = []
      this.$axios.get(`${this.$api}/tagList`, { params: { id: this.$route.params.cityId } })
        .then(res => {
          let Datas = res.data
          // console.log(Datas)
          if (Datas.code === 200) {
            this.list = Datas.data.normalTags
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    changIndx (idx) {
      if (this.indexArr.indexOf(idx) === -1) {
        this.indexArr.push(idx)
      } else {
        let delidx = this.indexArr.indexOf(idx)
        this.indexArr.splice(delidx, 1)
      }
      this.$emit('getIdxArr', this.indexArr)
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
      color: #222;
      cursor: pointer;
      margin-bottom: 0;
      &.act {
        background: #fecd0f;
        color:#fff;
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
