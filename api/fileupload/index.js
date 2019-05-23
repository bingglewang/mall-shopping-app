const uploadFile = (opt,formData,callback) => {
    opt = opt || {};
    opt.filePath = opt.filePath || null;//要上传文件资源的路径。   
    opt.name = opt.name || null;//文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容 

    uni.uploadFile({
        url: 'http://39.108.139.140:8888/image/add',
        filePath:opt.filePath,
        name:opt.name,
		formData:formData,
        success:function(res){
            callback(res);
        },
        fail: function () {
            uni.showToast({
                title: '请稍后重试'
            });
        }

    })
    
}

export default{
	uploadFile
}