import { OrderTable } from './styles'
import { useState } from 'react'
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

                    { mockedOrders.map((mockedOrder, index) =>

                        <tr key={index}>
                            <td>{ mockedOrder.id }</td>
                            <td>{ mockedOrder.name }</td>
                            <td>{ mockedOrder.email }</td>
                            <td>{ mockedOrder.status }</td>
                            <td>{ mockedOrder.dateOfEnter} </td>
                            <td>{ mockedOrder.dateOfDeliveryDeadline }</td>
                        </tr>
                    ) }

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
