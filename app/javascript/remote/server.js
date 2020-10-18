import * as axios from 'axios'

export const server = {send}

function send(url) {
  const request = {url}
  return axios(request).then(response => response.data)
}

