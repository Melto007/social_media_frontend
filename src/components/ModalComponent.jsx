import {
    Modal,
    ModalContent,
    ModalBody,
    ModalHeader
} from "@nextui-org/react"

export default function ModalComponent(props) {
    const { isOpen, onOpenChange, forms, name } = props

    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="bg-neutral-800">
                <ModalContent>
                    <ModalHeader>{name}</ModalHeader>
                    <ModalBody>
                        {forms}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}