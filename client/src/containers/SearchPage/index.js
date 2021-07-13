import React, { useEffect } from 'react'

import SeachBar from '../../components/SearchBar'
import { Stack, Container } from '@chakra-ui/react'

import searchAtom, { withResult } from '../../recoil/search'
import Result from './Result'

import { useSetRecoilState, useResetRecoilState } from 'recoil'

const SearchPage = () => {
    const setSearch = useSetRecoilState(searchAtom)
    const handleSearchChange = (text) => {
        setSearch(text)
    }

    const resetState = useResetRecoilState(withResult)
    useEffect(() => {
        resetState()
    }, [resetState])

    return (
        <React.Fragment>
            <Container mb="2vh" maxW="container.md">
                <SeachBar onChange={handleSearchChange} />
            </Container>

            <Stack w="100%" h="100%" direction="column" overflow="auto" p="2">
                <Result />
            </Stack>
        </React.Fragment>
    )
}

export default SearchPage
