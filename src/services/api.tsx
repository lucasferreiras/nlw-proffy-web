import axios from 'axios'

const api = axios.create({
  baseURL: 'https://nlw-proffy-api.herokuapp.com'
})

export default api