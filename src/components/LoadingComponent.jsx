import { CircularProgress } from '@nextui-org/react'

export default function LoadingComponent(props) {
    const { size } = props
    return (
        <>
            <CircularProgress aria-label='loading...' size={size} />
        </>
    )
}