import React, { useEffect } from 'react'

import { ExternalLinkIcon, QuestionIcon } from '@chakra-ui/icons'
import {
    Stack,
    Tooltip,
    Button,
    Link,
    LinkBox,
    LinkOverlay,
    useMediaQuery,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Text,
    Image,
    UnorderedList,
    ListItem,
    Box,
    Checkbox,
    Divider,
} from '@chakra-ui/react'

import usePersistedState from '../../Utils/usePersistedState'
import Logo from '../../assets/images/logo.png'

const Footer = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [aboutUs, setAboutUs] = usePersistedState('aboutUs', 'show')
    const initialRef = React.useRef()
    const finalRef = React.useRef()

    useEffect(() => {
        if (aboutUs === 'show') {
            onOpen()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSetAboutUs = (checked) => {
        if (checked) {
            setAboutUs('notShow')
        } else {
            setAboutUs('show')
        }
    }

    return (
        <Stack direction="column" justifyContent="center" alignItems="center" w="100%" px="2">
            <Divider orientation="horizontal" bgColor="teal" w="97%" h="0.5" />
            <Stack w="100%" direction="row" justifyContent="space-between" alignItems="center">
                <Tooltip hasArrow label="About us" placement="right-start">
                    <Button
                        colorScheme="teal"
                        size="sm"
                        display="flex"
                        flexDirection="center"
                        ref={finalRef}
                        onClick={onOpen}
                    >
                        About us <QuestionIcon ml="2" />
                    </Button>
                </Tooltip>
                <Tooltip hasArrow label="Request to add new teachers" placement="left-start">
                    <Button colorScheme="teal" size="sm">
                        <LinkBox>
                            <Stack direction="row" justifyContent="center" alignItems="center">
                                <LinkOverlay isExternal href="https://forms.gle/487VCX5W4VAgCLjr5">
                                    {isLargerThan768 ? "Can't find your teacher?" : 'New teacher?'}
                                </LinkOverlay>
                                <ExternalLinkIcon />
                            </Stack>
                        </LinkBox>
                    </Button>
                </Tooltip>

                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                    motionPreset="scale"
                    scrollBehavior="inside"
                    size={isLargerThan768 ? '4xl' : '6xl'}
                    isCentered
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader fontSize="2xl" textAlign="center" pb={0}>
                            <Image
                                src={Logo}
                                w={isLargerThan768 ? 72 : 44}
                                display="inline-block"
                                pr={5}
                            />
                        </ModalHeader>
                        <ModalBody
                            px={isLargerThan768 ? 6 : 3}
                            ml={isLargerThan768 ? 6 : 3}
                            mr={isLargerThan768 ? 6 : 5}
                        >
                            Xin chào các bạn, chào mừng đến với
                            <Box as="span" color="yellow.500">
                                &nbsp;Teacher Reviewer
                            </Box>
                            .
                            <Text>
                                <Box as="span" color="yellow.500">
                                    Teacher Reviewer&nbsp;
                                </Box>
                                là 1 trang web cho phép các bạn học sinh đánh giá về các giáo viên
                                <Box as="span" fontWeight="bold">
                                    &nbsp;một cách ẩn danh&nbsp;
                                </Box>
                                cũng như tìm hiểu thêm về họ qua các đánh giá của các bạn khác.
                            </Text>
                            <Text>
                                Từ đó, các bạn học sinh có thể tìm hiểu, tham khảo cũng như biết
                                được giáo viên nào phù hợp nhất với mình để nâng cao chất lượng học
                                tập.
                            </Text>
                            <Text color="yellow.500">Một số lưu ý:</Text>
                            <UnorderedList>
                                <ListItem>
                                    <Box as="span" color="yellow.500">
                                        Teacher Reviewer&nbsp;
                                    </Box>
                                    chỉ dành riêng cho sinh viên trường ĐH FPT cơ sở HCM.
                                </ListItem>
                                <ListItem>
                                    Nếu không tìm thấy giáo viên cần tìm thì vui lòng gửi yêu cầu
                                    qua&nbsp;
                                    <Link
                                        isExternal
                                        href="https://forms.gle/487VCX5W4VAgCLjr5"
                                        color="teal.500"
                                    >
                                        link này
                                    </Link>
                                    .
                                </ListItem>
                                <ListItem>
                                    Các đánh giá trong
                                    <Box as="span" color="yellow.500">
                                        &nbsp;Teacher Reviewer&nbsp;
                                    </Box>
                                    chỉ mang tính chủ quan theo góc nhìn của mỗi người.
                                </ListItem>
                                <ListItem>
                                    Do nhóm mình không thể chắt lọc được tất cả các đánh giá nên
                                    mong các bạn hãy đánh giá một cách có trách nhiệm để tạo nên 1
                                    cộng đồng
                                    <Box as="span" color="yellow.500">
                                        &nbsp;Teacher Reviewer&nbsp;
                                    </Box>
                                    chất lượng.
                                </ListItem>
                                <ListItem>
                                    <Text fontSize="md">
                                        Mọi thắc mắc hoặc ý tưởng muốn trao đổi xin vui lòng liên hệ
                                        qua email&nbsp;
                                        <Link
                                            isExternal
                                            href="mailto:tran123456k@gmail.com"
                                            color="teal.500"
                                        >
                                            tran123456k@gmail.com
                                        </Link>
                                        .
                                    </Text>
                                </ListItem>
                            </UnorderedList>
                        </ModalBody>
                        <ModalCloseButton ref={isLargerThan768 ? null : initialRef} size="lg" />

                        <Stack justifyContent="center" alignItems="center" mt={2}>
                            <Divider
                                orientation="horizontal"
                                w="90%"
                                h={0.5}
                                bgColor="teal"
                                opacity="0.2"
                            />
                        </Stack>
                        <Stack
                            px={isLargerThan768 ? 6 : 3}
                            pt={isLargerThan768 ? 0 : 1}
                            ml={isLargerThan768 ? 6 : 3}
                            mr={isLargerThan768 ? 6 : 5}
                            mb={isLargerThan768 ? 0 : 8}
                        >
                            <Checkbox
                                size="md"
                                colorScheme="teal"
                                spacing={3}
                                mt={3}
                                fontWeight="semibold"
                                isChecked={aboutUs === 'notShow'}
                                onChange={(e) => handleSetAboutUs(e.target.checked)}
                            >
                                Không hiển thị thông báo này nữa.
                            </Checkbox>
                        </Stack>

                        {isLargerThan768 ? (
                            <ModalFooter pb={6} pt={2}>
                                <Button
                                    ref={initialRef}
                                    colorScheme="teal"
                                    size="md"
                                    fontSize="xl"
                                    mr={3}
                                    onClick={onClose}
                                >
                                    Close
                                </Button>
                            </ModalFooter>
                        ) : null}
                    </ModalContent>
                </Modal>
            </Stack>
        </Stack>
    )
}

export default Footer
