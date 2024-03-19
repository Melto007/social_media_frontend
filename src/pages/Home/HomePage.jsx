import {
    useDisclosure,
    Textarea,
    Input
} from '@nextui-org/react'
import Icon from '../../components/Icon'
import ButtonComponent from '../../components/ButtonComponent'
import DividerComponent from '../../components/DividerComponent'
import Cards from './Cards'
import MainContainer from '../../components/MainContainer'
import ModalComponent from '../../components/ModalComponent'
import ReactCrop, { centerCrop, makeAspectCrop, convertToPixelCrop } from 'react-image-crop'
import { useState, useRef } from 'react'
import { useForm, Controller } from 'react-hook-form'
import setCanvasPreview from './setCanvasPreview'

const ASPECT_RATIO = 1
const MIN_DIMENSION = 150

export default function HomePage() {
    const [ previewImage, setPreviewImage ] = useState(null)
    const imgRef = useRef(null)
    const previewCanvasRef = useRef(null)

    const { handleSubmit, register, formState: { errors }, control } = useForm()
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    const [ crop, setCrop ] = useState()

    function handleFiles(e) {
        const file = e.target.files[0]

        if(!file) return

        setPreviewImage(URL.createObjectURL(file))
    }

    function onImageLoad(e) {
        const { width, height, naturalWidth, naturalHeight } = e.currentTarget
        const cropWidthPercentage = (MIN_DIMENSION / width) * 100

        if(naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
            setPreviewImage(null)
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

    function onSubmitHandler(data) {
        setCanvasPreview(
            imgRef.current,
            previewCanvasRef.current,
            convertToPixelCrop(
                crop,
                imgRef.current.width,
                imgRef.current.height
            )
        )
        console.log(data)
    }

    return (
        <>
            <MainContainer>
                <div className='flex justify-end items-center mt-2'>
                    <div>
                        <ButtonComponent
                            name="create post"
                            startContent={<Icon icon="tweet-icon" />}
                            onPress={onOpen}
                        />
                    </div>
                </div>
                <DividerComponent />
                <Cards />
            </MainContainer>
            <ModalComponent
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                name="Create Post"
                forms={
                    <form>
                        <div className='flex flex-col gap-3'>
                            <div>
                                <Textarea
                                    variant='bordered'
                                    placeholder="what's happening"
                                    className='border-none outline-none'
                                    label="write something..."
                                    {
                                        ...register('post', {
                                            required: "this field should not be empty"
                                        })
                                    }
                                />
                            </div>
                            <div className={errors.post?.message ? 'mx-2 text-red-500' : 'hidden'}>
                                {errors.post?.message && <span className='text-sm'>{errors.post?.message}</span>}
                            </div>
                            <div>
                                <Input
                                    type="text"
                                    label="Tags"
                                    variant="bordered"
                                    fullWidth="true"
                                    {
                                        ...register('tags', {
                                            required: "this field should not be empty"
                                        })
                                    }
                                />
                            </div>
                            <div className={errors.tags?.message ? 'mx-2 text-red-500' : 'hidden'}>
                                {errors.tags?.message && <span className='text-sm'>{errors.tags?.message}</span>}
                            </div>
                            <div>
                                <input
                                    type="file"
                                    className='px-2 py-4 rounded-lg'
                                    onChange={handleFiles}
                                />
                            </div>
                            <div className={errors.picture?.message ? 'mx-2 text-red-500' : 'hidden'}>
                                {errors.picture?.message && <span className='text-sm'>{errors.picture?.message}</span>}
                            </div>
                            <div>
                                {previewImage && (
                                    <ReactCrop
                                        onChange={
                                            (pixelCrop, precentCrop) => setCrop(precentCrop)
                                        }
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
                            </div>
                            <div>
                                {crop && (
                                    <div className='hidden'>
                                        <canvas
                                            ref={previewCanvasRef}
                                            className='w-[8em] h-[8em]'
                                        />
                                    </div>
                                )}
                            </div>
                            {/* <div>
                                <ButtonComponent
                                    name="crop image"
                                    size="md"
                                    className="bg-blue-600 text-white w-full"
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
                            </div> */}
                            <div>
                                <ButtonComponent
                                    className="bg-white text-black uppercase rounded-full w-full font-bold"
                                    name="Create Post"
                                    onClick={handleSubmit(onSubmitHandler)}
                                />
                            </div>
                        </div>
                    </form>
                }
            />
        </>
    )
}