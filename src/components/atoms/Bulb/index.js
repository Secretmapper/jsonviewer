import styled from 'styled-components'

export default styled.div`
  border-radius: 100%;
  background: ${props => props.color || 'green'};
  height: 10px;
  width: 10px;

  ${props => props.inline && 'display: inline-block; margin-left: 5px;'}
`
