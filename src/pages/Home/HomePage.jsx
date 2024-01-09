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

                    {tweets.map(item => (
                        <Card className='bg-neutral-900 rounded-none' key={item.id}>
                            <CardHeader className='text-white justify-between'>
                                <div>
                                    <UserComponent
                                        firstname="john"
                                        lastname="doe"
                                        username="01-03-2023 11-03-08"
                                        file="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <ButtonComponent
                                        radius="full"
                                        size="sm"
                                        name="Follow"
                                    />
                                    <Dropdown className='bg-neutral-900'>
                                        <DropdownTrigger>
                                            <button className='bg-none p-0 border-none outline-none'>
                                                <Icon icon="menu-icon" />
                                            </button>
                                        </DropdownTrigger>
                                        <DropdownMenu aria-label='static actions' className='hover:bg-black'>
                                            <DropdownItem
                                                key="edit"
                                                color="primary"
                                                startContent={<Icon icon="edit-icon" />}
                                            >
                                                Edit
                                            </DropdownItem>
                                            <DropdownItem
                                                key="report"
                                                color="primary"
                                                startContent={<Icon icon="report-icon" />}
                                            >
                                                Report
                                            </DropdownItem>
                                            <DropdownItem
                                                key="delete"
                                                color="danger"
                                                className='text-danger'
                                                startContent={<Icon icon="delete-icon" />}
                                            >
                                                Delete
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <p className='text-white text-sm md:text-md'>
                                    {item.content}
                                </p>
                                <span className="pt-2 text-blue-500 text-sm md:text-md">
                                    {item.hashtag}
                                </span>
                                <img
                                    className='mt-2 w-full min-h-12 rounded-xl'
                                    alt="post-image"
                                    src={item.image}
                                />
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}