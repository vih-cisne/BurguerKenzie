import {createGlobalStyle} from 'styled-components'

export const Global = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    font-family: Inter, Sans-Serif;
    cursor: default;
    box-sizing: border-box;
  }

  h4, p {
    margin-left: 0;
    margin-right: 0;
  }

  button {
    cursor: pointer;
  }

  main {
    display: flex;
    width: 100%;
    padding: 0 30px;
    box-sizing: border-box;
    gap: 20px;
  }
`



