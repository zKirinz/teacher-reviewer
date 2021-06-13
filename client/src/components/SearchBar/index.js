import { InputGroup, InputLeftAddon, Input, useMediaQuery } from '@chakra-ui/react'

const SearchBar = ({ onChange }) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
    let SearchBar

    if (isLargerThan768) {
        SearchBar = (
            <InputGroup colorScheme="teal" size="lg" color="blackAlpha.900">
                <InputLeftAddon fontWeight="500" borderColor="yellow.500">
                    Teacher
                </InputLeftAddon>
                <Input
                    type="text"
                    borderColor="teal"
                    focusBorderColor="teal.500"
                    placeholder="e.g. KienTT, HuyBN"
                    _placeholder={{ color: 'black.800' }}
                    _hover={{ borderColor: 'teal.300' }}
                    onChange={(event) => onChange(event.target.value)}
                />
            </InputGroup>
        )
    } else {
        SearchBar = (
            <InputGroup colorScheme="green" size="lg" borderColor="blackAlpha.400">
                <Input
                    type="text"
                    variant="flushed"
                    color="blackAlpha.800"
                    borderBottomColor="green.300"
                    borderBottomWidth="revert"
                    focusBorderColor="green.400"
                    placeholder="Enter Teacher Code - e.g. KienTT"
                    _placeholder={{ color: 'black.800' }}
                    onChange={(event) => onChange(event.target.value)}
                />
            </InputGroup>
        )
    }

    return SearchBar
}

export default SearchBar
