import { useState } from 'react'
import ButtonComponent from "../../components/ButtonComponent";
import Container from "../../components/Container";
import Icon from "../../components/Icon";
import {
    useDisclosure,
} from "@nextui-org/react"
import ModalComponent from '../../components/ModalComponent';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import { googleLogin } from '../../features/socialLoginSlice'
import { useDispatch, useSelector } from 'react-redux'

import { GoogleLogin, useGoogleLogin } from '@react-oauth/google'
import { Navigate } from 'react-router-dom'

import axios from 'axios'

export default function User() {
    const [ buttonContent, setButtonContent ] = useState(null)
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    const dispatch = useDispatch()
    const socialLoginSlice = useSelector(state => state.socialLoginSlice)
    const { users, isSuccess, isLoading, isError } = socialLoginSlice

    function handleClick(e) {
        const content = e.target.textContent

        if(content !== '' && content !== null) {
            onOpen()
            setButtonContent(content)
        }
    }

    async function handleLogin(response) {
        const datas = {'token': response}
        dispatch(googleLogin(datas))
    }

    const handleLoginSubmit = useGoogleLogin({
        onSuccess: codeResponse => handleLogin(codeResponse)
    })

    function onError() {
        console.log("login failed")
    }

    if(isSuccess) {
        return <Navigate to='home' />
    }

    return (
        <>
            <Container>
                <div>
                    <div className="px-4 py-2">
                        <div className="grid md:grid-cols-2">
                            <div className=" m-auto p-auto">
                                <Icon icon="twitter-login-icon" />
                            </div>
                            <div className="m-auto p-auto md:max-w-[25em] md:translate-y-10">
                                <div className="flex flex-col justify-between gap-5">
                                    <h1 className="text-3xl font-bold mt-5 md:text-4xl">Happening now</h1>
                                    <h1 className="text-lg font-bold md:text-2xl">Join today.</h1>
                                    <div className="mt-2 flex flex-col gap-1">
                                        {/* <GoogleLogin
                                            shape="circle"
                                            size="large"
                                            onSuccess={onSuccess}
                                            onError={onError}
                                        /> */}
                                        <span className="block md:text-2xl">
                                            <ButtonComponent className="w-full mt-2 bg-white text-black font-bold" radius="full" startContent={<Icon icon="google-icon" />} name="Signup with google" onClick={() => handleLoginSubmit()} />
                                        </span>
                                        <span className="block md:text-2xl"><ButtonComponent className="w-full mt-2 bg-white text-black font-bold" radius="full" startContent={<Icon icon="facebook-icon" />} name="Signup with facebook" /></span>
                                    </div>
                                </div>
                                <div className="text-center my-5">
                                    <span>or</span>
                                </div>
                                <div className="text-center my-5">
                                    <ButtonComponent name="Create account" className="font-bold w-full" radius="full" onClick={handleClick} />
                                    <p className="text-xs my-2 md:text-[0.8rem]">By signing up, you agree to the <span className="text-blue-400">Terms of Service</span> and <span className="text-blue-400">Privacy Policy</span>, including <span className="text-blue-400">Cookie Use</span>.</p>
                                </div>
                                <div className="my-5">
                                    <p className="font-bold md:text-[1em]">Already have an account?</p>
                                    <ButtonComponent name="Sign in" className="font-bold border-solid border-1 border-gray-600 w-full my-2" variant="bordered" radius="full" onClick={handleClick} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <ModalComponent
                onOpenChange={onOpenChange}
                isOpen={isOpen}
                name={buttonContent === 'Create account' ? 'Sign Up' : 'Sign In'}
                forms={buttonContent === 'Create account' ? <SignUpForm /> : <SignInForm />}
            />
        </>
    )
}