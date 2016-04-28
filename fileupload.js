/**
 *
 * @Description 文件上传配置
 * @Author Amor
 * @Created 2016/04/27 17:50
 * 技术只是解决问题的选择,而不是解决问题的根本...
 * 我是Amor,为发骚而生!
 *
 */
var multer = require('multer');
var md5 = require('md5');
var config = require('./config')

var storage = multer.diskStorage({
    //设置上传文件路径,以后可以扩展成上传至七牛,文件服务器等等
    destination: config.upload.path,
    //TODO:文件区分目录存放
    //给上传文件重命名，获取添加后缀名,获取文件MD5,文件重复直接覆盖
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, file.fieldname + '-' + md5(file) + "." + fileFormat[fileFormat.length - 1]);
    }
});

//添加配置文件到muler对象。
var upload = multer({
    storage: storage,
    //其他设置请参考multer的limits
    //limits:{}
});
//导出对象
module.exports = upload;
