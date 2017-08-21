import React from 'react'
import Wrapper from './Wrapper'
import Main from './Main'
import Sidebar from './Sidebar'
import SidebarInner from './SidebarInner'

export default ({ main, sidebar }) => (
  <Wrapper>
    <Main>
      {main}
    </Main>
    <Sidebar>
      <SidebarInner>
        {sidebar}
      </SidebarInner>
    </Sidebar>
  </Wrapper>
)
