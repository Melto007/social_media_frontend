import axios from 'axios';

// const instance = axios.create({
//     baseURL: 'http://127.0.0.1:8000/',
// });


// import axios from 'axios';

// axios.defaults.baseURL = 'http://127.0.0.1:8000/'

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: true
});

let refresh = false

instance.interceptors.response.use(response => response, async error => {
    if(error.response.status === 403 && !refresh) {
        refresh = true

        const response = await instance.post(
            'refresh/',
            {},
            { withCredentials: true }
        )

        if(response.status === 200) {
            instance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`

            return instance(error.config)
        }
    }
    refresh = false
    return error
})



export default instance