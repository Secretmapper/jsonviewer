import React from 'react'
import Wrapper from './Wrapper'

export default ({ title, main }) => (
  <Wrapper>
    <header>
      {title}
    </header>
    <main>
      {main}
    </main>
  </Wrapper>
)
