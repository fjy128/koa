<template>
<div class="a_banner">
  <el-carousel :interval="5000" arrow="hover" height="500px" >
    <el-carousel-item v-for="(item,indx ) in bannerArr" :key="indx">
      <img :src="item.url"/>
    </el-carousel-item>
  </el-carousel>
</div>
</template>
<script>
export default {
  data () {
    return {
      bannerArr: []
    }
  },
  mounted () {
    this.getBanner()
  },
  methods: {
    getBanner () {
      this.$axios.get(`${this.$api}/banner`)
        .then(res => {
          let Datas = res.data
          if (Datas.code === 200) {
            this.bannerArr = Datas.data
          }
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.el-carousel__item {
  height: 500px;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
</style>
<style scoped>
.a_banner >>> .el-carousel__arrow {
  width: 60px;
  height: 60px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
}
.a_banner >>> .el-carousel__arrow i {
  color: #fff;
  font-size: 30px;
}
.a_banner >>> .el-carousel__arrow--left {
  margin-left: 200px;
}
.a_banner >>> .el-carousel__arrow--right {
  margin-right: 200px;
}
</style>
