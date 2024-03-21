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
    const { setDataId, isSuccess, profile, user, onOpen, itemId } = props

    const dispatch = useDispatch()

    {/** handle edit function */}
    function handleEdit(itemId) {
        console.log(itemId)
        onOpen()
    }

    {/** handle report function */}
    function handleReport(itemId) {
        console.log(itemId)
    }

    {/** handle delete function */}
    function handleDelete(itemId) {
        // dispatch(postDelete(itemId))
        setDataId(itemId)
    }

    const dropItem = [
        {
            id: 2,
            onClick: () => handleReport(itemId),
            color: "primary",
            name: "Report",
            content: <Icon icon="report-icon" />
        }
    ]

    if(isSuccess && profile.data.id === user) {
        dropItem.push(
            {
                id: 1,
                onClick: () => handleEdit(itemId),
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
                onClick: () => handleDelete(itemId),
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