import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

axios.interceptors.response.use(response => response, async error => {
    if(error.response.status === 403) {
        const response = await axios.post(
            'refresh/',
            {},
            { withCredentials: true }
        )

        if(response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`

            return axios(error.config)
        }
    }
    return error
})

