import React from 'react'
import { Container } from './styles'
import mockedNewerOrders from '../../mocked_data/mockedOrders'
import mockedLateOrders from '../../mocked_data/mockedLateOrders'
import mockedInTransportationOrders from '../../mocked_data/mockedInTransportationOrders'
import mockedClosestOrders from '../../mocked_data/mockedClosestOrders'


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
                            <td className='deliveredPct'>400 (40%)</td>
                            <td className='delayedPct'>50 (5%)</td>
                            <td className='deniedPct'>90 (9%)</td>
                        </tr>

                    </table>
                </section>

                <section className='rowOfItems'>
                    <section className='leftBiggerItem'>
                        <table>

                            <tr>
                                <th>Prazos Próximos</th>
                            </tr>

                            <hr />

                            <tr>
                                <thead>
                                    <th>ID</th>
                                    <th>Status</th>
                                    <th>Entrada</th>
                                    <th>Entrega</th>
                                </thead>
                            </tr>

                            {mockedClosestOrders.map((mockedOrder, index) =>

                                <tr key={index}>
                                    <div>
                                        <td>#{mockedOrder.id}</td>
                                        <td>{mockedOrder.status}</td>
                                        <td>{mockedOrder.dateOfEnter.toLocaleString('pt-BR', { hour12: false, day: 'numeric', month: 'numeric', year: 'numeric' })}</td>
                                        <td>{mockedOrder.dateOfDeliveryDeadline.toLocaleString('pt-BR', { hour12: false, day: 'numeric', month: 'numeric', year: 'numeric' })}</td>
                                    </div>
                                </tr>
                            )}

                        </table>
                    </section>

                    <aside className="rightSmallerItem">
                        <table>

                            <tr>
                                <th>Em Transporte</th>
                            </tr>

                            <hr />

                            <tr>
                                <thead>
                                    <th>ID</th>
                                    <th>Status</th>
                                    <th>Entrega</th>
                                </thead>
                            </tr>

                            {mockedInTransportationOrders.map((mockedOrder, index) =>

                                <tr key={index}>
                                    <div>
                                        <td>#{mockedOrder.id}</td>
                                        <td>{mockedOrder.status}</td>
                                        <td>{mockedOrder.dateOfDeliveryDeadline.toLocaleString('pt-BR', { hour12: false, day: 'numeric', month: 'numeric', year: 'numeric' })}</td>
                                    </div>
                                </tr>
                            )}

                        </table>
                    </aside>
                </section>

                <section className='rowOfItems'>
                    <section className='leftBiggerItem'>
                        <table>

                            <tr>
                                <th>Pedidos Recentes</th>
                            </tr>

                            <hr />

                            <tr>
                                <thead>
                                    <th>ID</th>
                                    <th>Status</th>
                                    <th>Entrada</th>
                                    <th>Entrega</th>
                                </thead>
                            </tr>

                            {mockedNewerOrders.map((mockedOrder, index) =>
                                <tr key={index}>
                                    <div>
                                        <td>#{mockedOrder.id}</td>
                                        <td>{mockedOrder.status}</td>
                                        <td>{mockedOrder.dateOfEnter.toLocaleString('pt-BR', { hour12: false, day: 'numeric', month: 'numeric', year: 'numeric' })}</td>
                                        <td>{mockedOrder.dateOfDeliveryDeadline.toLocaleString('pt-BR', { hour12: false, day: 'numeric', month: 'numeric', year: 'numeric' })}</td>
                                    </div>
                                </tr>
                            )}

                        </table>
                    </section>

                    <aside className="rightSmallerItem">
                        <table>

                            <tr>
                                <th>Pedidos Atrasados</th>
                            </tr>

                            <hr />

                            <tr>
                                <thead>
                                    <th>ID</th>
                                    <th>Status</th>
                                    <th>Entrega</th>
                                </thead>
                            </tr>

                            {mockedLateOrders.map((mockedOrder, index) =>
                                <tr key={index}>
                                    <div>
                                        <td>#{mockedOrder.id}</td>
                                        <td>{mockedOrder.status}</td>
                                        <td>{mockedOrder.dateOfDeliveryDeadline.toLocaleString('pt-BR', { hour12: false, day: 'numeric', month: 'numeric', year: 'numeric' })}</td>
                                    </div>
                                </tr>
                            )}

                        </table>
                    </aside>
                </section>
            </section>
        </Container>
    )
}

export default DashboardComponent