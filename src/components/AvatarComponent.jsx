import { Avatar } from '@nextui-org/react'

export default function AvatarComponent(props) {

    const { file, color, size, onClick } = props

    return (
        <Avatar
            isBordered
            color={color}
            src={file}
            size={size}
            onClick={onClick ? onClick : undefined}
            {...props}
        />
    )
}