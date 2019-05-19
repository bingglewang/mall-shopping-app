import urlRequest from '@/util/request'

/**
 * 登录
 * @param {data}  
 */
console.log(urlRequest)
const login = data => {
	  urlRequest.urlRequest('admin/login',data,"POST",function(res) {
		return res
	})
}

export default{
  login
}