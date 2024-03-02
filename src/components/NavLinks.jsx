import Icon from "./Icon";
import { NavLink } from "react-router-dom";
import List from "./List";

export default function NavLinks() {
    const links = [
        {
            id: 1,
            path: '',
            name: 'Home',
            icon: 'home-icon'
        },
        {
            id: 2,
            path: 'notification',
            name: 'Notification',
            icon: 'bell-icon'
        },
        {
            id: 3,
            path: 'followers',
            name: "Find Followers",
            icon: "search-icon"
        },
        {
            id: 4,
            path: 'bookmark',
            name: 'Bookmark',
            icon: 'bookmark-icon'
        },
        {
            id: 5,
            path: 'monetisation',
            name: 'Monetisation',
            icon: 'monetisation-icon'
        },
        {
            id: 6,
            path: 'message',
            name: 'Message',
            icon: 'message-icon'
        },
        {
            id: 7,
            path: 'profile',
            name: 'Profile',
            icon: 'user-icon'
        }
    ]

    return (
        <>
            {links.map(item => (
                <List key={item.id} activeLocation={`/${item.path}`}>
                    <Icon icon={item.icon} />
                    <NavLink
                        to={item.path}
                        className={({ isActive }) => isActive ? 'py-4 px-3 inline-block font-semibold text-blue-400' : 'py-4 px-3 inline-block font-semibold'}
                    >
                        {item.name}
                    </NavLink>
                </List>
            ))}
        </>
    )
}