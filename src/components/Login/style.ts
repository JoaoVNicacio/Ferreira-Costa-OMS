import styled from "styled-components";

export const LoginField = styled.div`
    width: 650px;
    height: 650px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 20px;
    padding: 5%;

    .textos {
        p {
            font-size: 1.5rem;
            font-weight: 500;
            margin-top: 7%;
        }
    }

    .inputs {
        display: flex;
        flex-direction: column;
        margin-top: 10%;

        input {
            padding: 1%;
            margin-top: 10%;
            border: none;
            border-bottom: 1px solid black;
            font-size: 0.9rem;
        }
    }

    .recuperacao {
        display: flex;
        justify-content: space-between;
        margin-top: 10%;

        a {
            color: black;
            text-decoration: none;
            font-size: 0.9rem;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .link {
        margin: 10% auto 0 auto;

        button {
            width: 200px;
            height: auto;
            padding: 3%;
            background-color: #7ac143;
            color: #fff;
            border: none;
            border-radius: 10px;
            margin: 10% auto;
            cursor: pointer;
            font-size: 1.2rem;
        }
    }

    
    @media screen and (min-width: 769px) and (max-width: 1280px){
        .textos{
            h1{
                font-size: 2.9rem;
            }

            p{
                font-size: 2.1rem;
                margin-top: 4.6%;
            }
        }

        .inputs{
            margin-top: 7%;
            input{
                font-size: 1.4rem;
            }
        }

        .recuperacao{
            margin-top: 7%;
            a{
                font-size: 1.2rem;
            }
        }

        .link{
            button{
                font-size: 1.8rem;
            }
        }
    }

    
    @media screen and (min-width: 1281px) and (max-width: 1366px){
        .textos{
            h1{
                font-size: 2.7rem;
            }

            p{
                font-size: 1.9rem;
                margin-top: 4.8%;
            }
        }

        .inputs{
            margin-top: 8%;
            input{
                font-size: 1.2rem;
            }
        }

        .recuperacao{
            margin-top: 8%;
            a{
                font-size: 1.1rem;
            }
        }

        .link{
            button{
                font-size: 1.6rem;
            }
        }
    }

    @media screen and (min-width: 1367px) and (max-width: 1600px){
        .textos{
            h1{
                font-size: 2.5rem;
            }

            p{
                font-size: 1.7rem;
                margin-top: 5%;
            }
        }

        .inputs{
            margin-top: 9%;
            input{
                font-size: 1.2rem;
            }
        }

        .recuperacao{
            margin-top: 9%;
            a{
                font-size: 1rem;
            }
        }

        .link{
            button{
                font-size: 1.4rem;
            }
        }
    }
`;
