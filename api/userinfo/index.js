import urlRequest from '@/util/request'

/**
 * 修改用户头像
 * @param {data}  
 */
const updateUserIcon = (id,data,callback) => {
	urlRequest.urlRequest('sso/update/'+id,data,"POST",callback);
}

/**
 * 获取当前登录用户信息
 */
const getCurrentUserInfo = callback => {
	urlRequest.urlRequest('sso/info',{},"GET",callback);
}

export default{
	updateUserIcon,
	getCurrentUserInfo
}
