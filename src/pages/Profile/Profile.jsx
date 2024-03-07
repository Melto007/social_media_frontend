import TabComponent from "../../components/TabComponent";
import UserComponent from "../../components/UserComponent";
import ButtonComponent from "../../components/ButtonComponent";
import MainContainer from '../../components/MainContainer'
import Paragraph from "../../components/Paragraph";
import { useEffect } from "react";
import Icon from "../../components/Icon";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom'
import { profileDetails, otherProfile } from '../../features/profileSlice'

export default function Profile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { pk } = useParams()

    const profileSlice = useSelector(state => state.profileSlice)
    const { isSuccess, profile } = profileSlice

    useEffect(() => {
        (async() => {
            if(pk) {
                dispatch(otherProfile(pk))
            } else {
                dispatch(profileDetails())
            }
        })()
    }, [isSuccess, pk])

    function handleEdit() {
        navigate('/home/profileDetails/:id')
    }

    let buttons = <ButtonComponent color="primary" name="follow" radius="full" size="sm" />

    if(isSuccess && !pk) {
        buttons = <ButtonComponent variant="bordered" name="Edit" radius="full" size="sm" onClick={handleEdit} />
    }

    return (
        <>
            <MainContainer>
                <div className="bg-neutral-900">
                    <div className="flex justify-between">
                        <div>
                            <UserComponent
                                success={isSuccess}
                                username={isSuccess && profile.data.user.name}
                                email={isSuccess && profile.data.user.email}
                                file={isSuccess && profile.data.url}
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