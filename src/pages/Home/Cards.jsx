import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button
} from '@nextui-org/react'
import DropDown from './DropDown'
import UserComponent from '../../components/UserComponent'
import ButtonComponent from '../../components/ButtonComponent'
import Icon from '../../components/Icon'
import Paragraph from '../../components/Paragraph'

export default function Cards(props) {
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
            {tweets.map(item => (
                <Card
                    className='bg-neutral-900 border-solid border-1 border-gray-800 rounded-lg mb-2'
                    key={item.id}
                >
                    <CardHeader className='text-white justify-between'>
                        <div>
                            <UserComponent
                                username="john"
                                email="01-03-2023 11-03-08"
                                file="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            />
                        </div>
                        <div className='flex items-center'>
                            <ButtonComponent
                                radius="full"
                                size="sm"
                                name="Follow"
                            />
                            <DropDown
                                icon={<Icon icon="menu-icon" />}
                                id={item.id}
                            />
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
                    <CardFooter>
                        <div className='flex  items-center'>
                            <div className='flex items-center'>
                                <Button
                                    className='border-none bg-transparent padding-0'
                                    size="sm"
                                    isIconOnly
                                >
                                    <Icon icon="heart-icon" />
                                </Button>
                                <Paragraph content={201} />
                            </div>
                            <div className='flex items-center'>
                                <Button
                                    className='border-none bg-transparent padding-0'
                                    size="sm"
                                    isIconOnly
                                >
                                    <Icon icon="tweet-icon" />
                                </Button>
                                <Paragraph content={100} />
                            </div>
                            <div className='flex items-center'>
                                <Button
                                    className='border-none bg-transparent padding-0'
                                    size="sm"
                                    isIconOnly
                                >
                                    <Icon icon="comment-icon" />
                                </Button>
                                <Paragraph content={201} />
                            </div>
                        </div>
                        <div className='flex justify-end w-full'>
                            <div className='flex items-center'>
                                <Button
                                    className='border-none bg-transparent padding-0'
                                    size="sm"
                                    isIconOnly
                                >
                                    <Icon icon="share-icon" />
                                </Button>
                            </div>

                            <div className='flex items-center'>
                                <Button
                                    className='border-none bg-transparent padding-0'
                                    size="sm"
                                    isIconOnly
                                >
                                    <Icon icon="download-icon" />
                                </Button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </>
    )
}
