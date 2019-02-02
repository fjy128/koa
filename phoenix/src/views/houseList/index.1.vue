<template>
<div>
  <swiper :list="bannerList" height="180px" :loop="true" :auto="true" :isPrevShow='true'></swiper>
<!-- <div style="margin-top: 10px"></div>

<div class="broadcast">
    <p></p>
    <swiper :isBroadcast="true" :showDots="false" :list="bannerList" height="30px" :loop="true" :auto="true">
    </swiper>
</div> -->

</div>
</template>
<script>
import swiper from 'v-swiper'
export default {
  components: { swiper },
  data () {
    return {
      bannerList: [{
        url: 'javascript:',
        img: 'http://ww1.sinaimg.cn/large/b0f3038egy1fvbl5ajgfcj20p00goq7n.jpg',
        txt: '这是一条消息1,这是一条消息1，这是一条消息1，这是一条消息1'
      }, {
        url: 'javascript:',
        img: 'http://ww1.sinaimg.cn/large/b0f3038egy1fvbl4twp0uj20p00gogo2.jpg',
        txt: '这是一条消息2'
      }, {
        url: 'javascript:',
        img: 'http://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg',
        txt: '这是一条消息3'
      }, {
        url: 'javascript:',
        img: 'http://ww1.sinaimg.cn/large/b0f3038egy1fvbl5tg4hkj20gl087dgs.jpg',
        txt: '这是一条消息4'
      }, {
        url: 'javascript:',
        img: 'http://ww1.sinaimg.cn/large/b0f3038egy1fvbl63v7dej20jc0a9754.jpg',
        txt: '这是一条消息5'
      }, {
        url: 'javascript:',
        img: 'http://ww1.sinaimg.cn/large/b0f3038egy1fvbl6am6l6j20j70a7myf.jpg',
        txt: '这是一条消息6'
      }]
    }
  }
}
</script>
<style lang="less" scoped>
</style>
