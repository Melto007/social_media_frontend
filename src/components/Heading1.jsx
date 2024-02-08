export default function Heading1(props) {
    const { heading } = props
    return (
        <h1 {...props}>{heading}</h1>
    )
}