import axios from "axios";
import { getToken, removeToken } from "./token";
import { message } from "antd";
import router from "@/router";

// axios的配置项
const request = axios.create({
    // 配置根域名
    baseURL: 'http://geek.itheima.net/v1_0',
    // 配置超时时间：5s
    timeout: 5000
})

// 添加请求拦截器
// 在请求发送之前 做拦截 插入一些自定义的配置，例如[参数的处理，请求头的处理]
request.interceptors.request.use((config)=>{
    const token = getToken();
    if(token){
        // 自定义请求头的字段信息
        config.headers.Authorization = `Bearer ${token} dmodemodemdoedmeo`;
        // config.headers['Access-token'] = `Bearer ${token}`;
    }
    return config
}, (error)=>{
    return Promise.reject(error)
})

// 添加响应拦截器
// 在接口响应返回到客户端之前 做拦截 重点处理返回的数据
request.interceptors.response.use(response => {
    return response.data
}, error => {
    console.dir(error);
    if(error.response.status === 401){
        message.error('登录已过期，请重新登录');
        removeToken();
        router.navigate('/');
        window.location.reload();
    }
    return Promise.reject(error)
})

export { request }