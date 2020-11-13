import { create } from 'apisauce'

export const api = create({
  baseURL:
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? 'http://127.0.0.1:8000/'
      : 'https://clinicalmanager.herokuapp.com/'
})
