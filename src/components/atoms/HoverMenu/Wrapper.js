import styled from 'styled-components'
import Popup from './Popup'

export default styled.div`
  display: inline-block;

  &:hover > ${Popup} {
    display: block;
  }
`
