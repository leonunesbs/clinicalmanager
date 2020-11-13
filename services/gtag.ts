export const GA_TRACKING_ID = 'G-C8BTYXHYMF' // This is your GA Tracking ID

/// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const pageview = (url: URL) => {
  process.env.NODE_ENV === 'production' &&
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url
    })
}

type GTagEvent = {
  action: string
  category: string
  label: string
  value: number
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const event = ({ action, category, label, value }: GTagEvent) => {
  process.env.NODE_ENV === 'production' &&
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value
    })
}
