import styled from 'styled-components'

export const Container = styled.section`
    .dashboard{
        width: 88.5%;
        height: auto;
        margin: 0;

        .rowOfItems{
            display: flex;
            flex-direction: row;
        }

        .upperItem{
            width: 99%;
            height: auto;
            background-color: #FFF;
            border-radius: 8px;
            margin: 0.3rem;
            box-shadow: 0 3px 3px 0px rgba(0, 0, 0,0.2);

            table{
                tr{
                    th{
                        display: inline-block;
                        margin: 1rem;
                    }
        
                    td{
                        display: inline-block;
                        margin: 0.5rem;
                    }

                }
            }
        }


        .leftBiggerItem{
            width: 70%;
            height: 18rem;
            background-color: #FFF;
            border-radius: 8px;
            margin: 0.3rem 0.7rem 0.3rem 0.5rem;
            box-shadow: 0 3px 3px 0px rgba(0, 0, 0,0.2);

            table{
                tr{

                    th{
                        display: inline-block;
                        margin: 1rem;
                    }
        
                    td{
                        display: inline-block;
                        margin: 0.5rem;
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
            width: 30%;
            height: 18rem;
            background-color: #FFF;
            border-radius: 8px;
            margin: 0.3rem 0.7rem 0.3rem 0.5rem;
            box-shadow: 0 5px 5px 0px rgba(0, 0, 0,0.2);


            table{

                tr{
                    th{
                        display: inline-block;
                        margin: 1rem;
                    }
        
                    td{
                        display: inline-block;
                        margin: 0.5rem;
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