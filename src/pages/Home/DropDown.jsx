import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from '@nextui-org/react'
import Icon from '../../components/Icon'
import { useDispatch } from 'react-redux'
import { postDelete, postView } from '../../features/postSlice'

export default function DropDown(props) {
    const { dataId, isSuccess, profile, user, onOpen } = props

    const dispatch = useDispatch()

    {/** handle edit function */}
    function handleEdit(dataId) {
        console.log(dataId)
        onOpen()
    }

    {/** handle report function */}
    function handleReport(dataId) {
        console.log(dataId)
    }

    {/** handle delete function */}
    function handleDelete(dataId) {
        dispatch(postDelete(dataId))
        dispatch(postView())
    }

    const dropItem = [
        {
            id: 2,
            onClick: () => handleReport(dataId),
            color: "primary",
            name: "Report",
            content: <Icon icon="report-icon" />
        }
    ]

    if(isSuccess && profile.data.id === user) {
        dropItem.push(
            {
                id: 1,
                onClick: () => handleEdit(dataId),
                color: "primary",
                name: "Edit",
                content: <Icon icon="edit-icon" />
            },
        )
    }

    if(isSuccess && profile.data.id === user) {
        dropItem.push(
            {
                id: 3,
                onClick: () => handleDelete(dataId),
                color: "danger",
                class: "text-danger",
                name: "Delete",
                content: <Icon icon="delete-icon" />
            }
        )
    }

    return (
        <Dropdown className='bg-neutral-900'>
            <DropdownTrigger>
                <Button
                    className='border-none bg-transparent padding-0'
                    size="sm"
                    isIconOnly
                >
                    <Icon icon="menu-icon" />
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label='static actions' className='hover:bg-black'>
                {dropItem.map(item => (
                    <DropdownItem
                        key={item.id}
                        onClick={item.onClick}
                        color={item.color}
                        startContent={item.content}
                        className={item.class && item.class}
                    >
                        {item.name}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
}