import axios from 'axios'

let LOCALAPI = {
    singUpUser: (data) => {
        return axios.post('/_signup', data)
    },
    loginUser: (data) => {
        return axios.post('/_user/login', data)
    },
    getUserData: (data) => {
        return axios.get('/_user')
    },
    getLogout: () => {
        return axios.get('/_user/logout');
    }
}

export default LOCALAPI;
