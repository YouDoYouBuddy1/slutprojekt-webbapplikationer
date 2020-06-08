import axios from 'axios'

axios.defaults.headers.common['Authorization'] = null;
const Api = axios.create({
    baseURL: 'http://localhost:5000/api'
})

export default Api