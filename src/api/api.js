import * as axios from "axios";


axios.defaults.baseURL = 'https://api.englishpatient.org';
axios.defaults.headers.common['Content-Type'] = 'application/json';

const getToken = () => {
    let tk = window.localStorage.getItem('auth_token')
    if (tk == undefined || tk == ''){
        return;
    }
    return tk;
}

axios.interceptors.request.use((config) => {
    let token = getToken();
    if(token != undefined){
        let url = new URL(config.baseURL + config.url);
        url.searchParams.set('token', token);
        config.url = url.toString();
    }
    return config;
}, (error) =>{
    return Promise.reject(error);
})


export const authAPI = {
    login(email, password) {
        return axios.post('/login', {email, password});
    },

    getUser() {
        return axios.get('/me?token=');
    },

}

