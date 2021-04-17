import {server} from 'remote/server'

export function fetch(type, id) {
  return server.get(urlFor(type, id))
}

export function listPosts() {
  return server.get(`/posts.json`)
}

function urlFor(type, id) {
  return `/${type}s/${id}.json`
}

export function createPost(post) {
  return post('/posts.json', 'post', {post})
}


