import _has from 'lodash/has'

const DELAY = 600

const mockups = {
  get: {
    '/arenas': params => {
      return {
        data: [
          {
            id: 'nba',
            title: 'NBA',
            description: 'All things NBA basketball',
            imageUrl: '/static/nba.png'
          }, {
            id: 'StockMarket',
            title: 'Stock Market',
            description: 'Long term, short term, we cover them all',
            imageUrl: '/static/finance.png'
          }, {
            id: 'oscars',
            title: 'The Oscars',
            description: 'Predictions for the Oscars, Emmy, and other awards',
            imageUrl: '/static/oscars.png'
          }, {
            id: 'gaming',
            title: 'Gaming',
            description: 'eSports predictions',
            imageUrl: '/static/gaming.png'
          }
        ]
      }
    }
  }
}

const has = (method, route) => {
  return _has(mockups, method + '.' + route)
}

const handle = (method, route, params) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        ...mockups[method][route](params)
      })
    }, DELAY)
  })
}

export default {
  has,
  handle
}
