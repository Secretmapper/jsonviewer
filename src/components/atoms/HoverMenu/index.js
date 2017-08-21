import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Wrapper from './Wrapper'
import Popup from './Popup'

export default class extends Component {
  static propTypes = {
    target: PropTypes.element.isRequired
  }

  render () {
    const { target } = this.props

    return (
      <Wrapper>
        {target}
        <Popup>
          {this.props.children}
        </Popup>
      </Wrapper>
    )
  }
}
