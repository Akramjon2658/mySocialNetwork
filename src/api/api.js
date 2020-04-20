import * as axios from "axios";

let initialAxios = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'ca28c6fb-7008-4227-ac1b-fb7c9209103f'
  }
})

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return initialAxios
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => { return response.data })
  },
  unfollow(userId) {
    return initialAxios.delete(`follow/${userId}`).then(response => { return response.data.resultCode} )
  },
  follow(userId) {
    return initialAxios.post(`follow/${userId}`).then(response => { return response.data.resultCode} )
  }
}
export const profileAPI = {
  getProfile(userId) {
    return initialAxios.get(`profile/${userId}`) 
  },
  getStatus(userId) {
    return initialAxios.get(`profile/status/${userId}`)
    },
  updateStatus(status) {
    return initialAxios.put(`profile/status`, {status: status})
  },
  savePhoto(photos) {
    let data = new FormData()
    data.append('image', photos[0])
    return initialAxios.put(`profile/photo`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }
}
export const authAPI = {
  getAuthUser() {
    return initialAxios.get('auth/me').then(response => { return response.data})
  },
  login(email, password, rememberMe) {
    return initialAxios.post('auth/login', {email, password, rememberMe})
  },
  logout() {
    return initialAxios.delete('auth/login')
  }
}