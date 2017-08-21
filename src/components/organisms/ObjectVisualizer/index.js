import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { tree } from 'd3-state-visualizer'

const treeOpts = {
  style: {
    width: '100%',
    height: '100%',
    text: {
      colors: {
        'default': '#f4f1ed',
        hover: 'white'
      }
    }
  },
  heightBetweenNodesCoeff: 1,
  widthBetweenNodesCoeff: 1.3,
  tooltipOptions: {
    offset: {left: 50, top: 10},
    indentationSize: 2,
    style: {
      'background-color': '#DCDCDC',
      'border-radius': '5px',
      'color': '#323232',
      'opacity': '0.9',
      'padding': '5px'
    }
  }
}

export default class ObjectVisualizer extends Component {
  componentDidMount () {
    this.renderChart()
  }

  componentWillReceiveProps () {
    this.renderChart()
  }

  renderChart = _ => {
    tree(findDOMNode(this), {
      state: this.props.data,
      ...treeOpts
    })()
  }

  render () {
    return (
      <div style={{ width: '100%', height: '100%' }} />
    )
  }
}
