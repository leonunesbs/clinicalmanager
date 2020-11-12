/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr'
import { create } from 'apisauce'

export const api = create({
  baseURL:
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? 'http://127.0.0.1:8000/'
      : 'https://clinicalmanager.herokuapp.com/'
})

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate }: any = useSWR(url, async url => {
    const response = await api.get(url)

    return response.data
  })
  return { data, error, mutate }
}
