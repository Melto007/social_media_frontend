import { User } from "@nextui-org/react"
import { Link } from 'react-router-dom'

export default function UserComponent(props) {
    const { email, username, file } = props
    return (
        <>
            <User
                name={username}
                description={(
                    <Link to="/">
                        {email}
                    </Link>
                )}
                avatarProps={{
                    src: file,
                }}
            />
        </>
    )
}