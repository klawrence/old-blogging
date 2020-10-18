import React from 'react'

export function connect(WrappedComponent, fetch) {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        model: {}
      }
    }

    render() {
      const modelName = WrappedComponent.name.toLowerCase()
      const props = {
        [modelName]: this.state.model
      }
      return <WrappedComponent {...props} />
    }

    async componentDidMount() {
      const model = await fetch(this.props.id)
      this.setState({model})
    }
  }
}