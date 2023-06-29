import axios from "axios"

let instance = axios.create({
    withCredentials: true,
    headers: { 'API-KEY': '30d47fc5-928a-448b-b1b2-9d8d17fa50ba' },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const requestsApi = {

    getAuthUser() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe })
            .then(response => {
                return response.data;
            });
    },

    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data;
            });
    },

    getUsers(pageNumber) {
        return instance.get(`users?page=${pageNumber}`)
            .then(response => {
                return response.data;
            });
    },

    deleteFollow(userid) {
        return instance.delete(`follow/${userid}`)
            .then(response => {
                return response.data;
            });
    },
    postFollow(userid) {
        return instance.post(`follow/${userid}`)
            .then(response => {
                return response.data;
            });
    },
    getUsersProfile(userid) {
        return instance.get(`profile/${userid}`)
            .then(response => {
                return response.data;
            });
    },
    getStatusProfile(userid) {
        return instance.get(`profile/status/${userid}`)
        .then(response => {
            return response.data;
        });
    },
    putStatusProfile(status) {
        return instance.put(`profile/status`, {status: status})
    }
}