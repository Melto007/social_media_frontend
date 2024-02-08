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
import { forgotpasswordAction } from '../../actions/registerAction'

export default function ForgotPassword() {
    const { handleSubmit, register, formState: { errors } } = useForm()

    const dispatch = useDispatch()
    const forgotpasswordReducer = useSelector(state => state.forgotpasswordReducer)
    const { forgotLoading, forgotSuccess, forgotEmail, forgotError } = forgotpasswordReducer

    function onSubmitHandler(data) {
        dispatch(forgotpasswordAction(data))
    }

    let buttons = <ButtonComponent name="submit" className="bg-white rounded-full text-black w-full" onClick={handleSubmit(onSubmitHandler)} />

    if(forgotLoading) {
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
                                    {forgotSuccess ?
                                        <span className='text-sm text-green-500'>{forgotEmail.message}</span>
                                    :
                                        <span className='text-sm text-red-500'>{forgotError}</span>
                                    }
                                </div>
                            </Card>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}