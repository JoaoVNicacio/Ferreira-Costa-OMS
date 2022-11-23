import SidebarComponent from "../components/Sidebar" 
import * as W from '../styles/wrapper'
import DashboardComponent from "../components/Dashboard"
import Filter from "../components/Filter"
import React, {useState} from 'react'

export const HomePage = () => {

    const [selected, setSelected] = useState("")

    return (
        <W.WrapperHome>
            <SidebarComponent/>
            <Filter selected={selected} setSelected={setSelected}/>
            <DashboardComponent/>
        </W.WrapperHome>
    )

}