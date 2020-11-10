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
