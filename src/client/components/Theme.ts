import { extendTheme, Theme, type ThemeConfig } from '@chakra-ui/react';
import { StyleFunctionProps } from '@chakra-ui/theme-tools';
import { defineStyleConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const Checkbox = defineStyleConfig({
  defaultProps: {
    size: 'lg',
    colorScheme: 'purple'
  },
});

export const Button = defineStyleConfig({
  variants: {
    outline: {
      border: '0px',
      bgColor: 'transparent',
      _hover: {
        bgColor: 'transparent',
      }
    },
  },
  // The default size and variant values
  defaultProps: {
    variant: 'outline',
  },

});

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
      // color: 'gray.600',
    },

  }),
};

export const theme = extendTheme({
  config,
  styles,
  components: {
    Checkbox,
    Button,
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
});
