import styled from 'styled-components'

export const OrderTable = styled.section`

    height: auto;
    width: auto;
    position: relative;
    background-color: #FFF;
    border-radius: 8px;
    padding: 1rem;
    margin-left: 14rem;
    box-shadow: 0 3px 3px 0px rgba(0, 0, 0,0.2);

    table{
        width: 100%;

        tr{
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: space-between;

            div{
                background-color: #D9D9D9;
                border-radius: 8px;
                box-shadow: 0 2px 2px 0px rgba(0, 0, 0,0.2);
                margin: 0.5%;
                width: 100%;
                display: flex;
                justify-content: space-between;
                

                button{
                    border-radius: 50%;
                    border: 0;
                    width: 20px;
                    height: 20px;
                }
            }

            th{
                display: inline-block;
                margin: 1rem;
                padding: 0 1%;
                
            }

            td{

                display: inline-block;
                margin: 0.5rem;
                padding: 0 1%;

            }
        }

        tr:first-child {
            background-color: #FFF;
        }

    }
    
`