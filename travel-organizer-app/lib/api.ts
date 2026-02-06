// src/lib/api.ts
import axios from 'axios'
import { getToken } from './token'

export const api = axios.create({
  // baseURL: 'http://192.168.1.2:3000', 
  baseURL: 'https://travel-organizer-53tb.onrender.com',
  timeout: 5000,
})

api.interceptors.request.use(async (config) => {
  const token = await getToken()

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})
