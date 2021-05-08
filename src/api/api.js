import * as axios from "axios";



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "df91300d-3278-43bf-b98e-c4b92c115742"
    }
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId){
       return instance.post(`follow/${userId}`)
    },

    unfollow(userId){
       return instance.delete(`follow/${userId}`)
    },

    getProfile(userId){
        console.warn('Obgect method. Please profileAPI obgect');
       return profileAPI.getProfile(userId);
    }

}

export const profileAPI = {
    getProfile(userId){
       return instance
      .get(`profile/` + userId); 
    },
    getStatus(userId){
        return instance
      .get(`profile/status/` + userId); 
    },
    updateStatus(status){
        return instance
      .put(`profile/status`, {status:status}); 
    }
}

export const authAPI = {
    me(){
       return instance.get(`auth/me`);
    } 
}


