export function getCSRFToken() {
  const csrfTag = document.querySelector('meta[name=csrf-token]') || {content: 'missing-csrf-token'}
  return csrfTag.content
}

