import {
    Card,
    CardBody,
    CardHeader,
    CardFooter
} from '@nextui-org/react'
import MainContainer from '../../components/MainContainer'
import Paragraph from '../../components/Paragraph'
import ButtonComponent from '../../components/ButtonComponent'
import Heading1 from '../../components/Heading1'
import { useState } from 'react'

export default function MonetisationPage() {
    const [ active, setActive ] = useState(false)

    const headerOption = 'border py-8 text-center w-full rounded-lg cursor-pointer text-black bg-white'

    const paymentOption = [
        {
            id: 1,
            content: "Annual Plan",
            heading: "13,600.00/Yearly",
            content2: "13,600.00 per year billed annually",
            className: 'border border-sky-500 py-8 text-center w-full rounded-lg cursor-pointer'
        },
        {
            id: 2,
            content: "Monthly Plan",
            heading: "1300.00/Month",
            content2: "15600.00 per year billed monthly",
            className: 'border border-sky-500 py-8 text-center w-full rounded-lg cursor-pointer'
        }
    ]

    function handlerPaymentOption(value) {
        setActive(value)
    }

    return (
        <MainContainer>
            <Card className='bg-neutral-900 text-white'>
                <CardHeader className='flex flex-col justify-between gap-2 md:flex-row'>
                    {paymentOption.map(item => (
                        <div className={item.id === active ? headerOption : item.className} onClick={() => handlerPaymentOption(item.id)} key={item.id}>
                            <Paragraph
                                content={item.content}
                            />
                            <Heading1
                                className="text-2xl font-bold"
                                heading={item.heading}
                            />
                            <Paragraph
                                content={item.content2}
                            />
                        </div>
                    ))}
                </CardHeader>
                <CardBody>
                    <ButtonComponent
                        name="Subscribe & Pay"
                        size="md"
                        className="bg-white text-black rounded-full font-bold"
                    />
                </CardBody>
                <CardFooter>
                    <Paragraph
                        className='border border-white p-4 rounded-lg'
                        content="By subscribing, you agree to our Purchaser Terms of Service. Subscriptions auto-renew until canceled, as described in the Terms. Cancel anytime. Cancel at least 24 hours prior to renewal to avoid additional charges. A verified phone number is required to subscribe. If you've subscribed on another platform, manage your subscription through that platform."
                    />
                </CardFooter>
            </Card>
        </MainContainer>
    )
}