import ScaleLoader from "react-spinners/ScaleLoader"

export default function LoadingComponent(props) {
    const { size } = props
    return (
        <>
            {/* <CircularProgress aria-label='loading...' size={size} /> */}
            <ScaleLoader
                color="#005ed0"
                height={40}
                radius={10}
                width={5}
            />
        </>
    )
}