import {
    Textarea,
    Card,
    CardHeader,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    CardBody,
    Image
} from '@nextui-org/react'
import Icon from '../../components/Icon'
import ButtonComponent from '../../components/ButtonComponent'
import DividerComponent from '../../components/DividerComponent'
import UserComponent from '../../components/UserComponent'

export default function HomePage() {
    const tweets = [
        {
            id: 1,
            content: 'Frontend developer and UI/UX enthusiast. Join me on this coding adventure!',
            hashtag: '#FrontendWithMelto',
            image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            id: 2,
            content: 'Frontend developer and UI/UX enthusiast. Join me on this coding adventure!',
            hashtag: '#FrontendWithMelto',
            image: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
        },
        {
            id: 3,
            content: 'Frontend developer and UI/UX enthusiast. Join me on this coding adventure!',
            hashtag: '#FrontendWithMelto',
            image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D'
        }
    ]

    return (
        <>
            <div className='bg-neutral-900 h-auto'>
                <div className='px-4 py-2'>
                    <form>
                        <div>
                            <Textarea
                                variant='bordered'
                                placeholder="what's happening"
                                className='border-none outline-none'
                            />
                        </div>
                    </form>

                    <div className='flex justify-between items-center mt-2'>
                        <div>
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
                        </div>
                        <div>
                            <ButtonComponent name="Tweet" startContent={<Icon icon="tweet-icon" />} />
                        </div>
                    </div>

                    <DividerComponent />


                </div>
            </div>
        </>
    )
}