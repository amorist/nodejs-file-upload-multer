# nodejs-file-upload-multer
multer文件上传实例

package version:

    "multer": "^1.1.0",
    "md5": "^2.1.0",

使用方法：

```
//文件上传服务
router.post('/upload', upload.single('avatar'), function (req, res, next) {
    if (req.file) {
        res.send('文件上传成功')
        console.log(req.file);
        console.log(req.body);
    }
});
```
