import { useLocation } from 'react-router-dom'

export default function List(props) {
    const location = useLocation()
    const { children, activeLocation=undefined } = props

    let style = 'flex items-center px-6 hover:bg-black'

    if(location.pathname === activeLocation) {
        style = 'flex items-center px-6 hover:bg-black bg-black'
    }

    return (
        <>
            <li className={style}>
                {children}
            </li>
        </>
    )
}