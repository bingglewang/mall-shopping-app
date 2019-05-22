import urlRequest from '@/util/request'

/**
 * 登录
 * @param {data}  
 */
const login = (data,callback) => {
	urlRequest.urlRequest('member/login',data,"POST",callback);
}

/**
 * 注册验证码
 */
const register = (data,callback) => {
	urlRequest.urlRequest('member/sendCode?phone='+data.phone,{},"POST",callback);
}

/**
 * 用户注册
 * @param {dataPath} 
 * @param {data}  
 */
const registerUser = (dataPath,data,callback) => {
	urlRequest.urlRequest('member/register?code='+dataPath,data,"POST",callback);
}

resetPwd
/**
 * 重置密码
 * @param {dataPath} 
 * @param {data}  
 */
const resetPwd = (dataPath,data,callback) => {
	urlRequest.urlRequest('member/resetPwd?code='+dataPath,data,"POST",callback);
}


export default{
  login,
	register,
	registerUser,
	resetPwd
}