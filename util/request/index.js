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



export default {
	urlRequest: function(url, param, way,callBack) {
		return urlRequest(url, param, way,callBack);
	}
}
