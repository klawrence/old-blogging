import React from 'react'
import {fetch} from './api'

export function connect(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.type = WrappedComponent.name.toLowerCase()
      this.state = {
        model: {}
      }
    }

    render() {
      const props = {
        [this.type]: this.state.model
      }
      return <WrappedComponent {...props} />
    }

    async componentDidMount() {
      const model = await fetch(this.type, this.props.id)
      this.setState({model})
    }
  }
}