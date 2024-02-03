import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/'

// axios.interceptors.response.use(response => response, async error => {
//     console.log(error.response.status)
//     if(error.response.status === 403) {
//         console.log("success")
//         const response = await axios.get(
//             'http://127.0.0.1:8000/refresh/'
//         )

//         console.log(response)
//     }
//     return error
// })