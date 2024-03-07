import { User } from "@nextui-org/react"
import { Link } from "react-router-dom"

export default function Followers(props) {
    const { pk, file, username, email } = props

    return (
        <>
            <User
                name={`@${username}`}
                description={(
                    <Link to={`/home/profile/${pk}`}>
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