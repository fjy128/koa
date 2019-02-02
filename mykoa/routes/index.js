const router = require('koa-router')()
const banner = require('../public/json/banner.json')
const indexList = require('../public/json/indexList.json')
const shanghai = require('../public/json/shanghai.json')
const beijing = require('../public/json/beijing.json')
const chengdu = require('../public/json/chengdu.json')
const guanzhou = require('../public/json/guanzhou.json')
const hangzhou = require('../public/json/hangzhou.json')
const shenzhen = require('../public/json/shenzhen.json')

/**获取banner轮播图**/
router.get('/banner', async (ctx, next) => {
  // 允许来自所有域名请求 也可以使用koa2-cors


  // 这样就能只允许 http://127.0.0.1:3000这个域名的请求了
  // ctx.set("Access-Control-Allow-Origin", "http://127.0.0.1:3000"); 

  // 设置所允许的HTTP请求方法
  // ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");

  // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
  //  ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
  // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。

  // Content-Type表示具体请求中的媒体类型信息
  // ctx.set("Content-Type", "application/json;charset=utf-8");

  // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
  // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
  // ctx.set("Access-Control-Allow-Credentials", true);

  // 该字段可选，用来指定本次预检请求的有效期，单位为秒。
  // 当请求方法是PUT或DELETE等特殊方法或者Content-Type字段的类型是application/json时，服务器会提前发送一次请求进行验证
  // 下面的的设置只本次验证的有效时间，即在该时间段内服务端可以不用进行验证
  // ctx.set("Access-Control-Max-Age", 300);

  /*
  CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
      Cache-Control、
      Content-Language、
      Content-Type、
      Expires、
      Last-Modified、
      Pragma。
  */
  // 需要获取其他字段时，使用Access-Control-Expose-Headers，
  // getResponseHeader('myData')可以返回我们所需的值
  // ctx.set("Access-Control-Expose-Headers", "myData");

  // await next();

  ctx.body = {
    code: 200,
    data: banner,
    total: banner.length
  }
})
/**获取首页列表热门名宿**/
router.get('/cityhouse', async (ctx, next) => {
  try {
    let {
      id = 310100
    } = ctx.query;
    let allData = indexList;
    let newData = [];
    for (let item of allData) {
      if (parseInt(id) === item.cityId) {
        newData.push(item)
      }
    }
    ctx.body = {
      code: 200,
      data: {
        data: newData,
        total: newData.length
      }
    }
  } catch (err) {
    throw err
  }
})

/**获取每个城市民宿列表**/
router.get('/product', async (ctx, next) => {
  let Data = [];
  let {
    page = 1, size = 9, id = '310100'
  } = ctx.query;
  let ID = id.toString()

  let cityObj = {
    '310100': shanghai,
    '110100': beijing,
    '510100': chengdu,
    '440100': guanzhou,
    '330100': hangzhou,
    '440300': shenzhen,
  }

  Data = cityObj[ID]
  let arr = Data.slice((page - 1) * size, (page - 1) * size + size)
  ctx.body = {
    code: 200,
    data: arr,
    total: Data.length,
    page,
    size
  }
})


router.get('/json', async (ctx, next) => {
  let {
    page = 1, size = 2
  } = ctx.query
  let data = [1, 2, 3, 4, 5]

  let arr = data.slice((page - 1) * size, (page - 1) * size + size)
  ctx.body = {
    code: 0,
    data: {
      arr,
      total: data.length
    }
  }
})


module.exports = router