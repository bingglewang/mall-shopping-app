import {BaseUrl} from '../env/index'

// 参数： url:请求地址  param：请求参数  way：请求方式 callBack：回调函数
function urlRequest(url, param, way, callBack) {

	let baseParam = {
		/* deviceId: "",
		os: "ios",
		ip: '192.168.1.35',
		versionName: "1.1.0",
		version: "",
		pageNum: "",
		pageSize: "",
		appName: "hfp",
		userId: "123" */
	}

	let token = "";

	uni.getStorage({
		key: 'token',
		success: function(res) {
			token = res.data
		}
	});
	
	uni.request({
		url: BaseUrl+url, //仅为示例，并非真实接口地址。
		data: JSON.stringify(Object.assign(param, baseParam)),
		header: {
			'Token': token,
			'Accept': 'application/json',
			'Content-Type': 'application/json', //自定义请求头信息
		},
		method: way,
		success: (res) => {
			callBack(res)
		}
	});
}

const uploadFile = opt => {
    opt = opt || {};
    opt.url = opt.url || '';
    opt.filePath = opt.filePath || null;//要上传文件资源的路径。   
    opt.name = opt.name || null;//文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容 
    
    opt.filePath = opt.filePath || null;
    opt.success = opt.success || function() {};


    uni.uploadFile({
        url: ImageUrl + opt.url,
        filePath:opt.filePath,
        name:opt.name,
        success:function(res){
            opt.success(res);
        },
        fail: function () {
            uni.showToast({
                title: '请稍后重试'
            });
        }

    })
    
}

export default {
	urlRequest: function(url, param, way,callBack) {
		return urlRequest(url, param, way,callBack);
	}
}
