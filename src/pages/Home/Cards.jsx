import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button
} from '@nextui-org/react'
import DropDown from './DropDown'
import UserComponent from '../../components/UserComponent'
import Icon from '../../components/Icon'
import Paragraph from '../../components/Paragraph'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { profileDetails } from '../../features/profileSlice'
import LoadingComponent from '../../components/LoadingComponent'
import LoadingContainer from '../../components/LoadingContainer'

export default function Cards(props) {
    const navigate = useNavigate()

    const { tweets, issuccess, onOpen, isloading } = props

    const dispatch = useDispatch()

    const profileSlice = useSelector(state => state.profileSlice)
    const { isSuccess, profile } = profileSlice

    useEffect(() => {
        (async() => {
            dispatch(profileDetails())
        })()
    }, [isSuccess])

    function handleComment(pk) {
        //
    }

    return (
        <>
            {tweets && tweets.data.map(item => (
                <Card
                    className='bg-neutral-900 border-solid border-1 border-gray-800 rounded-lg mb-2'
                    key={item.id}
                >
                    <CardHeader className='text-white justify-between'>
                        <div>
                            <UserComponent
                                success={issuccess}
                                username={item.profile.user.name}
                                email={item.profile.user.email}
                                file={item.profile.url}
                            />
                        </div>
                        <div className='flex items-center'>
                            <DropDown
                                icon={<Icon icon="menu-icon" />}
                                dataId={item.id}
                                isSuccess={isSuccess}
                                profile={profile}
                                user={item.profile.user.id}
                                onOpen={onOpen}
                            />
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p className='text-white text-sm md:text-md'>
                            {item.post}
                        </p>
                        <span className="pt-2 text-blue-500 text-sm md:text-md">
                            {item.tag !== null && `#${item.tag.tags}`}
                        </span>
                        <img
                            className='mt-2 w-full rounded-xl'
                            alt="post-image"
                            src={item.image}
                        />
                    </CardBody>
                    <CardFooter>
                        <div className='flex items-center'>
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
                                    onClick={() => handleComment(item.id)}
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
