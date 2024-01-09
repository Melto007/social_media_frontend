import { Outlet } from 'react-router-dom'
import MenuNav from './pages/menu/MenuNav'

export default function RootPage() {
    return (
        <>
            <MenuNav />
            <Outlet />
        </>
    )
}