import axios from "axios"

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '20b1af3b-5a7c-4983-a025-9f9dbeabc720'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unfollowUser(userId: number) {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    },

    followUser(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },

    getProfile(userId: number) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },

    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`)
            .then(response => response.data)
    },

    updateStatus(status: string) {
        return instance.put<{ resultCode: number }>(`profile/status`, { status })
            .then(response => response.data)
    },
}



export const authAPI = {
    getMe() {
        return instance.get(`auth/me`).then(response => response.data)
    }
}