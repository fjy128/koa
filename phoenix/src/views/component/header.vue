<template>
<el-row class="container">
  <el-col :span="16">
    <img src="./img/home.svg"/>
    <span>住的不一样</span>
  </el-col>
  <el-col :span="5" class="lInfo">
    <el-row>
      <el-col :span="8">登录/注册</el-col>
      <el-col :span="8">手机版</el-col>
      <el-col :span="8">成为房东</el-col>
    </el-row>
  </el-col>
</el-row>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
@height: 72px;
@logoWidth: 64px;
@logoHeight: 64px;
@padding15: 30px;
@color: #646566;
@borderColor: #ffcd10;
@hederHoverColor: #eee;
@fontSize12: 12px;
@fontSize14: 14px;
.container {
  width: 1200px;
  margin-right: auto;
  margin-left: auto;
  padding-left: @padding15;
  padding-right: @padding15;
  vertical-align: middle;
  img {
    width: @logoWidth;
    height: @logoHeight;
  }
  span {
    font-size: @fontSize12;
    color: @color;
  }
  .lInfo {
    line-height: 72px;
    text-align: center;
    .el-col {
      cursor: pointer;
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      position: relative;
      overflow: hidden;
    }
    .el-col:before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 51%;
      right: 51%;
      bottom: 0;
      border-bottom: 3px solid @borderColor;
      height: 4px;
      -webkit-transition-property: left, right;
      transition-property: left, right;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
    .el-col:hover:before {
      left: 0;
      right: 0;
    }
  }
}
</style>
