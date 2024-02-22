import { useEffect } from 'react'
import MainContainer from "../../components/MainContainer"
import AvatarComponent from "../../components/AvatarComponent"
import { useDispatch, useSelector } from 'react-redux'
import { profileDetails } from '../../features/profileSlice'
import LoadingComponent from '../../components/LoadingComponent'
import Heading1 from '../../components/Heading1'
import Paragraph from '../../components/Paragraph'
import Links from '../../components/Links'
import ButtonComponent from '../../components/ButtonComponent'

export default function DetailsProfile() {
    const dispatch = useDispatch()
    const profileSlice = useSelector(state => state.profileSlice)
    const { isSuccess, isLoading, profile } = profileSlice

    useEffect(() => {
        dispatch(profileDetails())
    }, [])

    function handleChange() {
        console.log("link clicked")
    }

    return (
        <>
            {
                isLoading && (
                    <MainContainer
                        className="bg-neutral-900 h-[100vh]"
                    >
                        <div className='flex justify-center items-center translate-y-[10em]'>
                            <LoadingComponent />
                        </div>
                    </MainContainer>
                )
            }
            {
                isSuccess && (
                    <MainContainer>
                        <div className='flex flex-col items-center'>
                            <AvatarComponent
                                file="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                className="w-[3em] h-[3em] mb-2 text-large md:w-20 md:h-20"
                                color="primary"
                            />
                            <Heading1 heading={profile.data.name} />
                            <Paragraph content={profile.data.email} />
                            <ButtonComponent
                                className="mt-1"
                                size="sm"
                                radius="full"
                                variant="bordered"
                                name="change password"
                            />
                        </div>
                    </MainContainer>
                )
            }
        </>
    )
}