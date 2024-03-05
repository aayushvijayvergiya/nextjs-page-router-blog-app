/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodbUrl: 'mongodb+srv://aayushvijayvergiya2006:nextjs-events-app@nextjs-events-app-clust.xyp32w3.mongodb.net/?retryWrites=true&w=majority'
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      mongodbUrl: 'mongodb+srv://aayushvijayvergiya2006:nextjs-events-app@nextjs-events-app-clust.xyp32w3.mongodb.net/?retryWrites=true&w=majority'
    }
  }
}
