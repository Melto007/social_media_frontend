import MainContainer from '../../components/MainContainer'
import Heading1 from '../../components/Heading1'
import DividerComponent from '../../components/DividerComponent'
import Followers from '../../components/Followers'
import { Link } from 'react-router-dom'

export default function MessagePage() {

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
        <MainContainer>
            <div>
                <Heading1
                    className="text-lg md:text-2xl font-bold"
                    heading="Message"
                />
            </div>
            <DividerComponent />
            {datas.map(item => (
                <div className='py-2 px-2' key={item.id}>
                    <Link to={`${item.id}`}>
                        <Followers
                            file={item.file}
                            username={item.name}
                            email={item.email}
                        />
                    </Link>
                </div>
            ))}
        </MainContainer>
    )
}