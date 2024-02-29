import { Link, useParams } from 'react-router-dom'
import MainContainer from '../../components/MainContainer'
import Followers from '../../components/Followers'
import Icon from '../../components/Icon'
import {
    Input,
    ScrollShadow
} from '@nextui-org/react'
import ButtonComponent from '../../components/ButtonComponent'
import Heading1 from '../../components/Heading1'

export default function SingleMessage() {
    const { pk } = useParams()

    const datas = [
        {
            id: 1,
            name: 'shehin melto',
            email: 'meltosm8@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: true,
            following: false
        },
        {
            id: 2,
            name: 'shegin jovito',
            email: 'shegin@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: true,
            following: false
        },
        {
            id: 3,
            name: 'sherin mesija',
            email: 'mesija@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: true,
            following: false
        },
        {
            id: 4,
            name: 'john cena',
            email: 'johncena@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: true,
            following: false
        },
        {
            id: 5,
            name: 'randy orton',
            email: 'shegin@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: true,
            following: false
        },
        {
            id: 6,
            name: 'seth rollins',
            email: 'seth@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: true,
            following: false
        },
        {
            id: 7,
            name: 'gunther',
            email: 'gunther@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: true,
            following: false
        },
        {
            id: 8,
            name: 'gunther',
            email: 'gunther@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: true,
            following: false
        },
        {
            id: 9,
            name: 'drew',
            email: 'drew@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: true,
            following: false
        },
        {
            id: 10,
            name: 'cm punk',
            email: 'punkcm@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: true,
            following: false
        }
    ]

    const filterUser = datas.filter(item => item.id === +pk)

    const message = [
        {
            id: 1,
            message: "hi....",
            sender: false,
            reciever: true
        },
        {
            id: 2,
            message: "hi....",
            sender: true,
            reciever: false
        },
        {
            id: 3,
            message: "hi....",
            sender: false,
            reciever: true
        },
        {
            id: 4,
            message: "hi....",
            sender: true,
            reciever: false
        },
        {
            id: 5,
            message: "hi....",
            sender: false,
            reciever: true
        },
        {
            id: 6,
            message: "hi....",
            sender: true,
            reciever: false
        },
        {
            id: 7,
            message: "hi....",
            sender: false,
            reciever: true
        },
        {
            id: 8,
            message: "hi....",
            sender: true,
            reciever: false
        },
        {
            id: 9,
            message: "hi....",
            sender: false,
            reciever: true
        },
        {
            id: 10,
            message: "hi....",
            sender: true,
            reciever: false
        },
        {
            id: 11,
            message: "hi....",
            sender: true,
            reciever: false
        },
        {
            id: 12,
            message: "hi....",
            sender: false,
            reciever: true
        },
        {
            id: 13,
            message: "hi....",
            sender: true,
            reciever: false
        },
        {
            id: 14,
            message: "hi....",
            sender: false,
            reciever: true
        },
        {
            id: 15,
            message: "hi....",
            sender: true,
            reciever: false
        }
    ]

    function handleMessageBox(item) {
        if(item.sender === true) {
            return (
                <div className='py-3 w-[50%] rounded-lg px-4 bg-black'>
                    <Heading1
                        heading={item.sender && item.message}
                    />
                </div>
            )
        } else if(item.reciever === true) {
            return (
                <div className='w-[100%] m-auto'>
                    <div className='py-3 w-[50%] rounded-lg px-4 bg-blue-500'>
                        <Heading1
                            heading={item.reciever && item.message}
                        />
                    </div>
                </div>
            )
        }
    }

    return (
        <MainContainer>
            <div className='flex flex-col h-[90vh]'>
                <div className='flex justify-between items-center h-16'>
                    <Followers
                        file={filterUser.length !== 0 ? filterUser[0].file : 'UnauthorizedUser'}
                        username={filterUser.length !== 0 ? filterUser[0].name : 'UnauthorizedUser'}
                        email={filterUser.length !== 0 ? filterUser[0].email : 'UnauthorizedUser'}
                    />
                    <Link to='/home/message' className='text-lg md:text-2xl'><Icon icon="back-icon" /></Link>
                </div>
                <ScrollShadow hideScrollBar className='h-[70vh]'>
                    <div className='flex flex-col'>
                        {message.map(item => handleMessageBox(item))}
                    </div>
                </ScrollShadow>
                <div className='h-20'>
                    <div className='flex justify-between items-center'>
                        <Input
                            placeholder='Write the message....'
                            size="sm"
                            variant='bordered'
                        />
                        <ButtonComponent
                            size="sm"
                            variant="full"
                            className="text-2xl"
                            name={<Icon icon="send-message-icon" />}
                        />
                    </div>
                </div>
            </div>
        </MainContainer>
    )
}