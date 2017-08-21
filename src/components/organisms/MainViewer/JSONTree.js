import React from 'react'
import styled from 'styled-components'
import JSONTree from 'react-json-tree'

const theme = {
  // http://chriskempson.github.io/base16/
  scheme: 'modified-railscasts',
  author: 'secretmapper',
  base00: '#2b2b2b',
  base01: '#272935',
  base02: '#3a4055',
  base03: '#5a647e',
  base04: '#d4cfc9',
  base05: '#e6e1dc',
  base06: '#f4f1ed',
  base07: '#f9f7f3',
  base08: '#b6b3eb',
  base09: '#b6b3eb',
  base0A: '#6d9cbe',
  base0B: '#ffc66d',
  base0C: '#519f50',
  base0D: '#a5c261',
  base0E: '#cc7833',
  base0F: '#bc9458'
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  & > ul {
    background-color: transparent !important;
  }
`

export default ({ data }) => <Wrapper><JSONTree data={data} theme={theme} invertTheme={false} /></Wrapper>
