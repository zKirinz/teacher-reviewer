import React from 'react'

import { Grid, Stack, Divider, useMediaQuery } from '@chakra-ui/react'

import Footer from '../Footer'
import ParticlesBg from '../Particles'

const Layout = (props) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    return (
        <React.Fragment>
            <ParticlesBg />
            <Grid minH="100vh" minW="100vw" justifyContent="center" alignItems="flex-start">
                <Stack
                    w="80vw"
                    maxW="container.md"
                    h={isLargerThan768 ? '78vh' : '86vh'}
                    pl="2vw"
                    pr="2vw"
                    pt="3vh"
                    pb="3vh"
                    borderRadius="xl"
                    bgColor="rgba(255,255,255,0.9)"
                    zIndex="100"
                    alignSelf="center"
                    direction="column"
                    alignItems="center"
                    overflow="hidden"
                >
                    {props.children}
                    <Divider orientation="horizontal" bgColor="teal" w="97%" h="0.5" />
                    <Footer />
                </Stack>
            </Grid>
        </React.Fragment>
    )
}

export default Layout
