import TabComponent from "../../components/TabComponent";
import UserComponent from "../../components/UserComponent";
import ButtonComponent from "../../components/ButtonComponent";
import MainContainer from '../../components/MainContainer'
import Paragraph from "../../components/Paragraph";
import { useState } from "react";
import Icon from "../../components/Icon";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const navigate = useNavigate()
    const [ authentication, setAuthentication ] = useState(true)

    const profileSlice = useSelector(state => state.profileSlice)
    const { isSuccess, profile } = profileSlice

    function handleEdit() {
        navigate('/home/profile/:id')
    }

    let buttons = <ButtonComponent color="primary" name="follow" radius="full" size="sm" />

    if(authentication) {
        buttons = <ButtonComponent variant="bordered" name="Edit" radius="full" size="sm" onClick={handleEdit} />
    }

    return (
        <>
            <MainContainer>
                <div className="bg-neutral-900">
                    <div className="flex justify-between">
                        <div>
                            <UserComponent />
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
                            <Paragraph content="India, Tamilnadu, Nagercoil" />
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