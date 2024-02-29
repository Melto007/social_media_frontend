import Followers from './Followers'
import ButtonComponent from './ButtonComponent'

export function FollowComponents(props) {
    const { isSuccess, profile } = props

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

    return (
        <>
            {datas.map(item => (
                <div className='flex justify-between items-center px-3 py-4'>
                    <Followers
                        file={item.file}
                        username={item.name && item.name}
                        email={item.email && item.email}
                    />
                    {
                        item.followers && <ButtonComponent size="sm" name="followers" radius="full" variant="bordered" />
                    }
                    {
                        item.following && <ButtonComponent size="sm" name="following" radius="full" variant="bordered" />
                    }
                </div>
            ))}
        </>
    )
}