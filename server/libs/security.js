const crypto = require('crypto');
let algorithm = 'aes-128-cbc';

const key = Buffer.from('123edftgh765ij8b', 'utf8');
const iv = Buffer.from('xcfdhj5672dfgt2b', 'utf8');

/**
 * 加密
 *
 * @param buf
 * @returns {string}
 */
function cipher (src) {
  let sign = '';
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  sign += cipher.update(src, 'utf8', 'hex');
  sign += cipher.final('hex');
  return sign;
};

/**
 * 解密
 *
 * @param encryptedBuf
 * @returns {string}
 */
function decipher (sign) {
  let src = '';
  const cipher = crypto.createDecipheriv(algorithm, key, iv);
  src += cipher.update(sign, 'hex', 'utf8');
  src += cipher.final('utf8');
  return src;
};

/**
 * 签名校验
 *
 * @param buf
 * @returns {*}
 */
function sign (buf) {
  buf += 'hello4234324wwweewrwerwerwrwerwerwr3453534edfdbdadas2522334dgbd_world+123';
  let md5 = crypto.createHash('md5');// 定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
  md5.update(buf);
  let hash = md5.digest('hex');
  return hash;
};

module.exports = {
  cipher, decipher, sign
};
