import { extendTheme } from '@chakra-ui/react'

// Global style overrides
// import styles from "./styles"

// Foundational style overrides
import colors from './foundations/colors'
import fonts from './foundations/fonts'
import fontWeights from './foundations/fontWeights'
import radii from './foundations/radii'
import shadows from './foundations/shadows'
import sizes from './foundations/sizes'

// Component style overrides

const overrides = {
  // styles,
  colors,
  fonts,
  fontWeights,
  radii,
  shadows,
  sizes,
  // Other foundational style overrides go here
  components: {
    // Other components go here
  }
}

export default extendTheme(overrides)
