import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { EditorActionPaneLayout } from '../../index.js'
import CodeMirror from './CodeMirror'

export default class MainEditor extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    onChangeCode: PropTypes.func.isRequired
  }

  render () {
    const { code, onChangeCode } = this.props

    return (
      <EditorActionPaneLayout
        title={<h3>JSON</h3>}
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
