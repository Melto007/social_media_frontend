import {
    Modal,
    ModalContent,
    ModalBody,
    ModalHeader,
    ModalFooter
} from "@nextui-org/react"
import ButtonComponent from "./ButtonComponent"

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
                    <ModalFooter>
                        <ButtonComponent name="Sign up" className="w-full rounded-full bg-white text-black font-bold" />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}