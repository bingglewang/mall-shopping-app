import urlRequest from '@/util/request'

/**
 * 修改用户头像
 * @param {data}  
 */
const updateUserIcon = (id,data,callback) => {
	urlRequest.urlRequest('sso/update/'+id,data,"POST",callback);
}

export default{
	updateUserIcon
}
