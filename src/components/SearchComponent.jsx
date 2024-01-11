import { useState } from 'react'
import { data } from '../Data'
import Icon from './Icon'

export default function SearchComponent() {

    const [ activeSearch, setActiveSearch ] = useState([])

    function handleSearch(e) {
        const searchWord = e.target.value
        if(searchWord === "") {
            setActiveSearch([])
            return false
        }

        setActiveSearch(
            data.filter(value => value.title.toLowerCase().includes(searchWord.toLowerCase()))
        )
    }

    return (
        <>
            <form className='w-full'>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder='search...'
                        className='w-full rounded-full p-2 bg-neutral-800 outline-none border-none'
                        onChange={(e) => handleSearch(e)}
                    />
                    <button className='absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-700'>
                        <Icon icon="search-icon" />
                    </button>

                    {
                        activeSearch.length > 0 && (
                            <div className='absolute w-full bg-neutral-800 flex flex-col gap-2 rounded-lg p-2 mt-1 left-1/2 -translate-x-1/2'>
                                {
                                    activeSearch.slice(0, 15).map((item, key) => (
                                        <span key={key}>{item.title}</span>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            </form>
        </>
    )
}