import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HoverMenu, Button, Bulb, EditorActionPaneLayout } from '../../index.js'
import { FullWidth, Right } from '../../index.js'
import { compactJSON, formatJSON } from '../../../utils'
import CodeMirror from './CodeMirror'

export default class MainEditor extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    onChangeCode: PropTypes.func.isRequired
  }

  onClear = e => {
    this.props.onChangeCode('')
  }

  _onSpace = n => _ => {
    const { code } = this.props

    this.props.onChangeCode(formatJSON(code, n))
  }

  onSpace = {
    2: this._onSpace(2),
    3: this._onSpace(3),
    4: this._onSpace(4)
  }

  onCompact = _ => {
    const { code } = this.props

    this.props.onChangeCode(compactJSON(code))
  }

  render () {
    const { code, onChangeCode, isCodeValidJSON } = this.props
    const { onSpace, onCompact, onClear } = this

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
              <HoverMenu target={<Button onClick={onSpace['2']}>Format</Button>}>
                <Button onClick={onSpace['2']} key='2'>2 Spaces</Button>
                <Button onClick={onSpace['3']} key='3'>3 Spaces</Button>
                <Button onClick={onSpace['4']} key='4'>4 Spaces</Button>
              </HoverMenu>
              <Button onClick={onCompact}>Compact</Button>
              <Button onClick={onClear}>Clear</Button>
            </Right>
          </FullWidth>
        }
        main={
          <CodeMirror
            value={code}
            onValueChange={(editor, metadata, value) => onChangeCode(value)}
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
