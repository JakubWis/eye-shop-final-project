import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://eye-shop-1d673.firebaseio.com/'
})

export default instance;