/* eslint-disable prettier/prettier */
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.magicthegathering.io/v1/',
})

const useApi = () => {
  return { instance }
}

export default useApi
