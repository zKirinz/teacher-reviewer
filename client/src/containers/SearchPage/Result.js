import React from 'react'
import { useHistory } from 'react-router-dom'

import TeacherBtn from '../../components/Button/TeacherBtn'
import ErrorFallback from '../../components/ErrorFallback'
import Spinner from '../../components/Spinner'
import { Image, Stack, Text, useMediaQuery } from '@chakra-ui/react'

import TomNotFound from '../../assets/images/tom-not-found.jpg'
import TypingCat from '../../assets/images/typing-cat.jpg'
import { withResult } from '../../recoil/search'

import { useRecoilValueLoadable, useResetRecoilState } from 'recoil'

const Result = () => {
    const history = useHistory()
    const handleButtonClick = (name) => {
        history.push('/review/' + name)
    }

    const searchWithResult = useRecoilValueLoadable(withResult)
    const resetState = useResetRecoilState(withResult)

    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    switch (searchWithResult.state) {
        case 'hasValue':
            if (!searchWithResult.contents) {
                if (isLargerThan768) {
                    return (
                        <Stack w="100%" h="100%" justifyContent="center" alignItems="center" p="10">
                            <Image
                                alt="a typing cat"
                                src={TypingCat}
                                borderRadius="full"
                                w="100px"
                            />
                            <Text fontSize="2xl" textAlign="center" opacity="0.8">
                                Enter teacher code to start finding
                            </Text>
                        </Stack>
                    )
                }
                return (
                    <Stack w="100%" h="100%" justifyContent="center" alignItems="center" p="10">
                        <Image alt="a typing cat" src={TypingCat} borderRadius="full" w="80px" />
                        <Text fontSize="xl" textAlign="center" opacity="0.8" fontWeight="500">
                            Enter teacher code to start finding
                        </Text>
                    </Stack>
                )
            }
            if (!searchWithResult.contents.length) {
                if (isLargerThan768) {
                    return (
                        <Stack w="100%" h="100%" justifyContent="center" alignItems="center" p="10">
                            <Image
                                alt="a confuse Tom cat"
                                src={TomNotFound}
                                borderRadius="full"
                                w="100px"
                            />
                            <Text fontSize="2xl" textAlign="center">
                                Looks like your teacher is not in our list yet
                            </Text>
                        </Stack>
                    )
                }
                return (
                    <Stack w="100%" h="100%" justifyContent="center" alignItems="center" p="10">
                        <Image
                            alt="a confuse Tom cat"
                            src={TomNotFound}
                            borderRadius="full"
                            w="80px"
                        />
                        <Text fontSize="xl" textAlign="center" fontWeight="500">
                            Looks like your teacher is not in our list yet
                        </Text>
                    </Stack>
                )
            }
            return (
                <React.Fragment>
                    {searchWithResult.contents.map((teacher) => (
                        <TeacherBtn
                            key={teacher.code}
                            code={teacher.code}
                            rating={teacher.rating}
                            noReviews={teacher.noReviews}
                            onClick={() => handleButtonClick(teacher.code)}
                        />
                    ))}
                </React.Fragment>
            )
        case 'loading':
            return <Spinner />
        case 'hasError':
            return <ErrorFallback error={searchWithResult.contents} resetError={resetState} />
        default:
            return null
    }
}

export default Result
