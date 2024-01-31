import {
    REGISTER_ITEM_CONSTANTS,
    REGISTER_LOADING_CONSTANTS,
    REGISTER_ERROR_CONSTANTS,

    LOGIN_ERROR_CONSTANTS,
    LOGIN_ITEM_CONSTANTS,
    LOGIN_LOADING_CONSTANTS
} from '../constants/registerConstant'
import axios from 'axios'

export function registerAction(data) {
    return async function(dispatch) {
        try {
            dispatch({
                type: REGISTER_LOADING_CONSTANTS
            })

            const response = await fetch('http://127.0.0.1:8000/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

            const responseData = await response.json()

            if(response.ok) {
                dispatch({
                    type: REGISTER_ITEM_CONSTANTS,
                    payload: responseData.message
                })
            } else {
                dispatch({
                    type: REGISTER_ERROR_CONSTANTS,
                    payload: responseData.message
                })
            }
        } catch(error) {
            dispatch({
                type: REGISTER_ERROR_CONSTANTS,
                payload: error.response
            })
        }
    }
}

export function loginAction(data) {
    return async function(dispatch) {
        try {
            dispatch({
                type: LOGIN_LOADING_CONSTANTS
            })

            await axios.post(
                'http://127.0.0.1:8000/login/',
                data,
                { withCredentials: true }
            ).then(({ data, status }) => {
                if(status === 200) {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
                    dispatch({
                        type: LOGIN_ITEM_CONSTANTS,
                        payload: data
                    })
                }
            }).catch((err) => {
                dispatch({
                    type: LOGIN_ERROR_CONSTANTS,
                    payload: err.response !== undefined && err.response.data.message
                })
            })

        } catch(error) {
            dispatch({
                type: LOGIN_ERROR_CONSTANTS,
                payload: err.response !== undefined && err.response.data.message
            })
        }
    }
}