const router = require('koa-router')();
let multer = require('koa-multer');
let mkdirp = require('mkdirp');
let fs = require('fs');
let path = require('path');
let File = require('../models/file.js')
let currMonth = new Date().toISOString().substr(0, 7);
let dest = `uploads/${currMonth}/`;
let upload = multer({
  dest: dest
});
// eslint-disable-next-line
fs.existsSync(upload) ? '' : mkdirp.sync(path.join(__dirname, '../', dest));

/**
 * 下载文件
 */
router.get('/downLoadFile', async (ctx, next) => {
  try {
    let {
      fileId
    } = ctx.query;
    if (fileId === 'default') {
      ctx.res.setHeader('Content-type', 'image/png');
      ctx.body = fs.createReadStream(path.resolve(process.env.dataDir, 'public/default.png'));
    } else {
      let f = await File.findOne({
        _id: fileId
      });
      ctx.res.setHeader('Content-disposition', `attachment; filename=${encodeURIComponent(f.originalname)};filename*=utf-8${f.fileName}`);
      ctx.res.setHeader('Content-type', f.mimeType);
      // eslint-disable-next-line
      f.size ? ctx.res.setHeader('Content-Length', Number(+f.size).toString()) : '';
      ctx.body = fs.createReadStream(path.resolve(process.env.dataDir, f.savePath));
    }
  } catch (err) {
    throw err;
  }
});

/**
 *上传文件
 */
router.post('/uploadFile', upload.array('files', 12), async (ctx, next) => {
  try {
    let files = ctx.req.files;
    let f = [];
    for (let i = 0; i < files.length; i++) {
      let item = files[i];
      let ret = await File.create({
        savePath: item.path,
        fileName: item.filename,
        mimeType: item.mimetype,
        size: item.size,
        originalname: item.originalname,
        account: ctx.userId || ''
      });
      f.push({
        _id: ret._id
      });
    }
    ctx.success(f);
  } catch (err) {
    throw err;
  }
})

module.exports = router;
