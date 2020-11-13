/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import useSWR from 'swr'
import { api } from '../services/api'

export function usePost<Data = any, Error = any>(url: string, postData: any) {
  const { data, error, mutate }: any = useSWR(url, async url => {
    const response = await api.post(url, postData)

    return response.data
  })
  return { data, error, mutate }
}
