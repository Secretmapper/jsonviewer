import styled from 'styled-components'
import { Button } from '../../index.js'

export default styled.div`
  display: none;
  position: absolute;
  z-index: 5;

  & > ${Button} {
    display: block;
  }
`
