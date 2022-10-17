import React from 'react'
import { Container } from './styles'

const DashboardComponent = () => {

    return (

        <Container>

            <section className='dashboard'>

                <section className='upperItem'>

                    <table>
                        <tr>
                            <th>A ser entregue:</th>
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

                <aside className="rightSmallerItem">
                    <table>
                        <thead>
                            <th>Em transporte:</th>
                        </thead>

                        <tr>
                            <td>#2444</td>
                            <td>Em transporte</td>
                            <td>20/10/2022 às 15:00</td>
                        </tr>
                    </table>

                </aside>

                <section className='leftBiggerItem'>
                    <table>
                        <thead>
                            <th>Novos Pedidos:</th>
                        </thead>

                        <tr>
                            <td>#2444</td>
                            <td>Aguardando aprovação</td>
                            <td>Johson</td>
                            <td>20/10/2022 às 15:00</td>
                        </tr>
                    </table>
                </section>

                <aside className="rightLesserItem">
                    <table>
                        <thead>
                            <th>Atrasados</th>
                        </thead>

                        <tr>
                            <td>#2444</td>
                            <td>Em transporte</td>
                            <td>20/10/2022 às 15:00</td>
                        </tr>
                    </table>

                </aside>

            </section>

        </Container>
    )

}

export default DashboardComponent