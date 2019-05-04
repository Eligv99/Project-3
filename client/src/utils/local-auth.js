import axios from 'axios'

let LOCALAPI = {
    singupUser: (data) => {
         return axios.post('/user', data)
    },
    loginUser: (data) => {
        return axios.post('/user/login', data)
    },
    getUserData: (data) => {
        return axios.get('/user')
    },
    getLogout: () => {
        return axios.get('/user/logout');
    }
}

export default LOCALAPI;
