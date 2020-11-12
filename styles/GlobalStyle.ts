import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'JetBrains Mono';
  src: url('JetBrainsMono-Light.eot');
  src: url('JetBrainsMono-Light.eot?#iefix') format('embedded-opentype');
  src: url('JetBrainsMono-Light.woff2') format('woff2');
  src: url('JetBrainsMono-Light.woff') format('woff');
  font-weight: 300;
  font-style: thin;
}

@font-face {
  font-family: 'JetBrains Mono';
  src: url('JetBrainsMono-Regular.eot');
  src: url('JetBrainsMono-Regular.eot?#iefix') format('embedded-opentype');
  src: url('JetBrainsMono-Regular.woff2') format('woff2');
  src: url('JetBrainsMono-Regular.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: 'JetBrains Mono';
  src: url('JetBrainsMono-Bold.eot');
  src: url('JetBrainsMono-Bold.eot?#iefix') format('embedded-opentype');
  src: url('JetBrainsMono-Bold.woff2') format('woff2');
  src: url('JetBrainsMono-Bold.woff') format('woff');
  font-weight: 700;
  font-style: bold;
}
`

export default GlobalStyle
