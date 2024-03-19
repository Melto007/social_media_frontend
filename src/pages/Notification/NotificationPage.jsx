import MainContainer from "../../components/MainContainer";
import Heading1 from "../../components/Heading1";
import AvatarComponent from "../../components/AvatarComponent";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from "react";
import { notificationView } from '../../features/notificationSlice'
import { profileDetails } from '../../features/profileSlice'
import LoadingComponent from "../../components/LoadingComponent";
import LoadingContainer from '../../components/LoadingContainer'

export default function NotificationPage() {
    const dispatch = useDispatch()
    const notificationSlice = useSelector(state => state.notificationSlice)
    const { issuccess, isloading, iserror, notification } = notificationSlice

    useEffect(() => {
        (async() => {
            dispatch(notificationView())
            dispatch(profileDetails())
        })()
    }, [])

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
                {issuccess && notification.data.map(item => (
                    <div key={item.id} className="py-3 flex items-center gap-2">
                        <AvatarComponent
                            color="primary"
                            size="md"
                            file={item.userProfile.url}
                        />
                        <Heading1
                            heading={item.following.name}
                            className="font-bold"
                        />
                        <Heading1
                            heading="is following you"
                        />
                    </div>
                ))}
            </MainContainer>
        </>
    )
}