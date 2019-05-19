import urlRequest from "@/util/request/index.js"

/**
 * 登录
 * @param {data}  
 */
const login = data => {
	return  urlRequest('/api/admin/login',data,POST,function() {})
}

module.exports = {
  login
}