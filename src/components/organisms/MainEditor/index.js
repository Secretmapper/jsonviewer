import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Bulb, EditorActionPaneLayout } from '../../index.js'
import CodeMirror from './CodeMirror'

export default class MainEditor extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    onChangeCode: PropTypes.func.isRequired
  }

  render () {
    const { code, onChangeCode, isCodeValidJSON } = this.props

    return (
      <EditorActionPaneLayout
        title={
          <h3>
            <span>JSON</span>
            <small>Type Here</small>
            <Bulb
              inline
              color={isCodeValidJSON ? 'lightgreen' : 'red'}
            />
          </h3>
        }
        main={
          <CodeMirror
            value={code}
            onChange={onChangeCode}
            ref={this.editorRefCallback}
            options={{
              mode: 'application/ld+json',
              lineNumbers: false,
              theme: 'railscasts'
            }}
          />
        }
      />
    )
  }
}
