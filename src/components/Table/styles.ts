import React from 'react'
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

        tr{
            background-color: #D9D9D9;

            th{
                display: inline-block;
                margin: 1rem;
            }

            td{
                display: inline-block;
                margin: 0.5rem;
            }
        }

        tr:first-child {
            background-color: #FFF;
        }

    }
    
`