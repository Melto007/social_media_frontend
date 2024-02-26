import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Input,
    useDisclosure
} from '@nextui-org/react'
import DropDown from './DropDown'
import UserComponent from '../../components/UserComponent'
import ButtonComponent from '../../components/ButtonComponent'
import Icon from '../../components/Icon'
import Paragraph from '../../components/Paragraph'
import MainContainer from '../../components/MainContainer'
import { useParams } from 'react-router-dom'
import Heading1 from '../../components/Heading1'
import ModalComponent from '../../components/ModalComponent'
import { useState } from 'react'

export default function CommandSection() {
    const [ repliesArray, setRepliesArray ] = useState([])
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const { pk } = useParams()

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

    const commends = [
        {
            id: 1,
            content: 'its ok',
            likes: 200,
            commends: 300,
            user: 1
        },
        {
            id: 2,
            content: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
            likes: 250,
            commends: 200,
            user: 1
        },
        {
            id: 3,
            content: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
            likes: 400,
            commends: 500,
            user: 1
        },
        {
            id: 4,
            content: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
            likes: 100,
            commends: 330,
            user: 1
        },
        {
            id: 5,
            content: "Frontend developer and UI/UX enthusiast. Join me on this coding adventure!",
            likes: 120,
            commends: 100,
            user: 1
        }
    ]

    function handleReplies(pk) {
        const datas = commends.filter(item => item.id === pk)
        setRepliesArray([...datas])
        onOpen()
    }

    return (
        <MainContainer>
            {tweets.map(item => item.id === +pk && (
                <Card
                    className='bg-neutral-900 border-solid border-1 border-gray-800 rounded-lg'
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

            <div>
                <div className='flex items-center gap-2'>
                    <Input
                        variant='bordered'
                        color='primary'
                        size="sm"
                        radius='full'
                        placeholder='write your comment.....'
                    />
                    <ButtonComponent
                        variant="bordered"
                        color="default"
                        size="lg"
                        radius="full"
                        name={<Icon icon="send-icon" />}
                    />
                </div>
            </div>

            <div>
                {commends.map(item => item.user === +pk && (
                    <div className='py-4' key={item.id}>
                        <div className='flex justify-between items-center px-2'>
                            <div>
                                <UserComponent
                                    username="john"
                                    email="01-03-2023 11-03-08"
                                    file="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                />
                            </div>
                            <div className='flex items-center'>
                                <DropDown
                                    icon={<Icon icon="menu-icon" />}
                                    id="icon"
                                />
                            </div>
                        </div>
                        <div className='px-2'>
                            <Heading1
                                heading={item.content}
                            />
                        </div>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                <Button
                                    className='border-none bg-transparent padding-0'
                                    size="sm"
                                    isIconOnly
                                >
                                    <Icon icon="heart-icon" />
                                </Button>
                                <Paragraph content={item.likes} />
                            </div>
                            <div className='flex items-center'>
                                <Button
                                    className='border-none bg-transparent padding-0'
                                    size="sm"
                                    isIconOnly
                                    onClick={() => handleReplies(item.id)}
                                >
                                    <Icon icon="comment-icon" />
                                </Button>
                                <Paragraph content={item.commends} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <ModalComponent
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                name="Replies"
                forms={
                    <>
                        {repliesArray.map(item => (
                            <div className='py-4' key={item.id}>
                                <div className='flex justify-between items-center px-2'>
                                    <div>
                                        <UserComponent
                                            username="john"
                                            email="01-03-2023 11-03-08"
                                            file="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                        />
                                    </div>
                                    <div className='flex items-center'>
                                        <DropDown
                                            icon={<Icon icon="menu-icon" />}
                                            id="icon"
                                        />
                                    </div>
                                </div>
                                <div className='px-2'>
                                    <Heading1
                                        heading={item.content}
                                    />
                                </div>
                                <div className='flex items-center'>
                                    <div className='flex items-center'>
                                        <Button
                                            className='border-none bg-transparent padding-0'
                                            size="sm"
                                            isIconOnly
                                        >
                                            <Icon icon="heart-icon" />
                                        </Button>
                                        <Paragraph content={item.likes} />
                                    </div>
                                    <div className='flex items-center'>
                                        <Button
                                            className='border-none bg-transparent padding-0'
                                            size="sm"
                                            isIconOnly
                                            onClick={() => handleReplies(item.id)}
                                        >
                                            <Icon icon="comment-icon" />
                                        </Button>
                                        <Paragraph content={item.commends} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </>
                }
            />
        </MainContainer>
    )
}