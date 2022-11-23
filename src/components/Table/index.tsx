import { OrderTable } from './styles'
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
                <hr />

                {mockedOrders.map((mockedOrder, index) =>

                    <tr key={index}>
                        <div>
                            <td>#{mockedOrder.id}</td>
                            <td>{mockedOrder.name}</td>
                            <td>{mockedOrder.email}</td>
                            <td>{mockedOrder.status}</td>
                            <td>{mockedOrder.dateOfEnter.toLocaleString('pt-BR', { hour12: false, day: 'numeric', month: 'numeric', year: 'numeric' })}</td>
                            <td>{mockedOrder.dateOfDeliveryDeadline.toLocaleString('pt-BR', { hour12: false, day: 'numeric', month: 'numeric', year: 'numeric' })}</td>
                            <button></button>
                        </div>
                    </tr>

                )}

            </table>

        </OrderTable>

    )

}

export default TableComponent
