export default function Paragraph(props) {
    return (
        <p className={`text-gray-400 text-[0.8em] md:text-md`}>
            {props.content}
        </p>
    )
}