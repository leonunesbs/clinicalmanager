/* eslint-disable no-use-before-define */
import React from 'react'

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps
} from 'next/document'

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

          <link
            rel="preload"
            href="/fonts/JetBrainsMono-Bold.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono-Light.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono-Regular.woff2"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono-Bold.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono-Light.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono-Regular.woff"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono-Bold.eot"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono-Light.eot"
            as="font"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/JetBrainsMono-Regular.eot"
            as="font"
            crossOrigin=""
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
