import axios from 'axios'

// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
axios.defaults.baseURL = 'http://127.0.0.1:3030'


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log(config);
    // config.url =  "/getUser?name=MAX力"
    // 获取用户信息，判断用户是否登录，如果没有登录先提示用户登录

    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么

    console.log(error);

    return Promise.reject({
        error: '你非得玩一下吗？'
    });
});


export default function ajax(url, params, type) {
    return new Promise((resolve, reject) => {
        // 1. 声明记录的变量
        let promise

        // 2. 判断请求的类型
        if (type.toUpperCase() == 'GET') {
            // get 请求
            promise = axios({
                url,
                params
            })
        } else if (type.toUpperCase() == 'POST') {
            // post 请求
            promise = axios({
                url,
                data: new URLSearchParams(params),
                method: 'post'
            })
        }

        // 3. 处理响应
        promise.then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })

    })
}