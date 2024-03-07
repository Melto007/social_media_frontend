import { useEffect } from 'react'
import { User } from "@nextui-org/react"
import { useSelector, useDispatch } from "react-redux"
import { profileDetails } from '../features/profileSlice'

export default function UserComponent(props) {
    const { username, email, file, success } = props
    const dispatch = useDispatch()
    // const profileSlice = useSelector(state => state.profileSlice)
    // const { isSuccess, profile } = profileSlice

    // useEffect(() => {
    //     (async () => {
    //         dispatch(profileDetails())
    //     })()
    // }, [])

    return (
        <>
            <User
                name={success ? username : "UnauthorizedUser"}
                description={(
                    <p>
                        {success ? email : "UnauthorizedUser"}
                    </p>
                )}
                avatarProps={{
                    src: file,
                }}
            />
        </>
    )
}