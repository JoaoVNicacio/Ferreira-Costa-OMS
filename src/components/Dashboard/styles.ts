import styled from 'styled-components'

export const Container = styled.section`
    .dashboard{
        width: auto;
        height: auto;

        .upperItem{
            width: 36rem;
            height: 18rem;
            background-color: #FFF;
            border-radius: 1rem;

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
            width: 23rem;
            height: 18rem;
            background-color: #FFF;
            border-radius: 1rem;

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
            width: 11rem;
            height: 18rem;
            background-color: #FFF;
            border-radius: 1rem;

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