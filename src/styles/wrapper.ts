import styled, { withTheme } from 'styled-components'

export const WrapperHome = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-template-rows: 10vw 75vw;
    overflow-y: hidden;
    overflow-x: hidden;

    grid-template-areas: 
        "aside filter"
        "aside section"
    ;    

    & > aside{
        grid-area: aside;
    }

    & > div.filter{
        grid-area: filter;
    }

    & > section{
        grid-area: section;
    }
`

export const WrapperLogin = styled.div`
    height: 100vh;
    width: 100%;
    background-color: #AA0E27;

    display: flex;
`