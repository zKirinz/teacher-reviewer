import Particles from 'react-tsparticles'

import { useMediaQuery } from '@chakra-ui/react'

const ParticlesBg = () => {
    const [isLargerThan768] = useMediaQuery('(min-width: 768px)')

    return (
        <Particles
            style={{ position: 'absolute' }}
            options={{
                backgroundMode: {
                    enable: true,
                    zIndex: 0,
                },
                particles: {
                    number: {
                        value: isLargerThan768 ? 140 : 70,
                        limit: isLargerThan768 ? 100 : 50,
                        density: {
                            enable: false,
                            value_area: 700,
                        },
                    },
                    color: {
                        value: '#ffffff',
                    },
                    shape: {
                        type: 'image',
                        image: {
                            src: '/favicon.png',
                            width: 320,
                            height: 240,
                        },
                    },
                    opacity: {
                        value: isLargerThan768 ? 0.7 : 0.8,
                        random: true,
                        anim: {
                            enable: true,
                            speed: isLargerThan768 ? 1 : 0.5,
                            opacity_min: isLargerThan768 ? 0.6 : 0.7,
                            sync: false,
                        },
                    },
                    size: {
                        value: isLargerThan768 ? 42 : 36,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 8,
                            size_min: 30,
                            sync: false,
                        },
                    },
                    line_linked: {
                        enable: true,
                        distance: isLargerThan768 ? 150 : 120,
                        color: '#ffffff',
                        opacity: 0.8,
                        width: 1.5,
                    },
                    move: {
                        enable: true,
                        speed: isLargerThan768 ? 2 : 1.5,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false,
                        attract: {
                            enable: false,
                            rotateX: 600,
                            rotateY: 1200,
                        },
                    },
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onHover: {
                            enable: isLargerThan768 ? true : false,
                            mode: 'bubble',
                            parallax: {
                                enable: false,
                                force: 30,
                                smooth: 40,
                            },
                        },
                        onClick: {
                            enable: isLargerThan768 ? true : false,
                            mode: 'push',
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 300,
                            lineLinked: {
                                opacity: 1,
                            },
                        },
                        bubble: {
                            distance: 200,
                            size: 160,
                            duration: 2,
                            opacity: 1,
                            speed: 1,
                        },
                        repulse: {
                            distance: 200,
                        },
                        push: {
                            particles_nb: 5,
                        },
                        remove: {
                            particles_nb: 2,
                        },
                    },
                },
                backgroundMask: {
                    enable: true,
                    cover: {
                        color: {
                            value: {
                                r: 0,
                                g: 0,
                                b: 0,
                            },
                        },
                    },
                },
                retina_detect: true,
                fps_limit: 60,
                background: {
                    image: "url('https://i.ibb.co/sJRzCbV/background.jpg')",
                },
            }}
        />
    )
}

export default ParticlesBg
