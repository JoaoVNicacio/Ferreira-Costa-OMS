import styled, { withTheme } from 'styled-components'

const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;

    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-template-rows: 10vw 75vw;
    overflow-y: hidden;

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

export default Wrapper