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
import { resetPassword } from '../../features/userSlice'

export default function ForgotPassword() {
    const { handleSubmit, register, formState: { errors } } = useForm()

    const dispatch = useDispatch()

    const userSlice = useSelector(state => state.userSlice)
    const { users, userLoading, userSuccess, userError } = userSlice

    function onSubmitHandler(data) {
        dispatch(resetPassword(data))
    }

    let buttons = <ButtonComponent name="submit" className="bg-white rounded-full text-black w-full" onClick={handleSubmit(onSubmitHandler)} />

    if(userLoading) {
        buttons = <ButtonComponent name="submit" isLoading className="bg-white rounded-full text-black w-full" onClick={handleSubmit(onSubmitHandler)} />
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
                                    <Heading1 heading="Forgot Password" className="mb-1 mx-2" />
                                    <div className='mb-1'>
                                        <Input
                                            label="Email"
                                            variant='bordered'
                                            placeholder='Enter the Email'
                                            type="text"
                                            {
                                                ...register('email', {
                                                    required: "Email is required",
                                                    validate: {
                                                        maxLength: (v) => v.length <= 50 || "The email should have at most 50 characters",
                                                        matchPattern: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Email address must be a valid address",
                                                    }
                                                })
                                            }
                                        />
                                    </div>
                                    <div className='mx-2 text-red-500'>
                                        {errors.email?.message && <span className='text-sm'>{errors.email?.message}</span>}
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    {buttons}
                                </CardFooter>
                                <div className='text-center'>
                                    {userSuccess && users && <span className='text-sm text-green-500'>{users[0].message}</span>}
                                    {userError && <span className='text-sm text-red-500'>{userError.message}</span>}
                                </div>
                            </Card>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}