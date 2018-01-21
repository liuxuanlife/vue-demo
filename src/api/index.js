import axios from 'axios';

// 拦截器
axios.interceptors.response.use(res => res = res.data);

// 获取swiper数据
export let getSliders = () => {
    return axios.get('/api/sliders');
};
// 获取热门图书
export let getHotBook = () => {
    return axios.get('/api/hot');
};

// 获取图书列表
export let getAllBook = () => {
    return axios.get('/api/book');
};

// 删除一本图书
export let removeOneBook = (id) => {
    return axios.delete(`/api/book?id=${id}`);
};
//查找某一本书
export let findOneBook = (id) => {
    return axios.get(`/api/book?id=${id}`);
};
// 修改某一本书
export let updataBook = (id, data) => {
    return axios.put(`/api/book?id=${id}`, data);
};

// 添加图书
export let addOneBook = (data) => {
    return axios.post('/api/book', data);
};
