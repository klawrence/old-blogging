import * as axios from 'axios'
import {getCSRFToken} from '../ReactToRails/dom'

class Server {
  get(url)        { return this.send(url)}
  post(url, data) { return this.send(url, 'post', data) }

  send(url, method, data) {
    const request = {
      url: url,
      method: method,
      data: data,
      headers: {
        'X-CSRF-Token': getCSRFToken(),
      }
    }
    return axios(request)
        .then(response => response.data)
        .catch(error => console.log(error))
  }
}

export const server = new Server()


