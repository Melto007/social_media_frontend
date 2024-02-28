import { useState, useRef } from 'react'
import Icon from './Icon'
import { useNavigate } from 'react-router-dom'

export default function SearchComponent(props) {
    const navigate = useNavigate()
    const { data } = props
    const [ activeSearch, setActiveSearch ] = useState([])
    const myRef = useRef(null)

    function handleSearch(e) {
        const searchWord = e.target.value
        if(searchWord === "") {
            setActiveSearch([])
            return false
        }

        setActiveSearch(
            data.filter(value => value.name.toLowerCase().includes(searchWord.toLowerCase()))
        )
    }

    function handleSubmit(e) {
        e.preventDefault()
        navigate(`trending/${item.name}`)
    }

    function handleItem(item) {
        if(Object.keys(item).length !== 0) {
            myRef.current.value = item.name
            setActiveSearch([])
        }
    }

    return (
        <>
            <form className='w-full' onSubmit={handleSubmit}>
                <div className='relative'>
                    <input
                        type="text"
                        placeholder='search...'
                        className='w-full rounded-full p-2 bg-neutral-800 outline-none border-none'
                        ref={myRef}
                        onChange={(e) => handleSearch(e)}
                    />
                    <button className='absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-neutral-700'>
                        <Icon icon="search-icon" />
                    </button>

                    {
                        activeSearch.length > 0 && (
                            <div className='absolute w-full bg-neutral-800 flex flex-col gap-2 rounded-lg p-2 mt-1 left-1/2 -translate-x-1/2 cursor-pointer'>
                                {
                                    activeSearch.slice(0, 15).map((item, key) => (
                                        <span key={key} onClick={() => handleItem(item)}>{item.name}</span>
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