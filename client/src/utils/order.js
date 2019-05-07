import axios from 'axios'

let PRODUCTSAPI = {
    getProducts: (data) => {
        return axios.post('/_signup', data)
    },
    ByOrder: (data) => {
        return axios.post('/_user/login', data)
    },
    createItem: () => {
        return axios.get('/_user/logout');
    }
}

export default PRODUCTSAPI;
