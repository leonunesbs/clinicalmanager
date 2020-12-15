/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react'

import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import ThemeContainer from '../contexts/theme/ThemeContainer'
import * as gtag from '../services/gtag'
import Head from 'next/head'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const reportWebVitals: any = ({
//   id,
//   name,
//   label,
//   value
// }: NextWebVitalsMetric) => {
//   process.env.NODE_ENV === 'production' &&
//     window.gtag('event', name, {
//       event_category:
//         label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
//       value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
//       event_label: id, // id unique to current page load
//       non_interaction: true // avoids affecting bounce rate.
//     })
// }

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(
          // function (registration) {
          //   console.log(
          //     'Service Worker registration successful with scope: ',
          //     registration.scope
          //   )
          // },
          // function (err) {
          //   console.log('Service Worker registration failed: ', err)
          // }
          null
        )
      })
    }
  }, [])
  return (
    <ThemeContainer>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
