import {
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    useMediaQuery,
} from '@chakra-ui/react'

import ChartAtom from '../../recoil/chart'
import ModalChartContent from './ModalChartContent'

import { useRecoilValue } from 'recoil'

const ModalChart = ({ isOpen, onClose, finalRef }) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const chart = useRecoilValue(ChartAtom)

    return (
        <Modal
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="scale"
            scrollBehavior="inside"
            size="2xl"
            isCentered
        >
            <ModalOverlay />
            <ModalContent pb={2}>
                <ModalHeader fontSize={isLargerThan768 ? '2xl' : 'xl'}>
                    Rating Chart of{' '}
                    <Text display="inline-block" color="yellow.500">
                        {chart}
                    </Text>
                </ModalHeader>
                <ModalBody overflow pb={10}>
                    <ModalChartContent />
                </ModalBody>
                <ModalCloseButton />

                <ModalFooter pt={2}>
                    <Button colorScheme="teal" fontSize="lg" onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalChart
