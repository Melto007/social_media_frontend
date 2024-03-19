import MainContainer from "../../components/MainContainer";
import Heading1 from "../../components/Heading1";
import AvatarComponent from "../../components/AvatarComponent";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { notificationView, notificationUpdate } from '../../features/notificationSlice'
import { profileDetails } from '../../features/profileSlice'
import LoadingComponent from "../../components/LoadingComponent";
import LoadingContainer from '../../components/LoadingContainer'
import { useNavigate } from 'react-router-dom'
import Paragraph from '../../components/Paragraph'

export default function NotificationPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const notificationSlice = useSelector(state => state.notificationSlice)
    const { issuccess, isloading, iserror, notification } = notificationSlice

    useEffect(() => {
        (async() => {
            dispatch(notificationView())
            dispatch(profileDetails())
        })()
    }, [])

    function onNotificationHandler(pk, name) {
        dispatch(notificationUpdate(pk))
        navigate(`/home/profile/${name}`)
    }

    return (
        <>
            {
                isloading && (
                    <LoadingContainer>
                        <LoadingComponent />
                    </LoadingContainer>
                )
            }
            <MainContainer>
                {issuccess && notification.data.map(item => item.status ? (
                    <div key={item.id} className="py-3 flex items-center gap-2">
                        <AvatarComponent
                            color="primary"
                            size="md"
                            file={item.userProfile.url}
                        />
                        <Heading1
                            heading={item.following.name}
                            className="font-bold cursor-pointer"
                            onClick={() => onNotificationHandler(item.id, item.following.name)}
                        />
                        <Heading1
                            heading="is following you"
                        />
                    </div>
                ) : (
                    <div className="flex justify-center items-center h-[100vh]">
                        <Paragraph content="Nofication is not found" />
                    </div>
                ))}
            </MainContainer>
        </>
    )
}