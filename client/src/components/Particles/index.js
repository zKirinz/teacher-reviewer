import Particles from 'react-tsparticles'

const ParticlesBg = () => {
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
                        value: 140,
                        limit: 100,
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
                        value: 0.7,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.6,
                            sync: false,
                        },
                    },
                    size: {
                        value: 42,
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
                        distance: 150,
                        color: '#ffffff',
                        opacity: 0.8,
                        width: 1.5,
                    },
                    move: {
                        enable: true,
                        speed: 2,
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
                            enable: true,
                            mode: 'bubble',
                            parallax: {
                                enable: false,
                                force: 30,
                                smooth: 40,
                            },
                        },
                        onClick: {
                            enable: true,
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
                            distance: 180,
                            size: 200,
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
