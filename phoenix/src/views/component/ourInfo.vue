<template>
  <section class="insurance-block">
    <div class="container">
      <div class="insurance">
        <a href="##" class="insurance-item">
          <img src="./img/ruzhufangxin.png">
          <h5>放心入住</h5>
          <p>千万保障先行赔付</p>
        </a>
        <a href="##" class="insurance-item">
          <img src="./img/tiexinfuwu.png">
          <h5>贴心服务</h5>
          <p>7*24小时服务</p>
        </a>
        <a href="##" class="insurance-item">
          <img src="./img/xinyongrenzheng.png">
          <h5>信用认证</h5>
          <p>实名认证更放心</p>
        </a>
        <a href="##" class="insurance-item">
          <img src="./img/safety.png">
          <h5>安全无忧</h5>
          <p>房客房东保险</p>
        </a>
      </div>
    </div>
  </section>
</template>
<style lang="less" scoped>
section {
  margin-top: 40px;
  padding: 40px 0;
  background-color: #fafafa;
  margin-bottom: 0;
  .container {
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    .insurance {
      text-align: center;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      font-size: 0;
      a {
        display: inline-block;
        font-size: 14px;
        text-align: center;
        color: #999;
        width: 25%\9;
        img {
          width: 6vw;
          max-width: 70px;
          vertical-align: middle;
          border: 0;
        }
        h5 {
          color: #333;
          font-size: 16px;
          margin: 0.8em 0 0.5em;
          font-weight: 400;
        }
        p {
          margin: 0 0 10px;
        }
      }
    }
  }
}
</style>
