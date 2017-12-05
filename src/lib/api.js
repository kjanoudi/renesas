import axios from 'axios'

export default (token, urlPostfix = '') => axios.create({
  baseURL: `${process.env.renesas}${urlPostfix}`,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${token}`
  }
})
