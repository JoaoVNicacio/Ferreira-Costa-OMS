import styled from "styled-components";

export const LoginField = styled.div`
width: 650px;
height: 650px;
background-color: #FFF;
border-radius: 20px;
padding: 5%;

.textos{

    p{
        font-weight: 500;
    }
}

.inputs{
    display: flex;
    flex-direction: column;

    input{
        padding: 1%;
        border: none;
        border-bottom: 1px solid black;
        font-size: 0.9rem;
    }
}

.recuperacao{
    display: flex;
    justify-content: space-between;

    a{
        color: black;
        text-decoration: none;
        font-size: .7rem;
    }
}

button{
    width: 200px;
    height: 35px;
    background-color: #7AC143;
    color: #FFF;
    border: none;
    border-radius: 10px;
}
`
