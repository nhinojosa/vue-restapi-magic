/* eslint-disable prettier/prettier */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.disneyapi.dev/',
})

const useApi = () => {
  return { instance }
}

export default useApi
