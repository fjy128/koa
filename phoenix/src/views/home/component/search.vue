<template>
<div class="search">
 <el-row>
  <el-col :span="8">
    <div class="grid-content leftline">
      <i class="GPS"></i>
      <span class="city">深圳</span>
    </div>
  </el-col>
  <el-col :span="8">
    <div class=" bg-purple-light">
        <el-date-picker
      v-model="time"
      type="daterange"
      value-format="yyyy-MM-dd"
      :picker-options="pickerOptions1"
      range-separator="至"
      start-placeholder="入住日期"
      end-placeholder="离开日期">
    </el-date-picker>
    </div>
    </el-col>
  <el-col :span="8">
    <div class="grid-content right">
      <button>搜索</button>
    </div>
    </el-col>
</el-row>

<!-- <city></city> -->
</div>
</template>
<script>
import city from './city'
export default {
  components: {
    city
  },
  data () {
    return {
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() < Date.now()
        }
      },
      time: ''

    }
  }
}
</script>

<style lang="less" scoped>
@lineColor: #979797;
@cityColor: #4e4e4e;
@timeColor: #4e4e4e;
@iconWH: 24px;
@fontSize20: 20px;
@top: 400px;
@minWidth: 870px;
@maxWidth: 1000px;
@height: 70px;
@btnColor: #333;
@btnH: 60px;
@btnW: 180px;
.search {
  position: absolute;
  display: inline-block;
  top: @top;
  left: 50%;
  transform: translateX(-50%);
  -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);
  height: @height;
  width: 83.333333333vw;
  max-width: @maxWidth;
  min-width: @minWidth;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  z-index: 2;
  white-space: nowrap;
  i {
    display: inline-block;
    width: @iconWH;
    height: @iconWH;
  }
  .grid-content {
    color: @cityColor;
    font-size: @fontSize20;
    text-align: center;
    line-height: @height;
    .GPS {
      vertical-align: middle;
      background: url("../img/GPS.png") no-repeat center;
      background-size: 100% 100%;
    }
    .city {
      cursor: pointer;
    }
    button {
      width: @btnW;
      line-height: @btnH;
      border-radius: 5px;
      font-size: 22px;
      text-align: center;
      color: @btnColor;
      cursor: pointer;
      background-image: -webkit-linear-gradient(90deg, #ffe057, #ffce00);
      background-image: -o-linear-gradient(90deg, #ffe057, #ffce00);
      background-image: -moz-linear-gradient(90deg, #ffe057, #ffce00);
      background-image: linear-gradient(90deg, #ffe057, #ffce00);
    }
  }
  .leftline {
    border-right: 1px solid @lineColor;
  }
  .bg-purple-light {
    color: @cityColor;
    font-size: @fontSize20;
    line-height: @height;
    padding-left: 20px;
  }
  .right {
    text-align: right;
    margin-right: 10px;
  }
}
</style>
<style>
.search >>> .el-carousel__arrow:hover {
  background-color: rgba(31, 45, 61, 0.9);
}
</style>
