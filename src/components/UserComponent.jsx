import { User } from "@nextui-org/react"
import { useSelector } from "react-redux"
import { Link } from 'react-router-dom'

export default function UserComponent() {
    const profileSlice = useSelector(state => state.profileSlice)
    const { isSuccess, profile } = profileSlice

    return (
        <>
            <User
                name={`@${isSuccess ? profile.data.name : 'UnauthorizedUser'}`}
                description={(
                    <Link to="/">
                        {isSuccess ? profile.data.email : 'UnauthorizedUser'}
                    </Link>
                )}
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                }}
            />
        </>
    )
}