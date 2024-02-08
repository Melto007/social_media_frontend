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

export default function ResetPassword() {
    const { handleSubmit, register, formState: { errors } } = useForm()

    const [ isVisible, setIsVisible ] = useState(false)
    const [ isVisibleInput, setIsVisibleInput ] = useState(false)

    function onSubmitHandler() {
        console.log("submit")
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
                                            {...register("password", {
                                                required: "Password is required",
                                                validate: {
                                                    maxLength: (v) => v.length <=8 && "Password should contains 8 characters"
                                                }
                                            })}
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
                                            {...register("confirmpassword", {
                                                required: "Confirm Password is required",
                                                validate: {
                                                    maxLength: (v) => v.length <= 8 && "Confirm Password should contains 8 characters"
                                                }
                                            })}
                                        />
                                    </div>
                                    <div className='mx-2 text-red-500'>
                                        {errors.confirmpassword?.message && <span className='text-sm'>{errors.confirmpassword?.message}</span>}
                                    </div>
                                </CardBody>
                                <CardFooter>
                                    <ButtonComponent name="submit" className="bg-white rounded-full text-black w-full" onClick={handleSubmit(onSubmitHandler)} />
                                </CardFooter>
                            </Card>
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}