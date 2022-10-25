import styled from 'styled-components'

export const TimeFilter = styled.div`
    width: 200px;

    .click{
        background-color: #fff;
        padding: 5px;
        /* font-size: ; */
        font-family: "Inter", sans-serif;
        border: none;
        outline: none;
        width: 200px;
        /* color: ; */

        &:hover{
            background-color: #ddd;
        }
    }

    .links{
        padding: 5px;
        /* font-size: ; */
        font-family: "Inter", sans-serif;
        border: none;
        outline: none;
        width: 200px;
        /* color: ; */
        background-color: lightblue; 

        &:hover{
            background-color: rgb(255,255,255);
        }
    }
`