import { useParams } from 'react-router-dom'
import MainContainer from '../../components/MainContainer'
import Followers from '../../components/Followers'
import Icon from '../../components/Icon'
import {
    Input,
    ScrollShadow
} from '@nextui-org/react'
import ButtonComponent from '../../components/ButtonComponent'
import Heading1 from '../../components/Heading1'
import Links from '../../components/Links'
import { useSelector, useDispatch } from 'react-redux'
import { otherProfile, profileDetails } from '../../features/profileSlice'
import { createProfileImage } from '../../features/profilepicSlice'
import { useEffect } from 'react'

export default function SingleMessage() {
    const { pk } = useParams()

    const dispatch = useDispatch()
    const profileSlice = useSelector(state => state.profileSlice)
    const { isSuccess, profile } = profileSlice

    useEffect(() => {
        (async() => {
            dispatch(otherProfile(pk))
        })()
    }, [])

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
            sender: false,
            reciever: true
        },
        {
            id: 12,
            message: "hi....",
            sender: true,
            reciever: false
        },
        {
            id: 13,
            message: "hi....",
            sender: false,
            reciever: true
        },
        {
            id: 14,
            message: "hi....",
            sender: true,
            reciever: false
        },
        {
            id: 15,
            message: "hi....",
            sender: false,
            reciever: true
        },
        {
            id: 16,
            message: "hi....",
            sender: true,
            reciever: false
        }
    ]

    function handleMessageBox(item) {
        if(item.sender === true) {
            return (
                <div className='py-3 w-[40%] rounded-xl px-4 bg-[#d7dede] text-black' key={item.id}>
                    <Heading1
                        heading={item.sender && item.message}
                    />
                </div>
            )
        } else if(item.reciever === true) {
            return (
                <div className='flex justify-end items-end' key={item.id}>
                    <div className='py-3 w-[40%] text-end rounded-xl px-4 bg-blue-500'>
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
                        file={isSuccess ? profile.data.url : 'UnauthorizedUser'}
                        username={isSuccess ? profile.data.user.name : 'UnauthorizedUser'}
                        email={isSuccess ? profile.data.user.email : 'UnauthorizedUser'}
                    />
                    <Links path={`/home/profile/${pk}`} name={<Icon icon="back-icon" />} />
                </div>
                <ScrollShadow hideScrollBar className='h-[70vh]'>
                    <div className='py-2 flex flex-col'>
                        {message.map(item => handleMessageBox(item))}
                    </div>
                </ScrollShadow>
                <div className='mt-4 h-20'>
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