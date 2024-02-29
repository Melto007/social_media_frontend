import { User } from "@nextui-org/react"

export default function Followers(props) {
    const { file, username, email } = props

    return (
        <>
            <User
                name={`@${username}`}
                description={(
                    <p>
                        {email}
                    </p>
                )}
                avatarProps={{
                    src: file,
                }}
            />
        </>
    )
}