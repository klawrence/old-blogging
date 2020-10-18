import {server} from 'remote/server'

export function fetch(type, id) {
  return server.send(urlFor(type, id))
}

function urlFor(type, id) {
  return `/${type}s/${id}.json`
}
