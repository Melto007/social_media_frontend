import {
    FaTwitter,
    FaMoon,
    FaHome,
    FaSearch,
    FaBookmark,
    FaMoneyBillWave,
    FaRegListAlt,
    FaHashtag,
    FaRegImages,
    FaRegHeart,
    FaRegComment,
    FaUser,
    FaFacebookF
} from "react-icons/fa"

import { FaMessage } from "react-icons/fa6"
import { IoIosLogIn, IoMdDownload, IoMdNotifications   } from "react-icons/io"
import { GoSignIn } from "react-icons/go";
import { MdGif, MdOutlineEmojiEmotions, MdReport, MdDelete } from "react-icons/md"
import { IoCheckmarkCircleSharp } from "react-icons/io5"
import { FaRetweet } from "react-icons/fa"
import { CiMenuKebab, CiEdit, CiShare2 } from "react-icons/ci"
import { FcGoogle } from "react-icons/fc"

export default function Icon(props) {
    const { icon } = props

    const icons = [
        {
            id: 1,
            name: 'twitter-icon',
            icon: <FaTwitter className='text-blue-400 text-2xl md:text-3xl' {...props} />
        },
        {
            id: 2,
            name: 'moon-icon',
            icon: <FaMoon className='text-white text-lg md:text-1xl' />
        },
        {
            id: 3,
            name: 'home-icon',
            icon: <FaHome className='text-white text-lg md:text-1xl' />
        },
        {
            id: 4,
            name: 'search-icon',
            icon: <FaSearch className='text-white text-md md:text-1xl' />
        },
        {
            id: 5,
            name: 'bookmark-icon',
            icon: <FaBookmark className='text-white text-lg md:text-1xl' />
        },
        {
            id: 6,
            name: 'monetisation-icon',
            icon: <FaMoneyBillWave className='text-white text-lg md:text-1xl' />
        },
        {
            id: 7,
            name: 'message-icon',
            icon: <FaMessage className='text-white text-lg md:text-1xl' />
        },
        {
            id: 8,
            name: 'list-icon',
            icon: <FaRegListAlt className='text-white text-lg md:text-1xl' />
        },
        {
            id: 9,
            name: 'login-icon',
            icon: <IoIosLogIn className='text-white text-lg md:text-1xl' />
        },
        {
            id: 10,
            name: 'signin-icon',
            icon: <GoSignIn className='text-white text-lg md:text-1xl' />
        },
        {
            id: 11,
            name: 'hash-icon',
            icon: <FaHashtag className='text-white text-lg md:text-1xl' />
        },
        {
            id: 12,
            name: 'image-icon',
            icon: <FaRegImages className='text-blue-500 text-lg md:text-1xl' />
        },
        {
            id: 13,
            name: 'gif-icon',
            icon: <MdGif className='text-blue-500 text-3xl md:text-1xl' />
        },
        {
            id: 14,
            name: 'tick-icon',
            icon: <IoCheckmarkCircleSharp className='text-blue-500 text-lg md:text-1xl' />
        },
        {
            id: 15,
            name: 'tweet-icon',
            icon: <FaRetweet className='text-white text-lg md:text-1xl' />
        },
        {
            id: 14,
            name: 'emoji-icon',
            icon: <MdOutlineEmojiEmotions className='text-blue-500 text-lg md:text-1xl' />
        },
        {
            id: 15,
            name: 'menu-icon',
            icon: <CiMenuKebab className='text-white text-lg md:text-1xl' />
        },
        {
            id: 16,
            name: 'edit-icon',
            icon: <CiEdit className='text-white text-lg md:text-1xl' />
        },
        {
            id: 17,
            name: 'report-icon',
            icon: <MdReport className='text-white text-lg md:text-1xl' />
        },
        {
            id: 17,
            name: 'delete-icon',
            icon: <MdDelete className='text-white text-lg md:text-1xl' />
        },
        {
            id: 18,
            name: "heart-icon",
            icon: <FaRegHeart className='text-white text-sm md:text-1xl' />
        },
        {
            id: 19,
            name: "comment-icon",
            icon: <FaRegComment className='text-white text-sm md:text-1xl' />
        },
        {
            id: 20,
            name: "download-icon",
            icon: <IoMdDownload className='text-white text-[0.9rem] md:text-[1.1rem]' />
        },
        {
            id: 21,
            name: "share-icon",
            icon: <CiShare2 className='text-white text-[0.9rem] md:text-[1.1rem]' />
        },
        {
            id: 22,
            name: "user-icon",
            icon: <FaUser className='text-white text-md md:text-1xl' />
        },
        {
            id: 23,
            name: 'bell-icon',
            icon: <IoMdNotifications className='text-white text-lg md:text-[1.4em]' />
        },
        {
            id: 24,
            name: 'twitter-login-icon',
            icon: <FaTwitter className='text-white text-6xl md:text-[8em]' />
        },
        {
            id: 25,
            name: 'google-icon',
            icon: <FcGoogle className='text-white text-[1.4rem] md:text-[2em]' />
        },
        {
            id: 26,
            name: 'facebook-icon',
            icon: <FaFacebookF className='text-blue-700 text-[1.4rem] md:text-[2em]' />
        }
    ]

    return (
        <>
            {icons.map(item => item.name === icon ? <p key={item.id}>{item.icon}</p> : undefined)}
        </>
    )
}