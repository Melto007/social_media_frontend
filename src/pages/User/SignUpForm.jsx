import { Input } from '@nextui-org/react'
import Icon from '../../components/Icon'

export default function SignUpForm(props) {
    const { isVisible, setIsVisible, isVisibleInput, setIsVisibleInput } = props
    return (
        <form>
            <div className='mb-4'>
                <Input
                    label="Username"
                    variant='bordered'
                    placeholder='Enter the username'
                    type="text"
                />
            </div>
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
                />
            </div>
        </form>
    )
}