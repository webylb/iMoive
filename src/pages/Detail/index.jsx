import React, { PureComponent } from 'react'
import qs from 'querystring'
import Content from './content'

export default class Detail extends PureComponent {

  state = {
    id: ''
  }

  componentDidMount() {
    const { location: { search } } = this.props
    const { id } = qs.parse(search.slice(1))
    this.setState({id})
  }

  render() {
    const { id } = this.state
    return (
      <div>
        <Content id={id}/> 
      </div>
    )
  }
}
