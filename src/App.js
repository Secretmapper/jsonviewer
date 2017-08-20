import React, { Component } from 'react'
import { MainLayout, EditorViewerLayout, MainEditor } from './components'
import 'codemirror/lib/codemirror.css'
import './codemirror.css'
import 'codemirror/mode/javascript/javascript.js'

class App extends Component {
  render () {
    return (
      <MainLayout>
        <EditorViewerLayout
          editor={
            <MainEditor />
          }
          viewer={
            <MainEditor />
          }
        />
      </MainLayout>
    )
  }
}

export default App
