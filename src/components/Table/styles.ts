import styled from 'styled-components'

export const OrderTable = styled.section`

    height: auto;
    width: 98%;
    background-color: #FFF;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2);
    height: 75%;
    margin: 0.7% 0.7% 0.7% 0.7%;
    overflow-y: scroll;
    display: flex;
    justify-content: center;

    table{
        width: 90%;

        tr{
            width: 76rem;
            display: flex;
            justify-content: center;
            margin: 0;

            div{
                background-color: #F9F6F6;
                border: solid 1px;
                border-radius: 8px;
                box-shadow: 0 2px 2px 0px rgba(0, 0, 0,0.2);
                margin: 0.5%;
                width: 100%;
                display: flex;
                justify-content: center;

                button{
                    border-radius: 50%;
                    border: 0;
                    width: 20px;
                    height: 20px;
                }
            }

            th{
                display: inline-block;
                margin: 0.5rem;
                width: 14rem;
                text-align: center;
            }

            td{

                display: inline-block;
                margin: 0.5rem;
                width: 14rem;
                text-align: center;
            }
        }

        tr:first-child {
            background-color: #FFF;
        }

    }
    
`