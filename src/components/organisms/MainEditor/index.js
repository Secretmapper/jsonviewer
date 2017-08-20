import React, { Component } from 'react'
import { EditorActionPaneLayout } from '../../index.js'
import CodeMirror from 'react-codemirror'

export default class CodePanel extends Component {
  render () {
    return (
      <EditorActionPaneLayout
        title={<h3>JSON</h3>}
        main={
          <CodeMirror
            ref={this.editorRefCallback}
            options={{
              mode: 'application/ld+json',
              lineNumbers: false,
              theme: 'ambiance'
            }}
          />
        }
      />
    )
  }
}
