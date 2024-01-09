import { Button } from '@nextui-org/react'

export default function ButtonComponent(props) {
    const { name, color="primary" } = props
    return (
        <>
            <Button color={color} {...props}>
                {name}
            </Button>
        </>
    )
}