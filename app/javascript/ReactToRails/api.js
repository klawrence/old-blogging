import {server} from 'remote/server'
import * as axios from 'axios'

export function fetch(type, id) {
  return server.send(urlFor(type, id))
}

function urlFor(type, id) {
  return `/${type}s/${id}.json`
}


export function getCSRFToken() {
  const csrfTag = document.querySelector('meta[name=csrf-token]') || {content: 'missing-csrf-token'}
  return csrfTag.content
}

let post = function (post, url = '/posts.json', method = 'post', data = {post}) {
  const request = {
    url: url,
    method: method,
    data: data,
    headers: {
      'X-CSRF-Token': getCSRFToken(),
    }
  }
  return axios(request)
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
}

export function createPost(post) {
  return post('/posts.json', 'post', data)
}


