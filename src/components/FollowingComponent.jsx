import ButtonComponent from "./ButtonComponent"
import Followers from "./Followers"

export default function FollowingComponent() {
    const datas = [
        {
            id: 1,
            name: 'shehinmelto',
            email: 'meltosm8@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: false,
            following: true
        },
        {
            id: 2,
            name: 'sheginjovito',
            email: 'shegin@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: false,
            following: true
        },
        {
            id: 3,
            name: 'sherinmesija',
            email: 'mesija@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: false,
            following: true
        },
        {
            id: 4,
            name: 'johncena',
            email: 'johncena@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: false,
            following: true
        },
        {
            id: 5,
            name: 'randyorton',
            email: 'shegin@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: false,
            following: true
        },
        {
            id: 6,
            name: 'sethrollins',
            email: 'seth@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: false,
            following: true
        },
        {
            id: 7,
            name: 'gunther',
            email: 'gunther@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: false,
            following: true
        },
        {
            id: 8,
            name: 'gunther',
            email: 'gunther@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: false,
            following: true
        },
        {
            id: 9,
            name: 'drew',
            email: 'drew@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: false,
            following: true
        },
        {
            id: 10,
            name: 'cmpunk',
            email: 'punkcm@gmail.com',
            file: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
            followers: false,
            following: true
        }
    ]

    return (
        <>
            {datas.map(item => (
                <div className='flex justify-between items-center px-3 py-4' key={item.id}>
                    <Followers
                        file={item.file && item.file}
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