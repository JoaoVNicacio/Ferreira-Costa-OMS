import { OrderTable } from './styles'
import axios from 'axios'
import mockedOrders from '../../mocked_data/mockedOrders'


const TableComponent = () => {

    return (

        <OrderTable>

            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Status</th>
                    <th>Data de entrada</th>
                    <th>Data de entrega</th>
                </tr>
                <hr/>

                {mockedOrders.map((mockedOrder, index) =>

                    <tr key={index}>
                        <td>{mockedOrder.id}</td>
                        <td>{mockedOrder.name}</td>
                        <td>{mockedOrder.email}</td>
                        <td>{mockedOrder.status}</td>
                        <td>{mockedOrder.dateOfEnter.toLocaleString('pt-BR', { hour12: false, day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                        <td>{mockedOrder.dateOfDeliveryDeadline.toLocaleString('pt-BR', { hour12: false, day: 'numeric', month: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric'})}</td>
                    </tr>
                )}

            </table>

        </OrderTable>

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


export default TableComponent
