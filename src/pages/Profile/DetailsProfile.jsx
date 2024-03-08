import { useEffect } from 'react'
import MainContainer from "../../components/MainContainer"
import AvatarComponent from "../../components/AvatarComponent"
import { useDispatch, useSelector } from 'react-redux'
import { profileDetails } from '../../features/profileSlice'
import LoadingComponent from '../../components/LoadingComponent'
import Heading1 from '../../components/Heading1'
import Paragraph from '../../components/Paragraph'
import ButtonComponent from '../../components/ButtonComponent'
import ModalComponent from '../../components/ModalComponent'
import { useDisclosure, Input, Textarea } from '@nextui-org/react'
import LoadingContainer from '../../components/LoadingContainer'
import Icon from '../../components/Icon'

export default function DetailsProfile() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const { isOpen: isOpen2, onOpen: onOpen2, onOpenChange: onOpenChange2 } = useDisclosure()

    const dispatch = useDispatch()
    const profileSlice = useSelector(state => state.profileSlice)
    const { isSuccess, isLoading, profile } = profileSlice

    useEffect(() => {
        (async () => {
            dispatch(profileDetails())
        })()
    }, [])

    return (
        <>
            {
                isLoading && (
                    <LoadingContainer>
                        <LoadingComponent />
                    </LoadingContainer>
                )
            }
            {
                isSuccess && (
                    <MainContainer>
                        <div className='flex flex-col items-center'>
                            <AvatarComponent
                                file={isSuccess ? profile.data.url : undefined}
                                className="w-[3em] h-[3em] mb-2 text-large md:w-20 md:h-20"
                                color="primary"
                            />
                            <ButtonComponent
                                onClick={() => onOpen2()}
                                size="sm"
                                className="text-xl md:text-2xl mt-1"
                                variant="bordered"
                                name={<Icon icon="camera-icon" />}
                            />
                            <Heading1 heading={`@${profile.data.user.name}`} />
                            <Paragraph content={profile.data.user.email} />
                            <ButtonComponent
                                onClick={() => onOpen()}
                                className="mt-1"
                                size="sm"
                                radius="full"
                                variant="bordered"
                                name="change password"
                            />
                        </div>

                        <form className='mt-4'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <Heading1 heading="Country" />
                                        <Input
                                            type="text"
                                            variant='bordered'
                                            size="sm"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <Heading1 heading="State" />
                                        <Input
                                            type="text"
                                            variant='bordered'
                                            size="sm"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <Heading1 heading="City" />
                                        <Input
                                            type="text"
                                            variant='bordered'
                                            size="sm"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Heading1 heading="Bio" />
                                    <Textarea
                                        variant="bordered"
                                        placeholder="Enter your bio"
                                        disableAnimation
                                        disableAutosize
                                        classNames={{
                                            base: "max-w-full",
                                            input: "resize-y min-h-[70px]",
                                        }}
                                    />
                                </div>
                                <div>
                                    <ButtonComponent
                                        name="submit"
                                        className="bg-white text-black w-full font-bold"
                                        radius="full"
                                    />
                                </div>
                            </div>
                        </form>
                    </MainContainer>
                )
            }

            <ModalComponent
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                name="change password"
                forms={
                    <form>
                        <div className='flex flex-col gap-3'>
                            <Input
                                type="password"
                                variant='bordered'
                                label="password"
                                size="sm"
                            />
                            <Input
                                type="password"
                                variant='bordered'
                                label="confirm password"
                                size="sm"
                            />
                            <ButtonComponent
                                name="submit"
                                size="md"
                                className="bg-white text-black"
                                radius="full"
                            />
                        </div>
                    </form>
                }
            />

            <ModalComponent
                onOpenChange={onOpenChange2}
                isOpen={isOpen2}
                name="choose profile picture"
                forms={
                    <form>
                        <div className='flex flex-col gap-3'>
                            <ButtonComponent
                                name="submit"
                                size="md"
                                className="bg-white text-black"
                                radius="full"
                            />
                        </div>
                    </form>
                }
            />
        </>
    )
}