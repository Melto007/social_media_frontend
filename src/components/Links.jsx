import { Link } from 'react-router-dom'

export default function Links(props) {
    const { name, path } = props
    return (
        <>
            <Link to={path} {...props}>{name}</Link>
        </>
    )
}