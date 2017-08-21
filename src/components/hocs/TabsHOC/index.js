import React, { Component } from 'react'

export default (tabs = [''], defaultTab = null) => (Inner) => {
  return class Tabs extends Component {
    constructor (props) {
      super(props)

      this.state = {
        activeTab: defaultTab || tabs[0],
        onTriggerTab: tabs.reduce((o, k) => ({ ...o, [k]: this.onTrigger(k) }), {})
      }
    }

    onTrigger = k => e => {
      this.setState({ activeTab: k })
    }

    render () {
      const { activeTab, onTriggerTab } = this.state

      return <Inner onTriggerTab={onTriggerTab} activeTab={activeTab} {...this.props} />
    }
  }
}
