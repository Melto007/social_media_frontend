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
import ReactCrop from 'react-image-crop'
import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'

const ASPECT_RATIO = 1
const MIN_DIMENSION = 100

export default function HomePage() {
    const [ previewImage, setPreviewImage ] = useState(null)
    const { handleSubmit, register, formState: { errors }, control } = useForm()
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    const [ crop, setCrop ] = useState()

    function onSubmitHandler(data) {
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
                                <Controller
                                    control={control}
                                    name={"picture"}
                                    rules={{ required: "this field should not be empty" }}
                                    render={({ field: { value, onChange, ...field } }) => {
                                    return (
                                        <input
                                            className='py-4 px-2 rounded-lg w-full'
                                            {...field}
                                            value={value?.fileName}
                                            onChange={(event) => {
                                                const file = event.target.files[0]
                                                if(!file) return
                                                setPreviewImage(URL.createObjectURL(file))
                                                onChange(file)
                                            }}
                                            type="file"
                                            id="picture"
                                        />
                                    );
                                    }}
                                />
                            </div>
                            <div className={errors.picture?.message ? 'mx-2 text-red-500' : 'hidden'}>
                                {errors.picture?.message && <span className='text-sm'>{errors.picture?.message}</span>}
                            </div>
                            <div>
                                {previewImage && (
                                    <ReactCrop
                                        circularCrop
                                        crop={crop}
                                        aspect={ASPECT_RATIO}
                                        maxWidth={MIN_DIMENSION}
                                        keepSelection
                                    >
                                        <img
                                            alt="profile-image"
                                            src={previewImage}
                                        />
                                    </ReactCrop>
                                )}
                            </div>
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