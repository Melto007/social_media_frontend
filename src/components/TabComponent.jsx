import { useState } from 'react'
import {
    Tabs,
    Tab
} from '@nextui-org/react'
import Cards from '../pages/Home/Cards'
import { FollowComponents } from '../components/FollowComponents'
import FollowingComponent from './FollowingComponent'
import { useSelector } from 'react-redux'

export default function TabComponent() {
    const [ selected, setSelected ] = useState('Posts')

    const profileSlice = useSelector(state => state.profileSlice)
    const { isSuccess, profile } = profileSlice

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
                    <FollowComponents
                        isSuccess={isSuccess}
                        profile={profile}
                    />
                </Tab>
                <Tab key="Following" title="Following">
                    <FollowingComponent />
                </Tab>
            </Tabs>
        </>
    )
}