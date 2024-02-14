import { useState } from 'react'
import {
    Tabs,
    Tab
} from '@nextui-org/react'
import Cards from '../pages/Home/Cards'

export default function TabComponent() {
    const [ selected, setSelected ] = useState('Posts')
    return (
        <>
            <Tabs
                key="underlined"
                variant="underlined"
                color="primary"
                fullWidth="true"
                aria-label="Tabs variants"
                selectedKey={selected}
                onSelectionChange={setSelected}
            >
                <Tab key="Posts" title="Posts">
                    <Cards />
                </Tab>
                <Tab key="Followers" title="Followers">
                    <h1>Followers</h1>
                </Tab>
                <Tab key="Following" title="Following">
                    <h1>Following</h1>
                </Tab>
            </Tabs>
        </>
    )
}