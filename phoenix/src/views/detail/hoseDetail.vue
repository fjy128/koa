<template>
<div class="wrapDetail">
  <div class="wrapPic">
        <el-carousel height="530px" :indicator-position="'none'" :autoplay="false">
          <el-carousel-item >
          <img  src="http://img.yeahtour.cn/663f65917255a21d28c49e23777228c0" alt="">
        </el-carousel-item>
        <el-carousel-item >
          <img src="http://img.yeahtour.cn/b6335508da7a316c84a657f269152ba4" alt="">
        </el-carousel-item>
        <el-carousel-item >
          <img src="http://img.yeahtour.cn/da6c6356906e3e818ba277a9097755fe" alt="">
        </el-carousel-item>
        </el-carousel>
  </div>
  <div class="houseInfo">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/houseList' }">民宿列表</el-breadcrumb-item>
      <el-breadcrumb-item>民宿详情</el-breadcrumb-item>
    </el-breadcrumb>
    <h2>3人间，市中心，中兴路地铁口，近上海火车站、外滩、人民广场，青年公寓床位出租3人间，市中心，中兴路地铁口，近上海火车站、外滩、人民广场，青年公寓床位出租3人间，市中心，中兴路地铁口，近上海火车站、外滩、人民广场，青年公寓床位出租</h2>
   <h5><span></span>详细介绍</h5>
   <p class="intr">公寓位于市中心，静安区新马路273号和源馨苑小区。步行15分钟到达上海火车站北广场、上海汽车总站，离中兴路地铁站3号口600多米。地铁3站地可达人民广场，外滩，东方明珠等景点，交通出行非常方便。
社内干净卫生，一客一换，各项居住设施便利，拎包即可入住，是您来上海旅游，求职，商务出差的理想之选。</p>
   <h5><span></span>亮点</h5>
    <p class="intr">
      房子是18年初精装修好的，一切都为眺望外滩夜景而设计装修，在这里白天你可以游玩附近城隍庙豫园外滩南京东路，晚上空暇时光坐在阳台边，与朋友看看江景分享彼此快乐有趣之时，在这里你不会感觉旅途的寂寞，喜欢在这里你能丢下城市的压抑。
    </p>
    <h5><span></span>评价</h5>
    <div class="rate">
      <p class="ratelist">描述准确<el-rate v-model="rate.desc" disabled show-score > </el-rate>分</p>
      <p class="ratelist">沟通交流<el-rate v-model="rate.desc" disabled show-score > </el-rate>分</p>
      <p class="ratelist">卫生状况<el-rate v-model="rate.desc" disabled show-score > </el-rate>分</p>
      <p class="ratelist">地理位置<el-rate v-model="rate.desc" disabled show-score > </el-rate>分</p>
      <p class="ratelist">性价比<el-rate v-model="rate.desc" disabled show-score > </el-rate>分</p>
    </div>
    <h5><span></span>设施服务</h5>
    <div class="product-facility">
      <h6>设施</h6>
      <ul>
        <li><i class="icon _wifi"></i>WIFI</li>
        <li><i class="icon _elevator"></i>电梯</li>
        <li><i class="icon _gate"></i>门禁系统</li>
        <li><i class="icon _table"></i>书桌/工作区</li>
        <li><i class="icon _balcony"></i>阳台/露台</li>
        <li><i class="icon _park"></i>公园</li>
        <li><i class="icon _supermark"></i>菜市场</li>
        <li><i class="icon _network"></i>有线网络</li>
        <li><i class="icon _parking"></i>停车位</li>
        <li><i class="icon _heating"></i>暖气</li>
        <li><i class="icon _brand"></i>扑克牌</li>
        <li><i class="icon _wolf"></i>狼人杀</li>
        <li><i class="icon _Mahjongtable"></i>麻将</li>
      </ul>
      <h6>卫浴</h6>
      <ul>
        <li><i class="icon _washer"></i>热水淋浴</li>
        <li><i class="icon _toothbrush"></i>牙膏/牙刷</li>
        <li><i class="icon _soap"></i>香皂</li>
        <li><i class="icon _sock"></i>拖鞋</li>
        <li><i class="icon _paper"></i>手纸</li>
        <li><i class="icon _washcloth"></i>毛巾</li>
        <li><i class="icon _facecloth"></i>浴巾</li>
        <li><i class="icon _shampoo"></i>沐浴露/洗发水</li>
      </ul>
      <h6>电器</h6>
      <ul>
        <li><i class="icon _tv"></i>电视</li>
        <li><i class="icon _aircondition"></i>空调</li>
        <li><i class="icon _aircleaner"></i>空气净化</li>
        <li><i class="icon _washer"></i>洗衣机</li>
        <li><i class="icon _hairdryer"></i>电吹风</li>
        <li><i class="icon _iceBox"></i>冰箱</li>
      </ul>
      <h6>厨房</h6>
      <ul>
        <li><i class="icon _dinnertool"></i>餐具</li>
        <li><i class="icon _cooker"></i>厨具</li>
        <li><i class="icon _microwave_oven"></i>微波炉</li>
        <li><i class="icon _Kettle"></i>热水壶</li>
      </ul>
      <h6>客房服务</h6>
      <ul>
        <li><i class="icon _24"></i>24小时入住</li>
        <li><i class="icon _checkin"></i>自主入住</li>
        <li><i class="icon _bed"></i>床品更换</li>
      </ul>
    </div>
    <h5><span></span>预定须知</h5>
    <div class="note">
      <h3>入住时间</h3>
      <p>15:00</p>
    </div>
    <div class="note">
      <h3>退房时间</h3>
      <p>12点前</p>
    </div>
    <div class="note">
      <h3>预订时长</h3>
      <p>随时可预定</p>
      <p>最少预订1天， 最多预订天数不限</p>
    </div>
    <div class="note">
      <h3>退订策略</h3>
      <p>宽松：入住前1天12:00前退订，可获100%退款。之后退订不退款</p>
    </div>
    <div class="note">
      <h3>可住人数</h3>
      <p>可住四人，不加客</p>
    </div>
    <div class="note">
      <h3>客人须知</h3>
      <p><del>允许聚会、</del> 适合儿童（2-12岁）、适合老人（60岁以上）、允许携带宠物、允许做饭、<del>允许抽烟、</del> 适合婴幼儿（2岁以下）</p>
    <p>【注意事项】 ⒈到达前请准备好每一位的身份证照并确定入住时间，需要登记后才能拿到开门密码，自助入住哦； 2.为保持屋内整洁，玄关处配备居家拖鞋，需脱鞋进屋。 3..如果房屋用于住宿外其他用途（如：拍摄、婚庆、聚会等）请预定前与房东沟通，否则房东有权不接待； 4.注意入住期间不大声喧哗；若有陌生人询问，请告知是房东朋友来借住。</p>
    </div>

    <h5><span></span>房源位置</h5>
    <p class="location">上海静安区新马路273号和源馨苑</p>
    <div class="map">
      <el-amap ref="map" vid="amapDemo" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo">
      </el-amap>
    </div>

  </div>

</div>
</template>
<script>
export default {
  data () {
    return {
      rate: {
        desc: 5
      },
      zoom: 12,
      center: [121.59996, 31.197646],
      events: {
        init: (o) => {
          console.log(o.getCenter())
          console.log(this.$refs.map.$$getInstance())
          o.getCity(result => {
            console.log(result)
          })
        },
        'moveend': () => {
        },
        'zoomchange': () => {
        },
        'click': (e) => {
          alert('map clicked')
        }
      },
      plugin: ['ToolBar', {
        pName: 'MapType',
        defaultType: 0,
        events: {
          init (map) {}
        }
      }]
    }
  }
}
</script>

<style lang="less" scoped>
.icon {
  display: inline-block;
  height: 20px;
  width: 20px;
  // border: 1px solid #4e4e4e;
  vertical-align: middle;
  margin-right: 3px;
}
._wifi {
  background: url("./img/wifi.svg") no-repeat center;
}
._elevator {
  background: url("./img/elevator.svg") no-repeat center;
}
._gate {
  background: url("./img/gate.svg") no-repeat center;
}
._table {
  background: url("./img/table.svg") no-repeat center;
}
._balcony {
  background: url("./img/balcony.svg") no-repeat center;
}
._park {
  background: url("./img/park.svg") no-repeat center;
}
._supermark {
  background: url("./img/supermark.svg") no-repeat center;
}
._parking {
  background: url("./img/parking.svg") no-repeat center;
}
._aircleaner {
  background: url("./img/aircleaner.svg") no-repeat center;
}
._aircondition {
  background: url("./img/aircondition.svg") no-repeat center;
}
._brand {
  background: url("./img/brand.svg") no-repeat center;
}
._hairdryer {
  background: url("./img/hairdryer.svg") no-repeat center;
}
._heating {
  background: url("./img/heating.svg") no-repeat center;
}
._iceBox {
  background: url("./img/iceBox.svg") no-repeat center;
}
._Mahjongtable {
  background: url("./img/Mahjongtable.svg") no-repeat center;
}
._network {
  background: url("./img/network.svg") no-repeat center;
}
._tv {
  background: url("./img/tv.svg") no-repeat center;
}
._washer {
  background: url("./img/washer.svg") no-repeat center;
}
._paper {
  background: url("./img/paper.svg") no-repeat center;
}
._shampoo {
  background: url("./img/shampoo.svg") no-repeat center;
}
._shower {
  background: url("./img/shower.svg") no-repeat center;
}
._soap {
  background: url("./img/soap.svg") no-repeat center;
}
._sock {
  background: url("./img/sock.svg") no-repeat center;
}
._toothbrush {
  background: url("./img/toothbrush.svg") no-repeat center;
}
._washcloth {
  background: url("./img/washcloth.svg") no-repeat center;
}
._facecloth {
  background: url("./img/facecloth.svg") no-repeat center;
}
._Kettle {
  background: url("./img/Kettle.svg") no-repeat center;
}
._dinnertool {
  background: url("./img/dinnertool.svg") no-repeat center;
}
._microwave_oven {
  background: url("./img/microwave_oven.svg") no-repeat center;
}
._cooker {
  background: url("./img/cooker.svg") no-repeat center;
}
._24 {
  background: url("./img/24.svg") no-repeat center;
}
._bed {
  background: url("./img/bed.svg") no-repeat center;
}
._checkin {
  background: url("./img/checkin.svg") no-repeat center;
}
._wolf {
  background: url("./img/wolf.svg") no-repeat center;
}

.wrapDetail {
  color: #4e4e4e;
  .houseInfo {
    width: 1200px;
    margin: 0 auto;
    h2 {
      margin-top: 20px;
      font-family: inherit;
      font-weight: 600;
      line-height: 25px;
      font-size: 18px;
      color: inherit;
    }
    h5 {
      margin-top: 40px;
      margin-bottom: 20px;
      font-size: 18px;
      color: #6e6e6e;
      font-weight: 700;
      border-bottom: 1px dashed #eee;
      line-height: 30px;
      padding-bottom: 10px;
      span {
        display: inline-block;
        width: 4px;
        height: 20px;
        margin-right: 10px;
        vertical-align: middle;
        background: #ffcd10;
      }
    }
    .note {
      margin-bottom: 10px;
      h3 {
        color: #999;
        font-size: 16px;
        font-weight: 700;
        margin-bottom: 10px;
      }
      p {
        text-indent: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
        margin-bottom: 15px;
      }
    }
    .intr,
    .location {
      font-size: 16px;
      margin-bottom: 15px;
    }
    .map {
      height: 500px;
    }
    .product-facility {
      // border-bottom: 1px dashed #eee;
      padding-bottom: 50px;
      h6 {
        color: #6e6e6e;
        font-size: 14px;
        margin: 5px;
        // text-indent: 40px;
      }
      ul {
        font-size: 12px;
        padding-left: 20px;
        li {
          display: inline-block;
          vertical-align: middle;
          margin: 15px;
        }
      }
    }
  }
}
.wrapPic {
  height: 530px;
}
</style>
<style scoped>
.wrapDetail >>> .el-carousel__item img {
  width: 100%;
  height: 100%;
  object-position: 50%;
  /* object-fit: cover */
}
.ratelist {
  vertical-align: middle;
  margin: 5px;
}
.ratelist >>> .el-rate {
  display: inline-block;
  margin-left: 5px;
  vertical-align: middle;
}
.wrapDetail >>> .el-carousel__arrow {
  background: rgba(0, 0, 0, 0.6);
  width: 80px;
  height: 80px;
  font-size: 50px;
  border-radius: 10px;
}
.wrapDetail >>> .el-carousel__arrow--left {
  left: 70px;
}
.wrapDetail >>> .el-carousel__arrow--right {
  right: 70px;
}
.wrapDetail >>> .el-breadcrumb__inner.is-link {
  color: #ffcd10;
}
</style>
