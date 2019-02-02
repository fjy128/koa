<template>
<div class="phoenix">
  <!-- <div :style="{height:' 75px !important'}"><my-header></my-header></div> -->
  <div :style="{position:'relative'}">
       <my-banner></my-banner>
      <my-search></my-search>
      <!-- <cn-region-picker v-model="pickCity" placeholder="城市" > </cn-region-picker> -->
      <ul class="hot-cities">
        <li v-for="(item,index) in hotCity" :class="cityIndex==index?'hot-city current':'hot-city'" :key="index" @click="changeCity(index,item)">{{item.title}}</li>
      </ul>
      <my-container :Datas="houseArr"></my-container>
  </div>
  <div class="more">
    <button class="btn" @click="gotoList">更多{{city}}名宿</button>
  </div>
  <!-- <my-out-info></my-out-info> -->
</div>
</template>

<script>
import myBanner from './component/banner'
import mySearch from './component/search'
import myContainer from './component/container'

export default {
  name: 'home',
  components: {
    myBanner,
    mySearch,
    myContainer
  },
  created () {

  },
  data () {
    return {
      hotCity: [
        { title: '上海', id: 310100 },
        { title: '北京', id: 110100 },
        { title: '成都', id: 510100 },
        { title: '广州', id: 440100 },
        { title: '杭州', id: 330100 },
        { title: '深圳', id: 440300 }
      ],
      cityIndex: 0,
      houseArr: [],
      city: '',
      cityId: null
    }
  },
  mounted () {
    this.city = this.hotCity[0].title
    this.cityId = this.hotCity[0].id
    this.geteveryCity()
  },
  methods: {
    // nav 切换城市
    changeCity (indx, city) {
      this.city = city.title
      this.cityId = city.id
      this.cityIndex = indx
      this.geteveryCity(city.id)
    },
    geteveryCity (cityId) {
      this.$axios.get(`${this.$api}/cityhouse`, { params: { id: cityId } })
        .then(res => {
          let Datas = res.data
          if (Datas.code === 200) {
            this.houseArr = Datas.data.data
          }
        })
        .catch(error => {
          console.log(error)
        })
    },
    gotoList () {
      console.log(this.$route)
      this.$router.push({
        name: 'houseList',
        params: { cityId: this.cityId }
      })
    }
  }
}
</script>
<style scoped lang="less">
@fontSize: 14px;
@btnW: 180px;
@btnH: 44px;
@btnColor: #333;
@marginTop: 40px;
.more {
  margin-top: @marginTop;
  text-align: center;
  button {
    width: @btnW;
    line-height: @btnH;
    border-radius: 5px;
    font-size: @fontSize;
    text-align: center;
    color: @btnColor;
    cursor: pointer;
    background-image: -webkit-linear-gradient(90deg, #ffe057, #ffce00);
    background-image: -o-linear-gradient(90deg, #ffe057, #ffce00);
    background-image: -moz-linear-gradient(90deg, #ffe057, #ffce00);
    background-image: linear-gradient(90deg, #ffe057, #ffce00);
  }
}
.hot-cities {
  margin-top: 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
  font-size: 18px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
  color: #333;
  .hot-city {
    cursor: pointer;
    display: inline-block;
    padding: 0 15px;
    line-height: 8px;
    &:not(:first-child) {
      border-left: 1px solid #dbdbdb;
    }
  }
  .current {
    position: relative;
    font-weight: 700;
    padding-bottom: 10px;
    border-bottom: 2px solid #fecd11;
  }
}
</style>
