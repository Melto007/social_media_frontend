import { useEffect } from 'react'
import { User } from "@nextui-org/react"
import { useSelector, useDispatch } from "react-redux"
import { profileDetails } from '../features/profileSlice'

export default function UserComponent() {
    const dispatch = useDispatch()
    const profileSlice = useSelector(state => state.profileSlice)
    const { isSuccess, profile } = profileSlice

    useEffect(() => {
        (async () => {
            dispatch(profileDetails())
        })()
    }, [])

    return (
        <>
            <User
                name={`@${isSuccess ? profile.data.user.name : 'UnauthorizedUser'}`}
                description={(
                    <p>
                        {isSuccess ? profile.data.user.email : 'UnauthorizedUser'}
                    </p>
                )}
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                }}
            />
        </>
    )
}