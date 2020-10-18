import {server} from 'remote/server'

export function fetchPost(id) {
  return server.send(`/posts/${id}.json`)
}
