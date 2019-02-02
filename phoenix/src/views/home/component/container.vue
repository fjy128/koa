<template>
  <div class="container">
    <el-row>
      <el-col :span="8" v-for="(item,indx) in cityData" :key="indx">
        <figure>
          <div class="pic">
            <img class="m" title="" alt="" :src="item.coverImage">
            <div class="mask">
              <div class="center">
                 <h3>城市：{{item.cityName}}市</h3>
                 <p>地区：{{item.districtName}}</p>
                 <p>开放时间：{{$common.fmt('yyyy-MM-dd ',item.firstOnSaleTime)}}</p>
              </div>

            </div>
          </div>
          <figcaption>
            <p class="title ellipsis" :title="item.title">{{item.title}}</p>
            <div class="info">
              <span class="room-prop">{{item.rentLayoutDesc}}</span>
              <span class="room-prop">{{item.bedCount}}张床</span>
              <span class="room-prop">{{item.guestNumberDesc}}</span>
              <span class="room-prop">{{item.locationArea}}</span>

            </div>
            <div class="foot">
              <span class="price" v-if="item.discountPrice"><i class="currency">¥</i>{{item.discountPrice/100}}</span>
              <span class="price" v-else><i class="currency">¥</i>{{item.price/100}}</span>
                <el-tooltip v-if="item.discountTag" class="room-foot" effect="dark" :content="item.discountShow" placement="bottom">
                  <el-button>{{item.discountTag}}</el-button>
                </el-tooltip>
               <span class="room-foot" v-if="item.newProductLabel">新品</span>
              <del v-if="item.discountPrice">￥{{item.price/100}}</del>
                <el-button type="text" @click="dialogVisible = true">
                  <span class="location"><i class="icon _location"></i>查看地图</span>
                </el-button>
                <el-dialog
                  title="提示"
                  :visible.sync="dialogVisible"
                  width="30%">
                  <span>这是一段信息</span>

                </el-dialog>
            </div>
          </figcaption>
        </figure>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {

  props: {
    Datas: {
      type: Array,
      default: []
    }
  },
  watch: {
    Datas: {
      handler (val) {
        this.cityData = val
      }
    }
  },
  methods: {
  },
  data () {
    return {
      cityData: [],
      dialogVisible: false
    }
  }
}
</script>
<style lang="less" scoped>
@color: #4e4e4e;
@titColor: #333;
@infoColor: #999;
@priceColor: #ec5f48;
@fontSize20: 20px;
@fontSize18: 18px;
@fontSize16: 16px;
@fontSize14: 14px;
@fontSize12: 12px;
@marginTop10: 10px;
@width: 370px;
@height: 300px;
@picHeight: 208px;
.icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}
._location {
  background: url("../../../assets/localtion.svg") no-repeat center -1px;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.container {
  cursor: default;
  width: 1200px;
  margin: 0 auto;
}
figure {
  width: @width;
  height: @height;
  .pic {
    height: @picHeight;
    width: 100%;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    .mask {
      padding: 0 20px;
      opacity: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      text-align: center;
      color: rgba(255, 255, 255, 0);
      transition: all 0.5s ease-in;
      .center {
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
      h3 {
        // padding-bottom: 10px;
        // border-bottom: 2px #eee dotted;
      }
      p {
        margin-top: 10px;
      }
    }
    &:hover .mask {
      background-color: rgba(0, 0, 0, 0.4);
      opacity: 1;
      color: rgba(255, 255, 255, 1);
    }
  }
  figcaption {
    .title {
      font-size: @fontSize16;
      color: @titColor;
      font-weight: 600;
      margin-top: @marginTop10;
    }
    .info {
      margin-top: @marginTop10;
      color: @infoColor;
      font-size: @fontSize12;
      vertical-align: middle;
      .room-prop:before {
        content: "|";
        margin: 0 10px;
        color: #ccc;
      }
    }
    .foot {
      font-size: 12px;
      .room-foot {
        margin-left: 5px;
        padding: 1px 3px;
        border-radius: 2px;
        display: inline-block;
        background: #ff4221 -webkit-gradient(linear, left top, right top, from(#ff8568), to(#ff4221));
        background: #ff4221 linear-gradient(90deg, #ff8568, #ff4221);
        color: #fff;
        // margin-right: 5px;
      }
      .map {
        height: 500px;
      }
      .location {
        margin-left: 15px;
        color: #999;
        cursor: pointer;
      }
      margin-top: @marginTop10;
      .currency {
        color: @priceColor;
      }
      del {
        color: @infoColor;
        font-size: 12px;
        margin-left: 10px;
      }
      .price {
        color: @priceColor;
        font-weight: 600;
        font-size: @fontSize20;
      }
    }
  }
}
</style>
