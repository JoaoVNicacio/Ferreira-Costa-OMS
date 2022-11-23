import SidebarComponent from "../components/Sidebar" 
import Filter from "../components/TimeFilter"
import Table from '../components/Table'
import * as W from '../styles/wrapper'

export const Pedidos = () => {
    return (
        <W.WrapperHome>
            <SidebarComponent/>
            <Filter/>
            <Table/>
        </W.WrapperHome>
    )
}