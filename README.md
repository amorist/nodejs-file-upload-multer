# nodejs-file-upload-multer
multer文件上传实例

package version:

    "multer": "^1.1.0",
    "md5": "^2.1.0",



使用方法：

```
var express = require('express');
var router = express.Router();
var upload = require('./fileupload');
//文件上传服务
router.post('/upload', upload.single('avatar'), function (req, res, next) {
    if (req.file) {
        res.send('文件上传成功')
        console.log(req.file);
        console.log(req.body);
    }
});
```

form:

```
<form id='editfile' method='post' action='/system/upload' enctype='multipart/form-data'>
    <input name="text" type="text"/>
    选择图片：<input name="avatar" id='upfile' type='file'/>
    <input type='submit' value='提交'/>
</form>
```
