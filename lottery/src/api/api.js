import axios from 'axios'
let istance=axios.create({
    baseURL:'https://m.jifuxi.com'
})
//添加请求拦截器
instance.interceptors.request.use(config=>{
    return config;
},err=>{
    return Promise.reject(err)
})
//添加响应拦截器
instance.interceptors.response.use(res=>{
    return res;
},err=>{
    return Promise.reject(err)
})
export default instance;