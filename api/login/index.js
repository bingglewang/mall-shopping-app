import urlRequest from '@/util/request'

/**
 * 登录
 * @param {data}  
 */
console.log(urlRequest)
const login = data => {
	  urlRequest.urlRequest('/api/admin/login',data,"POST",function(res) {
		return res
	})
}

export default{
  login
}