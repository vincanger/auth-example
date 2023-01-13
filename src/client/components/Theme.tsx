import { extendTheme, Theme} from '@chakra-ui/react';
import { StyleFunctionProps } from "@chakra-ui/theme-tools";

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const styles = {
  global: (props: StyleFunctionProps) => ({

    html: {
      fontSize: {
        base: '90%',
        md: '100%',
      },
    },
    body: {
      bgColor: 'white',
      fontColor: 'gray.800',
    },
    components: {
      Input: {
        baseStyle: {
          track: {
            _focus: {
              boxShadow: 'none',
            },
          },
        },
      },
    },
  }),
};

export const theme = extendTheme({
  config,
  styles,
  shadows: { 
    outline: '0 0 0 3px rgba(0, 0, 0, 0.15)', 
  },
  // layerStyles: {
  //   card: {
  //     bgColor: 'rgba(0, 0, 0, 0.05)',
  //   },
  // },
}) as Theme;
