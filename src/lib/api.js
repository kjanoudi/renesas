import axios from 'axios'

export default class Api {
  initialize() {
    this.axios = axios.create({
      baseURL: process.env.renesas,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  login() {
    const tokenResponse = this.axios.post('/login', {
      username: process.env.username
      password: process.env.password
    })
    this.axios.headers['Authorization'] = `Bearer ${tokenResponse.data.token}`
  }

  getStatus(deviceId) {
    const response = this.axios.get(`/api/devices/${deviceId}/state`)
    return response
  }

  putStatus(deviceId, payload) {
    const response = this.axios.put(`/api/devices/${deviceId}/state`, payload)
    return response
  }
}
