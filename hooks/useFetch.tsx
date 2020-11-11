import useSWR from 'swr'
import { create } from 'apisauce'

export const api = create({
  baseURL: 'http://127.0.0.1:8000/'
})

export function useFetch<Data = any, Error = any>(url: string) {
  const { data, error, mutate }: any = useSWR(url, async url => {
    const response = await api.get(url)

    return response.data
  })
  return { data, error, mutate }
}
