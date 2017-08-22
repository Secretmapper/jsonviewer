import styled from 'styled-components'

export default styled.button`
  background: #292828;
  border-radius: 3px;
  border: solid 1px rgba(255, 255, 255, 0.2);
  color: #ddd;
  font-size: 0.9em;
  margin-bottom: 4px;
  margin: 2px;
  outline: none;
  padding: 5px 10px;
  text-align: center;

  ${props => props.active && 'background: rgba(255, 255, 255, 0.1);'}

  &:hover, &:focus {
      background: rgba(255, 255, 255, 0.1);
  }

  &:hover {
    cursor: pointer;
  }
`
