import { User } from "@nextui-org/react"
import { Link } from 'react-router-dom'

export default function UserComponent(props) {
    const { firstname, lastname, username, file } = props
    return (
        <>
            <User
                name={firstname + ' '+ lastname}
                description={(
                    <Link to="/">
                        {username}
                    </Link>
                )}
                avatarProps={{
                    src: file,
                }}
            />
        </>
    )
}