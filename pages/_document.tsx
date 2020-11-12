/* eslint-disable no-use-before-define */
import React from 'react'

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps
} from 'next/document'
import GlobalStyle from '../styles/GlobalStyle'

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="wisnFadn82Ndz9TMStMgCiRpbFSgVe4WmNl-kJHc1Uo"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${require('../public/icons/apple-touch-icon.png?webp')}`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${require('../public/icons/favicon-32x32.png?webp')}`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${require('../public/icons/favicon-16x16.png?webp')}`}
          />
          <link rel="manifest" href="/icons/site.webmanifest" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <GlobalStyle />
        </body>
      </Html>
    )
  }
}

export default MyDocument
