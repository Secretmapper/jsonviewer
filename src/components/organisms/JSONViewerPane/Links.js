import styled from 'styled-components'

export default styled.div`
  font-family: montserrat;
  border-bottom: solid 1px rgba(255, 255, 255, 0.02);
  margin: 15px 0;

  & > li {
    border-top: solid 1px rgba(255, 255, 255, 0.02);

    margin: 0;
    padding: 0;
    list-style: none;

    & > a {
      display: block;
      padding: 5px 15px;
      margin-left: -15px;
      margin-right: -15px;
      color: #818387;
      border-radius: 3px;
      font-size: 0.9em;
      text-decoration: none;
      transition: color 100ms linear;

      &: hover {
        background: rgba(255, 255, 255, 0.03);
        color: white;
      }
    }
  }
`
