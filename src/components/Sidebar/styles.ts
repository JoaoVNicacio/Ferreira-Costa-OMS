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

        li{
            justify-content: center;
            padding-right: 3rem;
            width: 10rem;

            a:hover{
                background-color: #E8273F;
                width: 9rem;
                border-radius: 4px;
                height: 2rem;
                margin-right: 3%;
                border-left: #74B740 solid 0.4rem;
                transition: all .2s;
            }
    
            a{
                color: #fff;
                height: 1.5rem;
                width: 9rem;
                margin: 10%;
                height: 2rem;
                margin-right: 3%;
            }
        }

        .firstLink{
            border-bottom: solid 1px;
            border-color: #FFF;
        }

        .firstLink: hover{
            border-bottom: solid 1px;
            border-color: #FFF;
        }
    }

    a{
        background-color: rgb(255, 255, 255, 0);
        border: none;
        cursor: pointer;
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        
       
    }

    a :hover{
        background-color: #AA0E27;       
        border: none;
        cursor: pointer;
        color: #fff;
        transition: all .2s;
    }

    .logoutBtn{
        background-color: rgb(255, 255, 255, 0);
        border: none;
        cursor: pointer;
        color: #fff;
        display: flex;
        align-items: center;
        text-decoration: none;
        
       
    }

    .logoutBtn :hover{
        background-color: #E8273F;       
        border: none;
        cursor: pointer;
        color: #fff;
        transition: all .2s;
        border-bottom: #74B740 solid 0.4rem;
        border-radius: 4px;
        padding: 0.5rem;
    }

    .icon{
        margin-right: 0.5rem;
        margin-left: 0.2rem;
    }

`