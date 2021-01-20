import { create } from 'apisauce'

const api = create({
  baseURL:
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
      ? 'http://127.0.0.1:8000/'
      : 'https://clinicalmanager.herokuapp.com/'
})

api.addAsyncRequestTransform(request => () => {
  const token = localStorage.getItem('@clinicalManager:Token')

  if (token) {
    request.headers.Authorization = `Token ${token}`
  }
  return request
})

api.addResponseTransform(response => {
  if (!response.ok) throw response
})

export default api
