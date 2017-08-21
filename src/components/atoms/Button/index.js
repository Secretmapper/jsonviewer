import styled from 'styled-components'

export default styled.button`
  background: transparent;
  border: solid 1px rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  color: #ddd;
  font-size: 0.9em;
  padding: 5px 10px;
  text-align: center;

  ${props => props.active && 'background: rgba(255, 255, 255, 0.1);'}

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`
