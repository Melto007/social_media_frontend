import { useState } from 'react'
import { Input } from '@nextui-org/react'
import Icon from '../../components/Icon'
import ButtonComponent from '../../components/ButtonComponent'

export default function SignInForm(props) {
    const [ isVisible, setIsVisible ] = useState(false)

    const { button } = props

    function onSubmitHandler() {
        console.log("sign in form")
    }

    return (
        <form>
            <div className='mb-4'>
                <Input
                    label="Email"
                    variant='bordered'
                    placeholder='Enter the email'
                    type="text"
                />
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
                />
            </div>
            <div className="mt-4">
                <ButtonComponent name="Sign In" className="w-full rounded-full bg-white text-black font-bold" onClick={onSubmitHandler} />
            </div>
        </form>
    )
}