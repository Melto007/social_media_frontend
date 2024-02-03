import { redirect } from "react-router-dom"

export function getToken() {
    const token = sessionStorage.getItem('token')
    return token
}

export function checkAuthLoader() {
    const token = getToken()

    if(token === null) {
        return redirect('/')
    }
    return null
}