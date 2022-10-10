import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        -webkit-font-smoothing: antialiased;
        display: flex;
        flex-direction: row;
        background-color: #F5F5F5;
    }

    body,
    input,
    button,
    textarea {
        font-family: sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`