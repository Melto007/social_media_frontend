import DividerComponent from '../../components/DividerComponent'
import SearchComponent from '../../components/SearchComponent'
import { Link } from 'react-router-dom'
import Icon from '../../components/Icon'

export default function TrendingSideBar() {

    const data = [
        {
            name: "Django",
            position: 1
        },
        {
            name: "Javascript",
            position: 2
        },
        {
            name: "Entertainment",
            position: 3
        },
        {
            name: "Python",
            position: 4
        },
        {
            name: "CSS",
            position: 5
        },
        {
            name: "Mysql",
            position: 6
        },
        {
            name: "Reactjs",
            position: 7
        },
        {
            name: "Education",
            position: 8
        },
        {
            name: "Movies",
            position: 9
        },
        {
            name: "Netflix",
            position: 10
        }
    ]

    return (
        <>
            <div className='flex flex-col gap-2'>
                <div>
                    <SearchComponent data={data} />
                </div>

                <ul className='md:max-h-[45em] overflow-y-auto overflow-hidden'>
                    <li>
                        <div className='w-full'>
                            {data.map(item => (
                                <Link to={`trending/${item.name}`} key={item.position} className='flex justify-between items-center w-full py-4 px-4  md:py-[0.8em]'>
                                    <span className='font-bold text-sm  md:text-md'>{item.name}</span>
                                    <span className='flex gap-1 items-center'>
                                        <Icon icon="hash-icon" />
                                        <p className='font-bold text-lg md:text-2xl'>{item.position}</p>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}