import { useState } from 'react'
import Container from "../../components/Container"
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input
} from '@nextui-org/react'
import Icon from "../../components/Icon"
import ButtonComponent from "../../components/ButtonComponent"
import { useForm } from 'react-hook-form'
import Heading1 from "../../components/Heading1"
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Navigate } from 'react-router-dom'
import { changePassword } from '../../features/userSlice'

export default function ResetPassword() {
    const params = useParams()

    const { handleSubmit, register, reset, formState: { errors } } = useForm()

    const [ isVisible, setIsVisible ] = useState(false)
    const [ isVisibleInput, setIsVisibleInput ] = useState(false)

    const dispatch = useDispatch()

    const userSlice = useSelector(state => state.userSlice)
    const { users, userLoading, userSuccess, userError } = userSlice

    let buttons = <ButtonComponent name="submit" className="bg-white rounded-full text-black w-full" onClick={handleSubmit(onSubmitHandler)} />

    if(userLoading) {
        buttons = <ButtonComponent name="submit" isLoading className="bg-white rounded-full text-black w-full" onClick={handleSubmit(onSubmitHandler)} />
    }

    function onSubmitHandler(data) {
        dispatch(changePassword({ data, params }))
        reset()
    }

    if(userSuccess) {
        return <Navigate to="/" />
    }

    return (
        <>
            <Container>
                <div className="flex justify-center items-center h-[100vh]">
                    <div className="flex justify-center">
                        <form>
                            <Card className="bg-neutral-900 text-white w-[20em] md:w-[30em]">
                                <CardHeader className="flex justify-center">
                                    <Icon icon="twitter-icon" />
                                </CardHeader>
                                <CardBody className="flex flex-col gap-2">
                                    <Heading1 heading="Reset Password" className="mb-1 mx-2" />
                                    <div className='mb-1'>
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
                                            {...register("password",
                                                {
                                                    required: "password is required"
                                                }
                                            )}
                                        />
                                    </div>
                                    <div className='mx-2 text-red-500'>
                                        {errors.password?.message && <span className='text-sm'>{errors.password?.message}</span>}
                                    </div>
                                    <div className='mb-1'>
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
                                            {...register("confirmpassword",
                                                {
                                                    required: "confirm password is required"
                                                }
                                            )}
                                        />
                                    </div>
                                    <div className='mx-2 text-red-500'>
                                        {errors.confirmpassword?.message && <span className='text-sm'>{errors.confirmpassword?.message}</span>}
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    {buttons}
                                </CardFooter>
                                <div className='text-center'>
                                    {userSuccess && <span className='text-green-500 text-sm'>{users[0].message}</span>}
                                    {userError && <span className='text-red-500 text-sm'>{userError.message}</span>}
                                </div>
                            </Card>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}