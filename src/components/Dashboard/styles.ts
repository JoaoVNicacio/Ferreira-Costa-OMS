import styled from 'styled-components'

export const Container = styled.section`
    .dashboard{
        width: 100%;
        height: 100%;
        

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
                }
            }
        }


        .leftBiggerItem{
            width: 70%;
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
                }
            }
        }
    }
`