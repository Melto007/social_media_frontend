import ButtonComponent from "../../components/ButtonComponent";
import Container from "../../components/Container";
import DividerComponent from "../../components/DividerComponent";
import Icon from "../../components/Icon";
import { Divider } from "@nextui-org/react"

export default function User() {
    return (
        <>
            <Container>
                <div className="bg-neutral-900 h-[100vh]">
                    <div className="px-4 py-2">
                        <div className="grid md:grid-cols-2">
                            <div className="hidden md:block m-auto p-auto">
                                <Icon icon="twitter-login-icon" />
                            </div>
                            <div className="flex flex-col justify-between gap-5">
                                <div className="flex flex-col justify-between gap-5">
                                    <h1 className="text-3xl font-bold mt-5">Happening now</h1>
                                    <h1 className="text-lg font-bold">Join today.</h1>
                                    <div className="mt-2 flex flex-col gap-1">
                                        <span className="block"><ButtonComponent className="w-full mt-2 bg-white text-black font-bold" radius="full" startContent={<Icon icon="google-icon" />} name="Signup with google" /></span>
                                        <span className="block"><ButtonComponent className="w-full mt-2 bg-white text-black font-bold" radius="full" startContent={<Icon icon="facebook-icon" />} name="Signup with facebook" /></span>
                                    </div>
                                </div>
                                <div className="m-auto">
                                    <span>or</span>
                                </div>
                                <div>
                                    <ButtonComponent name="Create account" className="font-bold w-full" radius="full" />
                                    <p className="text-xs my-2">By signing up, you agree to the <span className="text-blue-400">Terms of Service</span> and <span className="text-blue-400">Privacy Policy</span>, including <span className="text-blue-400">Cookie Use</span>.</p>
                                </div>
                                <div className="my-4">
                                    <p className="font-bold">Already have an account?</p>
                                    <ButtonComponent name="Sign in" className="font-bold border-solid border-1 border-gray-600 w-full my-2" variant="bordered" radius="full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}