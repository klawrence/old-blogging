import * as axios from 'axios'

export function fetchPost(id) {
  const request = {
    url: `http://localhost:3000/posts/${id}.json`
  }

  return axios(request).then(response => response.data)
}