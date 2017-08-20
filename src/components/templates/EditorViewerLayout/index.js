import React from 'react'
import Wrapper from './Wrapper'
import Halver from './Halver'

export default ({ editor, viewer }) => (
  <Wrapper>
    <Halver>
      {editor}
    </Halver>
    <Halver>
      {viewer}
    </Halver>
  </Wrapper>
)
