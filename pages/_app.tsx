/* eslint-disable no-use-before-define */
import { AppProps, NextWebVitalsMetric } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import ThemeContainer from '../contexts/theme/ThemeContainer'
import * as gtag from '../services/gtag'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reportWebVitals: any = ({
  id,
  name,
  label,
  value
}: NextWebVitalsMetric) => {
  window.gtag('event', name, {
    event_category:
      label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    event_label: id, // id unique to current page load
    non_interaction: true // avoids affecting bounce rate.
  })
}

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
  return (
    <ThemeContainer>
      <Component {...pageProps} />
    </ThemeContainer>
  )
}

export default MyApp
