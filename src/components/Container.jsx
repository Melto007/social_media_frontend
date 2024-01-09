export default function Container(props) {
    return (
        <div className="w-full md:w-[1400px] m-auto p-auto">{props.children}</div>
    )
}