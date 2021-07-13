import React from 'react'

import { Grid, Stack, useMediaQuery } from '@chakra-ui/react'

import Footer from '../Footer'
import ParticlesBg from '../Particles'

const Layout = (props) => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    return (
        <React.Fragment>
            <ParticlesBg />
            <Grid h="100vh" w="100vw" justifyContent="center" alignItems="flex-start">
                <Stack
                    w="90vw"
                    maxW="container.md"
                    h={isLargerThan768 ? '78vh' : '90vh'}
                    pl="2vw"
                    pr="2vw"
                    pt="3vh"
                    pb="3vh"
                    borderRadius="xl"
                    bgColor="rgba(255,255,255,0.9)"
                    zIndex="100"
                    alignSelf="center"
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    {props.children}
                    <Footer />
                </Stack>
            </Grid>
        </React.Fragment>
    )
}

export default Layout
