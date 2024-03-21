import { useEffect, useState, useRef } from 'react'
import DividerComponent from "../../components/DividerComponent";
import Heading1 from "../../components/Heading1";
import Icon from "../../components/Icon";
import MainContainer from "../../components/MainContainer";
import { getFollowers } from '../../features/followersSlice'
import { useDispatch, useSelector } from 'react-redux'
import Followers from '../../components/Followers';
import LoadingComponent from '../../components/LoadingComponent';
import ButtonComponent from '../../components/ButtonComponent';
import LoadingContainer from '../../components/LoadingContainer'

import { useNavigate } from 'react-router-dom'

import { followingCreate, followingList, followingDelete } from '../../features/followingSlice'
import { detailedProfile } from '../../features/detailProfileSlice'

export default function FindFollowers() {
    const myRef = useRef()
    const navigate = useNavigate()
    const [ activeSearch, setActiveSearch ] = useState([])
    const [ filterFollower, setFilterFollower ] = useState([])
    const dispatch = useDispatch()

    const friendSlice = useSelector(state => state.friendSlice)
    const { success, loading, friends } = friendSlice

    const followingSlice = useSelector(state => state.followingSlice)
    const { issuccess, isloading, iserror, following } = followingSlice

    function onFollowHandler(slug) {
        let formData = new FormData()

        formData.append('follower', slug)
        dispatch(followingCreate(formData))
    }

    function onUnfollowHandler(slug) {
        dispatch(followingDelete(slug))
    }

    useEffect(() => {
        (async () => {
            dispatch(getFollowers())
            dispatch(detailedProfile())
            dispatch(followingList())
        })()
    }, [])

    function handleSearchFriend(e) {
        const searchWord = e.target.value

        if(searchWord === "") {
            setActiveSearch([])
            return false
        }

        setActiveSearch(
            friends.data.filter(value => value.user.name.toLowerCase().includes(searchWord.toLowerCase()))
        )
    }

    function handleSearchItem(item) {
        if(Object.keys(item).length !== 0) {
            myRef.current.value = item.user.name
            setActiveSearch([])
        }
    }

    function onHandleSearch() {
        if(myRef.current.value !== "") {
            navigate(`/home/profile/${myRef.current.value}`)
        }
    }

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
                        ref={myRef}
                        onChange={handleSearchFriend}
                    />
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-neutral-700 rounded-full" onClick={onHandleSearch}>
                        <Icon icon="search-icon" />
                    </button>

                    {
                        activeSearch.length > 0 && (
                            <div className="absolute w-full bg-neutral-800 rounded-lg mt-1 p-2 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col gap-2 z-10">
                                {
                                    activeSearch.slice(0, 15).map((item, key) => (
                                        <span key={key} onClick={() => handleSearchItem(item)}>{item.user.name}</span>
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
                {
                    loading && (
                        <LoadingContainer>
                            <LoadingComponent />
                        </LoadingContainer>
                    )

                }
                {success && friends.data.map(item => (
                    <div className='bg-neutral-900 w-full' key={item.id}>
                        <div className='p-2 mt-2 flex justify-between z-0'>
                            <Followers
                                pk={item.slug}
                                email={item.user.email}
                                username={item.user.name}
                                file={item.url}
                            />
                            {following.length !== 0 && following.indexOf(item.user.id) !== -1 ? (
                                isloading && following.indexOf(item.user.id) !== -1 ? (
                                    <ButtonComponent isLoading name="unfollow" size="sm" variant="bordered" color="danger" radius="full" onClick={() => onUnfollowHandler(item.user.id)} />
                                ) : (
                                    <ButtonComponent name="unfollow" size="sm" variant="bordered" color="danger" radius="full" onClick={() => onUnfollowHandler(item.user.id)} />
                                )
                            ) : (
                                isloading && following.indexOf(item.user.id) !== -1 ? (
                                    <ButtonComponent isLoading name="follow" size="sm" variant="bordered" radius="full" onClick={() => onFollowHandler(item.slug)} />
                                ) : (
                                    <ButtonComponent name="follow" size="sm" variant="bordered" radius="full" onClick={() => onFollowHandler(item.slug)} />
                                )
                            )}
                        </div>
                    </div>
                ))}
            </MainContainer>
        </>
    )
}