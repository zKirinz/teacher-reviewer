import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Container, Stack } from '@chakra-ui/react'

import teacherAtom from '../../recoil/teacher'
import Information from './Information'
import Options from './Options'
import Reviews from './Reviews'

import { useSetRecoilState } from 'recoil'

const ReviewPage = () => {
    const { name } = useParams()
    const setTeacher = useSetRecoilState(teacherAtom)
    useEffect(() => {
        setTeacher(name)
    }, [name, setTeacher])

    return (
        <React.Fragment>
            <Container maxW="container.md">
                <Information />
            </Container>

            <Stack id="infinite-scroll" flexGrow={1} w="100%" overflow="auto" mt="3" mb="2" px="2">
                <Reviews />
            </Stack>

            <Stack direction="row" spacing="3" minH="45px">
                <Options />
            </Stack>
        </React.Fragment>
    )
}

export default ReviewPage
