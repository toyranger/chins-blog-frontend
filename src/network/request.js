import axios from 'axios'

export function request(config) {
    // 1. 创建axios实例
    const instance = axios.create({
        baseURL: 'http://localhost:8082',
        timeout: 5000,
        headers: {
            'content-type': 'application/json'
        }
    })

    // 2. axios拦截器
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log('err ===> ' + err);
    })

    instance.interceptors.response.use(res => {
        return res.data;
    }, err => {
        console.log(err);
    })

    // 3. 发送真正的网络请求
    return instance(config);
    // 返回的是Promise，调用这个函数的时候直接then()就可以
}