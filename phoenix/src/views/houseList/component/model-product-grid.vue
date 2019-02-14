<template>
<div class="product-grid">
  <dl v-for="(item,index ) in DataList" :key="index" >
    <dt @click="gotoDetail" :style="{cursor:'pointer'}">
         <el-carousel height="208px" :indicator-position="'none'" :autoplay="false">
        <el-carousel-item v-for="(picUrl,picIndx ) in item.productImages" :key="picIndx">
          <img :src="picUrl" alt="" width="370">
        </el-carousel-item>
      </el-carousel>
      <span class="room-hot-desc">{{item.productHotDesc}}</span>
    </dt>
    <dd>
      <div class="room-tags" :style="{position:'relative'}">
        <i class="room-tag" v-for="(tag,tagIdx) in item.productTagList" v-if="tagIdx <= 3" :key="tagIdx" >{{tag.tagName}}</i>
        <span :style="{position:'absolute',right:'5px',fontSize:'12px',color:'#999',cursor:'pointer'}"  @mouseenter="enter(item.productId)" @mouseleave="leave()">查看更多</span>
        <div class="card" v-if="isshowTaglabel&&showTagIdex===item.productId">
           <i class="room-tag" v-for="(tag,tagIdx) in item.productTagList"  :key="tagIdx" >{{tag.tagName}}</i>
        </div>
      </div>
      <h5 :title="item.title" @click="gotoDetail" :style="{cursor:'pointer'}">{{item.title}}</h5>
      <div class="room-props">
        <span class="room-prop-rate" v-if="item.starRating">{{item.starRating/10}}分</span>
        <span class="room-prop">{{item.rentLayoutDesc}}</span>
        <span class="room-prop">{{item.bedCount}}张床</span>
        <span class="room-prop">{{item.guestNumberDesc}}</span>
        <span class="room-prop">{{item.locationArea}}</span>
      </div>
      <div class="room-foots">
        <span class=" room-prop--price"><i class="currency">¥</i>{{item.price/100}}</span>
        <span class="room-foot " v-if="item.starRatingDesc">{{item.starRatingDesc}}</span>
        <span class="room-foot " v-if="item.newProductLabel">新品</span>
        <span class="room-foot ">连住优惠</span>
        <span class="room-prop " :style="{marginRight:'10px'}">{{item.favCountDesc}}</span>
        <span class="room-prop ">{{item.consumeDesc}}</span>
      </div>
    </dd>
    <span></span>
  </dl>
  <br class="clearfloat" />
  <div :style="{textAlign:'center'}">
    <el-pagination
    layout="prev, pager, next"
    :total="totalPage"
    :page-size="9"
    @current-change="changepage">
  </el-pagination>
  </div>

</div>
</template>
<script>
export default {
  props: {
    parentIdxArr: {
      type: Array,
      default: []
    }
  },

  data () {
    return {
      seleTagArr: [],
      DataList: [],
      isshowTaglabel: false,
      showTagIdex: 0,
      page: 1,
      totalPage: 0
    }
  },
  watch: {
    parentIdxArr: function (val) {
      this.seleTagArr = val
      // this.getCityList()
      console.log(666, val)
    }
  },
  mounted () {
    this.getCityList()
  },
  methods: {
    changepage (page) {
      this.page = page
      this.getCityList()
    },
    enter (index) {
      this.isshowTaglabel = true
      this.showTagIdex = index
    },
    leave () {
      this.isshowTaglabel = false
      this.showTagIdex = 0
    },
    changIndx (idx) {
      this.listIndx = idx + 1
    },
    gotoDetail () {
      this.$router.push({
        name: 'hoseDetail',
        params: { Id: 1 }
      })
    },
    getCityList () {
      this.DataList = []
      this.$axios.get(`${this.$api}/product`, {
        params: {
          id: this.$route.params.cityId,
          page: this.page,
          seletag: this.seleTagArr
        }
      })
        .then(res => {
          let Datas = res.data
          if (Datas.code === 200) {
            this.DataList = Datas.data
            this.totalPage = Datas.total
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
.product-grid {
  width: 1200px;
  margin: 20px auto;
  dl {
    width: 370px;
    float: left;
    margin: 0 15px 30px;
    dt {
      width: 370px;
      height: 208px;
      position: relative;
      .room-hot-desc {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        line-height: 24px;
        white-space: nowrap;
        color: #6f5119;
        font-size: 12px;
        background: #e0c084 -webkit-gradient(linear, left top, left bottom, from(#e0c084), to(#f0d092));
        background: #e0c084 linear-gradient(180deg, #e0c084, #f0d092);
        padding: 0 6px;
        border-radius: 2px;
      }
      img{
        position:relative;
        &::after {
            content: "";
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: url('../../home/img/banner1.jpg') no-repeat center;
      }
        }
    }
    dd {
      .room-tags {
        width: 100%;
        margin-top: 10px;
        .room-tag {
          margin-bottom: 5px;
          font-size: 12px;
          display: inline-block;
          -webkit-transform: scale(0.85);
          -ms-transform: scale(0.85);
          transform: scale(0.85);
          background-color: rgb(255, 255, 255);
          border: 1px solid rgb(148, 164, 189);
          color: rgb(148, 164, 189);
          padding: 0 5px;
        }
        .card {
          max-width: 132px;
          position: absolute;
          top: 20px;
          right: -80px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: #fff;
          font-size: 12px;
          padding: 5px;
          z-index: 2;
          -webkit-box-shadow: 10px 10px 5px #88886f;
          box-shadow: 3px 4px 5px #88886f;
        }
      }
      h5 {
        color: #333;
        font-size: 16px;
        font-weight: 600;
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .room-props {
        margin-top: 10px;
        .room-prop,
        .room-prop-rate {
          margin-right: -4px;
          color: #999;
          font-size: 12px;
          vertical-align: middle;
        }
        .room-prop-rate {
          color: #ff9b0f;
        }
        .room-prop:before {
          content: "|";
          margin: 0 5px;
          color: #ccc;
        }
      }
      .room-prop--price {
        font-weight: 600;
        color: #ec5f48;
        font-size: 24px;
        margin-right: 10px;
        .currency {
          font-size: 12px;
          font-style: normal;
          margin-right: 3px;
        }
      }
      .room-foot {
        font-size: 12px;
        padding: 1px 3px;
        border-radius: 2px;
        display: inline-block;
        background: #ff4221 -webkit-gradient(linear, left top, right top, from(#ff8568), to(#ff4221));
        background: #ff4221 linear-gradient(90deg, #ff8568, #ff4221);
        color: #fff;
        margin-right: 5px;
      }
      .room-prop {
        font-size: 12px;
        color: #999;
      }
    }
  }
  .clearfloat {
    clear: both;
  }
}
</style>
