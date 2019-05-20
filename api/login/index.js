import urlRequest from '@/util/request'

/**
 * 登录
 * @param {data}  
 */
const login = (data,callback) => {
	urlRequest.urlRequest('admin/login',data,"POST",callback);
}

export default{
  login
}