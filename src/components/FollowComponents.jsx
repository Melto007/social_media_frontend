import UserComponent from './UserComponent'
import ButtonComponent from './ButtonComponent'

export function FollowComponents(props) {
    const { isSuccess, profile } = props

    return (
        <>
            <div className='flex justify-between items-center'>
                <UserComponent
                    file="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                    username={`@${isSuccess ? profile.data.name : 'UnauthorizedUser'}`}
                    email={isSuccess ? profile.data.email : 'UnauthorizedUser'}
                />
                <ButtonComponent size="sm" name="followers" radius="full" variant="bordered" />
            </div>
        </>
    )
}