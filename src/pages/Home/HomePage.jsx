import {
    useDisclosure,
    Textarea,
    Input
} from '@nextui-org/react'
import Icon from '../../components/Icon'
import ButtonComponent from '../../components/ButtonComponent'
import DividerComponent from '../../components/DividerComponent'
import Cards from './Cards'
import MainContainer from '../../components/MainContainer'
import ModalComponent from '../../components/ModalComponent'

export default function HomePage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    return (
        <>
            <MainContainer>
                {/* <form>
                    <div>
                        <Textarea
                            variant='bordered'
                            placeholder="what's happening"
                            className='border-none outline-none'
                        />
                    </div>
                </form> */}

                <div className='flex justify-end items-center mt-2'>
                    {/* <div>
                        <ul className='flex items-center gap-1 ml-1'>
                            <li>
                                <Icon icon="image-icon" />
                            </li>
                            <li>
                                <Icon icon="gif-icon" />
                            </li>
                            <li>
                                <Icon icon="emoji-icon" />
                            </li>
                        </ul>
                    </div> */}
                    <div>
                        <ButtonComponent name="Create Post" startContent={<Icon icon="tweet-icon" />} onPress={onOpen}/>
                    </div>
                </div>
                <DividerComponent />
                <Cards />
            </MainContainer>
            <ModalComponent
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                name="Create Post"
                forms={
                    <form>
                        <div className='flex flex-col gap-3'>
                            <div>
                                <Textarea
                                    variant='bordered'
                                    placeholder="what's happening"
                                    className='border-none outline-none'
                                    label="write something..."
                                />
                            </div>
                            <div>
                                <Input
                                    type="text"
                                    label="Tags"
                                    variant="bordered"
                                    fullWidth="true"
                                />
                            </div>
                            <div>
                                <Textarea
                                    variant='bordered'
                                    placeholder="what's happening"
                                    className='border-none outline-none'
                                />
                            </div>
                            <div>
                                <ButtonComponent
                                    className="bg-white text-black uppercase rounded-full w-full font-bold"
                                    name="Create Post"
                                />
                            </div>
                        </div>
                    </form>
                }
            />
        </>
    )
}