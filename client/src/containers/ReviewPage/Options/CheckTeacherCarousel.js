import Carousel from '../../../components/Carousel'
import { Modal, ModalOverlay, ModalContent, ModalBody } from '@chakra-ui/react'

const CheckTeacherCarousel = ({ isOpen, onClose, finalRef }) => {
    const imagesList = [
        {
            src: 'https://i.ibb.co/Ypym0Dq/check-teacher-instruction-carousel-1.png',
            description: '1. Login to FAP with your FPT email.',
        },
        {
            src: 'https://i.ibb.co/H7MHzB4/check-teacher-instruction-carousel-2.png',
            description: '2. Click to your username which the red arrow is pointing at.',
        },
        {
            src: 'https://i.ibb.co/VCHpqrk/check-teacher-instruction-carousel-3.png',
            description:
                '3. Append "?login=<teacher-code>" to your current URL with <teacher-code> is code of the teacher you want to check and then reload the page.',
        },
        {
            src: 'https://i.ibb.co/FWNKy4d/check-teacher-instruction-carousel-4.png',
            description:
                '4. There are 2 scenarios, base on what you see you can know that the teacher code exists or not.',
        },
        {
            src: 'https://i.ibb.co/cD01KB9/check-teacher-instruction-carousel-5.png',
            description: '5. Notice: username can different with email.',
        },
    ]

    return (
        <Modal
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="scale"
            scrollBehavior="inside"
            size="4xl"
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalBody px={1} pt={1} pb={0} border="1px solid black">
                    <Carousel imagesList={imagesList} showThumbs={false} />
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default CheckTeacherCarousel
