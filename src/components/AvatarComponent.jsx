import { Avatar } from '@nextui-org/react'

export default function AvatarComponent(props) {

    const { color, size, onClick } = props

    return (
        <Avatar
            isBordered
            color={color}
            src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            size={size}
            onClick={onClick ? onClick : undefined}
            {...props}
        />
    )
}