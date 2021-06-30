import React, { useState, useEffect, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import StarRatings from 'react-star-ratings'

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
    Textarea,
    Stack,
    useTheme,
    Box,
    useMediaQuery,
    useDisclosure,
} from '@chakra-ui/react'

import { RECAPTCHA_SITE_KEY } from '../../../config'
import reviewAtom from '../../../recoil/review'
import teacherAtom from '../../../recoil/teacher'
import CheckTeacherCarousel from './CheckTeacherCarousel'
import ModalReviewStatus from './ModalReviewStatus'

import { useRecoilValue, useSetRecoilState } from 'recoil'

const ModalReview = ({ isOpen, onClose, finalRef }) => {
    const theme = useTheme()
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    const recaptchaRef = useRef()
    const checkTeacherInstructionRef = useRef()

    const teacher = useRecoilValue(teacherAtom)
    const setReview = useSetRecoilState(reviewAtom)

    const [content, setContent] = useState('')
    const [contentError, setContentError] = useState('')
    const [rating, setRating] = useState(0)
    const [ratingError, setRatingError] = useState('')
    const [isRecaptchaVerify, setIsRecaptchaVerify] = useState(false)
    const [recaptchaError, setRecaptchaError] = useState('')
    const [recaptchaToken, setRecaptchaToken] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const {
        isOpen: isCheckTeacherCarouselOpen,
        onOpen: onCheckTeacherCarouselOpen,
        onClose: onCheckTeacherCarouselClose,
    } = useDisclosure()

    const handleSetContent = (content) => {
        if (contentError) {
            setContentError('')
        }
        setContent(content)
    }

    const handleSetRating = (rating) => {
        if (ratingError) {
            setRatingError('')
        }
        setRating(rating)
    }

    const handleRecaptchaSuccess = (token) => {
        setRecaptchaToken(token)
        if (recaptchaError) {
            setRecaptchaError('')
        }
        setIsRecaptchaVerify(true)
    }

    const handleRecaptchaExpired = () => {
        setRecaptchaError('Recaptcha expired, please verify again!')
        setIsRecaptchaVerify(false)
    }

    const handleRecaptchaErrored = () => {
        setRecaptchaError('Recaptcha errored, please reload to try again!')
        setIsRecaptchaVerify(false)
    }

    useEffect(() => {
        if (!isOpen) {
            setContent('')
            setRating(0)
            setIsRecaptchaVerify(false)
            setRecaptchaToken('')
            setIsLoading(false)
        }
    }, [isOpen])

    const onSubmit = async () => {
        let error = false
        if (!content.trim().length) {
            error = true
            setContentError('Review cannot be empty!')
        } else if (content.trim().length > 300) {
            error = true
            setContentError('Review cannot have more than 300 characters!')
        }
        if (rating < 1 || rating > 5) {
            error = true
            setRatingError('Rating is required!')
        }
        if (!isRecaptchaVerify) {
            error = true
            setRecaptchaError('Verify recaptcha is required!')
        }

        if (!error) {
            setReview({ teacher: teacher, rating: rating, content: content, token: recaptchaToken })
            setIsLoading(true)
        }
    }

    const handleOnClose = () => {
        onClose()
        setContentError('')
        setRatingError('')
        setRecaptchaError('')
    }

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
            <ModalContent pb={5}>
                <ModalHeader fontSize={isLargerThan768 ? '2xl' : 'xl'}>
                    Make a review for{' '}
                    <Text display="inline-block" color="yellow.500">
                        {teacher}
                    </Text>
                </ModalHeader>
                <ModalBody overflow>
                    <Textarea
                        placeholder="Enter your review"
                        colorScheme="teal"
                        focusBorderColor="teal.300"
                        size="lg"
                        h="20vh"
                        isInvalid={contentError}
                        onChange={(e) => handleSetContent(e.target.value)}
                    />
                    <Text fontSize="lg" color="red.500">
                        {contentError}
                    </Text>
                </ModalBody>
                <ModalCloseButton />
                <Stack direction={isLargerThan768 ? 'row' : 'column'} alignItems="center">
                    <Stack
                        direction="row"
                        alignItems="center"
                        pl={6}
                        pr={isLargerThan768 ? 3 : 6}
                        py={2}
                    >
                        <Text fontSize="xl" fontWeight="500">
                            Rating:
                        </Text>
                        <StarRatings
                            rating={rating}
                            starRatedColor={theme.colors.yellow[400]}
                            starHoverColor={theme.colors.yellow[400]}
                            changeRating={handleSetRating}
                            numberOfStars={5}
                            starDimension="28px"
                            starSpacing="3px"
                            name="rating"
                        />
                    </Stack>
                    <Text fontSize="lg" color="red.500" mt="0 !important">
                        {ratingError}
                    </Text>
                </Stack>

                <Text px={5} fontWeight="500" fontStyle="italic" textAlign="center" pt={2}>
                    *Make sure you don&apos;t review wrong teacher.&nbsp;
                    <Text
                        display="inline-block"
                        as="u"
                        cursor="pointer"
                        color="yellow.500"
                        _hover={{ color: 'yellow.400' }}
                        _active={{ color: 'yellow.600' }}
                        _visited={{ color: 'yellow.600' }}
                        transition={'all 0.2s ease-in-out'}
                        onClick={onCheckTeacherCarouselOpen}
                        ref={checkTeacherInstructionRef}
                    >
                        How to check?
                    </Text>
                </Text>
                {isLargerThan768 ? null : (
                    <Stack direction="column" w="100%" alignItems="center" pt={3}>
                        <ReCAPTCHA
                            sitekey={RECAPTCHA_SITE_KEY}
                            size="normal"
                            ref={recaptchaRef}
                            onChange={handleRecaptchaSuccess}
                            onExpired={handleRecaptchaExpired}
                            onErrored={handleRecaptchaErrored}
                        />
                        <Text fontSize="lg" color="red.500" mt="0 !important">
                            {recaptchaError}
                        </Text>
                    </Stack>
                )}
                <ModalFooter>
                    {isLargerThan768 ? (
                        <Stack direction="column" w="100%">
                            <ReCAPTCHA
                                sitekey={RECAPTCHA_SITE_KEY}
                                size="normal"
                                ref={recaptchaRef}
                                onChange={handleRecaptchaSuccess}
                                onExpired={handleRecaptchaExpired}
                                onErrored={handleRecaptchaErrored}
                            />
                            <Text fontSize="lg" color="red.500" mt="0 !important">
                                {recaptchaError}
                            </Text>
                        </Stack>
                    ) : null}
                    <Button colorScheme="teal" fontSize="lg" mr={3} onClick={handleOnClose}>
                        Close
                    </Button>
                    <Button
                        variant="ghost"
                        colorScheme="teal"
                        fontSize="lg"
                        isLoading={isLoading}
                        loadingText="Saving"
                        onClick={onSubmit}
                    >
                        Save review
                    </Button>
                </ModalFooter>

                <Box transitionProperty="" transitionDuration="2s" transition="ease-in-out">
                    <ModalReviewStatus onClose={handleOnClose} setIsLoading={setIsLoading} />
                </Box>

                <CheckTeacherCarousel
                    isOpen={isCheckTeacherCarouselOpen}
                    onClose={onCheckTeacherCarouselClose}
                    finalRef={checkTeacherInstructionRef}
                />
            </ModalContent>
        </Modal>
    )
}

export default ModalReview
