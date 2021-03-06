import axios from 'axios'
import _has from 'lodash/has'

import mockups from './mockups'

const baseUrl = '/api'

const handleRequest = (method, route, params) => {
  return new Promise((resolve, reject) => {
    if (mockups.has(method, route)) {
      mockups.handle(method, route, params).then(resolve)
    } else {
      axios[method](baseUrl + route, params)
        .then(response => {
          resolve(response)
        })
        .catch(e => {
          if (_has(e, 'response.data.error.message')) {
            reject(new Error(e.response.data.error.message))
          } else {
            reject(e)
          }
        })
    }
  })
}

export default {
  get: (route, params) => handleRequest('get', route, params),
  post: (route, params) => handleRequest('post', route, params),
  put: (route, params) => handleRequest('put', route, params),
  delete: (route, params) => handleRequest('delete', route, params)
}
