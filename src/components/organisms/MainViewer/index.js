import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Bulb, EditorActionPaneLayout } from '../../index.js'
import JSONTree from './JSONTree'

export default class MainViewer extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      data: JSON.parse(props.code),
      isShowingCurrentCode: true
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.code !== this.props.code && nextProps.isCodeValidJSON) {
      this.setState({ data: JSON.parse(nextProps.code) })
    }
  }

  render () {
    const { isCodeValidJSON } = this.props
    const { data } = this.state

    return (
      <EditorActionPaneLayout
        title={(
          <h3>
            <span>Viewer</span>
            <Bulb
              inline
              color={isCodeValidJSON ? 'lightgreen' : 'red'}
            />
          </h3>
        )}
        main={
          <JSONTree data={data} />
        }
      />
    )
  }
}
