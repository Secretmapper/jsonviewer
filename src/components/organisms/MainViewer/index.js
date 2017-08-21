import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, TabsHOC, EditorActionPaneLayout } from '../../index.js'
import { ObjectVisualizer } from '../../index.js'
import JSONTree from './JSONTree'

export default (
  TabsHOC(
    ['tree', 'graph', 'repl'],
    'tree'
  )(
class MainViewer extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      data: props.isCodeValidJSON ? JSON.parse(props.code) : {},
      isShowingCurrentCode: true
    }
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.code !== this.props.code && nextProps.isCodeValidJSON) {
      this.setState({ data: JSON.parse(nextProps.code) })
    }
  }

  renderMain = _ => {
    const { data } = this.state
    const { activeTab } = this.props

    let main = null

    switch (activeTab) {
      case 'tree':
      default:
        main = (
          <JSONTree data={data} />
        )
        break
      case 'graph':
        main = (
          <ObjectVisualizer data={data} />
        )
        break
      case 'repl':
        break
    }

    return main
  }

  renderButton = (k, label) => {
    const { onTriggerTab, activeTab } = this.props
    return <Button onClick={onTriggerTab[k]} active={activeTab === k}>{label}</Button>
  }

  render () {
    const { renderMain, renderButton } = this

    return (
      <EditorActionPaneLayout
        title={
          <div>
            <h3>Viewer</h3>
            {renderButton('tree', 'Tree')}
            {renderButton('graph', 'Graph')}
            {renderButton('repl', 'REPL')}
          </div>
        }
        main={renderMain()}
      />
    )
  }
}))
