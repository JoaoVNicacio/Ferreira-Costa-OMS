import {OrderTable} from './styles'
import { useState } from 'react'

// A tabela está com itens adicionandos a mão, ainda iremos adicionar tudo em arrays de objetos para mockar os dados de forma melhor
const TableComponent = () => {

    return (

        <OrderTable>

                    <table  className='table'>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Status</th>
                            <th>Data de entrada</th>
                            <th>Data de entrega</th>
                        </tr>

                        <tr>
                            <td>#2555</td>
                            <td>Johnson</td>
                            <td>johnson@email.com</td>
                            <td>Antifraude</td>
                            <td>06/10/2022 às 19:00</td>
                            <td>12/10/2022 às 14:00</td>
                        </tr>

                        <tr>
                            <td>#2556</td>
                            <td>Johnson</td>
                            <td>johnson@email.com</td>
                            <td>Entregue</td>
                            <td>01/10/2022 às 19:00</td>
                            <td>06/10/2022 às 14:00</td>
                        </tr>

                        <tr>
                            <td>#2557</td>
                            <td>Johnson</td>
                            <td>johnson@email.com</td>
                            <td>Embalando para entrega</td>
                            <td>04/10/2022 às 19:00</td>
                            <td>08/10/2022 às 14:00</td>
                        </tr>
                    </table>

        </OrderTable>

    )

}

export default TableComponent
