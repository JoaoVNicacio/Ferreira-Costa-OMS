import React from 'react'
import { Container } from './styles'
import axios from 'axios'
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
                            <td>400 (40%)</td>
                            <td>50 (5%)</td>
                            <td>90 (9%)</td>
                        </tr>
                    </table>

                </section>


                <section className='rowOfItems'>

                    <section className='leftBiggerItem'>
                        <table>
                            <thead>
                                <th>Prazos mais próximos:</th>
                            </thead>

                            {mockedClosestOrders.map((mockedOrder, index) =>

                                <tr key={index}>
                                    <div>
                                        <td>#{mockedOrder.id}</td>
                                        <td>{mockedOrder.status}</td>
                                        <td>{mockedOrder.dateOfDeliveryDeadline.toLocaleString('pt-BR', { hour12: false, day: 'numeric', month: 'numeric', year: 'numeric' })}</td>
                                    </div>
                                </tr>
                            )}
                        </table>
                    </section>

                    <aside className="rightSmallerItem">
                        <table>
                            <thead>
                                <th>Em transporte:</th>
                            </thead>

                            {mockedInTransportationOrders.map((mockedOrder, index) =>

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
                    </aside>
                </section>

                <section className='rowOfItems'>
                    <section className='leftBiggerItem'>
                        <table>
                            <thead>
                                <th>Pedidos Mais Recentes:</th>
                            </thead>

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
                            <thead>
                                <th>Atrasados</th>
                            </thead>

                            {mockedLateOrders.map((mockedOrder, index) =>
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
                    </aside>

                </section>

            </section>

        </Container>
    )

}

axios.get('/orders')

    .then(function (response) {

    })

    .catch(function (error) {
        console.log(error);
    })

    .then(function () {

    });


export default DashboardComponent