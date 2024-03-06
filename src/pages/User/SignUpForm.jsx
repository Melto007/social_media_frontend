import { useState } from 'react'
import { Input } from '@nextui-org/react'
import Icon from '../../components/Icon'
import ButtonComponent from '../../components/ButtonComponent'
import { useForm } from 'react-hook-form'

import { useDispatch, useSelector } from 'react-redux'

import { userRegister } from '../../features/userSlice'

export default function SignUpForm(props) {
    const { handleSubmit, register, reset, formState: { errors } } = useForm()
    const [ isVisible, setIsVisible ] = useState(false)
    const [ isVisibleInput, setIsVisibleInput ] = useState(false)

    const dispatch = useDispatch()

    const userSlice = useSelector(state => state.userSlice)
    const { userLoading, userSuccess, users, userError } = userSlice

    function onSubmitHandler(data) {
        dispatch(userRegister(data))
        reset()
    }

    let button = <ButtonComponent name="Sign Up" className="w-full rounded-full bg-white text-black font-bold" onClick={handleSubmit(onSubmitHandler)} />

    if(userLoading) {
        button = <ButtonComponent name="Sign Up" isLoading className="w-full rounded-full bg-white text-black font-bold" onClick={handleSubmit(onSubmitHandler)} />
    }

    return (
        <form>
            <div>
                <Input
                    label="Username"
                    variant='bordered'
                    placeholder='Enter the username'
                    type="text"
                    {...register("name", {
                        required: "Username is required",
                        maxLength: 12
                    })}
                />
            </div>
            <div className='mx-2 my-2 text-red-500'>
                {errors.username?.type === "required" && <span className='text-sm'>Username is required</span>}
                {errors.username?.type === "maxLength" && <span className='text-sm'>Username should have at most 12 character</span>}
            </div>
            <div className='mb-4'>
                <Input
                    label="Email"
                    variant='bordered'
                    placeholder='Enter the email'
                    type="text"
                    {...register("email", {
                        required: "Email is required",
                        validate: {
                            maxLength: (v) => v.length <= 50 || "The email should have at most 50 characters",
                            matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address",
                        },
                    })}
                />
            </div>
            <div className='mx-2 my-2 text-red-500'>
                {errors.email?.message && <span className='text-sm'>{errors.email?.message}</span>}
            </div>
            <div className='mb-4'>
                <Input
                    label="Password"
                    variant="bordered"
                    placeholder="Enter the password"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={() => setIsVisible(!isVisible)}>
                            {isVisible ? (
                                <Icon icon="eye-icon" />
                            ) : (
                                <Icon icon="eye-slash-icon" />
                            )}
                        </button>
                    }
                    type={isVisible ? "text" : "password"}
                    {...register("password", { required: true })}
                />
            </div>
            <div>
                <Input
                    label="Confirm Password"
                    variant="bordered"
                    placeholder="Enter the confirm password"
                    endContent={
                        <button className="focus:outline-none" type="button" onClick={() => setIsVisibleInput(!isVisibleInput)}>
                            {isVisibleInput ? (
                                <Icon icon="eye-icon" />
                            ) : (
                                <Icon icon="eye-slash-icon" />
                            )}
                        </button>
                    }
                    type={isVisibleInput ? "text" : "password"}
                    {...register("confirm_password", { required: true })}
                />
            </div>
            <div className="mt-4">
                {button}
            </div>
            <div className='mx-2 my-2'>
                <span className='text-sm text-green-500'>{userSuccess && users.length !== 0 && users[0]}</span>
                <span className='text-sm text-red-500'>{userError && userError[0]}</span>
            </div>
        </form>
    )
}