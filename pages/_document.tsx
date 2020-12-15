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
import { GA_TRACKING_ID } from '../services/gtag'

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt-br">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE-edge" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {process.env.NODE_ENV === 'production' && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
              `
                }}
              />
            </>
          )}
          <meta
            name="google-site-verification"
            content="wisnFadn82Ndz9TMStMgCiRpbFSgVe4WmNl-kJHc1Uo"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicon-16x16.png"
          />
          <link rel="manifest" href="/icons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/icons/safari-pinned-tab.svg"
            color="#011526"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <meta name="msapplication-TileColor" content="#011526" />
          <meta
            name="msapplication-config"
            content="/icons/browserconfig.xml"
          />
          <meta name="theme-color" content="#011526" />
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
