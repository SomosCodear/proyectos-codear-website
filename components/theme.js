import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                fontFamily: 'Roboto',
            },
        },
    },
    colors: {
        codear: {
            disco: '#a70050',
            shuttleGray: '#636466',
            silverSand: '#c7c8c4',
            black: '#1f1f1f'
        },
    },
    components: {
        Button: {
            variants: {
                outline: {
                    color: 'codear.disco',
                    borderColor: 'codear.disco',
                    bg: 'transparent',
                    textTransform: 'uppercase',
                    fontWeight: 'bold',
                    fontSize: 'md',
                    borderRadius: 'full',
                    p: 5,
                    _hover: {
                        bg: 'codear.disco',
                        color: 'white',
                        cursor: 'pointer'
                    }
                },
                tag: {
                    fontSize: 'xl',
                    color: 'codear.shuttleGray',
                    borderRadius: 'md',
                    border: '1px',
                    borderColor: 'codear.silverSand',
                    p: 2,
                    fontWeight: 'normal',
                    _hover: {
                        bg: 'codear.shuttleGray',
                        color: 'white',
                        cursor: 'pointer'
                    }
                }
            },
        },
        Heading: {
            variants: {
                sectionTitle: {
                    color: 'codear.shuttleGray',
                    textTransform: 'uppercase',
                    fontSize: 'md',
                    letterSpacing: '1px'
                },
                projectTitle: {
                    bg: 'white',
                    color: 'codear.black',
                    fontSize: '5xl',
                    textAlign: 'center',
                    padding: 12,
                    position: 'relative',
                    _after: {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        border: '3px solid',
                        borderColor: 'white',
                        width: '100%',
                        height: '100%',
                        left: 4,
                        top: 4
                    },
                }
            }
        }
    },
});

export default theme;