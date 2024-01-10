import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
    Button
} from '@nextui-org/react'
import Icon from '../../components/Icon'

export default function DropDown(props) {
    const { icon, id } = props

    {/** handle edit function */}
    function handleEdit(id) {
        console.log(id)
    }

    {/** handle report function */}
    function handleReport(id) {
        console.log(id)
    }

    {/** handle delete function */}
    function handleDelete(id) {
        console.log(id)
    }

    const dropItem = [
        {
            id: 1,
            onClick: () => handleEdit(id),
            color: "primary",
            name: "Edit",
            content: <Icon icon="edit-icon" />
        },
        {
            id: 2,
            onClick: () => handleReport(id),
            color: "primary",
            name: "Report",
            content: <Icon icon="report-icon" />
        },
        {
            id: 3,
            onClick: () => handleDelete(id),
            color: "danger",
            class: "text-danger",
            name: "Delete",
            content: <Icon icon="delete-icon" />
        }
    ]

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