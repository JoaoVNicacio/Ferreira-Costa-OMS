import React, {useState} from 'react'
import SidebarComponent from "../components/Sidebar" 
import Filter from "../components/Filter"
import Table from '../components/Table'
import * as W from '../styles/wrapper'

export const Pedidos = () => {

    const [selected, setSelected] = useState("")

    return (
        <W.WrapperHome>
            <SidebarComponent/>
            <Filter selected={selected} setSelected={setSelected}/>
            <Table/>
        </W.WrapperHome>
    )
}