import styled from 'styled-components'

export const Container = styled.section`
    .dashboard{
        width: 98%;
        height: auto;
        margin: 0;

        hr{
            color: #000;
            border: 0.3 rem;
        }

        .rowOfItems{
            display: flex;
            flex-direction: row;
        }

        .upperItem{
            
            width: 99.1%;
            height: auto;
            background-color: #FFF;
            border-radius: 8px;
            margin: 0.3rem 0.3rem 0.7rem 0.3rem;
            box-shadow: 0 3px 3px 0px rgba(0, 0, 0,0.2);
            padding: 0;
            display: flex;
            justify-content: center;

            table{
                width: 48rem;
        
                tr{
                    width: 48rem;
                    display: flex;
                    justify-content: space-around;

                    th{
                        display: inline-block;
                        margin: 0.5rem;
                        width: 8rem;
                        text-align: center;
                    }
        
                    td{
                        display: inline-block;
                        margin: 0.5rem;
                        width: 8rem;
                        text-align: center;
                    }

                }
            }
        }


        .leftBiggerItem{
            width: 65%;
            height: 18rem;
            background-color: #FFF;
            border-radius: 8px;
            margin: 0.3rem 0.3rem 0.7rem 0.3rem;
            box-shadow: 0 3px 3px 0px rgba(0, 0, 0,0.2);
            display: flex;
            justify-content: center;
            flex-direction: column;

            table{

                tr:first-child{

                    th{
                        width: 20rem;
                        display: inline-block;
                        margin: 0.5rem 2rem;
                        text-align: center;
                        font-size: 14px;
                    }
                }

                tr{
                    width: 48rem;
                    display: flex;
                    justify-content: space-around;

                    th{
                        width: 8rem;
                        display: inline-block;
                        margin: 0.3rem 2rem;
                        text-align: center;
                        font-size: 13px;
                    }
        
                    td{
                        width: 8rem;
                        display: inline-block;
                        margin: 0.5rem;
                        text-align: center;
                        font-size: 12px;
                    }

                    div{
                        background-color: #D9D9D9;
                        border-radius: 8px;
                        box-shadow: 0 2px 2px 0px rgba(0, 0, 0,0.2);
                        margin: 0.5%;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        
        
                    }
                }
            }
        }

        .rightSmallerItem{
            width: 35%;
            height: 18rem;
            background-color: #FFF;
            border-radius: 8px;
            margin: 0.3rem 0.3rem 0.7rem 0.3rem;
            box-shadow: 0 3px 3px 0px rgba(0, 0, 0,0.2);


            table{

                tr:first-child{

                    th{
                        width: 20rem;
                        display: inline-block;
                        margin: 0.5rem 2rem;
                        text-align: center;
                        font-size: 14px;
                    }
                }

                tr{
                    width: 26rem;
                    display: flex;
                    justify-content: space-around;

                    th{
                        width: 2.5rem;
                        display: inline-block;
                        margin: 0.3rem 2rem;
                        text-align: center;
                        font-size: 12px;
                    }
        
                    td{
                        width: 8rem;
                        display: inline-block;
                        margin: 0.5rem;
                        text-align: center;
                        font-size: 12px;
                    }

                    div{
                        background-color: #D9D9D9;
                        border-radius: 8px;
                        box-shadow: 0 2px 2px 0px rgba(0, 0, 0,0.2);
                        margin: 0.5%;
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        
        
                    }
                }
            }
        }
    }
`