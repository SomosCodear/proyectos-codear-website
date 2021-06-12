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
                        color: 'white'
                    }
                },
            },
        }
    },
});

export default theme;