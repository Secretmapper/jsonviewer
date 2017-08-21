import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HoverMenu, Button, Bulb, EditorActionPaneLayout } from '../../index.js'
import { FullWidth, Right } from '../../index.js'
import CodeMirror from './CodeMirror'

export default class MainEditor extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    onChangeCode: PropTypes.func.isRequired
  }

  onClear = e => {
    this.props.onChangeCode('')
  }

  render () {
    const { code, onChangeCode, isCodeValidJSON } = this.props
    const { onClear } = this

    return (
      <EditorActionPaneLayout
        title={
          <FullWidth>
            <h3>
              <span>JSON</span>
              <small>Type Here</small>
              <Bulb
                inline
                color={isCodeValidJSON ? 'lightgreen' : 'red'}
              />
            </h3>
            <Right>
              <HoverMenu target={<Button>Format</Button>}>
                <Button key='2'>2 Spaces</Button>
                <Button key='3'>3 Spaces</Button>
                <Button key='4'>4 Spaces</Button>
                <Button key='t'>Tab</Button>
              </HoverMenu>
              <Button>Compact</Button>
              <Button onClick={onClear}>Clear</Button>
            </Right>
          </FullWidth>
        }
        main={
          <CodeMirror
            value={code}
            onChange={onChangeCode}
            innerRef={this.editorRefCallback}
            options={{
              tabSize: 4,
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
