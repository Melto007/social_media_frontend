import TabComponent from "../../components/TabComponent";
import UserComponent from "../../components/UserComponent";
import ButtonComponent from "../../components/ButtonComponent";
import MainContainer from '../../components/MainContainer'
import Paragraph from "../../components/Paragraph";
import { useState } from "react";
import Icon from "../../components/Icon";
import { useSelector } from "react-redux";
import axios from '../../interceptors/axios'

export default function Profile() {
    const [ authentication, setAuthentication ] = useState(true)
    const authorization = axios.defaults.headers.common['Authorization']

    const profileSlice = useSelector(state => state.profileSlice)
    const { isSuccess, profile } = profileSlice

    let buttons = <ButtonComponent color="primary" name="follow" radius="full" size="sm" />

    if(authentication) {
        buttons = <ButtonComponent variant="bordered" name="Edit" radius="full" size="sm" />
    }

    return (
        <>
            <MainContainer>
                <div className="bg-neutral-900">
                    <div className="flex justify-between">
                        <div>
                            <UserComponent
                                file="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                                username={`@${isSuccess ? profile.data.name : 'UnauthorizedUser'}`}
                                email={isSuccess ? profile.data.email : 'UnauthorizedUser'}
                            />
                        </div>
                        <div>
                            {buttons}
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Paragraph
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi itaque et minima ab voluptatum repellendus possimus repudiandae debitis veniam laboriosam culpa voluptate cum vero maiores, modi molestiae quae harum distinctio."
                        />
                        <div className="flex gap-1">
                            <Icon
                                icon="location-icon"
                            />
                            <Paragraph content="India, TamilNadu, Nagercoil" />
                        </div>
                    </div>
                    <div>
                        <TabComponent />
                    </div>
                </div>
            </MainContainer>
        </>
    )
}