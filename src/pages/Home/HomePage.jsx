import {
    Textarea
} from '@nextui-org/react'
import Icon from '../../components/Icon'
import ButtonComponent from '../../components/ButtonComponent'
import DividerComponent from '../../components/DividerComponent'
import Cards from './Cards'

export default function HomePage() {
    return (
        <>
            <div className='bg-neutral-900 h-auto'>
                <div className='px-4 py-2'>
                    <form>
                        <div>
                            <Textarea
                                variant='bordered'
                                placeholder="what's happening"
                                className='border-none outline-none'
                            />
                        </div>
                    </form>

                    <div className='flex justify-between items-center mt-2'>
                        <div>
                            <ul className='flex items-center gap-1 ml-1'>
                                <li>
                                    <Icon icon="image-icon" />
                                </li>
                                <li>
                                    <Icon icon="gif-icon" />
                                </li>
                                <li>
                                    <Icon icon="emoji-icon" />
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ButtonComponent name="Tweet" startContent={<Icon icon="tweet-icon" />} />
                        </div>
                    </div>
                    <DividerComponent />
                    <Cards />
                </div>
            </div>
        </>
    )
}