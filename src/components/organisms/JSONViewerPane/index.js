import React from 'react'
import Wrapper from './Wrapper'
import SubTitle from './SubTitle'
import Links from './Links'
import Footer from './Footer'

export default () => (
  <Wrapper>
    <h1>JSON Viewer</h1>
    <SubTitle>Jolly good JSON viewer</SubTitle>
    <Footer>
      <Links>
        <li>
          <a href='//github.com/Secretmapper/jsonviewer'>Source code</a>
        </li>
        <li>
          <a href='//github.com/Secretmapper/jsonviewer/issues'>Report issues</a>
        </li>
      </Links>
      Made by <a href='http://twitter.com/Secretmapper'>@secretmapper</a>
    </Footer>
  </Wrapper>
)
