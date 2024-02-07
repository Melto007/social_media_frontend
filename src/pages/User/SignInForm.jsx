import { useState } from 'react'
import { Input } from '@nextui-org/react'
import Icon from '../../components/Icon'
import ButtonComponent from '../../components/ButtonComponent'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginAction } from '../../actions/registerAction'
import { Navigate, redirect } from 'react-router-dom'
import Links from '../../components/Links'

export default function SignInForm(props) {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const [ isVisible, setIsVisible ] = useState(false)

    const dispatch = useDispatch()
    const loginReducer = useSelector(state => state.login)
    const { user, loading, isError, success } = loginReducer

    function onSubmitHandler(data) {
        dispatch(loginAction(data))
    }

    let buttons = <ButtonComponent name="Sign In" className="w-full rounded-full bg-white text-black font-bold" onClick={handleSubmit(onSubmitHandler)} />

    if(loading) {
        buttons = <ButtonComponent name="Sign In" isLoading className="w-full rounded-full bg-white text-black font-bold" onClick={handleSubmit(onSubmitHandler)} />
    }

    if(success) {
        return <Navigate to='home' />
    }

    return (
        <form>
            <div className='mb-4'>
                <Input
                    label="Email"
                    variant='bordered'
                    placeholder='Enter the email'
                    type="text"
                    {
                        ...register('email', {
                            required: "Email is required",
                            validate: {
                                maxLength: (v) => v.length <= 50 || "The email should have at most 50 characters",
                                matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address",
                            },
                        })
                    }
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
                    {...register("password", {
                        required: true
                    })}
                />
            </div>
            <div className='mb-4'>
                <Links path="forgotpassword" name="forgot password" className="text-blue-500" />
            </div>
            <div className='mx-2 my-2 text-red-500'>
                {errors.password?.message && <span className='text-sm'>{errors.password?.message}</span>}
            </div>
            <div className="mt-4">
                {buttons}
            </div>
            <div className='mx-2 my-2 text-red-500'>
                {user.success && <span className='text-sm'>{user.success}</span>}
                {isError && <span className='text-sm'>{isError}</span>}
            </div>
        </form>
    )
}