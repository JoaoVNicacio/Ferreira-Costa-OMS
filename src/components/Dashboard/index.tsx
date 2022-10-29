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


                <section className='rowOfItems'>

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
                </section>

                <section className='rowOfItems'>
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

                    <aside className="rightSmallerItem">
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

            </section>

        </Container>
    )

}

const getOrders = async () => {
    fetch(`/orders`)

        .then((response) => response.json())

        .then((data) => {
            console.log(data);

            for (let i = 0; i <= data.length; i++) {

            }

        })
}



const mockedOrders : object = [
    {
        id: 2444,
        name: "Johnson",
        email: "johnson@email.com",
        status: "Aguardando antifraude",
        dateOfDeliveryDeadline: "20/10/2022 às 14:00",
        dateOfEnter: "12/10/2022 às 14:00",
        products: [
            "1x Serra Circular", "1x Trena", "2x Caixa de ferramntas"
        ],
        spentTimeInAntifraud: "2 horas",
        spentTimeInSeparation: "--",
        spentTimeInPackaging: "--",
        spentTimeInLogistics: "--",
        spentTimeInTransportation: "--",
        dateOfDelivery: "--",
        commentary: ""
    },
]

export default DashboardComponent