import { useEffect, useState, useRef } from 'react'
import MainContainer from "../../components/MainContainer"
import AvatarComponent from "../../components/AvatarComponent"
import { useDispatch, useSelector } from 'react-redux'
import { profileDetails, otherProfile } from '../../features/profileSlice'
import { createProfileImage } from '../../features/profilepicSlice'
import LoadingComponent from '../../components/LoadingComponent'
import Heading1 from '../../components/Heading1'
import Paragraph from '../../components/Paragraph'
import ButtonComponent from '../../components/ButtonComponent'
import ModalComponent from '../../components/ModalComponent'
import { useDisclosure, Input, Textarea } from '@nextui-org/react'
import LoadingContainer from '../../components/LoadingContainer'
import Icon from '../../components/Icon'
import ReactCrop, { centerCrop, makeAspectCrop, convertToPixelCrop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'

import setCanvasPreview from './setCanvasPreview'
import { useParams } from 'react-router-dom'

const ASPECT_RATIO = 1
const MIN_DIMENSION = 100

export default function DetailsProfile() {
    const { pk } = useParams()

    const [ previewImage, setpreviewImage ] = useState(null)
    const [ crop, setCrop ] = useState()
    const [ error, setError ] = useState(null)

    const imgRef = useRef(null)
    const previewCanvasRef = useRef(null)

    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const { isOpen: isOpen2, onOpen: onOpen2, onOpenChange: onOpenChange2 } = useDisclosure()

    const dispatch = useDispatch()
    const profileSlice = useSelector(state => state.profileSlice)
    const { isSuccess, isLoading, profile } = profileSlice

    const profilepicSlice = useSelector(state => state.profilepicSlice)
    const { isSuccess: createSuccess, createLoading, profilePic, isError } = profilepicSlice

    let buttons = <ButtonComponent name="submit" size="md" className="bg-white text-black" radius="full" onClick={onSubmitHandler} />

    if(createLoading) {
        buttons = <ButtonComponent isLoading name="submit" size="md" className="bg-white text-black" radius="full" onClick={onSubmitHandler} />
    }

    useEffect(() => {
        if(createSuccess) {
            dispatch(otherProfile(pk))
        }
    }, [createSuccess])

    useEffect(() => {
        (async () => {
            dispatch(otherProfile(pk))
        })()
    }, [])

    function handleFiles(e) {
        const file = e.target.files[0]

        if(!file) return

        setpreviewImage(URL.createObjectURL(file))
    }

    function onImageLoad(e) {
        const { width, height, naturalWidth, naturalHeight } = e.currentTarget
        const cropWidthPercentage = (MIN_DIMENSION / width) * 100

        if(naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
            setError("Image must be at least 150 x 150pixels")
            setpreviewImage(null)
            return
        }

        const crop = makeAspectCrop(
            {
                unit: "%",
                width: cropWidthPercentage
            },
            ASPECT_RATIO,
            width,
            height
        )
        const centeredCrop = centerCrop(crop, width, height)
        setCrop(centeredCrop)
    }

    function onSubmitHandler() {
        const datas = {'image': previewCanvasRef.current.toDataURL()}
        dispatch(createProfileImage({ pk, datas }))
    }

    return (
        <>
            {
                isLoading && (
                    <LoadingContainer>
                        <LoadingComponent />
                    </LoadingContainer>
                )
            }
            {
                isSuccess && (
                    <MainContainer>
                        <div className='flex flex-col items-center'>
                            <AvatarComponent
                                file={isSuccess ? profile.data.url : undefined}
                                className="w-[3em] h-[3em] mb-2 text-large md:w-20 md:h-20"
                                color="primary"
                            />
                            <ButtonComponent
                                onClick={() => onOpen2()}
                                size="sm"
                                className="text-xl md:text-2xl mt-1"
                                variant="bordered"
                                name={<Icon icon="camera-icon" />}
                            />
                            <Heading1 heading={`@${profile.data.user.name}`} />
                            <Paragraph content={profile.data.user.email} />
                            <ButtonComponent
                                onClick={() => onOpen()}
                                className="mt-1"
                                size="sm"
                                radius="full"
                                variant="bordered"
                                name="change password"
                            />
                        </div>

                        <form className='mt-4'>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <div className='flex flex-col gap-2'>
                                        <Heading1 heading="Country" />
                                        <Input
                                            type="text"
                                            variant='bordered'
                                            size="sm"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <Heading1 heading="State" />
                                        <Input
                                            type="text"
                                            variant='bordered'
                                            size="sm"
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <Heading1 heading="City" />
                                        <Input
                                            type="text"
                                            variant='bordered'
                                            size="sm"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <Heading1 heading="Bio" />
                                    <Textarea
                                        variant="bordered"
                                        placeholder="Enter your bio"
                                        disableAnimation
                                        disableAutosize
                                        classNames={{
                                            base: "max-w-full",
                                            input: "resize-y min-h-[70px]",
                                        }}
                                    />
                                </div>
                                <div>
                                    <ButtonComponent
                                        name="submit"
                                        className="bg-white text-black w-full font-bold"
                                        radius="full"
                                    />
                                </div>
                            </div>
                        </form>
                    </MainContainer>
                )
            }

            <ModalComponent
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                name="change password"
                forms={
                    <form>
                        <div className='flex flex-col gap-3'>
                            <Input
                                type="password"
                                variant='bordered'
                                label="password"
                                size="sm"
                            />
                            <Input
                                type="password"
                                variant='bordered'
                                label="confirm password"
                                size="sm"
                            />
                            <ButtonComponent
                                name="submit"
                                size="md"
                                className="bg-white text-black"
                                radius="full"
                            />
                        </div>
                    </form>
                }
            />

            <ModalComponent
                onOpenChange={onOpenChange2}
                isOpen={isOpen2}
                name="choose profile picture"
                forms={
                    <>
                        <div className='flex flex-col gap-3'>
                            <input
                                type="file"
                                className='border-1 border-white p-2 rounded-lg'
                                onChange={handleFiles}
                            />
                            <div className='mx-2 my-2 text-red-500'>
                                {error && <span className='text-sm'>{error}</span>}
                            </div>
                            {previewImage && (
                                <ReactCrop
                                    onChange={
                                        (pixelCrop, precentCrop) => setCrop(precentCrop)
                                    }
                                    circularCrop
                                    crop={crop}
                                    keepSelection
                                    aspect={ASPECT_RATIO}
                                    minWidth={MIN_DIMENSION}
                                >
                                    <img
                                        alt="profile-image"
                                        ref={imgRef}
                                        src={previewImage}
                                        onLoad={onImageLoad}
                                    />
                                </ReactCrop>
                            )}

                            {crop && (
                                <div className='flex justify-center'>
                                    <canvas
                                        ref={previewCanvasRef}
                                        className='w-[8em] h-[8em] rounded-full'
                                    />
                                </div>
                            )}

                            <ButtonComponent
                                name="crop image"
                                size="md"
                                className="bg-blue-600 text-white"
                                radius="full"
                                onClick={() => {
                                    setCanvasPreview(
                                        imgRef.current,
                                        previewCanvasRef.current,
                                        convertToPixelCrop(
                                            crop,
                                            imgRef.current.width,
                                            imgRef.current.height
                                        )
                                    )
                                }}
                            />

                            {buttons}
                            <div className='text-center'>
                                {createSuccess && <span className='text-green-500 text-sm'>{profilePic.data}</span>}
                                {isError && <span className='text-red-500 text-sm'>{isError.message}</span>}
                            </div>
                        </div>
                    </>
                }
            />
        </>
    )
}