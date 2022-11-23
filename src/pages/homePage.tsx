import SidebarComponent from "../components/Sidebar" 
import * as W from '../styles/wrapper'
import DashboardComponent from "../components/Dashboard"
import Filter from "../components/Filter"
import {useState} from 'react'

export const HomePage = () => {

    const [selected, setSelected] = useState("")

    return (
        <W.WrapperHome>
            <SidebarComponent/>
            <Filter selected={selected} setSelected={setSelected} options={['Este mês(Novembro)', 'Último mês(Outubro)', 'Último trimestre', 'Último semestre', 'Último ano']} />
            <DashboardComponent/>
        </W.WrapperHome>
    )

}