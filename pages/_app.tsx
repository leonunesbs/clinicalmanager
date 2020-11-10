/* eslint-disable no-use-before-define */
import { AppProps } from 'next/app'
import React from 'react'
import ThemeContainer from '../contexts/theme/ThemeContainer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
