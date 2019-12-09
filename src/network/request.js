import axios from 'axios'

/*3.最终版本：由于instance本身返回一个Promise，因此使用Promise封装多此一举*/
export function req(config) {
  // 1.创建axios实例
  const instance = axios.create({
    // baseURL:'http://localhost:8081',
    baseURL:'http://123.207.32.32:8000/',
    timeout:5000
  })
  // 2.配置请求拦截器(请求成功与否)
 /* instance.interceptors.request.use(config => {
    return config
  },err => {
    console.log(err);
  })*/

  // 3.配置响应拦截器（响应成果与否）
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })

  // 4.执行真正的网络请求
  return instance(config)
}

export function req2(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/v2/',
    timeout:5000
  })
  // 2.配置请求拦截器(请求成功与否)
  /* instance.interceptors.request.use(config => {
		 return config
	 },err => {
		 console.log(err);
	 })*/

  // 3.配置响应拦截器（响应成果与否）
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })

  // 4.执行真正的网络请求
  return instance(config)
}

