import styled from 'styled-components'

export const Sidebar = styled.aside`

    height: 100vh;
    width: 12rem;
    background-color: #AA0E27;
    padding: 7%;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ul{
        margin-top: 50%;
        list-style: none;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;


        li :hover{
            background-color: #E8273F;
            width: 9rem;
            border-radius: 4px;
        }

        li{
            color: #fff;
            width: 9rem;
            margin: 10%;
        }


    }

    button{
        background-color: rgb(255, 255, 255, 0);
        border: none;
        cursor: pointer;
        color: #fff;
    }

    button :hover{
        background-color: #AA0E27;
        border: none;
        cursor: pointer;
        color: #fff;
    }

`