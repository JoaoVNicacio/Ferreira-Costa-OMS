import styled from 'styled-components'

export const WrapperHome = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-template-rows: 5vw 75vw;
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
    gap: 5%;
    display: flex;
    justify-content: center;
    align-items: center;

    .logo{
        margin-top: -350px;
    }

    .logo > p{
        color: #fff;
        font-size: 1.5rem;
        margin: 50px 20px 0 0;
        text-align: right;
    }

    @media screen and (min-width: 769px) and (max-width: 1280px){
        flex-direction: column-reverse;

        .logo{
            margin: 0;
        }
    }
`

export const WrapperPedidos = styled.div`
    height: 100vh;
    width: 100%;

    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-template-rows: 5vw 75vw;
    overflow-y: hidden;
    overflow-x: hidden;

    grid-template-areas: 
        "aside filter"
        "aside section"
    ;    

    & > aside{
        grid-area: aside;
    }

    & > div{
        grid-area: filter;
    }

    & > section{
        grid-area: section;
    }
`