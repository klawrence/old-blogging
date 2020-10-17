import React from 'react'
import ReactDOM from 'react-dom'
import {Application} from './Application'

document.addEventListener('DOMContentLoaded', () => {
  const react = document.querySelector('#react')
  ReactDOM.render(
      <Application />,
      react.appendChild(document.createElement('div'))
  )
})
