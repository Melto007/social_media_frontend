import MainContainer from "../../components/MainContainer";
import Heading1 from "../../components/Heading1";
import AvatarComponent from "../../components/AvatarComponent";

export default function NotificationPage() {
    const notification = [
        {
            id: 1,
            user: '@shehinmelto',
            message: 'is followed you'
        },
        {
            id: 2,
            user: '@shehinmelto',
            message: 'is followed you'
        },
        {
            id: 3,
            user: '@shehinmelto',
            message: 'is followed you'
        },
        {
            id: 4,
            user: '@shehinmelto',
            message: 'is followed you'
        },
        {
            id: 5,
            user: '@shehinmelto',
            message: 'is followed you'
        }
    ]

    return (
        <>
            <MainContainer>
                {notification.map(item => (
                    <div key={item.id} className="py-3 flex items-center gap-2">
                        <AvatarComponent
                            file="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                            color="primary"
                            size="md"
                        />
                        <Heading1
                            heading={item.user}
                            className="font-bold"
                        />
                        <Heading1
                            heading={item.message}
                        />
                    </div>
                ))}
            </MainContainer>
        </>
    )
}