import styled from 'styled-components'

export const OrderTable = styled.section`

    height: 85vh;
    width: 98%;
    background-color: #FFF;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2);
    margin: 0.7% 0.7% 0.7% 0.7%;
    overflow-y: scroll;
    display: flex;
    justify-content: center;

    table{
        width: 100%;
        padding: 1%;

        tr{
            width: auto;
            display: flex;
            justify-content: space-between;

            th{
                margin: 0.5rem;
                width: 13%;
                text-align: center;
            }

            div{
                background-color: #F9F6F6;
                border: 1px solid;
                border-radius: 8px;
                box-shadow: 0 2px 2px 0px rgba(0, 0, 0,0.2);
                margin: 0.5%;
                width: 100%;
                display: flex;
                justify-content: space-between;
                gap: 10px;

                button{
                    background-color: #D9D9D9;
                    border-radius: 50%;
                    border: none;
                    width: 30px;
                    height: 30px;
                }

                td{
                    margin: 0.5rem;
                    width: 13%;
                    text-align: center;
                }

                td:nth-child(3){
                    word-break: break-all;
                }
            }

        }

        tbody{
            tr{
                div{
                    td:last-child{
                        position: relative;
                        display: inline-block;

                        button{
                            cursor: pointer;
                        }

                        div.dropdown-content{
                            position: absolute;
                            background-color: #f1f1f1;
                            min-width: 160px;
                            box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                            z-index: 1;

                            a{

                            }
                        }
                    }
                }
            }
        }

        tr:first-child {
            background-color: #FFF;
        }
    }
    
`