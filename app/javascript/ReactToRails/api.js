import {server} from 'remote/server'

export function fetch(type, id) {
  return server.get(urlFor(type, id))
}

function urlFor(type, id) {
  return `/${type}s/${id}.json`
}

export function createPost(post) {
  return post('/posts.json', 'post', {post})
}


