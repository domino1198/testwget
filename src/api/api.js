import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.englishpatient.org',
    headers:{
        'Content-Type': 'application/json'
    },
});


export const authAPI = {
    me(token) {
        return instance.get('/me?token=' + token);
    },

    login(email, password) {
        return instance.post('/login', {email, password});
    },

    logout() {
        return instance.delete('/login');
    }
}
