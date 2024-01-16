import { Divider } from '@nextui-org/react'

export default function DividerComponent(props) {
    const { position="horizontal" } = props

    return (
        <>
            <Divider className="my-4 bg-gray-700" orientation={position} />
        </>
    )
}