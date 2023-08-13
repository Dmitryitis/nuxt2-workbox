import https from 'https'
import qs from 'qs'
import create from '../api/repository'

export default ({ $axios, app }, inject) => {
  $axios.defaults.baseURL = 'http://localhost:3100/'
  $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false })
  $axios.defaults.paramsSerializer = params => qs.stringify(params, { arrayFormat: 'repeat', skipNulls: true })
  const axiosRepo = create($axios)

  const repos = {
    projects: axiosRepo('projects'),
    cards: axiosRepo('cards')
  }
  inject('api', repos)
}
