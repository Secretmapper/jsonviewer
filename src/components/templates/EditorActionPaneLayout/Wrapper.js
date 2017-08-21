import styled from 'styled-components'

export default styled.div`
  box-sizing: border-box;
  box-shadow: inset 0 0 0 black, inset -3px 0 0 rgba(0, 0, 0, 0.1), inset -6px 0 3px rgba(0, 0, 0, 0.05);
  position: relative;
  height: 100%;
  width: 100%;

  & > header {
    position: absolute;
    z-index: 2;

    margin-top: 0;
    margin-bottom: 0;
    padding: 30px;
    padding-top: 20px;

    h3 {
      margin-top: 0;
      margin-bottom: 0;
      display: inline-block;

      & > small {
        color: #A8A7A7;
        margin-left: 5px;
      }
    }
  }

  & > main {
    position: absolute;
    top: 0;

    left: 0;
    padding-left: 30px;
    padding-top: 60px;
    padding-bottom: 30px;
    height: calc(100% - 90px);
    width: calc(100% - 30px);
  }
`
