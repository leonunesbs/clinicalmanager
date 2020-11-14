import { theme, DefaultTheme } from '@chakra-ui/core'

const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    body: 'JetBrains Mono, system-ui, sans-serif',
    heading: 'JetBrains Mono, system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  fontWeights: {
    ...theme.fontWeights,
    normal: 500,
    light: 300,
    bold: 700
  },
  radii: {
    ...theme.radii,
    sm: '4px',
    md: '8px'
  },
  fontSizes: {
    ...theme.fontSizes
  },
  colors: {
    ...theme.colors,
    blue: {
      ...theme.colors.blue,
      100: '#E4F2F1',
      400: '#03A6A6',
      500: '#037F8C',
      700: '#011526'
    },
    orange: {
      ...theme.colors.orange,
      500: '#BF9D7E'
    }
  },
  sizes: {
    ...theme.sizes,
    '3xs': '0.8rem',
    '2xs': '1.2rem'
  }
}

export default customTheme
