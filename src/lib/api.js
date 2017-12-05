import axios from 'axios'

export default class Api {
  constructor() {
    this.axios = axios.create({
      baseURL: process.env.renesas,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  async login() {
    const tokenResponse = await this.axios.post('/login', {
      username: process.env.username,
      password: process.env.password
    })
    this.axios.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`
  }

  async getStatus(deviceId) {
    const response = {
      "id": "5033012d31363846394e184f51215454",
      "type": null,
      "attributes": {
        "connected": "true",
        "provisioned": "true",
        "iotProvider": "AZURE",
        "description": "MyFirst Device",
        "userName": "tushar@renesas.com ",
        "delete": "false"
      },
      properties: {
        "altitude": "544.39",
        "green": "off",
        "yellow": "off",
        "pressure": "27.75",
        "yacc": "49",
        "red": "off",
        "xacc": "28",
        "x": "-90",
        "temperature": "82.99",
        "humidity": "66.03",
        "y": "35",
        "z": "-48",
        "zacc": "1074"
      }
    }
    return response
  }

  putStatus(deviceId, payload) {
    const response = this.axios.put(`/api/devices/${deviceId}/state`, payload)
    return response
  }
}
