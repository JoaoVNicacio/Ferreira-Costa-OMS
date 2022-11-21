import SidebarComponent from "../components/Sidebar" 
import OrderFilterComponent from "../components/OrderFilter"
import Table from '../components/Table'
import * as W from '../styles/wrapper'

export const Pedidos = () => {
    return (
        <W.WrapperHome>
            <SidebarComponent/>
            <OrderFilterComponent/>
            <Table/>
        </W.WrapperHome>
    )
}