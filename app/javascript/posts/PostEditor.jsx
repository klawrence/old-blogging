import React from 'react'

export class PostEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }

  // TODO write the test

  render() {
    const {title, body} = this.state.post

    return <form onChange={this.handleChange}>
      <input type='text' name='title' value={title}/>
      <textarea name='body' value={body} />
      <div className='actions'>
        <input type='submit' className='button'/>
      </div>
    </form>
  }

  handleChange(event) {
    const {id, value} = event.target
    this.setState({id, value})
  }
}


