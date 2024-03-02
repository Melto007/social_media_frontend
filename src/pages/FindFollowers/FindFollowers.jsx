import { useEffect } from 'react'
import DividerComponent from "../../components/DividerComponent";
import Heading1 from "../../components/Heading1";
import Icon from "../../components/Icon";
import MainContainer from "../../components/MainContainer";
import { getFollowers } from '../../features/followersSlice'
import { useDispatch } from 'react-redux'

export default function FindFollowers() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFollowers())
    }, [])

    return (
        <>
            <MainContainer>
                <div>
                    <Heading1
                        className="text-md md:text-2xl font-bold"
                        heading="Find Friends"
                    />
                    <DividerComponent />
                </div>
                <div className="relative">
                    <input
                        className='w-full rounded-full p-2 bg-neutral-800 outline-none border-none'
                        placeholder="find friends...."
                        size="md"
                    />
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-neutral-700 rounded-full">
                        <Icon icon="search-icon" />
                    </button>

                    <div className="absolute w-full bg-neutral-800 rounded-lg mt-1 p-2 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col gap-2">
                        <span>Hello world</span>
                        <span>Hello world</span>
                        <span>Hello world</span>
                    </div>
                </div>
            </MainContainer>
        </>
    )
}