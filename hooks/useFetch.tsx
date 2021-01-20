/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR, { ConfigInterface } from 'swr'
import api from '../services/api'

export function useFetch<Data = any, Error = any>(
  url: string,
  ...config: [ConfigInterface?]
) {
  const { data, error, mutate }: any = useSWR(
    url,
    async url => {
      const response = await api.get(url)

      return response.data
    },
    ...config
  )
  return { data, error, mutate }
}
