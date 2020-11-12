import useSWR from 'swr'
import { create } from 'apisauce'

export const api = create({
  baseURL:
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? 'http://127.0.0.1:8000/'
      : 'https://clinicalmanager.herokuapp.com/'
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useFetch(url: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error, mutate }: any = useSWR(url, async url => {
    const response = await api.get(url)

    return response.data
  })
  return { data, error, mutate }
}
