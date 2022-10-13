import React from 'react'
import styled from 'styled-components'

export const DashboardComponent = () => {

    <section className='dashboard'>

        <section className='upperItem'>

            <table className='tableUpperItem'>
                <tr>
                    <th>Entregue:</th>
                    <th>Entregue:</th>
                    <th>Atrasados:</th>
                    <th>Negados:</th>
                </tr>

                <tr>
                    <td>460 (46%)</td>
                    <td>400 (40%)</td>
                    <td>50 (5%)</td>
                    <td>90 (9%)</td>
                </tr>
            </table>

        </section>

        <section className='leftBiggerItem'>

            <table>
                <thead>
                    <th>Prazos mais próximos:</th>
                </thead>

                <tr>
                    <td>#2444</td>
                    <td>Entregue à transportadora</td>
                    <td>Johson</td>
                    <td>20/10/2022 às 15:00</td>
                </tr>

            </table>

        </section>

    </section>

}

export default DashboardComponent