import { useState } from 'react'
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

import Spinner from '../../components/Spinner'
import { Image, Box, Text } from '@chakra-ui/react'

const Carousel = (props) => {
    const { imagesList, ...rest } = props
    const [loaded, setLoaded] = useState(false)

    return (
        <ReactCarousel {...rest}>
            {imagesList.map((image, index) => (
                <Box key={index}>
                    <Image
                        src={image.src}
                        alt={`carousel ${index + 1}`}
                        onLoad={() => setLoaded(true)}
                    />
                    {loaded ? null : <Spinner />}

                    <Text className="legend">{image.description}</Text>
                </Box>
            ))}
        </ReactCarousel>
    )
}

export default Carousel
