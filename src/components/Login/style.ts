import styled from "styled-components";

export const LoginField = styled.div`
width: 650px;
height: 650px;
display: flex;
flex-direction: column;
background-color: #FFF;
border-radius: 20px;
padding: 5%;

.textos{

    p{
        font-weight: 500;
        margin-top: 7%;
    }
}

.inputs{
    display: flex;
    flex-direction: column;
    margin-top: 10%;

    input{
        padding: 1%;
        margin-top: 10%;
        border: none;
        border-bottom: 1px solid black;
        font-size: 0.9rem;
    }
}

.recuperacao{
    display: flex;
    justify-content: space-between;
    margin-top: 10%;

    a{
        color: black;
        text-decoration: none;
        font-size: .8rem;

        &:hover{
            text-decoration: underline;
        }
    }
}

.link{
    display: inline;
    margin: 10% auto 0 auto;

    button{
        width: 200px;
        height: 35px;
        background-color: #7AC143;
        color: #FFF;
        border: none;
        border-radius: 10px;
        margin: 10% auto;
        cursor: pointer;
    }
}

`
