import { useEffect, useState } from 'react'
import AvatarComponent from "../../components/AvatarComponent";
import {
    NavbarMenuToggle,
    Navbar,
    NavbarContent
} from '@nextui-org/react'
import Container from '../../components/Container';
import Icon from '../../components/Icon';
import NavLinks from '../../components/NavLinks'

import { Navigate, Outlet, useNavigate } from 'react-router-dom'
import UserComponent from '../../components/UserComponent';
import Links from '../../components/Links';
import ButtonComponent from '../../components/ButtonComponent'
import DividerComponent from '../../components/DividerComponent';
import TrendingSideBar from './TrendingSideBar';
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../features/userSlice'
import { profileDetails } from '../../features/profileSlice'
import { googleLogout } from '@react-oauth/google'

export default function MenuNav() {
    const navigate = useNavigate()
    const [ isMenuOpen, setIsMenuOpen ] = useState(false)
    const  [ isTrendingMenu, setIsTrendingMenu ] = useState(false)

    const dispatch = useDispatch()

    const profileSlice = useSelector(state => state.profileSlice)
    const { isSuccess, profile } = profileSlice

    useEffect(() => {
        (async () => {
            dispatch(profileDetails())
        })()
    }, [])

    function onLogoutHandler() {
        googleLogout()
        dispatch(logoutUser())
    }

    return (
        <>
            <Container>
                <div>
                    <div className='md:grid md:grid-cols-5'>

                        {/** laptops */}
                        <div className='hidden md:block bg-neutral-900 h-auto'>
                            <div className='sticky top-0'>
                                <div className='px-6 py-4'>
                                    <UserComponent
                                        success={isSuccess}
                                        username={isSuccess && profile.data.user.name}
                                        email={isSuccess && profile.data.user.email}
                                        file={isSuccess && profile.data.url}
                                    />
                                    <div className='flex justify-between items-center text-sm py-4'>
                                        <Links path='/' name="234 Followers"/>
                                        <Links path='/' name="212 Following"/>
                                    </div>
                                </div>
                                <ul className=''>
                                    <li className='border-solid border-t-2 border-gray-800'></li>
                                        <NavLinks />
                                    <li className='border-solid border-b-2 border-gray-800'></li>
                                </ul>
                                <div className='flex flex-col gap-2 px-4 py-4'>
                                    {isSuccess &&  <ButtonComponent onClick={onLogoutHandler} name="Logout" startContent={<Icon icon="signin-icon" />} />}
                                    {!isSuccess && <ButtonComponent name="Log In" startContent={<Icon icon="login-icon" />} />}
                                </div>
                            </div>
                        </div>

                        <div className='md:block md:col-span-3'>
                            <Navbar
                                isMenuOpen={isMenuOpen}
                                onMenuOpenChange={setIsMenuOpen}
                                className="bg-neutral-900 text-white w-full"
                                maxWidth='full'
                            >
                                <NavbarContent>
                                    <NavbarMenuToggle className="md:hidden" />
                                </NavbarContent>

                                <NavbarContent justify="center md:end">
                                    <Icon icon="twitter-icon" />
                                </NavbarContent>

                                <NavbarContent justify="end">
                                    <AvatarComponent
                                        color="primary"
                                        size="md"
                                        file={isSuccess ? profile.data.url : undefined}
                                        onClick={() => setIsTrendingMenu(!isTrendingMenu)}
                                    />
                                </NavbarContent>
                            </Navbar>

                            <div className='md:grid md:grid-cols-3'>
                                <div className='md:col-span-3'>
                                    <Outlet />
                                </div>
                            </div>
                        </div>


                        <div className='hidden md:block md:py-0 bg-neutral-900'>
                            <div className='sticky top-0'>
                                <div className='py-4'>
                                    <TrendingSideBar />
                                </div>
                            </div>
                        </div>

                        {/** mobile responsive */}
                        <div
                            className={`
                                md:hidden fixed w-full h-full bottom-0 bg-neutral-900 z-10 py-16 overflow-y-auto
                                duration-500 ${isTrendingMenu ? 'left-0' : 'left-[100%]'}
                            `}
                        >
                            <div className='py-2 px-5'>
                                <TrendingSideBar />
                            </div>
                        </div>

                        <div
                            className={`
                                md:hidden fixed w-full h-full overflow-y-auto bottom-0 z-10 py-16 bg-neutral-900
                                duration-500 ${isMenuOpen ? 'left-0' : 'left-[-100%]'}
                            `}
                        >
                            <div className='px-5 py-2'>
                                <UserComponent />
                                <div className='flex justify-between items-center text-sm'>
                                    <Links path='/' name="234 Followers"/>
                                    <Links path='/' name="212 Following"/>
                                </div>
                            </div>
                            <ul>
                                <DividerComponent />
                                <NavLinks />
                                <DividerComponent />
                            </ul>
                            <div className='flex flex-col gap-2 py-2 px-4'>
                                {isSuccess &&  <ButtonComponent onClick={onLogoutHandler} name="Logout" startContent={<Icon icon="signin-icon" />} />}
                                {!isSuccess && <ButtonComponent name="Log In" startContent={<Icon icon="login-icon" />} />}
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </>
    )
}
