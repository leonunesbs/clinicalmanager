import useSWR from 'swr'
import { create } from 'apisauce'

export const api = create({
  baseURL: 'http://127.0.0.1:8000/'
})

export function useFetch<Data = any, Error = any>(url: string) {
  let loading = true
  const { data, error, mutate }: any = useSWR(url, async url => {
    const response = await api.get(url)

    loading = false
    return response.data
  })
  return { data, error, mutate, loading }
}
